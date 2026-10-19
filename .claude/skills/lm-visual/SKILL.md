---
name: lm-visual
description: Renders the visual of a lead magnet from Pau's brand assets: the post image (FOMO preview + keyword band), a LinkedIn PDF carousel, or a fast-moving 4:5 video. Use when Pau asks for "the visual", "the image", "the carousel", "the PDF", "the video", "make it move", or after the lead-magnet skill has the post.
---

# lm-visual

One content file → three formats. Everything uses `brand/brand.json` (logo, colors, fonts, screenshots). If the brand file still has placeholders (no logo, no screenshots), ask Pau for his assets first (`lm-coach` step 0). Never ship a visual in placeholder colors.

## 1. Write the content file
Copy `studio/examples/nexus-checklist.json` to `studio/content/<slug>.json` and fill it:
- `keyword`: one distinctive word, capitals.
- `kicker`, `title` (= the picked hook, shortened if needed), `highlight` (the 1-3 words in accent color), `sub`.
- `parts`: the 3 parts of the resource (image: part 1 readable, 2 and 3 blurred).
- `slides`: 2 to 4 value slides for the carousel. They really give.
- `locked`: what stays in the full version (the frustration).
- `video.scenes`: see below.

## 2. Render
```
python3 studio/render.py studio/content/<slug>.json --image          # post image
python3 studio/render.py studio/content/<slug>.json --pdf            # carousel (+ cover PNG)
python3 studio/render.py studio/content/<slug>.json --video --preview  # 5 stills to check
python3 studio/render.py studio/content/<slug>.json --video          # the MP4 (1-3 min)
```
Output: `out/<slug>/`. **Open the PNGs and look at them yourself before showing Pau**: text that overflows, a title in 4+ lines, a keyword that doesn't read at phone size.

## 3. The video: fast, a lot of movement
Scene types (each has `dur` in seconds, cuts are whip transitions with a camera punch):
| type | fields | use it for |
|---|---|---|
| `punch` | `words` | the hook, word by word, slamming in. ≤ 9 words. |
| `count` | `to`, `label`, `suffix` | a number that hits (counts up fast) |
| `list` | `title`, `items` | the steps, flying in from both sides |
| `shot` | `caption`, `image` (optional) | a product screenshot zooming and panning, with a cursor and a highlight. Takes `brand.screenshots` in order if no `image`. |
| `locked` | `title` | the blurred pages of the full version + a lock (the frustration) |
| `cta` | `line` | the keyword, huge, pulsing |
Rules:
- 12 to 20 s total. A cut every 1.5 to 3 s. Something moves in every frame.
- Open with `punch` (the hook) in the first 2 s. End with `locked` then `cta`.
- The "comment KEYWORD to get access" band stays on screen the whole video (it hides during the final `cta`).
- At least one `shot` with a real screenshot: real product beats any animation.
- No music is added. If Pau wants sound, add it in CapCut or with ffmpeg after.

## 4. Want a new look?
The templates are plain HTML in `studio/templates/`. To adapt a viral visual Pau sent: copy the closest template, change the layout, keep the brand variables and the keyword band. Start from what worked, never from a blank page.
