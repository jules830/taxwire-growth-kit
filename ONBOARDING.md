# Onboarding · Taxwire growth kit

You don't need to read this to start: open `claude` in this folder and the `onboarding` skill walks you through it. This file is the full reference.

Three parts:
1. **How a lead magnet that books demos works** (10 min read)
2. **Your first lead magnet, step by step** (what you do, what the kit does)
3. **Everything else from my growth engine you can run for Taxwire** (automations, workflows, skills, Sherlock…)

---

## Part 1 · How a lead magnet that books demos works

A normal post gets likes. A lead magnet gets **conversations with people who raised their hand**. Everyone who comments your keyword just told you in public "I have this problem".

**The formula: wow + frustration.**
- **Wow**: the post and the visual really give. The mechanism, the steps, a real number. The reader can use it today.
- **Frustration**: the last part is visibly there but locked. Blurred pages, "4 more states in your full report". They see exactly what they're missing.
- **Demo**: the locked part is what needs THEIR data or YOUR team. So booking a demo is the logical next step, never a toll.

**3 deliverables, always**: the resource (exists before the post), the post (5 hooks, you pick), the visual (the keyword lives there, never in the text: LinkedIn cuts the reach of posts that ask for comments).

**What worked for me**: "this $50M staffing agency built its own ATS. here's how." Proof + the object in line 1, a small pain in one line, everything given in `1/ … 7/`, the hard parts placed naturally ("so they plugged it"), and one soft line at the end: "I put the whole thing in one guide, step by step. it's yours." Full breakdown in `knowledge/examples/own-ats-post.md`.

**Formats**
| | When |
|---|---|
| Image (FOMO preview) | default, fastest |
| PDF carousel | the value is a sequence of steps (people swipe, LinkedIn loves dwell time) |
| Fast video | a product to show or a number that hits. A cut every 1.5-3 s, the keyword on screen the whole time |
| Free tool | the strongest: a personal number in 30 s on their data, the rest behind the demo |

---

## Part 2 · Your first lead magnet, step by step

**Your job: bring the context and the inspiration. The kit's job: everything else.** If you skip your part, the result is generic, and generic gets zero comments.

### Step 0 · Once (10 min)
Drop in `brand/assets/`: your logo (one version for dark backgrounds), brand colors + fonts, 3-5 product screenshots, a photo of you, your demo link. Say "set up my brand".

### Step 1 · The interview (15 min, `lm-coach`)
It asks one question at a time. Prepare these before you start:
1. **The reader**: one real person who should comment (title, company size, their week).
2. **The pain, in their words**: the sentence prospects say on every first call. The last customer who came in panic, and why.
3. **The object**: what your team explains by hand on every call, or the checklist / spreadsheet you run on every new customer.
4. **The proof**: numbers you can publish, one anonymous story.
5. **The inspiration**: 1 to 3 viral posts you like (hook, format, visual). Any industry. We never start from a blank page.
6. **The gate**: what the demo gives them that the resource can't.
7. **The keyword**: one distinctive word (NEXUS, AUDIT…).

### Step 2 · Angle (5 min)
The kit proposes 3 angles (pain, desire, FOMO, proof, contrarian). You pick.

### Step 3 · Resource → post → visual (the kit, 20-40 min)
You review: the resource (does it really give?), the 5 hooks (pick one), the post, the rendered visual. Every change you make is logged so the next one is closer.

### Step 4 · Post and run the flow
1. Post Tuesday to Thursday, morning ET. Reply to every comment in the first hour.
2. DM the resource to each commenter, with one qualifying question ("how many states do you sell in today?").
3. Warm follow-up for the ones who fit. Nurture the others with the next lead magnet.
4. 48 h later: count keyword comments from your target, DMs, demos. Not likes.

### Ideas to start with (hypotheses, validate with your team)
- **Nexus check**: "find every state you owe sales tax in, in 10 minutes" (checklist, or the free tool already scaffolded in `tools/examples/nexus-check`)
- **The letter playbook**: "you got a letter from a state. here's what to do in the first 72 hours"
- **SaaS taxability map**: where SaaS is taxable (full table locked)
- **Due diligence checklist**: the sales tax questions investors ask before a Series A/B
- **In-house vs managed calculator**: hours, people and tools it really takes

---

## Part 3 · Everything else from my growth engine you can run for Taxwire

What I run for Kalent, explained by mechanism, and what it becomes for you. All of it runs on Claude Code + scripts + APIs. One rule above all: **scripts do the bulk work (scraping, enrichment, writing sheets), the model only judges short lines.** That's what keeps it cheap.

### A. Content engine (organic LinkedIn)
| Piece | What it does for me | For Taxwire |
|---|---|---|
| **Voice sheets** | One file per person: their tone, tics, words they never use. Posts are written from raw notes (a voice memo is enough). | A sheet for you + each founder. Founders tell the build and the vision, you tell GTM and customer stories. |
| **5 hooks per post** | Every post comes with 5 hooks from 5 templates, the author picks. | Same. Your hook database grows with what performs. |
| **Lab** | Every correction on a draft is logged before/after. 3 times = a rule. | The engine gets closer to your voice every week. |
| **Weekly perf (Sunday 7 pm)** | A script pulls every post's numbers, **who** commented (titles), and outputs decisions per axis: format, lead magnet, angle, target, hook. | Know which topic brings CFOs vs accountants, double down on it. |
| **Anti-cloning** | Several people post for the same company: same topic allowed, same angle never. | Your founders and you don't say the same thing to the same people. |
| **X derivation** | Each LinkedIn post gets an X-native version (not a shortened copy). | Optional. |

### B. Comment-to-pipeline
| Piece | What it does for me | For Taxwire |
|---|---|---|
| **Comment scraper** | Pulls everyone who commented or reacted on a post (mine, a competitor's, a creator's), with title and company. | Run it on your lead magnets AND on posts by Avalara, Anrok, Numeral, TaxJar, or CFO creators. People who engage on a sales tax post are in-market. |
| **Engager hunter (daily)** | Every morning, new engagers on the posts I follow land in a sheet, deduped. | A daily list of finance people who just showed interest in sales tax. |
| **Qualification** | Work email + phone only for the ones that fit, through an enrichment API (FullEnrich), only after a go, with a cache so you never pay twice for the same person. | Enrich only the CFOs / Heads of Finance at companies with multi-state revenue. |
| **LinkedIn comments skill** | Writes my public comments under big creators' posts, so my target sees me. | Comment under CFO / SaaS finance creators with a real tax insight. |

### C. Outbound
| Piece | What it does for me | For Taxwire |
|---|---|---|
| **TAM pipeline** | Discovery through an API (Exa), dedupe against every tab, enrichment from the website (LinkedIn, HQ), the model tags each company in one line, writes to the sheet by column name. Scoring with free signals (headcount growth, hires, job posts via lemlist). | Build the list of US SaaS / e-commerce selling in many states. Signals that matter for you: **just raised**, **hiring in new states**, **hiring a tax or accounting role**, **launching a marketplace or going international**. |
| **Job-post watcher** | Daily scan of companies posting a specific role. | A company hiring a "Sales Tax Analyst" or "Tax Manager" is a perfect trigger. |
| **Campaign launcher (lemlist)** | One decision-maker per company, verified emails only, a personalized landing page per prospect, email + LinkedIn sequence with conditions, A/B as separate campaigns, NY schedule, the 4th email = "am I speaking with the right person?". | Same structure, one campaign per segment and per pain. |
| **Campaign audit** | After any change, a script checks the live campaigns (senders, schedule, leads, steps) and exits non-zero if something's off. | No campaign goes out broken. |
| **Sender guard** | If a sending domain lands in spam, every send from it stops automatically. | Protects taxwire.com. |
| **Campaign report** | Compares campaigns on **positive replies only** (never negatives or auto-replies). | Real numbers, no vanity metrics. |
| **Click alerts → SMS** | A human click on a link (not a bot: hosting IPs, 4+ links from one IP and clicks before the email arrived are filtered out, and most raw clicks turned out to be bots) triggers a Slack DM with a pre-written text + iMessage link. | Call or text a CFO 10 minutes after they opened your nexus guide. |
| **KO sync** | Mark a lead "KO" in the sheet → removed from every campaign within 2 minutes + excluded forever. | Clean lists, no awkward double-touches. |
| **Exclusion before any list** | Every new list is crossed with the CRM (customers, churned, contacted < 3 months). | Never cold-email a customer. |
| **Cold call scripts** | Spoken scripts, very easy to say, from a persona + trigger. | For the click alerts above. |

### D. After the first contact
| Piece | What it does for me | For Taxwire |
|---|---|---|
| **Mini CRM (local)** | SQLite + a small web page: Pipeline (stages, "follow up on"), Campaigns, Leads, and a **LAB** tab per channel: effort → calls → customers → revenue. Cards are created automatically from replies, booked calls and emails. | See which channel actually brings revenue (lead magnets vs outbound vs events). |
| **Meeting prep** | Every booked call → a prep page: the person's profile (DISC color, how to talk to them), my prediction of their need, the interview questions, my spoken pitch. A Slack message "📅 Call booked, score A/B/C". | Your AEs walk into every demo already knowing the company's states, stack and likely exposure. |
| **Post-call J0** | End of the recorded call (Wispr Flow) → a follow-up email draft in Gmail, in my voice, with the one pain they said. The deal estimate updates on the CRM card. | Same-day follow-ups, never forgotten. |
| **Payment nudge** | A proposal without payment after 48 h → a draft nudge. | Faster closes. |
| **Follow-ups with value** | Every follow-up brings something (a case study, a shortlist, a guide), never "just checking in". | Follow up with the next lead magnet. |
| **Personal videos** | Short personal videos to people who accepted my LinkedIn invite, batched. | For your top 20 accounts. |

### E. Network and events
| Piece | What it does for me | For Taxwire |
|---|---|---|
| **Sherlock** | Paste a LinkedIn URL → a deep profile card in my "Pro Network" Notion: career, what they care about, DISC profile, a precise reason to contact them (a shared point, never a pitch), who could intro. Weekly routine to dedupe. | Before every partner / investor / big-account meeting. And to find who in your network can intro you to a target CFO. |
| **People to meet → Pro Network** | Mark "meeting set" or "met" in a list → the person lands in the network base automatically. | Your network grows on its own. |
| **Network follow-up** | Reminds me who to reconnect with, with a reason. | Keep accountants, fractional CFOs and VCs warm: they're your best referrers. |
| **Events radar** | Luma, Partiful, YC/SPC calendars, ranked in 5 tiers → Slack every Sunday + daily alerts for the best ones. | Same for NYC: fintech, CFO, SaaS finance events. |
| **Intro campaigns** | Creators, communities, associations as partners (revenue share). | Accounting firms and fractional CFOs as a referral channel. |

### F. SEO and AI search
| Piece | What it does for me | For Taxwire |
|---|---|---|
| **Article factory** | A watcher pulls what ranks and what AI assistants cite, a writer drafts, a publisher posts to the site one article at a time. | Huge for you: one page per state ("sales tax nexus in Texas for SaaS"), kept up to date with the 6,000 changes a year. That's exactly what ChatGPT and Perplexity cite. |
| **GEO audit** | Checks how AI assistants see the site (llms.txt, schema, citability). | Get cited when a CFO asks ChatGPT "do I owe sales tax in Washington?". |

### G. The brain
You built brain-starter, so you know this part better than me :) I plugged mine everywhere: every call, every CRM card, every campaign learning lands in it, and every strategy question starts by reading it. The kit writes what you tell it in `knowledge/taxwire.md`. Connect it to your brain so your lead magnets come from your real calls.

---

## Part 4 · A 30-day plan

| Week | Do |
|---|---|
| 1 | Brand setup + interview + first lead magnet (image). Post it. Reply to every comment. |
| 2 | Second lead magnet (carousel or video). Run the comment scraper on yours + 3 competitor posts. Enrich the best 20. |
| 3 | The free tool (nexus check with your tax team's real data). One warm campaign to commenters + engagers. |
| 4 | Weekly perf: what brought demos? Double down on that format and pain. Start the job-post watcher and the state-page SEO. |

## Part 5 · What to ask me for
Some of these live in my own setup with Kalent data inside. Sherlock is already in this repo (`.claude/skills/sherlock-deep-research`). For the rest, tell me which ones you want and I'll send a clean copy without our data: the comment scraper, the TAM pipeline, the campaign launcher + audit, the mini CRM, meeting prep, the post-call J0, the events radar.
