# Taxwire growth kit

Hey Pau, Jules here. This is the lead magnet machine I use for Kalent, rebuilt for Taxwire.
You bring the context and the inspiration, it does the rest: the resource, the post in a tone that converts, the visual (image, PDF carousel, fast video), a free-tool builder, and the rest of my growth engine.

## Start
```bash
git clone https://github.com/jules830/taxwire-growth-kit.git
cd taxwire-growth-kit
claude
```
Say hi. The kit onboards you itself, step by step: install check, the method, your brand, your context, then your first lead magnet (~45 min).

## What's inside
| | |
|---|---|
| `.claude/skills/onboarding` | the guided onboarding (runs on your first session) |
| `.claude/skills/lm-coach` | the interview: pulls out the pain, the object, the proof, your inspiration |
| `.claude/skills/lead-magnet` | end to end: angle → resource → post + 5 hooks → visual → comment-to-demo flow |
| `.claude/skills/lm-visual` | image, PDF carousel, fast video, in your brand |
| `.claude/skills/lm-tool` | free tools (wow in 30 s, the rest behind a demo) |
| `.claude/skills/sherlock-deep-research` | deep research on a person before a meeting |
| `knowledge/` | the playbook, my voice rules, the hooks, my Own ATS post as the reference, what you tell the kit |
| `studio/` | the renderer (`render.py`) and its templates |
| `tools/` | the free-tool engine + a nexus-check example (demo data, to be verified by your tax team) |
| `samples/` | what the generators produce |
| `ONBOARDING.md` | the method in full + everything else from my growth engine you can run for Taxwire |

Needs: Claude Code, Python 3, `pip install playwright && playwright install chromium`, `brew install ffmpeg` (videos only). The onboarding checks all of it for you.
