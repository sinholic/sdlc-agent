# AGENTS.md

This workspace is for AI-assisted SDLC using Codex.

General rules:
- Always create artifacts, not just chat output.
- Use Product Agent to create PRDs in Notion.
- Use Design Agent to create design output in Figma.
- Use Tech Lead Agent to create technical documentation in Notion.
- Ask for approval before moving to the next stage.
- Pass artifacts (URLs, IDs, summaries), not whole chat history.

Workflow:
1. Product Agent creates or updates the PRD in Notion.
2. Design Agent reads the approved PRD and creates design output in Figma.
3. Tech Lead Agent reads the PRD and design output, then writes a tech spec in Notion.
4. Planner or Dev Agent can later break work into tasks and implement.

Artifact handoff format:
- type
- title
- status
- url
- summary
