---
name: sherlock-deep-research
description: Grande recherche sur une personne avant de la rencontrer (founder, investisseur, client, advisor, n'importe qui d'important). Browse plusieurs sources en plusieurs passes (LinkedIn, site de la boîte, levées, X, podcasts, YouTube, blog, presse, côté perso), sépare le vérifié de l'inféré, et rend une fiche courte et actionnable : encart à lire en 30 secondes, couleur DISC, archétype de séduction, points communs humains, ce que tu peux lui apporter, angle, red flags, questions à poser. Invoquer quand on dit "grande recherche sur X", "fais-moi la fiche de X", "research X", "prep-moi pour mon meeting avec X", "comment j'aborde X", "brief sur X", ou quand on colle une URL LinkedIn avec une ligne de contexte.
---

# Sherlock, la grande recherche

Préparer une rencontre avec quelqu'un qui compte. Le but n'est pas un CV : c'est
de comprendre **qui est la personne**, ce qui la fait vibrer, comment elle parle,
et ce qu'on peut lui apporter, pour que la conversation démarre bien dès la
première minute.

> Les gens sont flattés qu'on se soit renseigné sur eux. Même ceux qui
> paraissent brillants en social préparent énormément. L'aisance vient de la
> préparation, pas de l'improvisation.

## Entrées

**Obligatoire** : prénom + nom, et une ligne de contexte (rôle, boîte, pourquoi
on veut la rencontrer).

**Utile** : URL LinkedIn (accélère tout), site de la boîte, un article, tout ce
que l'utilisateur sait déjà.

Une personne arrive, la recherche part. Pas de question préalable, pas de récit
pendant la recherche. On rend le résultat.

## Base de connaissance (dans `knowledge/`)

À lire avant d'analyser la personne :

- `disc-surrounded-by-idiots.md` + `disc-4-profils.md` : les 4 couleurs DISC,
  comment la personne **communique**.
- `art-of-seduction.md` : la grille d'influence de Robert Greene, comment la
  personne **charme**. À croiser avec la couleur.
- `never-eat-alone-concepts.md` : la méthode réseau de Keith Ferrazzi (donner
  avant de demander, santé / argent / enfants, connecteurs, follow-up 24h).

## Profil de l'utilisateur (facultatif, mais ça change tout)

Si un fichier `me.md` existe à côté de ce skill (modèle : `me.example.md`), le
lire d'abord. Il donne qui est l'utilisateur, ce qu'il construit, ses objectifs
du moment, son parcours, ses passions, sa ville. C'est ce qui permet de trouver
un **vrai** point commun et un vrai "ce que je peux lui apporter". Sans lui, la
section pont reste générique et on le dit.

## L'algorithme

### 1. Ce qu'on sait déjà

Chercher dans les notes locales de l'utilisateur (dossier de fiches, CRM, notes
de meeting) si la personne y est déjà. Si oui, **compléter au lieu de repartir
de zéro**, et citer ce qui est déjà connu. Vérifier les doublons sur l'email,
puis l'URL LinkedIn, puis le nom, puis le prénom seul (les orthographes
stockées sont souvent fausses).

### 2. Browsing multi-source, en plusieurs passes

Minimum **une recherche + une lecture par source**. Ne jamais s'arrêter au
premier lien.

**Pass 1, LinkedIn (parcours + posts récents)**
- Pour trouver le profil : `site:linkedin.com/in "Prénom Nom" <boîte ou ville>`.
  Le format `"Prénom Nom" LinkedIn` remonte les pages entreprise, pas les profils.
- Le profil doit recouper **au moins deux** éléments connus (boîte, ville,
  secteur, poste). **Un homonyme est pire qu'une case vide.**
- LinkedIn bloque la lecture non authentifiée (HTTP 999). Si un scraper est
  disponible (ex. acteur Apify `harvestapi~linkedin-profile-scraper` avec
  l'URL), l'utiliser : `about`, descriptions de poste écrites par la personne,
  `education`, `volunteering`, `languages`. Sinon, compenser avec ce qui est
  public ailleurs.
- `volunteering` et les descriptions de poste sont les deux champs qui portent
  le point commun humain. Le reste est du CV.
- Posts des 3 derniers mois : le ton, ce qu'elle considère important.

**Pass 2, la boîte (stage, levées, équipe)**
- `<boîte> funding`, `<boîte> Crunchbase`, `<boîte> TechCrunch`, Dealroom.
- Stage exact, dernier montant levé, investisseurs clés, taille d'équipe,
  traction publique. Le vrai problème résolu, pas le marketing.

**Pass 3, X / Twitter (thèses, hot takes, style)**
- Thèses récurrentes, sur quoi elle réagit fort, style d'écriture.

**Pass 4, podcasts + YouTube**
- Au moins 2 interviews si elles existent. Lire notes ou transcripts.
- Sa thèse claire, ses convictions, ce qui la fait vibrer. Citations directes.

**Pass 5, blog / Substack / essays**
- Les plus partagés et les plus récents. Sa pensée explicite, ses obsessions.

**Pass 6, LE CÔTÉ HUMAIN (obligatoire, jamais sacrifiée)**

C'est la pass qui fait la différence entre une fiche et un dossier utile.
Chercher **qui est la personne, pas ce qu'elle fait**.
- Sport, lectures, voyages, musique, famille, causes, bénévolat.
- Formation : école, fac, MBA, échanges. Le réseau d'anciens est un point
  commun instantané.
- D'où elle vient : ville d'origine, expatriation, parcours non linéaire.
- Ses galères racontées par elle-même : refus, échecs, périodes fauchées.
  Personne ne la relance jamais dessus.
- Sources à ne pas snober : Google tout court, page about / team / our story,
  presse locale, pages alumni, Instagram public.

**Pass 7, chemins d'intro**
- Quelqu'un du réseau de l'utilisateur la connaît ? Cofondateurs, investisseurs
  communs, anciens collègues. Une intro chaude vaut toujours mieux qu'un cold.

**Exhaustivité** : viser **5+ sources solides**. Minimum absolu **3 sources
distinctes**, sinon marquer `Confiance : faible` et demander des pistes.

### 3. Vérifié ou inféré

- ✅ **vérifié** : 2+ sources indépendantes.
- **[inférence]** : une seule source, ou déduit du ton et du contexte.
- **non trouvé** : rien. **Ne jamais inventer.** Préférer "non trouvé" à du
  remplissage générique.

### 4. La couleur DISC

Placer la personne sur deux axes à partir de signaux observables (ton des
posts, façon de parler en interview, choix de mots, rythme) :

| | Tâche | Relation |
|---|---|---|
| **Extraverti** | 🔴 Rouge, moteur contrôle et temps : droit au but, conviction, preuves | 🟡 Jaune, moteur reconnaissance : énergie, big picture, gérer le suivi à sa place |
| **Introverti** | 🔵 Bleu, moteur exactitude : faits, zéro hype, devoirs faits | 🟢 Vert, moteur sécurité : tempo lent, rassurer, lien d'abord |

La plupart des gens sont des combinaisons : nommer la dominante et la
secondaire. **Toujours [inférence].** À corriger après le premier vrai échange.

### 5. L'archétype de séduction

D'après *The Art of Seduction* : quel type la personne incarne. Charismatique,
Star, Natural, Charmeur, Coquette, Rake, Ideal Lover, Dandy, Sirène.
**La couleur dit comment elle communique, l'archétype dit comment elle charme.**
Les deux ensemble donnent le levier :

- 🔴 Rouge : la challenger, pas la courtiser. Force d'abord, une vraie faille
  ensuite (vulnérabilité stratégique).
- 🟡 Jaune : la faire briller, de l'énergie, une vie pleine jamais déclarée.
- 🟢 Vert : constance, confiance, retrait doux, aucune pression.
- 🔵 Bleu : une question précise qui crée le manque, la laisser raisonner.

Garde-fou : respect et sincérité. On cherche à résonner, pas à manipuler.

### 6. Ce qu'on peut lui apporter (donner avant de demander)

- Vérifier si ça touche **santé, argent ou enfants**, les trois leviers qui
  créent une loyauté durable (Ferrazzi).
- **Ne jamais proposer un service dont la personne n'a rien à faire maintenant.**
  Proposer une analyse de contenu LinkedIn à quelqu'un qui poste une fois par
  mois discrédite toute la fiche. Si c'est à confirmer, l'écrire.
- Si la personne est un **connecteur** (événements, recrutement, levée de fonds,
  RP, journalisme, politique, restaurants), le dire : c'est un nœud, pas une
  ligne.

### 7. Écrire la fiche

Dans `fiches/person-<prenom-nom>.md` (ou là où l'utilisateur range ses fiches).
**Ne jamais écraser une fiche existante** : on complète.

### 8. Rendre en chat

Court, jamais une copie de la fiche (format plus bas).

## La fiche

Synthétisée et claire. Recherche riche, texte condensé. Jamais un pavé de 17
pages, jamais de redite entre les sections.

```markdown
---
type: person
name: Prénom Nom
role: <rôle + boîte, une ligne>
linkedin: https://www.linkedin.com/in/<slug>/
location: <ville>
disc: <rouge|jaune|vert|bleu> [inférence]
archetype: <archétype> [inférence]
confidence: <haute|moyenne|faible>
created: AAAA-MM-JJ
---

> **🎨 Couleur : <couleur>** · Comment lui parler : <une phrase>
> **💘 Séduction : <archétype>** · Pour lui plaire : <une phrase>
> **🏢 Ce qu'elle fait** : <une phrase sur sa boîte, et ce qu'elle est pour toi : client, partenaire, investisseur, concurrent, rien>
> **🤝 Nos points communs**
> - <une ligne, un fait sourcé>
> - <une ligne>
> **🎯 L'angle à prendre** : <une phrase>
> **🚫 À éviter** : <une phrase, le red flag principal>
>
> <details><summary>❓ Questions à lui poser</summary>
>
> 1. <question courte, celle que personne d'autre ne lui pose>
> 2. ...
> </details>

## Qui c'est
3 à 6 lignes. Rôle exact, ce qu'elle fait vraiment, chiffres publics. Chaque fait
porte sa source entre parenthèses.

## La boîte
- **One-liner** : le vrai problème résolu
- **Stage + dernière levée** : montant, investisseurs
- **Équipe + traction** : si public
- **Why now**

## Sa thèse
2-3 convictions concrètes, ce sur quoi elle est contrarian. Citations directes.

## Parcours
Les étapes qui expliquent où elle en est. Ce qui a été construit, vendu, arrêté,
levé, raté. Forces démontrées, zones de doute.

## Personnalité et style
Signaux concrets (ton, mots, rythme), valeurs, ce qui l'anime, ce qui l'agace.

## Le côté humain
2 à 4 points concrets et sourcés : le vrai point commun nommé, ses passions,
ses galères racontées par elle-même, la phrase d'accroche perso pour les cinq
premières minutes. Si rien n'est trouvable : ⚠️ **profil pro-only en public, ne
pas bluffer sur du perso.**

## Comment l'aborder
- **Couleur + archétype → le levier** (et pourquoi, signaux à l'appui)
- **Hooks** : 2-3 références récentes précises (post, podcast, thread + date)
- **Ce que je peux lui apporter** : une chose concrète, dans sa monnaie à elle
- **Ce que je veux + le pont** : l'objectif, et comment y amener la conversation
  sans forcer (une demande d'avis, pas un pitch)
- **Chemin d'intro** : warm intro / DM / event
- **Red flags** : ce qui la rebute
- **Sortie** : comment clôturer + le next step concret

## Sources
| Source | URL complète | Pertinence |
|---|---|---|
| LinkedIn | https://... | ⭐⭐⭐ |
| ... | ... | ... |

**Confiance** : haute (5+ sources) / moyenne (3-4) / faible (<3).
```

## La sortie en chat

```
## <Nom> : grande recherche faite

Fiche : fiches/person-<slug>.md
Sources : LinkedIn ✅ / boîte ✅ / X ✅ / podcast ✅ / blog ❌ non trouvé
Confiance : moyenne (4 sources solides)
Couleur [inférence] : <couleur> · Archétype : <archétype>
Point commun : <une ligne>
Ce que tu peux lui donner : <une ligne, ou "rien d'évident pour l'instant">
Top 3 hooks :
1. ...
2. ...
3. ...
Attention : <le push back possible>
À confirmer par toi : <ce que je n'ai pas pu établir>
```

## Mode express : 10 minutes avant un call

Quand on dit "j'ai un call dans 20 min avec X", pas de fiche complète. Un bloc :

1. Qui c'est en une ligne (rôle, boîte, un chiffre).
2. Un fait business récent, daté.
3. Un fait humain (sport, formation, ville, une galère qu'elle raconte).
4. Le point commun, nommé.
5. La question à poser dans les 5 premières minutes, celle que personne ne pose.
6. Ce qu'il ne faut PAS dire.

## Après le meeting : le follow-up des 24h

Quand l'utilisateur colle le compte rendu du rendez-vous, écrire le follow-up
sans attendre qu'on le demande (fenêtre de 12 à 24 heures, Never Eat Alone) :

- Un remerciement court.
- **Un moment précis** de la conversation (une phrase, une blague, un exemple).
  Jamais un résumé générique.
- **Ce que l'utilisateur va faire pour elle, en premier**, avec un délai.
- Remercier nommément la personne qui a fait l'intro.
- Finir sur une porte ouverte concrète.
- 7 lignes maximum, texte brut, mots simples.
- Ton calibré : 🔴 très court, le livrable et la date · 🟢 chaleureux, rien à
  pousser · 🟡 enthousiaste · 🔵 précis, récap propre.

Ajouter dans la fiche un bloc `### 🗓️ Meeting du AAAA-MM-JJ` (résumé,
engagements des deux côtés, follow-up), le plus récent en haut, et proposer une
relance à 30 jours. **Ne jamais envoyer de message soi-même** : l'utilisateur
relit et envoie.

## Règles dures

1. **Ne jamais inventer.** "Non trouvé" si l'info manque.
2. **Deux sources minimum** pour un fait posé comme vérifié, sinon [à confirmer].
3. **✅ vérifié vs [inférence]**, partout.
4. **Couleur et archétype = toujours [inférence].**
5. **Section côté humain obligatoire.** Une fiche sans point commun nommé est
   incomplète, même si la recherche business est parfaite.
6. **Le point commun doit être spécifique.** "Tous les deux entrepreneurs" ou
   "tous les deux dans la tech" s'applique à cinquante personnes : ça ne sert à
   rien. Bon matériau : une phrase qu'elle a écrite, un fait vérifiable de son
   parcours, une personne en commun.
7. **Liens complets et cliquables**, jamais un slug tronqué. LinkedIn normalisé
   en `https://www.linkedin.com/in/<slug>/`.
8. **Citations directes** pour la thèse et la personnalité, elles donnent le ton.
9. **Reddit est inaccessible**, ne pas tenter. Crunchbase / PitchBook sont
   souvent derrière paywall, utiliser ce qui est public.
10. **Profil discret** (pas de blog, pas de podcast) : compenser avec les
    mentions par d'autres, marquer "faible empreinte publique, privilégier une
    intro chaude".

## Écriture

- Phrases complètes, sujet verbe complément. Pas de fragments télégraphiques.
- Jamais d'allusion à un contexte qui vit plus bas dans la fiche.
- Pas de jargon interne.
- La clarté avant la brièveté. Une fiche qu'il faut relire trois fois ne sert à
  rien.
- Pas de tirets cadratins (—), des virgules et des points.
