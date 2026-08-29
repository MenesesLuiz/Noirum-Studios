# Noirum — Architecture

**Status:** approved technical + agent workflow architecture  
**Project:** Noirum Studios  
**Primary implementation agent:** GPT-5.6 Sol in Codex  
**Creative authority:** `DESIGN.md`  
**Operational authority:** this file + `AGENTS.md`

> **Architecture principle:** heavy feel, light implementation.
>
> **Agent principle:** one clear authority per problem.

---

# 1. Purpose

This document defines:

1. how the Noirum website is built;
2. how Codex analyzes, implements, audits, and validates it;
3. which skills/MCPs are authoritative, supportive, optional, or rejected.

The objective is not to install the largest toolchain possible. Every tool must own a clear responsibility.

---

# 2. Core website stack

```text
Next.js
React
TypeScript
CSS
Lenis
GSAP
ScrollTrigger
@gsap/react
next/image
```

Optional only when a real scene requires it:

```text
Three.js
React Three Fiber
GSAP Flip
GSAP CustomEase
WebGL / canvas
video
SVG-heavy interactive scenes
```

Not baseline:

```text
Framer Motion / Motion
Locomotive Scroll
Barba.js
multiple animation frameworks
permanent WebGL background
component-library-driven visual architecture
```

---

# 3. Rendering model

Use:

```text
React Server Components by default
            ↓
small Client Components only where required
```

A component becomes client-side only if it needs:

- GSAP;
- Lenis interaction state;
- browser APIs;
- DOM measurement;
- event handlers;
- project inquiry overlay;
- mobile menu state;
- pointer interaction.

Do not make the whole homepage `'use client'`.

---

# 4. Motion architecture

```text
Lenis
  ↓
GSAP
  ↓
ScrollTrigger
  ↓
DOM / SVG / Media
```

## Lenis

Role:

- smooth scrolling;
- consistent scroll feel;
- synchronization layer for scroll-driven storytelling;
- part of the Noirum brand experience.

Lenis must feel responsive, not floaty or detached from input.

## GSAP

Role:

- authored timelines;
- scene choreography;
- Afterimage timing;
- image/type relationships;
- project overlay transitions;
- signature interactions.

## ScrollTrigger

Role:

- connect scroll to scene progression;
- trigger local timelines;
- pin only when justified;
- coordinate editorial transformations.

## CSS

Role:

- hover;
- focus;
- active states;
- simple opacity/transform;
- color transitions;
- underline and lightweight feedback.

Use the lightest mechanism capable of producing the intended result:

```text
CSS
↓
GSAP
↓
ScrollTrigger
↓
specialized GSAP plugin
↓
WebGL / Three.js only if necessary
```

---

# 5. Scene-based homepage architecture

The homepage is not designed as a stack of landing-page sections.

Internal composition:

```text
SCENE 00 — ENTRY
SCENE 01 — IDENTITY
SCENE 02 — STUDY.001
SCENE 03 — STUDY.002
SCENE 04 — PRACTICE
SCENE 05 — STUDY.003
SCENE 06 — STUDIO / EXIT
```

These are implementation units, not visible numbered chapters.

Each scene owns:

- layout;
- responsive rules;
- animation lifecycle;
- media;
- reduced-motion state.

Do not create one global homepage timeline.

---

# 6. Suggested component structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── servicos/
│   ├── privacidade/
│   ├── termos/
│   └── seguranca/
│
├── components/
│   ├── home/
│   │   ├── entry-scene/
│   │   ├── identity-scene/
│   │   ├── visual-study/
│   │   ├── practice-scene/
│   │   └── studio-exit-scene/
│   │
│   ├── motion/
│   │   ├── lenis-provider.tsx
│   │   ├── gsap.client.ts
│   │   ├── afterimage-text.ts
│   │   ├── afterimage-media.ts
│   │   ├── editorial-reveal.ts
│   │   └── motion-preferences.ts
│   │
│   ├── navigation/
│   └── inquiry/
│       ├── project-inquiry-trigger.tsx
│       ├── project-inquiry-overlay.tsx
│       └── project-inquiry.module.css
│
├── content/
│   ├── visual-studies.ts
│   ├── services.ts
│   └── site.ts
│
├── lib/
│   ├── validation/
│   ├── analytics/
│   └── utils/
│
└── styles/
    ├── tokens.css
    └── utilities.css
```

Adapt to the existing repository. Do not rewrite the project only to match this diagram.

---

# 7. GSAP implementation rules

Use `@gsap/react` and `useGSAP()`.

Requirements:

- scope animations to local refs;
- automatic cleanup;
- no orphaned ScrollTriggers;
- no document-wide selectors unless genuinely global;
- separate timelines per scene;
- use `gsap.matchMedia()` for responsive variants;
- explicit reduced-motion path.

Prefer:

```text
transform
opacity
clip-path when justified
SVG properties
```

Avoid continuous animation of:

```text
blur
filter
large box-shadow
top
left
width
height
layout-affecting properties
```

---

# 8. Lenis rules

Lenis is baseline.

Use it for:

- consistent scroll feel;
- continuity between scenes;
- synchronization with ScrollTrigger.

Do not use it for:

- scroll hijacking;
- long forced cinematic sequences;
- artificial input delay;
- touch behavior that feels detached.

Mobile may use lighter tuning.

Reduced-motion should neutralize non-essential smoothing if testing shows it improves comfort.

---

# 9. WebGL / Three.js policy

WebGL is allowed only for a **signature scene**.

Valid rationale:

> The concept cannot be executed convincingly with DOM, CSS, SVG, image, or video.

Potential valid uses:

- temporal residue;
- optical media deformation;
- one Afterimage object;
- media transformation impossible with DOM alone;
- one authored transition scene.

Invalid uses:

- particles because award sites use particles;
- floating blob;
- decorative 3D logo;
- permanent canvas background;
- generic distortion;
- expensive effect with no narrative function.

If used:

- dynamic import;
- static fallback;
- reduced-motion fallback;
- mobile fallback when required;
- profile GPU/CPU cost;
- do not block core content.

---

# 10. Media architecture

Use `next/image` by default.

Requirements:

- correct `sizes`;
- stable dimensions/aspect ratio;
- preload only the actual LCP image;
- lazy-load below fold;
- WebP/AVIF where practical;
- mobile-specific art direction when composition materially differs.

Allowed:

```text
study-001-desktop.webp
study-001-mobile.webp
```

Video:

- muted;
- inline;
- compressed;
- poster required;
- lazy-loaded unless essential above fold;
- static fallback for reduced motion.

Do not ship raw AI-generation masters directly to production.

---

# 11. Styling architecture

Use:

```text
CSS Custom Properties
CSS Modules
globals.css
```

Do not introduce a utility framework only because it is common.

Do not let a component library dictate Noirum's composition.

`DESIGN.md` defines visual tokens.

---

# 12. Project inquiry architecture

The main project form is a fullscreen interaction layer.

```text
START A PROJECT
      ↓
fullscreen dialog
      ↓
01 / name
02 / contact
03 / project
04 / context
```

Requirements:

- accessible dialog;
- focus moves inside on open;
- Escape closes;
- focus returns to trigger;
- body scroll lock;
- inline validation;
- WhatsApp/email remain independently accessible.

Do not render a permanent B2B form card on the homepage.

---

# 13. Accessibility baseline

Release requirements:

- semantic landmarks;
- one meaningful `h1`;
- logical headings;
- keyboard operation;
- visible focus;
- meaningful alt text;
- accessible dialog semantics;
- no hover-only essential content;
- reduced-motion mode;
- sufficient contrast;
- suitable touch targets.

Decorative Afterimage duplicates must be hidden from assistive technology.

---

# 14. Performance baseline

Performance is a design constraint.

Rules:

- Server Components by default;
- no homepage-wide client wrapper;
- one main animation ecosystem;
- no permanent WebGL;
- optimized images;
- lazy loading;
- dynamic import for expensive interaction layers;
- minimal third-party scripts;
- no large component library for a few primitives.

Internal objective:

```text
HEAVY FEEL
LIGHT IMPLEMENTATION
```

If an effect is expensive but barely noticeable, remove it.

---

# 15. Primary Codex environment

```text
GPT-5.6 Sol / Codex
        ↓
AGENTS.md
        ↓
Architecture.md
        ↓
DESIGN.md
        ↓
implementation
        ↓
browser inspection
        ↓
code analysis
        ↓
design audit
        ↓
final QA
```

---

# 16. Authority model

## Level 1 — Explicit user direction

Highest authority, unless it creates an objective technical/security/accessibility blocker.

## Level 2 — `DESIGN.md`

Authority for:

- brand philosophy;
- visual direction;
- palette;
- typography;
- image system;
- motion language;
- composition;
- responsive art direction;
- anti-patterns;
- copy tone.

## Level 3 — `Architecture.md`

Authority for:

- stack;
- rendering model;
- dependency policy;
- animation architecture;
- performance;
- accessibility;
- component boundaries;
- QA process.

## Level 4 — Tools

Tools critique, inspect, verify, and recommend. They do not redefine the brand or architecture.

---

# 17. Creative-direction tools

## `gpt-taste`

**Type:** skill  
**Status:** enabled  
**Role:** anti-generic design pressure

Use for:

- challenging safe layouts;
- detecting generic AI patterns;
- pushing composition;
- increasing visual variance when appropriate;
- preventing default card/grid/SaaS solutions.

Use primarily:

```text
before implementation
during composition review
when the result becomes too conservative
```

It is subordinate to `DESIGN.md`, `Architecture.md`, and user direction.

---

## Impeccable

**Type:** skill / design QA  
**Status:** enabled  
**Role:** critique and polish

Use for:

- visual audit;
- typography consistency;
- spacing;
- hierarchy;
- responsiveness;
- generic UI detection;
- accessibility-oriented design review;
- polish pass.

Useful behaviors:

```text
audit
critique
polish
bolder
quieter
```

Impeccable is a critic, not the creative director.

Use primarily:

```text
after a complete scene exists
after first full-page implementation
before final QA
```

---


# 18. Implementation-discipline tool

## Ponytail

**Type:** implementation discipline skill  
**Status:** enabled  
**Mode:** `full`  
**Role:** prevent accidental complexity and overengineering

Ponytail acts as a simplicity constraint during implementation.

Its default decision order is:

```text
1. use platform / browser capabilities
2. reuse what the project already has
3. implement the smallest clear solution
4. add a new dependency only when justified
```

Use Ponytail for:

- YAGNI pressure;
- avoiding unnecessary abstractions;
- avoiding redundant dependencies;
- simplifying overengineered component structures;
- preferring native/platform capabilities where appropriate;
- repo-level overengineering review;
- debt/complexity audit.

Useful review modes include:

```text
ponytail-review
ponytail-audit
```

### Constraint

Ponytail must reduce **accidental complexity**, not intentional creative complexity.

It must not remove or weaken a behavior explicitly required by `DESIGN.md` merely because a simpler visual implementation exists.

Example:

```text
If DESIGN.md requires a choreographed Lenis + ScrollTrigger transition,
Ponytail may simplify its implementation,
but it may not replace the intended interaction with a generic fade because it is easier.
```

### Authority

Ponytail is subordinate to:

```text
explicit user direction
DESIGN.md
Architecture.md
```

It complements the other tools:

```text
gpt-taste      → Is this too generic?
Ponytail       → Is this unnecessarily complex?
React Doctor   → Is this React implementation unhealthy?
React Scan     → Is runtime rendering inefficient?
Impeccable     → Is the finished interface poorly refined?
```

Use primarily:

```text
during implementation
before adding dependencies
after a feature begins accumulating abstractions
before final code-quality review
```

---

# 19. Code-quality tools

## React Doctor

**Type:** code analysis skill/tool  
**Status:** enabled  
**Role:** React health

Use for:

- correctness;
- React anti-patterns;
- performance issues;
- accessibility issues;
- maintainability;
- suspicious implementation choices.

Run:

```text
after major component work
before merge
before production
```

React Doctor is a primary release gate.

---

## React Scan

**Type:** runtime diagnostic  
**Status:** enabled when needed  
**Role:** re-render visualization and React runtime performance

Use for:

- unnecessary rerenders;
- interaction performance;
- animation-related React churn;
- component update debugging.

Do not run permanently.

GSAP should animate DOM without forcing React renders.

---

# 20. Browser MCPs

## Playwright MCP

**Type:** MCP  
**Status:** enabled  
**Role:** real-browser behavior + automated QA

Use for:

- desktop/mobile screenshots;
- navigation;
- responsive behavior;
- project inquiry overlay;
- form validation;
- keyboard flow;
- reduced-motion testing;
- route testing;
- regression scenarios;
- interaction sequences.

Playwright answers:

> **Does the experience actually work?**

Required before release.

---

## Chrome DevTools MCP

**Type:** MCP  
**Status:** enabled  
**Role:** deep browser diagnosis

Use for:

- DOM inspection;
- computed CSS;
- layout;
- console;
- network;
- performance profiles;
- memory sanity;
- layout shifts;
- animation frame cost;
- runtime bottlenecks.

Chrome DevTools answers:

> **Why does the browser behave this way?**

Use it when Playwright reveals a symptom requiring deeper diagnosis.

---

# 21. Documentation MCP

## Context7

**Type:** MCP / documentation retrieval  
**Status:** enabled  
**Role:** current dependency documentation

Use for current APIs/patterns involving:

- Next.js;
- React;
- GSAP;
- Lenis;
- Three.js;
- React Three Fiber;
- any unfamiliar project dependency.

Rule:

> Do not invent version-sensitive APIs from memory when Context7 can verify them.

Especially important before new integrations.

---

# 22. Accessibility + performance QA

## `@axe-core/playwright`

**Type:** test dependency  
**Status:** enabled  
**Role:** automated accessibility checks inside Playwright

Supports, but does not replace:

- keyboard review;
- focus review;
- reduced-motion review;
- manual semantic review.

---

## Lighthouse CI

**Type:** QA / CI tool  
**Status:** enabled  
**Role:** regression detection

Use for:

- performance;
- accessibility signal;
- SEO;
- best-practice regressions.

Lighthouse is not a design judge.

Do not destroy deliberate art direction only to maximize a score unless there is objective user impact.

---

# 23. Optional primitive source

## 21st.dev

**Type:** MCP / component source  
**Status:** optional and restricted  
**Role:** low-level primitives only

Allowed:

- accessible dialog reference;
- menu primitive;
- form primitive;
- small UI building block.

Forbidden:

- defining homepage layout;
- choosing Noirum art direction;
- generating generic hero;
- building the homepage from templates;
- replacing authored composition.

Rule:

```text
21st.dev may solve primitives.
It may not design Noirum.
```

Do not install/use unless a concrete need appears.

---

# 24. Explicitly discarded from baseline

## Repomix / repomix-rs

Not required for normal Codex work because Codex operates directly inside the repository.

Possible future use:

- portable repo snapshots;
- sending a codebase to an external model;
- archival/context packaging.

Not part of the default workflow.

---

# 25. Tools we intentionally do not stack

Avoid baseline duplication:

```text
GSAP + Framer Motion
Lenis + Locomotive Scroll
multiple design skills with equal authority
multiple browser automation frameworks
multiple component generators
multiple global state libraries
```

One clear tool per responsibility is preferable.

---

# 26. Security-analysis layer

Security must be checked without turning the project into a security-tool showcase.

Baseline review:

```text
dependency audit
secret exposure check
headers/config review
form/input validation
external-link review
third-party script review
Next.js deployment configuration review
```

A dedicated security scanner may be added later only if it has a clear responsibility not already covered by the stack.

---

# 27. Agent workflow for a major feature

```text
1. READ
   ├── AGENTS.md
   ├── Architecture.md
   └── DESIGN.md

2. INSPECT
   ├── existing implementation
   ├── assets
   └── related components

3. RESEARCH WHEN NEEDED
   └── Context7

4. DESIGN PRESSURE
   └── gpt-taste

5. SIMPLICITY CHECK
   └── Ponytail
       ├── reuse existing capabilities
       ├── challenge unnecessary abstractions
       └── reject unjustified dependencies

7. IMPLEMENT
   ├── server-first
   ├── CSS
   ├── Lenis
   ├── GSAP
   └── ScrollTrigger

7. RUN
   └── local production-like environment

8. BROWSER QA
   ├── Playwright MCP
   └── Chrome DevTools MCP

9. CODE QA
   ├── TypeScript
   ├── lint
   ├── React Doctor
   └── React Scan if performance is suspicious

10. DESIGN QA
   └── Impeccable

11. ACCESSIBILITY
   ├── axe + Playwright
   ├── keyboard
   └── reduced motion

12. PERFORMANCE
   ├── Lighthouse CI
   └── DevTools profile

13. REFINE

14. FINAL QA
```

Do not begin with Impeccable or a component generator before understanding the scene.

---

# 28. Homepage iteration workflow

```text
DESIGN INTENT
     ↓
static composition
     ↓
responsive composition
     ↓
motion concept
     ↓
implementation
     ↓
Playwright screenshots
     ↓
human visual review
     ↓
Impeccable critique
     ↓
DevTools performance check
     ↓
React Doctor
     ↓
final polish
```

Important:

> Motion is added after the static composition is strong enough to stand without it.

---

# 29. Screenshot protocol

Minimum viewport set:

```text
1440 × 900
1280 × 900
768 × 900
390 × 844
390 × 844 reduced motion
```

Inspect separately:

- Entry / Identity;
- every Visual Study;
- Practice;
- Studio / Exit;
- project inquiry overlay.

Do not judge the full site from one giant lazy-loaded headless screenshot.

---

# 30. Performance profiling protocol

When animation becomes complex:

1. profile in Chrome DevTools;
2. inspect main-thread work;
3. inspect long tasks;
4. inspect layout/recalculate-style cost;
5. inspect dropped frames;
6. inspect image decode/load;
7. verify React is not rerendering during GSAP-only motion;
8. use React Scan if suspicious;
9. simplify expensive effects that do not justify their cost.

---

# 31. Design QA protocol

Ask Impeccable to review:

```text
genericity
hierarchy
spacing
typography
consistency
visual rhythm
interaction clarity
responsive quality
accessibility
over-design
under-design
```

Then compare recommendations against `DESIGN.md`.

Do not blindly accept all findings.

A deliberate irregularity is allowed.
An accidental irregularity is not.

---

# 32. Genericity gate

Before release ask:

> Could this page become another company by changing only logo, text, and colors?

If yes, reject the composition.

Warning signs:

- standard split hero;
- 3-card features;
- centered CTA block;
- repeated pills;
- predictable grid;
- generic gradients;
- standard portfolio cards;
- motion only as fade-up;
- component-library identity.

Use `gpt-taste` and Impeccable to challenge this.

---

# 33. Performance gate

The site must satisfy:

```text
HEAVY FEEL
LIGHT IMPLEMENTATION
```

Reject:

- high idle-cost effects;
- oversized media;
- unnecessary client code;
- multiple animation frameworks;
- effects that materially hurt interaction;
- desktop spectacle shipped unchanged to mobile.

---

# 34. Accessibility gate

Reject release if:

- keyboard navigation breaks;
- dialog focus behavior is wrong;
- content depends on hover;
- reduced motion loses content;
- contrast causes unreadable text;
- motion creates inaccessible interaction;
- mobile targets are too small.

Experimental does not mean hostile.

---

# 35. Dependency policy

Before installing anything, ask:

> What unique responsibility will this dependency own?

If the answer is unclear, do not install it.

Every dependency must map to a responsibility in this architecture.

---

# 36. Final approved tool map

```text
CREATIVE DIRECTION
├── DESIGN.md
├── gpt-taste
└── human review

DESIGN QA
└── Impeccable

IMPLEMENTATION DISCIPLINE
└── Ponytail (`full`)

IMPLEMENTATION
├── Next.js
├── React
├── TypeScript
├── CSS
├── Lenis
├── GSAP
├── ScrollTrigger
└── @gsap/react

OPTIONAL EXPERIMENTAL
├── Three.js
├── React Three Fiber
└── specialized GSAP plugins

CODE QUALITY
├── TypeScript
├── lint
├── React Doctor
└── React Scan

BROWSER
├── Playwright MCP
└── Chrome DevTools MCP

DOCUMENTATION
└── Context7

ACCESSIBILITY
└── @axe-core/playwright

PERFORMANCE
└── Lighthouse CI

OPTIONAL PRIMITIVES
└── 21st.dev

NOT BASELINE
├── Repomix
├── Framer Motion
├── Locomotive Scroll
├── Barba.js
└── permanent WebGL/canvas
```

---

# 37. Final authority hierarchy

```text
USER DIRECTION
      ↓
DESIGN.md
      ↓
Architecture.md
      ↓
AGENTS.md operational rules
      ↓
Codex judgment
      ↓
gpt-taste suggestions
      ↓
Ponytail simplicity constraint
      ↓
implementation
      ↓
Playwright / DevTools evidence
      ↓
React Doctor / React Scan
      ↓
Impeccable critique
      ↓
axe / Lighthouse
      ↓
human approval
```

Tool findings are evidence. They are not automatically truth.

---

# 38. Definition of done

A Noirum implementation is complete only when:

- it respects `DESIGN.md`;
- it respects this architecture;
- the static composition is strong without motion;
- Lenis feels smooth but responsive;
- GSAP motion is purposeful;
- mobile is independently art-directed;
- reduced motion is complete;
- Ponytail review has not identified unjustified complexity or dependency growth;
- React Doctor has no unresolved critical issues;
- Playwright core flows pass;
- browser console is clean;
- no objective overflow/layout issue remains;
- accessibility checks pass;
- Lighthouse/DevTools reveal no unacceptable performance regression;
- Impeccable has been reviewed;
- genericity has been challenged;
- the user approves the visual result.

---

# 39. Next operational document

Create or update `AGENTS.md` after this file.

`AGENTS.md` should be significantly shorter.

It should tell Codex:

- which documents to read first;
- which tools to use for each task;
- when not to install dependencies;
- when to visually inspect instead of continuing to code;
- the required QA order;
- that `DESIGN.md` and `Architecture.md` are authoritative.

`Architecture.md` defines the system.  
`DESIGN.md` defines the world.  
`AGENTS.md` tells the agent how to work inside both.
