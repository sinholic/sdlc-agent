type Suggestion = {
  id: number;
  title: string;
  source: "Gmail" | "Slack" | "Teams";
  reason: string;
  confidence: string;
  due: string;
  state: "Needs review" | "At risk" | "Confirmed";
};

const suggestions: Suggestion[] = [
  {
    id: 1,
    title: "Reply to Anna with the launch timeline",
    source: "Gmail",
    reason: "Detected an unanswered request in a recent email thread.",
    confidence: "High confidence",
    due: "Today",
    state: "Needs review",
  },
  {
    id: 2,
    title: "Send budget update to product team",
    source: "Slack",
    reason: 'Detected a commitment phrase: "I will send an update this afternoon."',
    confidence: "Medium confidence",
    due: "Tomorrow",
    state: "At risk",
  },
  {
    id: 3,
    title: "Follow up on contract review",
    source: "Teams",
    reason: "Detected a pending follow-up with no response after 3 days.",
    confidence: "High confidence",
    due: "This week",
    state: "Confirmed",
  },
];

function StatusPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-600">
      {children}
    </span>
  );
}

function Card({
  title,
  description,
  action,
}: {
  title: string;
  description: string;
  action?: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5">
      <div className="space-y-2">
        <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        <p className="text-sm leading-6 text-slate-600">{description}</p>
        {action ? (
          <button className="rounded-lg border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">
            {action}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
      {children}
    </p>
  );
}

export default function TasktifyPrototype() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-8 lg:px-8">
        <header className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <SectionLabel>Tasktify MVP UI Prototype</SectionLabel>
              <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Never lose a follow-up hidden in your messages.
                </h1>
                <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                  Structure-first React and Tailwind prototype for the approved
                  PRD. This keeps the flows explicit so the screens can later be
                  moved into Figma or a real app shell.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white">
                  Continue with Google
                </button>
                <button className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700">
                  View permissions first
                </button>
              </div>
            </div>

            <div className="grid min-w-full gap-3 sm:grid-cols-3 lg:min-w-[440px]">
              <Card
                title="Detect requests"
                description="Find explicit asks buried inside email or chat threads."
              />
              <Card
                title="Catch commitments"
                description='Spot phrases like "I will follow up" before they get lost.'
              />
              <Card
                title="Review before saving"
                description="Nothing becomes a task until the user confirms it."
              />
            </div>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="space-y-5">
              <SectionLabel>Permission Explainer</SectionLabel>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-950">
                  Explain access before asking for it
                </h2>
                <p className="text-sm leading-6 text-slate-600">
                  The onboarding flow should make the Gmail-first model feel
                  safe and concrete.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    What we read
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>Email and message content needed to detect tasks</li>
                    <li>Thread context for follow-up risk</li>
                    <li>Message metadata like sender and timestamp</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-sm font-semibold text-slate-900">
                    What we never do
                  </h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-600">
                    <li>Send replies on your behalf</li>
                    <li>Create tasks without review</li>
                    <li>Share connected inbox content with other users</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl border border-dashed border-slate-300 p-4">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Gmail access is required for personal onboarding
                    </p>
                    <p className="mt-1 text-sm text-slate-600">
                      Users should understand value before the permission prompt
                      appears.
                    </p>
                  </div>
                  <button className="rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white">
                    Allow Gmail Access
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="space-y-5">
              <SectionLabel>Connection Setup</SectionLabel>
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-950">
                  Keep integrations explicit
                </h2>
                <p className="text-sm leading-6 text-slate-600">
                  Gmail is primary. Slack and Teams are optional add-ons for the
                  MVP path.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  ["Gmail", "Connected", "Primary inbox linked to your account"],
                  ["Slack", "Optional", "Import requests and follow-ups from channels"],
                  ["Teams", "Optional", "Bring message-based commitments into review"],
                ].map(([name, state, copy]) => (
                  <div
                    key={name}
                    className="flex flex-col gap-3 rounded-2xl border border-slate-200 p-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {name}
                      </p>
                      <p className="text-sm text-slate-600">{copy}</p>
                    </div>
                    <StatusPill>{state}</StatusPill>
                  </div>
                ))}
              </div>

              <button className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700">
                Finish setup
              </button>
            </div>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[260px_minmax(0,1fr)_360px]">
          <aside className="rounded-3xl border border-slate-200 bg-white p-5">
            <div className="space-y-5">
              <div>
                <p className="text-lg font-semibold text-slate-950">Tasktify</p>
                <p className="text-sm text-slate-500">Personal review inbox</p>
              </div>

              <nav className="space-y-2 text-sm">
                {["Inbox", "At Risk", "Done", "Settings"].map((item, index) => (
                  <div
                    key={item}
                    className={`rounded-xl px-3 py-2 ${
                      index === 0
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </nav>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-semibold text-slate-900">
                  Inbox summary
                </p>
                <div className="mt-3 space-y-2 text-sm text-slate-600">
                  <p>12 suggestions waiting</p>
                  <p>3 follow-ups at risk</p>
                  <p>8 completed this week</p>
                </div>
              </div>
            </div>
          </aside>

          <main className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="space-y-6">
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-5 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <SectionLabel>Suggested Task Inbox</SectionLabel>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">
                    Review suggested tasks before they become commitments
                  </h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  {["All", "Needs review", "At risk", "Confirmed"].map((filter, index) => (
                    <button
                      key={filter}
                      className={`rounded-full px-3 py-2 text-sm font-medium ${
                        index === 0
                          ? "bg-slate-900 text-white"
                          : "border border-slate-300 text-slate-600"
                      }`}
                    >
                      {filter}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {suggestions.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-2xl border border-slate-200 p-5"
                  >
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="text-lg font-semibold text-slate-950">
                            {item.title}
                          </h3>
                          <StatusPill>{item.state}</StatusPill>
                          <StatusPill>{item.confidence}</StatusPill>
                        </div>

                        <div className="flex flex-wrap gap-2 text-sm text-slate-500">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1">
                            {item.source}
                          </span>
                          <span>Suggested due: {item.due}</span>
                        </div>

                        <p className="max-w-2xl text-sm leading-6 text-slate-600">
                          {item.reason}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <button className="rounded-xl bg-slate-900 px-3.5 py-2.5 text-sm font-medium text-white">
                          Confirm
                        </button>
                        <button className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium text-slate-700">
                          Edit
                        </button>
                        <button className="rounded-xl border border-slate-300 px-3.5 py-2.5 text-sm font-medium text-slate-700">
                          Dismiss
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </main>

          <aside className="space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="space-y-4">
                <SectionLabel>Review Drawer</SectionLabel>
                <h3 className="text-xl font-semibold text-slate-950">
                  Confirm before saving
                </h3>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Task title
                  </label>
                  <div className="rounded-xl border border-slate-300 px-3 py-3 text-sm text-slate-700">
                    Reply to Anna with the launch timeline
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Why this was detected
                  </label>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    The thread contains a direct request with no reply sent from
                    your inbox after the latest message.
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-sm font-medium text-slate-700">
                    Source preview
                  </label>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm leading-6 text-slate-600">
                    "Can you send over the launch timeline when you get a
                    chance?"
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-slate-300 px-3 py-3 text-sm text-slate-700">
                    Due: Today
                  </div>
                  <div className="rounded-xl border border-slate-300 px-3 py-3 text-sm text-slate-700">
                    Reminder: 2 hours
                  </div>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 rounded-xl bg-slate-900 px-4 py-3 text-sm font-medium text-white">
                    Confirm task
                  </button>
                  <button className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700">
                    Dismiss
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5">
              <div className="space-y-4">
                <SectionLabel>At Risk</SectionLabel>
                <h3 className="text-xl font-semibold text-slate-950">
                  Follow-up risk panel
                </h3>

                <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Unanswered requests</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      4
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Pending commitments</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      3
                    </p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-sm text-slate-500">Overdue follow-ups</p>
                    <p className="mt-2 text-2xl font-semibold text-slate-950">
                      2
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 p-4">
                  <p className="text-sm font-semibold text-slate-900">
                    Highest priority thread
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Procurement requested a contract revision three days ago and
                    the conversation still has no reply.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button className="rounded-xl bg-slate-900 px-3 py-2 text-sm font-medium text-white">
                      Review task
                    </button>
                    <button className="rounded-xl border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700">
                      Open message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-white p-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <SectionLabel>Settings And Controls</SectionLabel>
              <h2 className="text-2xl font-semibold text-slate-950">
                Keep control visible after onboarding
              </h2>
              <div className="space-y-3">
                {[
                  "Connected accounts",
                  "Permission summary",
                  "Reminder preferences",
                  "Privacy and data controls",
                  "Disconnect integrations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 px-4 py-4 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-dashed border-slate-300 p-5">
              <div className="space-y-4">
                <SectionLabel>Empty State</SectionLabel>
                <h3 className="text-xl font-semibold text-slate-950">
                  Inbox clear
                </h3>
                <p className="text-sm leading-6 text-slate-600">
                  Use this state when there are no new suggestions or follow-up
                  risks to review.
                </p>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm text-slate-600">
                  You are caught up. Tasktify will keep watching for new
                  requests, promises, and follow-ups that need your attention.
                </div>
                <button className="rounded-xl border border-slate-300 px-4 py-3 text-sm font-medium text-slate-700">
                  Refresh suggestions
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
