# PostHog post-wizard report

The wizard has completed a deep integration of your DevEvent project. PostHog analytics has been integrated using the recommended Next.js 16+ App Router approach with `instrumentation-client.ts` for client-side initialization. The integration includes a reverse proxy setup through Next.js rewrites to route analytics traffic through your domain, improving reliability and avoiding ad blockers.

## Summary of Changes

| File | Change |
|------|--------|
| `.env` | Created with `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` environment variables |
| `instrumentation-client.ts` | Created client-side PostHog initialization with error tracking enabled |
| `next.config.ts` | Added PostHog reverse proxy rewrites for EU region |
| `components/ExploreBtn.tsx` | Added `explore_events_clicked` event tracking |
| `components/EventCard.tsx` | Added `event_card_clicked` event tracking with event properties |
| `components/Navbar.tsx` | Added `nav_link_clicked` event tracking with link name property |

## Events Implemented

| Event Name | Description | File |
|------------|-------------|------|
| `explore_events_clicked` | Tracks when users click the "Explore Events" button to browse available events | `components/ExploreBtn.tsx` |
| `event_card_clicked` | Tracks when users click on an event card to view event details. Includes properties: `event_title`, `event_slug`, `event_location`, `event_date` | `components/EventCard.tsx` |
| `nav_link_clicked` | Tracks navigation link usage. Includes property: `link_name` | `components/Navbar.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://eu.posthog.com/project/116933/dashboard/490470)

### Insights
- [Explore Events Clicks](https://eu.posthog.com/project/116933/insights/oQ4MK5lT) - Tracks how many times users click the Explore Events button
- [Event Card Clicks](https://eu.posthog.com/project/116933/insights/e1VqMRSx) - Tracks clicks on event cards with breakdown by event title
- [Navigation Link Clicks](https://eu.posthog.com/project/116933/insights/45G8BbVK) - Tracks navigation link usage by link name
- [User Engagement Funnel](https://eu.posthog.com/project/116933/insights/89uzgsiP) - Conversion funnel from exploring events to clicking on an event card
- [Popular Events by Location](https://eu.posthog.com/project/116933/insights/B4QjGda6) - Shows which event locations get the most clicks

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
