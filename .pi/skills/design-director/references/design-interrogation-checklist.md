# Design interrogation checklist

Use this checklist before delivering a visual artifact. The checklist is for internal use unless the user asks to see the process.

## Universal questions

### Purpose

- What is the artifact's job?
- Who is the audience?
- What should the viewer notice first?
- What should they do or understand next?
- What can be removed without harming the goal?
- Is the design optimized for reading, scanning, presenting, printing, exporting, or interacting?

### Hierarchy

- Is there one clear primary element?
- Are secondary elements clearly secondary?
- Do section headings describe the content specifically?
- Does the visual weight match the importance of the content?
- Is anything important hidden because it is styled like everything else?
- Is anything unimportant too loud?
- Does the design pass the squint test?

### Layout

- Is the layout based on a clear grid or spatial logic?
- Are related items grouped visually?
- Are unrelated items separated enough?
- Does spacing follow a system?
- Are margins deliberate?
- Are edges aligned precisely?
- Is there too much symmetry, making it feel templated?
- Is there useful contrast between dense and open areas?

### Typography

- Does the type choice match the tone?
- Is the type scale clear?
- Are line lengths comfortable?
- Are labels concise?
- Are numbers easy to compare?
- Are headings in sentence case unless there is a reason not to be?
- Are there too many weights, sizes, or styles?
- Are captions useful or just decorative?

### Color

- What does each color mean?
- Is the palette restrained?
- Is the accent color reserved for important moments?
- Are semantic colors consistent?
- Is contrast accessible?
- Does the design work in grayscale or when printed?
- Are chart colors distinguishable for colorblind viewers?
- Is there any color used only because the page felt empty?

### Data and charts

- Does each chart answer a specific question?
- Is the chart type appropriate?
- Are axes, units, labels, and time ranges clear?
- Is the data sorted usefully?
- Are legends avoidable through direct labeling?
- Are gridlines quieter than the data?
- Are outliers, targets, or thresholds shown when relevant?
- Are numbers formatted consistently?
- Is the visualization honest, or does it exaggerate differences?

### Craft

- Are borders, shadows, and fills used intentionally?
- Is there one memorable design move?
- Has at least one unnecessary visual element been removed?
- Are there awkward widows, orphans, or lonely headings?
- Do icons, if used, actually help?
- Does the final artifact look like a template?
- Would a designer immediately know this was made in one pass?

---

## Dashboard checklist

### Decision support

- What decision does this dashboard support?
- Are the most actionable metrics positioned first?
- Are trends shown where trends matter?
- Are targets, benchmarks, or prior-period comparisons included?
- Are alerts visually distinct from normal metrics?
- Does the dashboard distinguish signal from noise?

### Dashboard structure

- Is there a clear top-level summary?
- Is detail available without overwhelming the opening view?
- Are charts grouped by business question rather than data source?
- Are filters placed where users expect them?
- Are time ranges explicit?
- Are empty or missing data states handled?

### Metrics

- Are metric cards varied by importance rather than identical?
- Do metrics include units and time periods?
- Are deltas explained or at least directionally clear?
- Are good/bad changes colored correctly for the metric? For example, lower churn is good.
- Are huge numbers abbreviated consistently?

### Tables

- Are columns ordered by use?
- Are text columns left-aligned and numeric columns right-aligned?
- Are row heights appropriate for scanning?
- Are totals, subtotals, and outliers easy to find?
- Are separators subtle?
- Is zebra striping necessary, or would spacing and rules be cleaner?

---

## Presentation checklist

### Story

- What is the deck's thesis?
- Does the opening slide create expectation?
- Does each slide advance the argument?
- Is there a deliberate rhythm between assertion, evidence, contrast, and conclusion?
- Is the ending specific rather than generic?

### Slides

- Is there one idea per slide?
- Could any bullet list become a diagram, quote, comparison, timeline, or data callout?
- Are slide titles written as claims rather than labels?
- Is the type large enough to read from the back of a room?
- Is there enough whitespace around the main idea?
- Do section breaks reset attention?
- Are appendix/detail slides visually distinct from core narrative slides?

### Deck system

- Do slides feel like one family?
- Is there enough variation to avoid monotony?
- Are page numbers, labels, logos, and footers quiet?
- Are charts simplified for presentation rather than copied from analysis tools?

---

## Report/PDF checklist

### Editorial structure

- Is there a strong title page or opening block?
- Is the executive summary genuinely useful?
- Are key findings easy to scan?
- Do section openers create rhythm?
- Are long sections broken with figures, pull quotes, tables, or subheads?
- Are sources, notes, and assumptions visible without dominating?

### Reading experience

- Are margins generous enough?
- Is body text readable for sustained reading?
- Are line lengths controlled?
- Are captions placed close to figures?
- Do page breaks avoid separating headings from content?
- Are running headers/footers useful and quiet?

### Trust

- Are claims supported?
- Are caveats presented clearly?
- Are charts labeled honestly?
- Does the visual tone feel credible rather than promotional?

---

## Spreadsheet checklist

### Usability

- Can a user tell inputs from outputs immediately?
- Are assumptions grouped and labeled?
- Are formulas, manual inputs, and calculated outputs visually distinct?
- Are units included in headers?
- Are number formats consistent?
- Are important checks or errors visible?
- Are totals and subtotals easy to find?

### Formatting

- Are numbers right-aligned?
- Are labels left-aligned?
- Are dates consistent?
- Are negative numbers and variances formatted clearly?
- Are frozen panes or repeated headers considered?
- Is color used sparingly and semantically?
- Would this still be readable when printed or exported to PDF?

### Model clarity

- Is there a clear flow: inputs → calculations → outputs → checks?
- Are hardcoded values distinguishable from formulas?
- Are scenario controls easy to locate?
- Are notes or assumptions near the relevant cells?

---

## HTML/web artifact checklist

### System

- Are colors, spacing, type, radius, and shadows defined as a coherent system?
- Does the page have a clear grid?
- Are components styled consistently without feeling repetitive?
- Is the responsive behavior thought through?
- Are interactive states present?
- Is semantic HTML used where possible?

### Experience

- Does the first viewport communicate the main idea?
- Are calls to action clear but not obnoxious?
- Does scrolling reveal information in a useful sequence?
- Are animations subtle and purposeful?
- Is the page accessible by keyboard?
- Does the design avoid generic SaaS sameness?

### Implementation craft

- Are CSS variables used for repeated values?
- Is the code maintainable?
- Are images, icons, and decorative elements optimized or lightweight?
- Does the design degrade gracefully on smaller screens?

---

## Final "not generic" test

Before delivery, ask:

> If someone removed the content and replaced it with another topic, would the design still look equally plausible?

If yes, the artifact is probably too generic. Add content-specific structure, emphasis, labeling, or visual language.
