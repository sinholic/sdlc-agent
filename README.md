# Tasktify Codex SDLC Starter

This zip contains a simple Codex-oriented workspace starter for an AI-assisted SDLC flow.

Included:
- `AGENTS.md` for global workspace rules
- `skills/product-agent/SKILL.md`
- `skills/design-agent/SKILL.md`
- `skills/techlead-agent/SKILL.md`
- `skills/engineer-agent/SKILL.md`

Suggested first test prompt in Codex:
`Use the product-agent skill. Create a PRD for Tasktify and save it to Notion.`

Next steps:
1. Connect your Notion MCP or Notion connector.
2. Start with Product Agent only.
3. After PRD flow works, add Design Agent with Figma MCP.
4. Then add Tech Lead Agent for technical docs.
5. Add Engineer Agent to consume `Ready` tickets from Notion and implement with reliability + tests.

## Runtime Scaffold (v1)

This repository now includes a runnable runtime scaffold for production-style orchestration:
- `src/orchestrator/workflow-engine.js` (state machine)
- `src/adapters/notion/notion-queue.js` (queue adapter with claim and self-healing recovery)
- `src/workers/engineer-worker.js` (ticket consumer with retry/backoff)
- `src/libs/observability/*` (structured logging + metrics registry)
- `src/libs/reliability/*` (retry + lease utility)

### Run Demo

```bash
npm test
npm run start
```

### Test Coverage Scope

- Unit tests:
  - workflow transitions
  - retry policy
  - engineer worker success/failure path
- E2E tests:
  - full SDLC stage progress + one ticket execution
  - self-healing requeue for expired in-progress lease
