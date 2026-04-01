# Tasktify Design Baseline

## Artifact Handoff

- type: `design-baseline`
- title: `Tasktify Visual Baseline`
- status: `ready`
- url: `local artifact`
- summary: `Foundational design guidance for color, typography, spacing, radii, shadows, UI tone, and core component behavior for the Tasktify MVP.`

## Brand Direction

Tasktify should feel:
- trustworthy
- calm
- clear
- productive
- supportive

The product should not feel:
- noisy
- overly futuristic
- enterprise-heavy
- playful in a distracting way
- overly "AI magic"

## Visual Personality

Tasktify is a personal work assistant sitting on top of communication tools. The visual system should make users feel that the app is helping them regain control, not adding more stress.

Design cues:
- light surfaces
- clear hierarchy
- soft edges
- strong text contrast
- restrained color usage
- risk states that feel informative, not alarming

## Color Palette

### Core Neutrals

- `bg.canvas`: `#F6F7F4`
- `bg.surface`: `#FFFFFF`
- `bg.surface-muted`: `#F1F4F1`
- `border.default`: `#D8DED8`
- `border.strong`: `#BDC8BE`
- `text.primary`: `#18201B`
- `text.secondary`: `#5E6A61`
- `text.tertiary`: `#7F8B82`

### Primary Brand

- `brand.500`: `#1E7A67`
- `brand.600`: `#155E50`
- `brand.700`: `#104A3F`
- `brand.soft`: `#DCEFEA`

Use primary brand color for:
- primary actions
- selected states
- key status highlights
- trust-oriented accents

### Support Colors

- `info.500`: `#3B82A6`
- `info.soft`: `#DCEFF6`
- `warning.500`: `#D98A1F`
- `warning.soft`: `#FAE9C9`
- `risk.500`: `#C85C46`
- `risk.soft`: `#F7DED8`
- `success.500`: `#4A8F62`
- `success.soft`: `#DCECDFFF`

Use support colors sparingly:
- `info` for source context and system guidance
- `warning` for pending or aging follow-ups
- `risk` for overdue or high-risk unresolved items
- `success` for confirmed or completed states

## Recommended Usage Ratios

- 75% neutral surfaces and backgrounds
- 15% typography and borders
- 8% primary brand accents
- 2% warning, risk, and success states

## Typography

## Font Direction

Use a clean modern sans serif with high readability.

Recommended stack for product UI:
- `Inter`
- fallback: `ui-sans-serif, system-ui, sans-serif`

If you want a slightly more branded headline direction in Figma, use:
- `Manrope` for headings
- `Inter` for body and UI text

## Type Scale

- `display`: 48 / 56 / 700
- `h1`: 40 / 48 / 700
- `h2`: 32 / 40 / 650
- `h3`: 24 / 32 / 650
- `h4`: 20 / 28 / 600
- `body-lg`: 18 / 28 / 400
- `body`: 16 / 24 / 400
- `body-sm`: 14 / 22 / 400
- `caption`: 12 / 18 / 500
- `label`: 13 / 18 / 600

## Type Behavior

- Headlines should be concise and direct.
- Body text should avoid overly tight line spacing.
- Labels and small UI text should use medium or semibold weight.
- Avoid using more than 3 font sizes in a single card unless absolutely necessary.

## Spacing Scale

Base spacing unit: `4`

Recommended spacing tokens:
- `space-1`: `4`
- `space-2`: `8`
- `space-3`: `12`
- `space-4`: `16`
- `space-5`: `20`
- `space-6`: `24`
- `space-8`: `32`
- `space-10`: `40`
- `space-12`: `48`
- `space-16`: `64`

Usage guidance:
- card padding: `20` to `24`
- page section gap: `32`
- form field gap: `12` to `16`
- button horizontal padding: `14` to `18`
- layout gutters on desktop: `24` to `32`

## Radius

- `radius-sm`: `10`
- `radius-md`: `14`
- `radius-lg`: `18`
- `radius-xl`: `24`
- `radius-pill`: `999`

Usage guidance:
- buttons: `14`
- inputs: `14`
- cards: `18` to `24`
- chips and status pills: `999`

## Shadow

Keep shadows subtle and rare.

### Shadow Tokens

- `shadow-sm`: `0 1px 2px rgba(16, 24, 40, 0.06)`
- `shadow-md`: `0 8px 24px rgba(16, 24, 40, 0.08)`
- `shadow-lg`: `0 16px 40px rgba(16, 24, 40, 0.10)`

Usage guidance:
- default cards can rely on border only
- elevated drawers or modals can use `shadow-md`
- avoid stacking multiple shadows in one view

## Layout Baseline

### Frame Widths

- desktop main frame: `1440`
- tablet target: `1024`
- mobile target: `390`

### Suggested Grid

Desktop:
- 12-column feel
- 24 to 32 outer margin
- 24 gutter

Mobile:
- 16 to 20 outer margin
- stacked sections
- bottom sheet patterns for review flows

## Component Tone Rules

### Buttons

Primary button:
- brand fill
- white text
- medium emphasis
- never oversized

Secondary button:
- white or muted background
- border visible
- text primary or secondary

Tertiary action:
- text-only or very low emphasis
- use for dismissive or less critical actions

### Cards

Cards should feel structured, not decorative.

Default card:
- white background
- light border
- rounded corners
- shadow optional

Priority card:
- keep same structure
- use colored badge or subtle tinted strip
- do not flood the whole card with status color

### Pills / Chips

Use pills for:
- source type
- task status
- confidence level
- filter tabs

Pills should be:
- compact
- medium-weight text
- low saturation background unless active

### Inputs

Inputs should feel calm and clear.

- white background
- border-first design
- label above field
- helper text below only when needed
- error states should use border and helper text, not intense fills

## Status Mapping

### Suggested State Colors

- `Needs review`: neutral with soft border
- `Confirmed`: success soft background or success text accent
- `At risk`: warning or risk accent depending on severity
- `Done`: subdued success or neutral success mix

### Confidence Presentation

Confidence should be visually secondary.

- high confidence: subtle info or success tint
- medium confidence: neutral pill
- low confidence: warning tint

Do not let confidence styling overpower user actions.

## Icon Direction

Use simple rounded system icons.

Priority icon contexts:
- Gmail
- Slack
- Teams
- reminder
- risk
- completed
- settings

Icon style should be:
- outline or lightly filled
- consistent stroke width
- minimal visual complexity

## Copy Tone

Copy should be:
- plain-language
- transparent
- action-oriented
- non-technical
- reassuring

Examples:
- `We found this because the thread contains an unanswered request.`
- `Nothing is added unless you confirm it.`
- `Your Gmail access is used to detect tasks and follow-ups tied to your account.`

## Screen-Level Guidance

### Welcome

- high clarity headline
- immediate trust cues
- one strong CTA
- short supporting explanation

### Permission Explainer

- use comparison layout
- clarify what is read versus what is never done
- keep copy easy to scan

### Inbox

- task list should dominate the screen
- filters should be simple and visible
- actions should be quick and repeatable

### Review Drawer

- title first
- source reasoning second
- original message context third
- decision actions fixed near bottom

### At Risk

- show summary first
- show prioritized cases second
- make action path obvious

### Settings

- emphasize transparency
- permissions and connected accounts should be easy to revisit

## CSS Variable Starter

```css
:root {
  --bg-canvas: #F6F7F4;
  --bg-surface: #FFFFFF;
  --bg-surface-muted: #F1F4F1;
  --border-default: #D8DED8;
  --border-strong: #BDC8BE;
  --text-primary: #18201B;
  --text-secondary: #5E6A61;
  --text-tertiary: #7F8B82;
  --brand-500: #1E7A67;
  --brand-600: #155E50;
  --brand-700: #104A3F;
  --brand-soft: #DCEFEA;
  --info-500: #3B82A6;
  --info-soft: #DCEFF6;
  --warning-500: #D98A1F;
  --warning-soft: #FAE9C9;
  --risk-500: #C85C46;
  --risk-soft: #F7DED8;
  --success-500: #4A8F62;
  --success-soft: #DCECDF;
}
```

## Tailwind Token Mapping Suggestion

- `bg-background` -> `#F6F7F4`
- `bg-card` -> `#FFFFFF`
- `bg-muted` -> `#F1F4F1`
- `text-foreground` -> `#18201B`
- `text-muted-foreground` -> `#5E6A61`
- `border-border` -> `#D8DED8`
- `primary` -> `#1E7A67`
- `primary-foreground` -> `#FFFFFF`
- `destructive` -> `#C85C46`
- `warning` -> `#D98A1F`
- `success` -> `#4A8F62`

## Next Use

This baseline is suitable for:
- Figma styles and variables
- Tailwind theme extension
- HTML-to-Figma imports
- early frontend implementation
