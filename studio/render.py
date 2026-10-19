"""Lead magnet studio: one content file -> post image (PNG), carousel (PDF) and fast video (MP4).

Usage:
  python3 studio/render.py studio/examples/nexus-checklist.json            # all three
  python3 studio/render.py my-lm.json --image --pdf                         # pick formats
  python3 studio/render.py my-lm.json --video --preview                     # 5 stills of the video, no mp4

Output lands in out/<slug>/. Brand comes from brand/brand.json (or --brand path).
Needs: pip install playwright && playwright install chromium, and ffmpeg for the video.
"""
import argparse, json, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent
KIT = ROOT.parent
W, H, FPS = 1080, 1350, 30


def file_uri(base, p):
    if not p:
        return ""
    if p.startswith(("http://", "https://", "data:", "file://")):
        return p
    return (base / p).resolve().as_uri()


def load(content_path, brand_path):
    content_path = pathlib.Path(content_path).resolve()
    data = json.loads(content_path.read_text())
    brand_path = pathlib.Path(brand_path).resolve()
    brand = json.loads(brand_path.read_text())
    bdir = brand_path.parent
    brand["logo"] = file_uri(bdir, brand.get("logo", ""))
    brand["screenshots"] = [file_uri(bdir, s) for s in brand.get("screenshots", [])]
    if brand.get("author", {}).get("photo"):
        brand["author"]["photo"] = file_uri(bdir, brand["author"]["photo"])
    # a content file can override screenshots per scene: "shot" scenes take "image"
    for sc in data.get("video", {}).get("scenes", []):
        if sc.get("image"):
            sc["image"] = file_uri(content_path.parent, sc["image"])
    data["brand"] = brand
    return data


def page_for(browser, template, data, out_dir, name):
    html = (ROOT / "templates" / template).read_text()
    html = html.replace("/*DATA*/", "window.DATA=" + json.dumps(data) + ";")
    f = out_dir / f"{name}.html"
    f.write_text(html)
    pg = browser.new_page(viewport={"width": W, "height": H})
    pg.goto(f.as_uri())
    pg.wait_for_function("window.READY === true", timeout=60000)
    return pg


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("content")
    ap.add_argument("--brand", default=str(KIT / "brand" / "brand.json"))
    ap.add_argument("--image", action="store_true")
    ap.add_argument("--pdf", action="store_true")
    ap.add_argument("--video", action="store_true")
    ap.add_argument("--preview", action="store_true", help="video: stills only")
    a = ap.parse_args()
    if not (a.image or a.pdf or a.video):
        a.image = a.pdf = a.video = True

    data = load(a.content, a.brand)
    out_dir = KIT / "out" / data.get("slug", "lead-magnet")
    out_dir.mkdir(parents=True, exist_ok=True)

    from playwright.sync_api import sync_playwright
    with sync_playwright() as p:
        b = p.chromium.launch()
        if a.image:
            pg = page_for(b, "post-image.html", data, out_dir, "post-image")
            pg.screenshot(path=str(out_dir / "post-image.png"))
            print("image  ", out_dir / "post-image.png")
        if a.pdf:
            pg = page_for(b, "carousel.html", data, out_dir, "carousel")
            pg.pdf(path=str(out_dir / "carousel.pdf"), width=f"{W}px", height=f"{H}px",
                   print_background=True, margin={"top": "0", "right": "0", "bottom": "0", "left": "0"})
            # page 1 as PNG too, to check the cover at a glance
            pg.screenshot(path=str(out_dir / "carousel-cover.png"), clip={"x": 0, "y": 0, "width": W, "height": H})
            print("pdf    ", out_dir / "carousel.pdf")
        if a.video:
            pg = page_for(b, "video.html", data, out_dir, "video")
            dur = pg.evaluate("window.DUR")
            if a.preview:
                for i in range(5):
                    t = round(dur * (i + 0.5) / 5, 2)
                    pg.evaluate(f"setT({t})")
                    pg.screenshot(path=str(out_dir / f"video-still-{i + 1}.png"))
                print("stills ", out_dir, f"({dur:.1f}s video)")
            else:
                mp4 = out_dir / "video.mp4"
                ff = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "image2pipe", "-framerate", str(FPS),
                                       "-i", "-", "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "20",
                                       "-preset", "medium", "-movflags", "+faststart", str(mp4)],
                                      stdin=subprocess.PIPE)
                for f in range(int(FPS * dur)):
                    pg.evaluate(f"setT({f / FPS})")
                    ff.stdin.write(pg.screenshot(type="png"))
                ff.stdin.close()
                ff.wait()
                print("video  ", mp4, f"({dur:.1f}s)")
        b.close()


if __name__ == "__main__":
    sys.exit(main())
