# Noirum — DESIGN

**Status:** creative-direction baseline  
**Scope:** Noirum Studios website and brand experience  
**Authority:** this document defines how Noirum should look, feel, move, speak, and compose itself on the web  
**Technical companion:** `Architecture.md`

> **Brand principle:** Noirum should have a perspective, not a house style.

> **Experience principle:** THE WEBSITE IS THE BRAND EXPERIENCE.

> **Creative principle:** You should look like you.

---

## 1. Brand thesis

Noirum is not a studio that applies one recognizable aesthetic to every client.

Noirum exists to discover how a brand should be perceived and translate that perception into a digital experience with intention.

The studio may produce work that is:

- minimal;
- maximal;
- quiet;
- violent;
- elegant;
- raw;
- editorial;
- playful;
- cinematic;
- technical;
- strange;
- restrained.

The constant is not style.

The constant is **clarity of perspective**.

The question behind every project is:

> **Como você gostaria de ser visto?**

Then:

> **Qual experiência sua marca quer passar?**

And only after that:

> **Como isso deve existir na web?**

Noirum does not force a brand to look like Noirum.

Noirum makes a brand look deliberately like itself.

---

## 2. Positioning statement

### Internal

**PERSPECTIVE BEFORE STYLE.**

We do not begin with effects, colors, grids, or a trendy visual language.

We begin with identity, perception, context, and intention.

### External territory

Noirum creates digital experiences for brands that want a presence people can recognize and remember.

A project can be extremely minimal or aggressively experimental.

Both are valid if the result feels inevitable for the brand.

### Core idea

**Você será você.**

This is not meant as a literal final slogan by default.

It is the philosophical filter behind the work.

---

## 3. What Noirum should feel like

Noirum's own site should live in this emotional territory:

```text
UNDERGROUND        90
EDITORIAL          88
CULTURAL           82
EXPERIMENTAL       84
PRECISE            92
DIGITAL            78
RAW                62
LUXURY             42
CORPORATE           5
PLAYFUL            32
FUTURISTIC         35
MYSTERIOUS         76
HUMAN              58
```

These values describe tension, not a checklist.

The desired feeling is:

**controlled, authored, unexpected, tactile, culturally aware, technically precise.**

The site should never feel like it is trying to prove that it is "premium."

It should simply feel considered enough that the perception emerges naturally.

---

## 4. Primary references — principles, not templates

### Nothin'

Use as reference for:

- perspective over style;
- cultural confidence;
- short, direct statements;
- visual surprise;
- work as evidence;
- not looking like a conventional corporate agency.

Do not copy:

- exact compositions;
- object language;
- typography;
- color system;
- campaign assets.

### Lenis

Use as reference for:

- motion craft;
- scroll as part of the experience;
- technically light interactions that feel expensive;
- control of rhythm;
- fluidity without visual clutter.

Do not copy:

- exact demos;
- specific effects;
- visual identity.

### Lando Norris

Use as reference for:

- personality becoming interaction;
- storytelling through unexpected behavior;
- authored navigation;
- playful mechanics that are relevant to the subject.

### GTA VI

Use as reference for:

- worldbuilding;
- the website as an extension of the brand universe;
- media, type, interaction, and pacing acting together;
- boldness without explaining every decision.

### Fyrma / Yotto

Use as reference for:

- presence before explanation;
- image-led communication;
- strong hierarchy;
- reduced copy;
- work as protagonist.

---

## 5. The Noirum paradox

The site should combine two apparently opposing forces:

```text
PRECISION          +         DISTURBANCE
SYSTEM             +         IMPERFECTION
SILENCE            +         IMPACT
TECHNOLOGY         +         MATERIALITY
CLARITY            +         MYSTERY
```

If everything is precise, the site becomes sterile.

If everything is strange, the site becomes noise.

Noirum lives in the tension.

---

# COLOR

## 6. Core palette

The foundation is intentionally narrow.

### Mineral

The primary dark surface.

```css
--noirum-mineral: #505855;
--noirum-mineral-p3: color(display-p3 0.32 0.345 0.334);
```

Character:

- mineral;
- muted green;
- wet concrete;
- oxidized metal;
- not-black;
- non-corporate.

This replaces generic `#000` as the main field.

### Paper

The primary light surface and primary text color on Mineral.

```css
--noirum-paper: #e9efde;
--noirum-paper-p3: color(display-p3 0.918 0.938 0.876);
```

Character:

- warm paper;
- aged light;
- slightly green;
- tactile;
- less sterile than white.

### Burnt Red

The primary signal color.

```css
--noirum-burnt-red: #983122;
--noirum-burnt-red-p3: color(display-p3 0.55 0.22 0.16);
```

Character:

- oxidized;
- heated metal;
- dried pigment;
- underground print;
- physical;
- emphatic without feeling neon.

**Burnt Red is a signal, not a wallpaper.**

It should become memorable because it appears rarely.

---

## 7. Semantic color tokens

```css
:root {
  --color-mineral: #505855;
  --color-paper: #e9efde;
  --color-signal: #983122;

  --bg: var(--color-mineral);
  --fg: var(--color-paper);

  --bg-alt: var(--color-paper);
  --fg-alt: var(--color-mineral);

  --accent: var(--color-signal);

  --line: color-mix(in srgb, var(--color-paper) 20%, transparent);
  --line-dark: color-mix(in srgb, var(--color-mineral) 26%, transparent);
  --muted: color-mix(in srgb, var(--color-paper) 66%, var(--color-mineral));
}

@supports (color: color(display-p3 1 1 1)) {
  :root {
    --color-mineral: color(display-p3 0.32 0.345 0.334);
    --color-paper: color(display-p3 0.918 0.938 0.876);
    --color-signal: color(display-p3 0.55 0.22 0.16);
  }
}
```

All final combinations must be accessibility-tested in implementation.

---

## 8. Color usage

Approximate visual distribution on the Noirum homepage:

```text
MINERAL / DARK FIELD     75–90%
PAPER                    10–20%
BURNT RED                 1–5%
```

The exact ratio can change by scene.

### Burnt Red may appear in

- one registration line;
- an active word;
- a small cursor state;
- a transition residue;
- form focus;
- a key typographic interruption;
- a small image treatment;
- a single signature moment.

### Burnt Red should not become

- every button;
- every hover;
- every link;
- every divider;
- every icon;
- a large default gradient;
- the background of multiple consecutive sections.

Scarcity gives it authority.

---

## 9. Surface logic

The website should feel mostly like one continuous world.

Avoid:

```text
dark section
light section
dark section
light section
```

as a generic rhythm.

Preferred:

```text
MINERAL WORLD
        ↓
MINERAL WORLD
        ↓
MINERAL WORLD
        ↓
ONE MAJOR PAPER INTERRUPTION
        ↓
RETURN / EXIT
```

A surface inversion must feel like an event.

Not a component theme.

---

# TYPOGRAPHY

## 10. Typography philosophy

Typography is not decoration.

It is one of the primary physical materials of Noirum.

The site should use type to create:

- scale;
- interruption;
- silence;
- density;
- directional movement;
- visual hierarchy;
- recognition.

Noirum typography should feel editorial before it feels "UI."

---

## 11. Typeface roles

### Display / primary voice

**Initial recommendation:** `Instrument Sans`

Role:

- monumental NOIRUM;
- scene headlines;
- statements;
- large project titles;
- strong editorial text.

Why:

- contemporary grotesk;
- enough character to avoid pure system-font neutrality;
- capable of extreme scale;
- remains readable;
- flexible across grotesk and editorial layouts.

This choice is a starting point.

Before production lock, compare it visually against 2–3 alternatives.

Potential alternatives:

- Neue Montreal — commercial/license required;
- Suisse Intl — commercial/license required;
- ABC Diatype — commercial/license required;
- Helvetica Now / similar neo-grotesk — commercial;
- Archivo — open;
- Roboto Flex — open, only if deliberately tuned.

Do not switch fonts for novelty alone.

### Mono / metadata

**Initial recommendation:** `IBM Plex Mono`

Role:

- study IDs;
- coordinates;
- timestamps;
- metadata;
- technical microcopy;
- occasional system language.

Mono must remain a secondary voice.

Noirum is not a terminal aesthetic.

---

## 12. Typography scale

Use fluid type with `clamp()`.

Do not use a rigid SaaS type ladder.

Suggested categories:

```text
DISPLAY MAX      14–28vw depending on composition
DISPLAY          8–14vw
HEADLINE         4.5–8vw
TITLE            2.2–4.5rem
BODY LARGE       1.2–1.6rem
BODY             1rem–1.15rem
META             0.68–0.82rem
```

The exact values must respond to composition.

### Rule

Large type is allowed to:

- crop;
- overlap;
- cross image boundaries;
- enter/exit the viewport;
- create tension.

But essential words must remain understandable in the intended sequence.

Cropping is composition.

Illegibility is not.

---

## 13. Typography behavior

Approved behaviors:

- extreme scale contrast;
- tight display tracking;
- controlled line-height;
- large line breaks;
- partial viewport crop;
- text/image overlap;
- rare vertical text;
- text used as spatial structure;
- mono registration marks.

Avoid:

- outlining every headline;
- excessive uppercase everywhere;
- arbitrary letter-by-letter animation;
- endless marquee simply because it looks "creative";
- a different type treatment in every scene.

---

## 14. Typographic hierarchy example

```text
NOIRUM                         ← monumental identity
BUILT FOR THE AFTERIMAGE.      ← statement

STUDY.001                      ← metadata
PRESENÇA                       ← work title

BRAND WEBSITES                 ← practice
LANDING PAGES

DIRECTION → DESIGN →
DEVELOPMENT → DELIVERY         ← process

INDEPENDENT. BY DESIGN.        ← human / studio
```

Identity and work should receive the greatest scale.

Commercial explanation should receive less.

---

# COMPOSITION

## 15. Composition principle

**The unit of design is the scene, not the section.**

The DOM can use semantic sections.

The eye should experience:

```text
image
word
pause
movement
collision
silence
reveal
```

not:

```text
container
heading
paragraph
button
container
heading
paragraph
button
```

---

## 16. Grid

Use a flexible editorial grid.

Baseline desktop:

```text
12 columns
variable spans
wide outside margins
intentional empty columns
```

Do not visually expose all 12 columns.

The grid exists to create tension, not alignment uniformity.

### Mobile

Do not mechanically collapse the 12-column desktop grid.

Mobile is separately art-directed.

Preferred:

- one dominant axis;
- full-width type;
- cropped media;
- controlled overlaps;
- fewer simultaneous layers;
- strong vertical rhythm.

---

## 17. Asymmetry

Asymmetry is encouraged when it creates hierarchy.

Examples:

- visual weight concentrated in one corner;
- headline crossing only part of a media frame;
- large void opposite a dense object;
- project title appearing far from the image it names;
- metadata at edge positions.

Avoid asymmetry for novelty alone.

The composition must still feel inevitable.

---

## 18. Negative space

Empty space is active.

It may represent:

- pause;
- anticipation;
- hierarchy;
- isolation;
- transition;
- scale.

Do not "fix" intentional empty space with:

- copy;
- icons;
- labels;
- decorative particles;
- filler statistics;
- unnecessary CTAs.

---

# PHOTOGRAPHY & MEDIA

## 19. Photography philosophy

Noirum photography should not exist to literally illustrate a service.

Avoid:

```text
Development → computer
Security → server rack
Design → designer at desk
```

Images should create perception, texture, culture, and narrative.

The website text explains the offer.

The imagery creates desire and world.

---

## 20. Noirum visual territory

Preferred photographic/material territory:

- low-light editorial photography;
- direct flash;
- unusual crops;
- architecture when contextually meaningful;
- surfaces;
- glass;
- metal;
- paper;
- translucent material;
- physical print;
- scanner artifacts;
- optical reflections;
- human details;
- urban fragments;
- strange objects;
- imperfect reproduction;
- analog/digital collision.

The imagery should feel captured or constructed.

Not stock-generated.

---

## 21. Image character

Images may contain:

- grain;
- dust;
- fingerprints;
- scratches;
- overexposure;
- underexposure;
- flash hotspots;
- imperfect registration;
- physical edges;
- optical distortion;
- secondary exposure;
- scan lines when materially justified.

Avoid generic "AI cinematic" language:

- perfect dramatic fog;
- generic cyberpunk;
- random glowing architecture;
- purple/blue startup lighting;
- anonymous 3D chrome blobs without concept.

---

## 22. Photography and client work

Important:

Noirum's website has its own visual world.

Client projects do **not** need to inherit this world.

For client work:

> identity determines art direction.

Noirum's own photography system demonstrates taste.

It must not become a forced signature imposed on every client.

---

# MOTION

## 23. Motion thesis

**Motion is direction, not decoration.**

The site should not be described as "animated."

It should be described as **choreographed**.

Movement must contribute to at least one of:

- hierarchy;
- story;
- physicality;
- transformation;
- feedback;
- surprise;
- spatial relationship.

If it does none of these, remove it.

---

## 24. Motion stack expectation

The creative direction assumes:

```text
LENIS
  ↓
GSAP
  ↓
ScrollTrigger
  ↓
DOM / SVG / Media
```

CSS handles lightweight state changes.

WebGL is reserved for a signature scene only when the concept truly requires it.

**Important:** if `Architecture.md` still lists Lenis as non-baseline, update that document before implementation. This `DESIGN.md` now treats Lenis as part of the desired experience.

---

## 25. Scroll character

The scroll should feel:

- weighted;
- smooth;
- responsive;
- controlled;
- continuous.

Not:

- sluggish;
- floaty;
- delayed;
- detached from input;
- like scroll hijacking.

Lenis is not there to make the site "fancy."

It is there to make movement feel like one authored material.

---

## 26. Motion intensity

```text
IDENTITY            HIGH
VISUAL STUDIES      HIGH
PRACTICE            MEDIUM
STUDIO              LOW
CONTACT              LOW–MEDIUM
MICROINTERACTIONS   LOW
```

The experience needs peaks and silence.

If everything moves, nothing moves.

---

## 27. Easing character

Final easing values will be implemented/tested in GSAP.

Desired character:

- confident;
- slightly heavy;
- quick enough to feel responsive;
- deceleration with physical presence;
- not elastic;
- not playful by default;
- not generic `ease-out` everywhere.

Potential direction:

```text
sharp departure
controlled deceleration
minimal bounce
```

Use a small branded easing vocabulary.

Do not invent a new easing for every scene.

---

# AFTERIMAGE

## 28. Afterimage thesis

Afterimage is Noirum's most important motion metaphor.

It means:

> something remains for an instant after it has already moved on.

It is about memory.

Not glitch.

Not cyberpunk.

Not RGB distortion.

Not technological decoration.

---

## 29. Afterimage manifestations

### Type

A second register of the word remains briefly after motion.

```text
NOIRUM
   NOIRUM
```

The residual layer:

- is short-lived;
- may use Burnt Red, Paper, or a low-opacity tone;
- moves slightly differently;
- is decorative and `aria-hidden`.

### Media

A crop or frame may retain the previous position for a fraction of a second.

### Scroll

An object may leave a visual memory as the next scene takes over.

### Lines

A registration line may remain after the content it referenced has left.

### Transition

A previous scene may persist as a fragment inside the next scene.

---

## 30. Afterimage constraints

Never:

- continuous glitch;
- permanent RGB split;
- trail on every cursor movement;
- residue on every heading;
- multiple competing ghost layers;
- Afterimage applied only because the section feels empty.

Afterimage should appear enough to be recognized but not enough to become a gimmick.

---

# SCENE LANGUAGE

## 31. Homepage as scenes

Recommended experiential structure:

```text
SCENE 00 / ENTRY
SCENE 01 / IDENTITY
SCENE 02 / STUDY.001
SCENE 03 / STUDY.002
SCENE 04 / PRACTICE
SCENE 05 / STUDY.003
SCENE 06 / STUDIO / EXIT
```

These names are internal.

They do not need to appear to the visitor.

---

## 32. Scene 00 — Entry

Purpose:

- establish atmosphere immediately;
- avoid fake loading;
- make the first moment feel intentional.

Possible behavior:

```text
black/mineral field
N// or minimal mark
short temporal event
NOIRUM enters
```

Duration should be minimal.

Do not hold the visitor hostage for a "cool intro."

The page must become usable quickly.

---

## 33. Scene 01 — Identity

Primary objective:

**make Noirum unmistakable before explaining Noirum.**

Elements:

- monumental `NOIRUM`;
- `BUILT FOR THE AFTERIMAGE.`;
- minimal functional metadata;
- first visual collision;
- strong negative space.

Avoid classic split hero.

The first viewport should feel closer to a moving poster, cover, title sequence, or campaign page than a landing-page hero.

---

## 34. Scene 02 — STUDY.001

Working title:

**PRESENÇA**

Character:

- monumental;
- dominant;
- slower;
- visual confidence.

Media should become the main environment.

Text can be displaced from its expected caption position.

---

## 35. Scene 03 — STUDY.002

Working title:

**DECISÃO**

Character:

- tighter;
- directional;
- more abrupt;
- more focused.

The composition should not repeat STUDY.001.

Different study = different editorial behavior.

Same world, different rhythm.

---

## 36. Scene 04 — Practice

This is the main commercial clarification.

It should be brutally concise.

Preferred content:

```text
BRAND WEBSITES
LANDING PAGES

DIRECTION → DESIGN → DEVELOPMENT → DELIVERY
```

Possible supporting line:

> Direção, design e desenvolvimento para experiências digitais que precisam ser entendidas e lembradas.

The scene should communicate capability without turning into a services page.

No cards.

No icon grid.

No "why choose us."

No metrics without evidence.

---

## 37. Scene 05 — STUDY.003

Working title:

**BASE**

Character:

- structural;
- fragmented;
- technical;
- lower-frequency;
- denser.

It may contain the most visible collision between technical system and physical image.

Do not make it look like cybersecurity.

---

## 38. Scene 06 — Studio / Exit

The rhythm becomes quieter.

This is the human moment.

Preferred direction:

```text
INDEPENDENT.
BY DESIGN.

Luiz Meneses
Founder / Direction / Design / Development
Brazil — Worldwide
```

Then contact.

The visitor should feel that the person appears after the work has already spoken.

No corporate "About Us" block.

No fake team.

No forced founder story.

---

# INTERACTION

## 39. Interaction philosophy

Interactions should reward attention.

They should not require a user to discover hidden essential content.

Good:

- hover changes framing;
- cursor reveals a detail;
- image reacts subtly to pointer position;
- work title changes media behavior;
- a word retains Afterimage after movement;
- contact opens a dedicated layer.

Bad:

- content only available on hover;
- mystery navigation;
- scroll hijacking;
- interaction required to read basic information;
- hidden menu for aesthetic reasons on desktop.

---

## 40. Cursor

Do not default to a custom cursor.

Use one only if it has a conceptual purpose.

If implemented:

- it must be lightweight;
- preserve usability;
- disappear on touch;
- never obscure text;
- not leave a permanent particle trail.

Possible signature use:

- context label over visual study;
- small Burnt Red register;
- project action.

---

## 41. Navigation

Navigation should be minimal and calm.

Potential baseline:

```text
NOIRUM                    WORK   STUDIO   CONTACT
```

It should not compete with the composition.

Avoid:

- large nav mega menu;
- seven anchors;
- service taxonomy in the main header;
- persistent large CTA button.

A commercial action can be visible without looking like a SaaS CTA.

---

## 42. Project inquiry

The project inquiry should feel like entering a focused conversation.

Not filling out a corporate lead form.

Potential editorial prompts:

```text
01 / YOUR NAME
02 / CONTACT
03 / WHAT ARE WE BUILDING?
04 / TELL US ABOUT IT
```

Tone can be localized later.

Visually:

- fullscreen layer;
- clean;
- generous scale;
- no card container;
- minimal chrome;
- Burnt Red for controlled active/focus state.

Functionally:

- clear labels;
- keyboard safe;
- accessible;
- immediate error feedback;
- escape/close behavior;
- contact channels remain available outside the form.

---

# COPY

## 43. Language philosophy

Noirum should speak with:

- confidence;
- economy;
- curiosity;
- directness;
- cultural awareness.

Avoid:

- agency jargon;
- exaggerated luxury language;
- empty "innovation";
- "cutting-edge";
- "world-class";
- "elite digital";
- generic conversion promises;
- over-explaining.

---

## 44. Core questions

These questions express Noirum's perspective:

> **Como você gostaria de ser visto?**

> **Qual experiência sua marca quer passar?**

These can appear in:

- project onboarding;
- inquiry flow;
- campaign copy;
- studio manifesto;
- content.

They should not be overused until they lose weight.

---

## 45. Core message territory

Approved idea:

> **Você não precisa parecer conosco. Você precisa parecer você.**

Possible internal English equivalent:

> **You should look like you.**

The English version is a conceptual translation, not necessarily homepage copy.

---

## 46. English vs Portuguese

Use a rule, not random mixing.

Recommended strategy for Noirum's own site:

### English

Can be used for:

- identity statements;
- editorial labels;
- study nomenclature;
- short international-facing phrases.

Examples:

```text
BUILT FOR THE AFTERIMAGE.
INDEPENDENT. BY DESIGN.
STUDY.001
```

### Portuguese

Prefer for:

- explanations;
- business clarity;
- project onboarding;
- longer copy;
- contact instructions.

Actions must be immediately understandable.

Do not mix languages merely to make the brand feel "international."

---

# BRAND SYSTEM

## 47. Naming system

Keep one indexing logic.

Recommended:

```text
STUDY.001
STUDY.002
STUDY.003
```

Alternative:

```text
N//001
N//002
N//003
```

Do not mix:

```text
TRACE 02
N//003
BR-2026
SYSTEM 01
```

without semantic meaning.

Tech gibberish is not identity.

---

## 48. Logo / wordmark behavior

The Noirum wordmark should be given enough space to behave as a primary graphic element.

It can:

- scale beyond conventional logo proportions;
- crop;
- repeat once as a residue;
- interact with media;
- become a transition surface;
- appear as an endmark.

It should not:

- spin;
- glitch endlessly;
- turn into a loading gimmick;
- receive random 3D treatment.

---

## 49. Burnt Red as brand signal

Burnt Red should be treated similarly to a physical registration or proofing mark.

It can represent:

- active;
- trace;
- attention;
- friction;
- temporary memory;
- transition.

This is more meaningful than using it as "brand primary button color."

---

# SOUND

## 50. Sound policy

Sound is optional.

No autoplay audio.

If introduced later, it must be:

- user-initiated;
- muteable;
- contextual;
- minimal;
- part of a signature interaction.

Examples worth exploring only if justified:

- short tactile entry sound;
- transition texture;
- interaction feedback;
- project-specific audio.

Do not add ambient music simply to feel immersive.

---

# WEBGL / EXPERIMENTAL MEDIA

## 51. WebGL policy

WebGL is allowed only for **one signature scene** if the concept cannot be achieved convincingly with DOM/SVG/media.

Potential conceptual uses:

- temporal visual residue;
- a deforming media surface;
- optical persistence;
- one central Afterimage object;
- a scene that bridges image and motion.

Never add:

- generic particle field;
- floating blob;
- decorative 3D object;
- endless GPU animation;
- effect copied from an award site.

The goal is not:

> "Look, we know WebGL."

The goal is:

> "This interaction belongs to Noirum."

---

# RESPONSIVE ART DIRECTION

## 52. Mobile is not compressed desktop

Mobile must be separately composed.

Do not simply:

```text
desktop columns
→ stack vertically
```

Instead reconsider:

- crop;
- scale;
- reading order;
- motion intensity;
- touch behavior;
- image selection;
- negative space.

---

## 53. Mobile motion

Mobile should still feel Noirum.

But it can do so through:

- typography;
- pacing;
- image transitions;
- short Afterimage behavior;
- scene relationships.

Not through:

- excessive pinning;
- pointer effects;
- WebGL load;
- aggressive parallax;
- scroll lock.

---

## 54. Mobile image art direction

When necessary, use a separate crop or asset.

A visual designed around horizontal negative space may fail vertically.

It is acceptable to use:

```text
study-001-desktop.webp
study-001-mobile.webp
```

when the composition benefits.

This is art direction, not duplication.

---

# ACCESSIBILITY & EXPERIENCE

## 55. Accessibility is part of craft

Noirum should be experimental without becoming hostile.

The site must preserve:

- semantic readability;
- keyboard access;
- visible focus;
- sufficient contrast;
- screen-reader logic;
- reduced motion;
- reasonable touch targets;
- readable body copy.

Decorative residues are not semantic duplicates.

---

## 56. Reduced motion direction

Reduced motion should still feel designed.

It should retain:

- scale;
- typography;
- imagery;
- composition;
- color;
- hierarchy.

It can remove:

- temporal residues;
- parallax;
- spatial trails;
- pinned choreography;
- pointer response.

Reduced motion is a different state of the same design.

Not a broken version.

---

# PERFORMANCE AS ART DIRECTION

## 57. Heavy feel, light implementation

The Noirum website should feel visually expensive without behaving like a heavy application.

Desired equation:

```text
HEAVY FEEL
LIGHT IMPLEMENTATION
```

Prefer:

- transform;
- opacity;
- efficient clip/mask use;
- optimized image assets;
- short video only when meaningful;
- SVG;
- Lenis;
- GSAP;
- ScrollTrigger.

Limit:

- permanent GPU work;
- giant original AI images;
- repeated blur filters;
- excessive video;
- unused client JavaScript.

Performance is part of perceived quality.

---

# ANTI-PATTERNS

## 58. Never do this — visual

Avoid unless a real concept explicitly requires it:

- SaaS split hero;
- centered hero with eyebrow + title + paragraph + two buttons;
- three equal cards;
- logo cloud;
- glassmorphism;
- purple/blue AI gradient;
- neon cyberpunk;
- fake terminal;
- random hex codes;
- random coordinates;
- excessive pill components;
- rounded rectangles everywhere;
- card-based portfolio;
- dark/light alternating sections as default rhythm;
- generic abstract 3D blob;
- floating gradient orbs;
- huge "premium" copy with no point of view;
- technology stock photography.

---

## 59. Never do this — motion

Avoid:

- fade-up on every section;
- animation because scroll entered viewport;
- constant glitch;
- perpetual marquee without meaning;
- cursor particle trail;
- scroll hijacking;
- long fake loader;
- animation that prevents reading;
- identical reveal timing everywhere;
- overscrolling merely to extend spectacle.

---

## 60. Never do this — brand

Avoid defining Noirum as:

- "dark websites";
- "minimalist websites";
- "experimental websites";
- "cyber studio";
- "luxury digital agency";
- "AI agency";
- "premium websites for elite brands."

These are style/category traps.

Noirum is defined by **perspective and presence**.

---

# SIGNATURE MOMENTS

## 61. Signature Moment 01 — NOIRUM entry

Objective:

The visitor should know within seconds that this is not a generic studio template.

Potential ingredients:

- monumental wordmark;
- negative space;
- unexpected media collision;
- short Afterimage register;
- deliberate scroll reveal.

No fake loading sequence.

---

## 62. Signature Moment 02 — Visual Study transformation

One transition between studies should feel genuinely authored.

Not every transition needs to be spectacular.

Choose one moment where:

```text
image A
persists
fragments
becomes structural material
reveals image B
```

This may become the visual moment people remember/share.

---

## 63. Signature Moment 03 — Practice resolves

The commercial information appears after strong expression.

The visitor realizes:

> this is not just an art experiment — they build websites.

The reveal should be clear, almost blunt.

```text
BRAND WEBSITES
LANDING PAGES
```

The contrast between expressive experience and simple commercial clarity is intentional.

---

## 64. Signature Moment 04 — Human silence

After the visual intensity, the Studio moment should slow down.

No large trick required.

A strong image, name, role, and a few words can carry more weight after the previous scenes.

Silence is a signature behavior too.

---

# DESIGN REVIEW FRAMEWORK

## 65. Questions every scene must answer

Before approving a scene:

1. Does this feel authored or assembled?
2. What is the visual hierarchy in three seconds?
3. What would remain if we removed the effect?
4. Does motion improve meaning or just spectacle?
5. Is the image doing something text cannot?
6. Is there enough silence?
7. Is Burnt Red being earned?
8. Would this still work without JavaScript?
9. Does mobile feel intentional?
10. Does this look like Noirum because of perspective, or because of clichés?

---

## 66. Genericity test

Reject a composition if it could become a generic startup website by simply changing:

```text
logo
headline
colors
```

A strong Noirum composition should depend on:

- relationship between media and type;
- rhythm;
- specific content;
- visual hierarchy;
- motion concept;
- intentional silence.

---

## 67. Screenshot test

Take a screenshot with:

- logo hidden;
- nav hidden.

Ask:

> **Does this still have a point of view?**

If not, the design relies too heavily on branding labels.

---

## 68. No-effect test

Disable GSAP/Lenis motion.

Ask:

> **Is the static composition still strong?**

If no, motion is hiding weak design.

Animation should amplify strong composition.

Not rescue it.

---

# IMPLEMENTATION HANDOFF

## 69. Authority order

When implementation choices conflict, use:

```text
1. explicit user direction
2. DESIGN.md
3. Architecture.md
4. project content and real constraints
5. design/taste skill suggestions
6. Impeccable audit
7. generic framework conventions
```

No automated design tool has authority to rewrite this direction by itself.

---

## 70. Impeccable role

Impeccable should:

- audit;
- critique;
- identify inconsistencies;
- find accessibility/design issues;
- detect generic UI patterns;
- propose polish.

It should not decide:

- the Noirum palette;
- the core typography;
- the brand philosophy;
- the photographic universe;
- the site narrative;
- the signature interactions.

Use it as a sharp critic.

Not creative director.

---

## 71. Taste skill role

Taste-oriented skills are allowed to push compositions further when the output is becoming conservative.

They may challenge:

- predictable grids;
- generic landing structures;
- weak scale;
- excessive cards;
- safe motion;
- low visual variance.

They must remain subordinate to this document.

---

# INITIAL TOKEN DIRECTION

## 72. CSS starting point

```css
:root {
  /* Core color */
  --noirum-mineral: #505855;
  --noirum-paper: #e9efde;
  --noirum-burnt-red: #983122;

  --bg: var(--noirum-mineral);
  --fg: var(--noirum-paper);
  --bg-alt: var(--noirum-paper);
  --fg-alt: var(--noirum-mineral);
  --accent: var(--noirum-burnt-red);

  /* Typography — provisional until font test */
  --font-display: "Instrument Sans", sans-serif;
  --font-body: "Instrument Sans", sans-serif;
  --font-mono: "IBM Plex Mono", monospace;

  /* Layout */
  --page-gutter: clamp(1rem, 2.6vw, 3rem);

  /* Motion — actual GSAP eases are implementation-defined */
  --duration-fast: 180ms;
  --duration-base: 420ms;
  --duration-slow: 900ms;
}

@supports (color: color(display-p3 1 1 1)) {
  :root {
    --noirum-mineral: color(display-p3 0.32 0.345 0.334);
    --noirum-paper: color(display-p3 0.918 0.938 0.876);
    --noirum-burnt-red: color(display-p3 0.55 0.22 0.16);
  }
}
```

These are starting tokens.

Final contrast and rendering must be browser-tested.

---

# FINAL PRINCIPLES

## 73. Noirum in ten rules

1. **Perspective before style.**
2. **The website is the brand experience.**
3. **The work should speak before the sales copy does.**
4. **Motion is direction, not decoration.**
5. **A project may whisper or scream — identity decides.**
6. **Use fewer elements with greater intention.**
7. **Burnt Red is a signal, not a theme.**
8. **Afterimage means memory, not glitch.**
9. **Heavy feel, light implementation.**
10. **You do not need to look like Noirum. You need to look like you.**

---

## 74. The final test

The Noirum site is successful when a visitor can feel all three things:

> **I've never seen this exact website before.**

> **I understand what they do.**

> **I want to know what they would make for me.**

That is the target.

Not awards.

Not effects.

Not complexity.

**Presence.**
