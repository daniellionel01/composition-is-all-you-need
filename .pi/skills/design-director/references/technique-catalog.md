# Technique catalog

This catalog lists concrete visual moves organized by what they achieve. Use techniques deliberately. Do not stack too many at once.

## Create immediate hierarchy

### Hero metric with context

Use for dashboards, reports, and executive summaries.

- Make one metric much larger than the rest.
- Add a compact label, time period, and comparison.
- Pair it with a small trend line or variance badge.
- Keep supporting metrics smaller and quieter.

Best when one number matters most.

### Claim-first slide title

Use for presentations.

Instead of: "Q3 sales performance"

Use: "Enterprise pipeline recovered, but SMB churn is still dragging growth"

The title carries the argument; the slide body proves it.

### Contrast pair

Use when comparing before/after, current/future, risk/opportunity, segment A/B.

- Split the page into two unequal or equal zones depending on importance.
- Use mirrored structure for easy comparison.
- Use one accent to highlight the meaningful difference.

### Visual anchor

Use a large number, quote, chart, diagram, or image as the compositional anchor. Place supporting text around it.

Avoid filling every corner. Let the anchor breathe.

### Progressive disclosure

Use when content is dense.

- Summary first.
- Then supporting evidence.
- Then detail table or appendix.

In static artifacts, this can be vertical sequencing. In slides, it can be one reveal per slide.

---

## Make data easier to scan

### Direct chart labels

Label series or endpoints directly instead of using a legend. This reduces eye travel.

Use especially for line charts with 2-5 series.

### Reference bands

Add subtle target, benchmark, acceptable range, or risk-zone bands behind data.

Examples:

- churn above 5% shaded pale red
- target revenue line
- SLA threshold band
- forecast confidence interval

### Variance isolation

In tables, isolate the variance column visually.

- Slight background tint
- Bold only the meaningful deltas
- Semantic color for direction
- Include arrows only if they improve scanning

### Small multiples

Use repeated mini charts when comparing the same measure across categories.

Works well for regions, products, channels, cohorts.

Keep axes consistent.

### Slope chart

Use for before/after comparisons across categories. Good for showing rank changes or movement between two points.

### Ranked bar chart

Use instead of pies when comparing categories. Sort descending. Add direct labels.

### Annotated outlier

Call out one unusual point with a short note. Do not annotate everything.

### Quiet gridlines

Make gridlines lighter than labels and much lighter than data. Often 5-10% opacity is enough.

---

## Add polish without clutter

### Hairline rules

Use 1px rules with low contrast to create precision. Great for reports, dashboards, and tables.

Avoid thick borders around every card.

### Tonal surfaces

Use slightly different background tones to group sections instead of heavy outlines.

Example:

- page: warm off-white
- panels: white or slightly lighter
- nested detail: pale neutral

### Subtle accent stripe

Use a thin accent line at the top or side of an important block. Good for alerts, section identity, or premium report styling.

### Oversized whitespace

Use one area of generous whitespace to create confidence and focus. Do not make all spacing huge.

### Asymmetric margins

Use a wider left or top margin for editorial feel. Works well in reports, title pages, and landing pages.

### Soft shadow restraint

If using shadows, use one shadow system and keep it subtle.

Example:

- small: 0 1px 2px rgba(0,0,0,.06)
- medium: 0 12px 32px rgba(0,0,0,.10)

Do not use shadows to solve weak hierarchy.

### Borderless grouping

Group items using alignment and spacing instead of visible containers. More mature than card grids when done well.

---

## Improve typography

### Tabular numerals

Use `font-variant-numeric: tabular-nums;` in CSS or a spreadsheet font with tabular numbers. This makes metrics and tables line up cleanly.

### Label hierarchy

Use small, quiet labels above larger values.

Pattern:

- Label: 11-12px, uppercase or small caps, muted, letterspaced
- Value: large, high contrast
- Context: small, muted, with semantic accent only for change

### Editorial display contrast

Pair a restrained body font with a more distinctive display treatment.

Examples:

- large condensed sans headings + neutral body
- elegant serif title + sans body
- mono labels + humanist body

Use only if it fits the tone.

### Sentence-case headings

Use sentence case for maturity and readability. Title Case often feels like a template unless brand-specific.

### Tighten big type

Large headings often need slightly tighter letter spacing and line height.

Example CSS:

```css
letter-spacing: -0.04em;
line-height: 0.95;
```

Use carefully.

### Prose measure control

Keep paragraphs from running too wide. Use max-width.

Example CSS:

```css
max-width: 68ch;
```

---

## Use color with intent

### One-accent system

Use neutrals for most UI and one accent for the most important action, status, or emphasis.

This is the safest way to look polished.

### Semantic-only status colors

Reserve green, red, amber, and blue for status meanings. Do not use them randomly in charts if they also imply status elsewhere.

### Warm neutral canvas

Replace sterile #f8fafc gray with a warmer canvas when appropriate.

Examples:

- #F7F3EA
- #F6F2E8
- #F5F1E8
- #FAF8F3

Pair with deep ink text.

### Premium dark palette

Use near-black rather than pure black.

Examples:

- background: #08090A or #0B0D10
- panel: #11141A
- border: rgba(255,255,255,.08)
- text: #F4F4F1
- muted: #9A9FA8
- accent: one electric color

### Editorial spot color

Use black, white/paper, and one vivid spot color such as red, cobalt, acid green, or amber. Great for reports and decks.

Use the spot color rarely.

### Desaturate supporting colors

For secondary categories, use muted tones. Let one color carry emphasis.

---

## Make layouts feel custom

### Broken grid, controlled

Break the grid in one place: oversized title crossing columns, chart overlapping a margin, annotation sitting outside the plot area.

Everything else should remain aligned.

### Section rhythm

Alternate section types:

- summary
- detail
- evidence
- quote
- table
- chart
- implication

This prevents reports and decks from feeling monotonous.

### Margin notes

Use side notes for sources, caveats, definitions, or short commentary. Works well in reports and web essays.

### Compact control bar

For dashboards, put filters in a quiet horizontal bar. Keep them visually secondary to the data.

### Pinned summary rail

Use a left or top rail for key metrics or navigation. Good for dense dashboards.

### Intentional empty space

Leave one zone empty to create focus. Empty space is only effective when other zones are structured.

---

## Presentation-specific moves

### Assertion + evidence

Slide structure:

- Big claim headline
- One chart, quote, or diagram
- One sentence of interpretation

### Full-bleed section break

Use a high-contrast slide with a short phrase or number to reset attention.

### Data callout overlay

Place a large callout number near the relevant chart region. Connect it with a subtle line or spatial proximity.

### Three-slide build

Instead of one crowded slide:

1. State the problem.
2. Show the evidence.
3. Show the implication.

### Appendix mode

For dense tables, design appendix slides with smaller type and clear labels, not the same layout as narrative slides.

---

## Report/PDF-specific moves

### Executive summary strip

Place 3-5 key findings in a horizontal or vertical strip near the front. Each finding should be a sentence, not a label.

### Figure caption as interpretation

Bad: "Revenue by quarter"

Good: "Revenue recovered in Q3, but the rebound came almost entirely from enterprise renewals."

### Running context

Use quiet running headers with section name or report title. Helps long documents feel controlled.

### Pull quote or key sentence

Use one strong sentence enlarged in the margin or between sections. Good for long reports.

### Source note discipline

Put source notes in consistent small type near figures. Do not let them clutter the main story.

---

## Spreadsheet-specific moves

### Input/output color language

Example:

- Inputs: pale yellow or blue fill
- Calculations: white/no fill
- Outputs: pale green or bold border
- Warnings/errors: pale red with strong text
- Section headers: dark neutral band

Use sparingly.

### Model map

At the top, include a compact model map: Inputs → Assumptions → Calculations → Outputs → Checks.

### Check row

Add a visible row for balance checks, validation, or status.

### Scenario selector styling

Make scenario controls visually distinct and placed near assumptions.

### Print-ready formatting

Set repeating headers conceptually, avoid overly dark fills, and ensure contrast works in grayscale.

---

## HTML/CSS-specific moves

### CSS design tokens

Define variables:

```css
:root {
  --bg: #f7f3ea;
  --surface: #fffaf0;
  --ink: #171411;
  --muted: #6f6a61;
  --rule: rgba(23, 20, 17, 0.12);
  --accent: #e5484d;
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
}
```

### Container queries or responsive grids

Use responsive grids that change intentionally, not just `repeat(auto-fit, minmax(...))` everywhere.

### Interaction states

Define hover, focus-visible, active, selected, disabled, and empty states when relevant.

### Reduced motion

If using animation:

```css
@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; }
}
```

### Custom chart styling

If charts are SVG/CSS, style axes, labels, and annotations as part of the design system.

---

## Anti-techniques: when to pull back

Remove or reduce:

- gradients that do not support mood or hierarchy
- too many cards
- shadows on static content
- icons next to every heading
- decorative blobs
- centered paragraphs longer than two lines
- chart legends far from the data
- more than two accent colors
- fake glass effects
- unnecessary rounded corners
- redundant labels
- table borders on every cell

A polished artifact often improves when one decorative layer is removed.
