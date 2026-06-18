---
name: project-pia-chatbot
description: Pia chatbot integration — API endpoint, architecture, and routes
metadata:
  type: project
---

Pia is a stateless FastAPI chatbot at `https://cv.api.clarissa-heinemann.de/api/chat`.

**API contract:** POST `{ messages: [{ role: "user"|"assistant", content: string }] }` — returns `StreamingResponse` (text/plain). Frontend must accumulate all messages per session and send full history each request.

**Frontend architecture:**
- `src/contexts/ChatContext.tsx` — shared state (messages, isStreaming), streaming fetch logic, clearMessages
- `src/components/ChatWidget.tsx` — floating FAB (bottom-right), hidden on `/pia` route
- `src/pages/Pia.tsx` — full-page chat at `/pia` with suggestion chips
- Both widget and page share the same ChatContext instance (same conversation)

**Why:** User wants both a persistent floating widget on all pages and a full-page chat experience.

**How to apply:** When updating Pia-related features, both ChatWidget and Pia.tsx share state via ChatContext — changes to streaming logic go in the context only.
