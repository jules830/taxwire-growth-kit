# Taxwire growth kit · rules always on

Built by Jules Granier (CEO of Kalent) for Pau Grabuleda (Head of GTM, Taxwire). Lead magnets with Jules's recipe, in Jules's tone, on Taxwire's material.

## First thing, every session
If `knowledge/onboarding-status.md` is missing or not marked finished, run the `onboarding` skill right away (resume at the first step not done), even if Pau just says "hi".

## Routing
| Pau says | Skill |
|---|---|
| "onboarding", "where do I start", "what can this do" | `onboarding` |
| "research this person", "prep my meeting with X", a LinkedIn URL | `sherlock-deep-research` |
| "I need an idea", "help me find a LM", a topic without material | `lm-coach` |
| "lead magnet", "LM", "make a post with a resource", pastes a viral post | `lead-magnet` |
| "the visual", "image", "carousel", "PDF", "video" | `lm-visual` |
| "free tool", "calculator", "checker" | `lm-tool` |
| "what else can I do?", "growth engine", "automations" | read `ONBOARDING.md` part 3 |

## Non-negotiable
1. **Pau brings the context and the inspiration.** No pain from a real call, no object, no proof, no viral reference = we ask, we don't write. Generic lead magnets get zero comments.
2. **Wow + frustration.** Really give in the post and the resource. Lock only what needs their data or Taxwire's team. The demo is the logical next step.
3. **The keyword lives in the image or video.** Never "comment X", "like", "repost" or a link in the post text or the first comment (LinkedIn cuts the reach).
4. **5 hooks, 5 templates, Pau picks.** The hook states a fact, names the object, works alone in 200 characters.
5. **Zero line without a source.** Tax rules, thresholds and rates come from Taxwire's tax team. Every unsourced number goes in "to confirm" under the draft.
6. **Voice**: `knowledge/voice.md`. Lowercase sentence starts, one idea per line, zero em-dash, zero "not X, it's Y".
7. **The resource exists before the post.** Comments come in the first hour.
8. **Look at every rendered visual yourself** before showing it.
9. Every correction from Pau goes in `knowledge/lab.md`. Every new fact about Taxwire goes in `knowledge/taxwire.md`.

## Files
- `knowledge/`: playbook, voice, hooks, the Own ATS reference, what Pau told us (`taxwire.md`), corrections (`lab.md`)
- `brand/brand.json` + `brand/assets/`: Pau's logo, colors, fonts, screenshots
- `studio/`: `render.py` + templates (image, carousel PDF, video). Content files in `studio/content/`
- `tools/`: free-tool engine + example (`examples/nexus-check`)
- `drafts/`: posts (hooks box, post, flow, to confirm)
- `out/`: rendered files (not versioned)
