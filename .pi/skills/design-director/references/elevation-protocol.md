# Elevation protocol

Use this protocol to turn a functional visual artifact into a polished one. The user should usually see only the final artifact, not these steps.

## Overview

The protocol has seven passes:

1. Purpose and audience
2. Information architecture
3. Layout and composition
4. Typography
5. Color, contrast, and material
6. Detail craft
7. Final critique

Do not skip from pass 1 to decoration. Elevation happens by improving decisions layer by layer.

---

## Pass 1: Purpose and audience

Before designing, clarify the job.

Ask silently, or ask the user only if the answer is necessary:

- Who will use or view this?
- What decision, belief, or action should it support?
- Is the tone analytical, premium, urgent, calm, editorial, playful, institutional, technical, or persuasive?
- Is this meant to be read, presented, scanned, printed, exported, or interacted with?
- What is the most important thing on the page or screen?

If details are missing, make reasonable assumptions and design accordingly. Do not stall for minor preferences.

Output of this pass: a one-sentence design intent, kept internal unless asked.

Example internal intent:

> Executive sales dashboard with a calm, high-trust editorial feel, optimized for spotting pipeline risk within 30 seconds.

---

## Pass 2: Information architecture

Make the content structure work before styling.

### Actions

- Rank content by importance.
- Group related items.
- Remove duplicates.
- Move background detail below the fold, into appendix, or into secondary sections.
- Decide what deserves a hero treatment.
- Decide what should be compact.
- Add context to naked numbers: target, trend, variance, time period, benchmark, source.
- Replace generic sections with content-specific sections.

### Checks

- Can the viewer understand the main point without reading everything?
- Does each section have a reason to exist?
- Are charts answering distinct questions?
- Are tables grouped and sorted in the way a human would use them?
- Are there too many equal-weight cards?

### Common fixes

- Convert a 12-card dashboard into: hero metric + 3 supporting metrics + trend + exception table.
- Convert slide bullets into: thesis headline + supporting visual + short evidence line.
- Convert a dense report section into: key finding + chart + interpretation + source note.
- Convert a spreadsheet into: inputs, calculations, outputs, checks, and notes.

---

## Pass 3: Layout and composition

Create a clear spatial system.

### Choose a layout strategy

Pick one primary strategy:

- **Editorial grid:** strong margins, clear columns, generous reading rhythm. Good for reports and premium pages.
- **Analytical cockpit:** dense but organized modules, strong alignment, compact labels. Good for dashboards.
- **Presentation stage:** oversized type, dramatic whitespace, one idea per slide. Good for decks.
- **Spreadsheet control panel:** frozen-header logic, section bands, input/output distinction. Good for models and trackers.
- **Poster composition:** bold title, strong visual anchor, limited text. Good for summaries and announcements.

### Composition techniques

- Use a grid, but do not make every module identical.
- Create one dominant element.
- Use asymmetry to avoid template feel.
- Align edges precisely.
- Use whitespace to separate ideas, not as filler.
- Vary section density to create rhythm.
- Avoid equal-height cards unless comparison requires it.
- Prefer fewer containers. Borders and backgrounds should group meaningfully.

### Spacing scale

Use a deliberate spacing scale. Examples:

- Compact UI: 4, 8, 12, 16, 24, 32
- Editorial/web: 8, 16, 24, 40, 64, 96
- Presentation: 16, 32, 48, 80, 120

Never use random spacing. If using CSS, encode spacing as custom properties when possible.

---

## Pass 4: Typography

Typography carries most of the design.

### Decide the typographic voice

- **Swiss/analytical:** neutral sans, tight hierarchy, tabular numerals, disciplined labels.
- **Editorial:** serif or humanist sans for headings, readable body, strong contrast between title and text.
- **Premium product:** refined sans, generous line-height, careful letterspacing, restrained weight.
- **Technical:** clear sans/mono pairing, compact labels, code/data distinction.
- **Institutional:** conservative type, high legibility, stable hierarchy.

### Apply a type system

Define:

- title/display size
- section heading size
- body size
- label/caption size
- metric size
- line height
- weight scale
- number styling

### Typography details

- Use tabular numerals for metrics and tables when available.
- Keep body line length comfortable, roughly 55-80 characters for prose.
- Use uppercase labels sparingly and add letterspacing if used.
- Avoid too many font weights.
- Make headings content-specific, not generic.
- Use sentence case unless title case is clearly part of the brand or medium.
- Check widows, orphans, and lonely headings in reports and slides.

---

## Pass 5: Color, contrast, and material

Color should communicate, not decorate.

### Build the palette

Start with:

- canvas/background
- primary text
- secondary text
- rules/borders
- surface/container
- accent
- semantic success/warning/danger if needed

### Palette patterns

- **High-trust analytical:** warm white, ink, slate, muted green/red semantic accents.
- **Premium dark:** near-black, graphite, soft white, one electric accent.
- **Editorial:** paper tone, black, one vivid spot color.
- **Operational:** neutral surface, clear status colors, minimal decoration.
- **Playful but polished:** off-white, saturated accent, friendly secondary color, generous whitespace.

### Rules

- Use one accent color by default.
- Use semantic colors consistently.
- Ensure text contrast is accessible.
- Do not rely on color alone for meaning.
- Avoid rainbow charts unless categories truly require it.
- Make neutrals do most of the work.
- Shadows should be subtle and purposeful; many polished designs use almost none.

### Material and depth

Use depth sparingly:

- hairline borders for analytical precision
- soft shadows for interactive cards or elevated panels
- tonal surfaces for grouping
- subtle gradients for atmosphere or product polish
- texture only if it supports the content or tone

---

## Pass 6: Detail craft

This is where work stops feeling like a first draft.

### Micro-refinements

- Align text, numbers, icons, and chart edges optically.
- Make chart axes quieter than data.
- Label data directly when it reduces legend hunting.
- Normalize date, currency, percentage, and number formats.
- Use consistent rounding.
- Add source notes or timestamps where trust matters.
- Make empty, loading, or no-data states intentional if relevant.
- Remove unnecessary borders.
- Make focus states visible for interactive HTML.
- Check hover states, selected states, and disabled states.
- Avoid decorative icons unless they clarify scanning.
- Tighten copy: labels should be short and specific.
- Add captions that interpret, not merely name.

### Data display refinements

- Use right alignment for numbers.
- Use decimal alignment when precision matters.
- Use muted gridlines.
- Put units in headers, not every cell.
- Sort by the most useful variable.
- Use thresholds, targets, or reference bands for context.
- Prefer direct labels over legends for simple charts.
- Avoid 3D charts, exploding pies, and decorative chartjunk.

### HTML/CSS refinements

- Use CSS variables for color, type, spacing, radius, and shadow.
- Set `box-sizing: border-box`.
- Define responsive breakpoints intentionally.
- Respect reduced motion if animations are used.
- Use semantic HTML where possible.
- Use accessible focus styles.
- Avoid huge external dependencies for simple artifacts.

---

## Pass 7: Final critique

Before delivering, run a design-director critique.

Ask:

- What still feels generic?
- What looks like a default component library?
- Where is the hierarchy weak?
- Where is spacing accidental?
- Where is color decorative instead of meaningful?
- Which element would a designer immediately change?
- Is there one memorable visual idea?
- Is there anything trendy that will age badly?
- Is anything overdesigned?
- Does the artifact serve the user's actual request?

Then revise.

## The refinement loop

If the artifact does not yet meet the bar, run this loop:

1. Name the weakest design dimension internally.
2. Apply two concrete fixes.
3. Remove one unnecessary visual element.
4. Re-check hierarchy and clarity.
5. Repeat until the artifact feels intentional.

## Delivery standard

Deliver the polished output directly. If the output is code or a file, create or edit the actual artifact. If the output is text describing a visual artifact, make it implementation-ready with precise design specs.

Only include a short note about design choices if:

- the user asks for rationale,
- the design cannot be fully represented in the delivered medium,
- or implementation requires guidance.
