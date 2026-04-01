# Tasktify Figma Design Brief

## Artifact Handoff

- type: `design-brief`
- title: `Tasktify MVP Figma Design Brief`
- status: `ready for figma`
- url: `pending`
- summary: `A trust-first mobile/web app concept for capturing hidden action items from Gmail, Slack, and Teams, centered on onboarding, task review, follow-up risk, and source-linked action workflows.`

## Product Summary

Tasktify is a personal productivity assistant that finds explicit and implicit action items in communication tools and turns them into a reviewable task inbox. The design should feel trustworthy, focused, and calm rather than noisy or "AI magic".

## Design Principles

1. Make trust visible.
   Explain access, permissions, and source linkage in plain language.
2. Keep the review loop lightweight.
   Users should be able to confirm, edit, or dismiss in seconds.
3. Preserve message context.
   Every suggested task should clearly show where it came from.
4. Show risk without fear.
   Highlight unanswered requests and pending commitments with clear severity cues.
5. Favor personal productivity over team complexity.
   MVP should feel like a sharp personal assistant, not a project suite.

## Recommended Screens

### 1. Welcome / Landing

Purpose:
Introduce the value proposition and establish trust before sign-in.

Key sections:
- Hero headline: `Never lose a follow-up hidden in your messages`
- Supporting copy about Gmail-first setup and AI-assisted task detection
- CTA: `Continue with Google`
- Mini explainer cards:
  - `Detect requests`
  - `Catch hidden commitments`
  - `Review before anything is added`
- Privacy note block with concise consent language

### 2. Permission Explainer

Purpose:
Explain why Gmail access is needed and what Tasktify can and cannot do.

Key sections:
- Access summary card
- "What we read" list
- "What we never do" list
- Toggle-like permission explainer rows
- CTA: `Allow Gmail Access`
- Secondary action: `Back`

### 3. Channel Connection Setup

Purpose:
Show Gmail connected and allow optional Slack / Teams connection.

Key sections:
- Gmail connected state
- Optional integrations list
- Status chips: `Connected`, `Optional`, `Coming later`
- CTA: `Finish setup`

### 4. Suggested Task Inbox

Purpose:
Core MVP screen showing extracted tasks waiting for user review.

Key sections:
- Top summary strip:
  - `12 suggestions`
  - `3 follow-ups at risk`
- Filter tabs:
  - `All`
  - `Needs review`
  - `At risk`
  - `Confirmed`
- Suggestion cards with:
  - Task title
  - Confidence / risk badge
  - Source icon and source line
  - Short explanation of why it was detected
  - Suggested due timing
  - Actions: `Confirm`, `Edit`, `Dismiss`

### 5. Task Review Drawer / Modal

Purpose:
Let users inspect and edit a suggested task before saving it.

Key sections:
- Editable title
- Source snippet preview
- Reason detected
- Due date field
- Reminder control
- Actions:
  - `Confirm task`
  - `Dismiss`

### 6. Task Detail / Source Context

Purpose:
Connect the task back to the original message and next action.

Key sections:
- Task header with status
- Message excerpt panel
- Source metadata:
  - sender
  - channel
  - timestamp
- Action buttons:
  - `Open source`
  - `Mark done`
  - `Snooze`

### 7. Follow-up Risk Dashboard

Purpose:
Help users notice pending promises and unanswered requests.

Key sections:
- Risk summary cards:
  - `Unanswered requests`
  - `Pending commitments`
  - `Overdue follow-ups`
- Prioritized list with severity styling
- Quick actions:
  - `Remind me`
  - `Review task`
  - `Open message`

### 8. Settings / Permissions

Purpose:
Keep control and transparency accessible after onboarding.

Key sections:
- Connected accounts
- Permission summary
- Reminder preferences
- Data/privacy controls
- Disconnect action

## User Flow

1. User lands on welcome screen
2. User signs in with Google
3. User reads permission explainer and grants Gmail access
4. User optionally connects Slack or Teams
5. User enters suggested task inbox
6. User reviews extracted tasks
7. User opens task detail or source context
8. User receives reminder / follows up later

## Information Architecture

- Primary nav:
  - Inbox
  - At Risk
  - Done
  - Settings
- Secondary controls:
  - Filters
  - Search
  - Source type chips

## Visual Direction

Overall mood:
- Calm
- Trustworthy
- Productive
- Human

Style notes:
- Use a light interface with soft neutral surfaces
- Accent with a deep teal or blue-green for trust and action
- Use amber and coral sparingly for risk states
- Avoid overly futuristic AI styling
- Prefer rounded cards and clean spacing
- Keep charts and metrics minimal

Suggested palette:
- Background: `#F6F7F4`
- Surface: `#FFFFFF`
- Primary text: `#18201B`
- Secondary text: `#5E6A61`
- Primary accent: `#1E7A67`
- Accent hover: `#155E50`
- Warning: `#D98A1F`
- Risk: `#C85C46`
- Border: `#D8DED8`

Typography direction:
- Headlines: clean, slightly editorial sans
- Body: high-legibility sans
- Emphasis should come from size and weight, not decorative effects

## Core Components

- Top app bar
- Permission explainer card
- Integration status row
- Filter chips / tabs
- Suggested task card
- Risk badge
- Source pill
- Primary / secondary buttons
- Empty state illustration block
- Reminder row
- Settings list item

## Key States To Design

- Empty inbox
- Loading analysis state
- Connected successfully
- Permission denied
- High-risk follow-up
- Task confirmed
- Task dismissed

## Copy Tone

- Clear
- Plain-language
- Supportive
- Non-technical
- Transparent about AI uncertainty

Examples:
- `We found this because your message included a request that still needs a reply.`
- `Review first. Nothing is added unless you confirm it.`
- `Your Gmail access is limited to helping detect follow-ups and suggested tasks.`

## Figma Frame List

- `01 Welcome`
- `02 Permission Explainer`
- `03 Connect Channels`
- `04 Suggested Task Inbox`
- `05 Review Task Modal`
- `06 Task Detail`
- `07 At Risk`
- `08 Settings`

## Design Notes For MVP Fidelity

- Desktop-first main app frame at `1440px` width
- Include mobile companion frames for:
  - Welcome
  - Inbox
  - Review modal or bottom sheet
- Use source icons for Gmail, Slack, Teams to reinforce context
- Keep AI confidence visually secondary to user actions
- Confirm / edit / dismiss should be the dominant workflow

## Next Handoff

This brief is ready to be translated into a Figma file with actual frames, components, and UI states.
