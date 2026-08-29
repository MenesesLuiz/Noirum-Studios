# Noirum — AGENTS.md

**Primary agent:** GPT-5.6 Sol in Codex  
**Branch strategy:** work directly on `main`  
**Creative authority:** `DESIGN.md`  
**Technical authority:** `Architecture.md`

> **You are the implementation agent.**
>
> The user is the final visual validator.
>
> ChatGPT in the browser acts as creative director and context director.

---

# 1. Read before touching code

Before making any meaningful change:

1. Read `DESIGN.md` completely.
2. Read `Architecture.md` completely.
3. Inspect the current repository structure.
4. Inspect existing dependencies.
5. Run the current site.
6. Understand the current visual state before proposing changes.

Do not begin by rewriting the homepage.

Do not begin by installing dependencies.

Do not assume generic web conventions are appropriate for Noirum.

---

# 2. Authority order

When decisions conflict, follow this order:

```text
1. Explicit user direction
2. DESIGN.md
3. Architecture.md
4. Existing project constraints
5. Codex engineering judgment
6. gpt-taste suggestions
7. Ponytail simplicity pressure
8. Impeccable critique
9. Generic framework conventions
```

Tools provide evidence and suggestions.

They do not automatically override the design direction.

---

# 3. Roles

## User

The user is the final visual owner.

The user decides:

- this feels like Noirum;
- this feels generic;
- this is too corporate;
- this is too safe;
- this is too much;
- this image works;
- this interaction works;
- this version is approved.

Do not argue aesthetic preference from generic best practices.

Convert aesthetic feedback into implementation decisions.

---

## ChatGPT in browser

Acts as:

- creative director;
- context keeper;
- design strategist;
- prompt director;
- architecture reviewer.

When the user returns with screenshots, feedback, or Codex output, ChatGPT may provide the next implementation direction.

Do not independently redefine the creative direction if the user intends to bring the result back to ChatGPT for review.

---

## Codex

Acts as:

- creative engineer;
- frontend implementer;
- browser QA operator;
- code-quality operator;
- performance operator.

Codex builds.

Codex tests.

Codex proposes technical solutions.

Codex does **not** become the final creative authority.

---

# 4. Branch policy

The project is developed directly on:

```text
main
```

Do not create a redesign branch unless explicitly requested.

Because work happens on `main`, commit discipline is mandatory.

---

# 5. Commit discipline

Never accumulate a giant unreviewable change.

Prefer small, conceptual commits.

Examples:

```text
feat(identity): rebuild Noirum entry scene

feat(study): add STUDY.001 composition

feat(motion): add afterimage identity transition

feat(practice): rebuild practice interlude

feat(studio): integrate studio and exit experience

feat(inquiry): add fullscreen project inquiry

perf(media): optimize visual study assets

fix(a11y): improve reduced-motion behavior
```

Avoid commits like:

```text
update site
fix stuff
redesign
changes
final
```

Before a major visual experiment, ensure the current state is committed.

This makes rollback on `main` practical.

---

# 6. Never do a giant blind redesign

Do not receive `DESIGN.md` and immediately rebuild the entire homepage.

The project should evolve through visual checkpoints.

Recommended sequence:

```text
V0 — CURRENT
V1 — ENTRY + IDENTITY
V2 — VISUAL STUDIES
V3 — PRACTICE
V4 — STUDIO / EXIT
V5 — FULL MOTION
V6 — POLISH
V7 — PRODUCTION QA
```

Each checkpoint should be runnable and reviewable.

---

# 7. First task: baseline audit

Before the first redesign change, perform a baseline audit.

Do not change code during this audit unless required only to run the project.

Inspect:

- Next.js version;
- React version;
- TypeScript config;
- styling architecture;
- current GSAP / motion libraries;
- existing assets;
- current routes;
- current homepage structure;
- service routes;
- legal routes;
- mobile behavior;
- accessibility baseline;
- performance baseline;
- dependency health;
- current reusable components;
- dead code;
- obsolete components;
- existing animation logic.

Use:

```text
Playwright MCP
Chrome DevTools MCP
React Doctor
Context7 when version-sensitive documentation is needed
```

Return a concise migration report before implementation.

The report should contain:

```text
KEEP
REMOVE
REFACTOR
REBUILD
DEPENDENCY CHANGES
PERFORMANCE RISKS
ACCESSIBILITY RISKS
MIGRATION ORDER
```

---

# 8. Scene workflow

For each major scene:

```text
1. Understand the scene goal
2. Inspect existing implementation
3. Build static composition first
4. Validate desktop
5. Validate mobile
6. Add motion
7. Validate reduced motion
8. Capture screenshots
9. Run browser QA
10. Run code QA
11. Present evidence for visual review
12. Refine only after feedback
```

Do not add sophisticated motion to weak static composition.

---

# 9. Static-first rule

Before adding GSAP:

Ask:

> Does this composition work as a still image?

If the answer is no:

do not animate it yet.

Motion should amplify strong composition.

It must not rescue generic layout.

---

# 10. Core implementation stack

Use the approved stack:

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

Do not introduce another overlapping animation system.

---

# 11. Motion tool responsibilities

## CSS

Use for:

- hover color;
- simple focus;
- simple opacity;
- simple transform;
- underline;
- basic button feedback.

## Lenis

Use for:

- smooth scroll;
- scroll feel;
- continuous motion character.

Do not over-smooth until the site feels detached from input.

## GSAP

Use for:

- authored timelines;
- scene choreography;
- Afterimage timing;
- image/type relationships;
- project inquiry transitions.

## ScrollTrigger

Use for:

- scroll-linked progression;
- scene triggers;
- justified pinning;
- editorial transformations.

## Three.js / React Three Fiber

Optional only.

Use only for a signature scene when DOM/CSS/SVG/media cannot achieve the concept convincingly.

Do not add WebGL merely to make the site feel "Awwwards".

---

# 12. Motion principles

Motion is direction, not decoration.

Avoid:

- fade-up on every section;
- continuous glitch;
- permanent particle effects;
- random parallax;
- scroll hijacking;
- long fake loaders;
- identical reveals everywhere;
- animation that blocks reading.

Each important animation should answer:

```text
What does this movement communicate?
```

If there is no answer, simplify or remove it.

---

# 13. Afterimage rule

Afterimage means:

> visual memory that persists briefly after movement.

It does not mean:

```text
cyberpunk
RGB glitch
constant distortion
cursor trail
tech decoration
```

Use Afterimage selectively.

Potential manifestations:

- residual text register;
- displaced media memory;
- previous scene fragment;
- temporary registration line.

Decorative duplicate elements must be inaccessible to screen readers.

---

# 14. Creative-direction tools

## gpt-taste

Purpose:

```text
Is this becoming too generic?
```

Use when:

- composition is too safe;
- layout looks like a standard landing page;
- card/grid patterns are creeping in;
- visual variance is too low.

It may push the design.

It may not override `DESIGN.md`.

---

## Ponytail

Mode:

```text
full
```

Purpose:

```text
Is this unnecessarily complex?
```

Use before:

- adding a dependency;
- introducing abstraction;
- adding a custom system;
- creating a complicated component architecture.

Decision order:

```text
1. native platform capability
2. existing dependency
3. smallest clear implementation
4. new dependency only if justified
```

Ponytail must reduce accidental complexity.

It must **not** remove intentional creative complexity required by `DESIGN.md`.

---

## Impeccable

Purpose:

```text
Is the finished result refined enough?
```

Use after meaningful implementation exists.

Use for:

- critique;
- audit;
- polish;
- hierarchy;
- spacing;
- typography;
- genericity;
- responsive quality.

Do not use Impeccable as the initial creative director.

Do not let it rewrite the Noirum identity.

---

# 15. Code-quality tools

## React Doctor

Required after substantial React work.

Use for:

- correctness;
- performance issues;
- anti-patterns;
- maintainability;
- accessibility;
- suspicious React structure.

Do not ignore critical findings without documenting why.

---

## React Scan

Use when needed.

Use for:

- unnecessary rerenders;
- runtime React churn;
- animation-related rendering problems.

React Scan is diagnostic.

Do not ship it as production behavior.

GSAP should not force React state updates every frame.

---

# 16. Browser tools

## Playwright MCP

Use for:

- screenshots;
- responsive validation;
- navigation;
- project inquiry flow;
- form validation;
- keyboard behavior;
- reduced-motion testing;
- route regression.

Playwright answers:

> Does it work?

---

## Chrome DevTools MCP

Use for:

- DOM;
- CSS;
- computed layout;
- console;
- network;
- performance profiling;
- memory sanity;
- layout shift;
- frame cost.

Chrome DevTools answers:

> Why is it behaving this way?

---

# 17. Context7

Use Context7 for current documentation.

Especially before implementing or changing:

- Next.js APIs;
- React APIs;
- GSAP;
- ScrollTrigger;
- Lenis;
- Three.js;
- React Three Fiber;
- unfamiliar dependencies.

Do not invent version-sensitive APIs from memory.

---

# 18. 21st.dev

Optional.

Not baseline.

Allowed only for low-level primitives when genuinely useful.

Examples:

- accessible dialog reference;
- menu primitive;
- form primitive.

Do not use 21st.dev to:

- generate the homepage;
- choose the layout;
- choose the art direction;
- generate a generic hero;
- determine Noirum's visual grammar.

Rule:

```text
21st.dev may solve primitives.
It may not design Noirum.
```

---

# 19. Repomix

Not baseline.

Codex already operates directly in the repository.

Use only if a portable repository snapshot is explicitly useful.

Do not add it to the normal workflow.

---

# 20. Dependency rule

Before installing anything:

Answer:

```text
What unique responsibility will this dependency own?
```

If the answer overlaps with something already installed:

do not install it.

Avoid:

```text
GSAP + Framer Motion
Lenis + Locomotive Scroll
multiple design systems
multiple component generators
multiple browser automation stacks
```

---

# 21. Design composition rules

The homepage is a sequence of scenes.

Do not regress to:

```text
hero
services
three cards
portfolio grid
about
CTA block
footer
```

Do not visually expose the page as a stack of generic rectangular sections.

The visual unit is:

```text
image
word
space
movement
collision
pause
transition
```

---

# 22. Noirum genericity gate

Reject a composition if it could become another company's website by changing only:

```text
logo
copy
colors
```

Warning signs:

- split hero;
- centered hero;
- three equal cards;
- gradient SaaS language;
- standard portfolio cards;
- pill overload;
- "premium" agency visual clichés;
- fade-up as the main motion language.

Before approval, ask:

> Does this have a perspective?

---

# 23. Screenshot test

For major visual checkpoints, capture at minimum:

```text
1440 × 900
1280 × 900
768 × 900
390 × 844
390 × 844 reduced motion
```

Capture each major scene after real scrolling.

Do not rely only on one giant headless full-page capture when lazy-loaded media is involved.

---

# 24. Visual-review handoff

When a checkpoint is ready, provide:

1. what changed;
2. screenshots;
3. desktop/mobile notes;
4. any deliberate deviations from `DESIGN.md`;
5. known issues;
6. performance/accessibility concerns;
7. what still needs visual approval.

Do not automatically continue into the next major scene if the current one requires visual validation.

The user will validate visually.

---

# 25. QA order

After implementation:

```text
1. Playwright
2. Chrome DevTools
3. TypeScript / lint
4. React Doctor
5. React Scan if needed
6. Ponytail review
7. Impeccable
8. axe
9. Lighthouse
10. final visual review
```

Do not waste time polishing with Impeccable before the composition is approved.

---

# 26. Accessibility

Experimental does not mean hostile.

Required:

- keyboard navigation;
- visible focus;
- semantic structure;
- accessible dialogs;
- alt text;
- no hover-only essential information;
- reduced motion;
- readable contrast;
- touch-friendly controls.

Use:

```text
@axe-core/playwright
manual keyboard pass
reduced-motion pass
```

Decorative Afterimage copies must be hidden from assistive technology.

---

# 27. Reduced motion

Reduced motion is a designed state.

It should preserve:

- typography;
- imagery;
- hierarchy;
- content;
- color;
- composition.

It may remove:

- trails;
- parallax;
- residual movement;
- pinned choreography;
- pointer motion.

Do not let reduced motion become a broken or empty page.

---

# 28. Performance

Target:

```text
HEAVY FEEL
LIGHT IMPLEMENTATION
```

Avoid:

- unnecessary client JS;
- giant images;
- permanent GPU loops;
- expensive blur/filter animation;
- unused dependencies;
- desktop spectacle shipped unchanged to mobile.

When a motion scene becomes complex:

1. profile it in DevTools;
2. inspect long tasks;
3. inspect layout/recalculate style;
4. inspect dropped frames;
5. inspect image decode/load;
6. inspect React rerenders;
7. simplify if the effect does not justify the cost.

---

# 29. Security baseline

At minimum review:

- dependency vulnerabilities;
- accidental secrets;
- external scripts;
- form validation;
- external links;
- headers/config;
- deployment configuration.

Do not add a security scanner just to have another scanner.

A new security tool must own a clear responsibility.

---

# 30. Main-branch safety

Because development happens on `main`:

Before a risky change:

```text
git status
git diff
git log -n 5 --oneline
```

Ensure the previous stable state is committed.

After a successful checkpoint:

commit it.

Do not leave days of experimental work uncommitted.

If an experiment fails:

prefer clean rollback/revert over layering fixes on top of a bad direction.

---

# 31. Do not rewrite unrelated areas

When implementing a scene:

do not refactor unrelated service pages, legal pages, or shared systems unless required.

Preserve:

- service routes;
- legal routes;
- real contact information;
- SEO content;
- accessibility behavior;
- working business logic.

A homepage redesign is not permission for repository-wide churn.

---

# 32. Preserve truth

Never invent:

- clients;
- awards;
- metrics;
- testimonials;
- team members;
- case-study outcomes;
- performance claims;
- business results.

Visual Studies must remain honestly labeled when they are conceptual.

---

# 33. Stop conditions

Stop and report before proceeding when:

- implementation requires a major architecture change;
- a new heavy dependency seems necessary;
- WebGL becomes necessary;
- the current art direction conflicts with `DESIGN.md`;
- a visual checkpoint requires user validation;
- a critical accessibility problem conflicts with the proposed interaction;
- performance becomes materially unacceptable;
- a change would destroy existing real business functionality.

Do not silently make a major creative or architectural decision.

---

# 34. First implementation milestone

After the baseline audit is reviewed, the first implementation target is:

```text
SCENE 00 — ENTRY
SCENE 01 — IDENTITY
```

Do not build the entire new homepage in the same first pass.

Goal:

- establish Noirum's new visual language;
- validate typography;
- validate media behavior;
- validate Lenis feel;
- validate Afterimage;
- validate desktop/mobile;
- validate performance assumptions.

Only then expand the language into the remaining scenes.

---

# 35. Definition of done

A checkpoint is done when:

- the intended scene works;
- desktop is intentional;
- mobile is intentional;
- reduced motion works;
- browser console is clean;
- no objective overflow bug remains;
- React is healthy;
- performance is acceptable;
- screenshots exist;
- the user can visually validate it.

The site is done when:

> it feels authored, works reliably, stays relatively light, and the user believes it feels like Noirum.

---

# 36. Final operating principle

Do not optimize for:

```text
more effects
more dependencies
more sections
more copy
more components
```

Optimize for:

```text
more intention
more identity
more presence
more craft
better engineering
```

The user validates the feeling.

ChatGPT directs the context.

Codex builds the experience.
