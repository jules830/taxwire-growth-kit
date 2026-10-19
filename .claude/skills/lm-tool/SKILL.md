---
name: lm-tool
description: Builds a free web tool used as a lead magnet (calculator, checker, scorer) on Pau's own logic and data. The visitor gets a personal WOW in 30 seconds, the first results in full, the rest blurred behind a demo booking. Use when Pau says "free tool", "calculator", "checker", "like Jules's tool", "interactive lead magnet", or when the material is a calculation on the prospect's numbers.
---

# lm-tool

The engine is `tools/template/index.html` (never edit it per tool). One tool = one `tool.js`. Example: `tools/examples/nexus-check/` (open `index.html` in a browser).

## 1. Ask Pau (one question at a time, write the answers in `knowledge/taxwire.md`)
1. "What does your team calculate for every new prospect?" (that's the logic)
2. "What 2-4 things would a prospect type in, from memory, in 30 seconds?" (inputs; nothing they need to look up)
3. "What's the ONE number that would make them say wow?" (the big number)
4. "What do you show for free, what stays locked?" Free = enough to trust the number. Locked = what needs their real data or your team.
5. "Where does the data come from, and who verifies it?" ⛔ Tax thresholds, rates and rules must come from Taxwire's tax team. Until verified, `demoData` stays filled and the yellow banner shows.
6. "Where should a run go?" (a webhook: Zapier, Make, n8n, HubSpot form, Clay) and the demo link.

## 2. Build
- `cp -r tools/template tools/<slug>` then write `tools/<slug>/tool.js`: `inputs`, `validate`, `compute` (returns `big`, `headline`, `note`, `items`), `freeItems`, `gate`, `webhook`.
- Copy: title = the promise in the reader's words. Button = the action ("Check my exposure"). Gate = what they get on the call, not "contact sales".
- Test in a headless browser (fill the inputs, click, screenshot) on desktop AND 375 px wide. No horizontal scroll, the gate readable.

## 3. Ship
- Deploy the folder as a static site (Vercel: `vercel deploy --prod` from `tools/<slug>`, or any static host).
- Add UTM to the demo link (the engine adds `utm_source=lead-magnet&utm_campaign=<slug>`).
- The post about the tool shows a 10 s video of a run (`lm-visual`, `shot` scene with screenshots of the tool) and the keyword in the visual. The link goes in DM, never in the post.

## 4. Rules
- 30 seconds to the WOW. Max 4 inputs.
- The number is honest: an estimate says it's an estimate ("if your product is taxable there", "estimate only, not tax advice").
- The frustration is visible (blurred items with their count: "4 more states in your full report"), never a blank wall.
- A competitor or a student can use it too: that's fine, the webhook + qualification sort them out.
