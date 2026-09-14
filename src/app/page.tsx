export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="container flex items-center justify-between py-6">
        <span className="text-xl font-bold tracking-tight text-foreground">
          Chart<span className="text-primary">Mept</span>
        </span>
        <div className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#features" className="transition-colors hover:text-foreground">
            Features
          </a>
          <a href="#how" className="transition-colors hover:text-foreground">
            How it works
          </a>
          <a href="#pricing" className="transition-colors hover:text-foreground">
            Pricing
          </a>
        </div>
        <a
          href="#pricing"
          className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Get started free
        </a>
      </nav>

      {/* Hero */}
      <section className="container flex flex-col items-center px-6 pb-24 pt-20 text-center">
        <p className="mb-4 rounded-full border border-border bg-muted/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          Now in public beta &mdash; try it free
        </p>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl">
          Data deserves{" "}
          <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
            beautiful charts
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground md:text-xl">
          Connect your data source, pick a template, and let ChartMept render
          interactive visualisations in seconds. No code required.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-full bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:shadow-xl"
          >
            Start for free
          </a>
          <a
            href="#features"
            className="rounded-full border border-border px-8 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            See features
          </a>
        </div>

        {/* Decorative chart visual */}
        <div className="relative mt-16 w-full max-w-3xl overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-3 w-3 rounded-full bg-destructive/60" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            <div className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            <span className="ml-4 text-xs text-muted-foreground">
              revenue-analytics.dashboard
            </span>
          </div>
          <div className="flex items-end gap-3 h-48">
            {[
              { h: "40%", color: "bg-chart-1" },
              { h: "65%", color: "bg-chart-2" },
              { h: "50%", color: "bg-chart-3" },
              { h: "80%", color: "bg-chart-4" },
              { h: "55%", color: "bg-chart-5" },
              { h: "90%", color: "bg-chart-1" },
              { h: "70%", color: "bg-chart-2" },
              { h: "85%", color: "bg-chart-3" },
              { h: "60%", color: "bg-chart-4" },
              { h: "95%", color: "bg-chart-5" },
              { h: "75%", color: "bg-chart-1" },
              { h: "100%", color: "bg-chart-2" },
            ].map((bar, i) => (
              <div
                key={`bar-${String(i)}`}
                className={`flex-1 rounded-t-md ${bar.color} opacity-80 transition-all duration-500 hover:opacity-100`}
                style={{ height: bar.h }}
              />
            ))}
          </div>
          <div className="mt-4 flex justify-between text-xs text-muted-foreground">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
            <span>Aug</span>
            <span>Sep</span>
            <span>Oct</span>
            <span>Nov</span>
            <span>Dec</span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-y border-border bg-muted/40 py-24">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-widest text-chart-2">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Everything you need to visualise data
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Live Data Feeds",
                description:
                  "Connect to SQL databases, REST APIs, Google Sheets, or CSV uploads. Charts update in real-time as your data changes.",
              },
              {
                title: "Drag-and-Drop Builder",
                description:
                  "Choose from 50+ chart types — bar, line, scatter, heatmap, treemap, and more. Customise every axis, colour, and label.",
              },
              {
                title: "Interactive Tooltips",
                description:
                  "Hover, click, and drill into any data point. Your stakeholders can explore insights without asking you for exports.",
              },
              {
                title: "Embed Anywhere",
                description:
                  "Drop charts into Notion, Confluence, or your own app with a single embed snippet. Responsive and lightweight.",
              },
              {
                title: "Team Workspaces",
                description:
                  "Share dashboards with view or edit permissions. Comment on charts and tag teammates for async analysis.",
              },
              {
                title: "Scheduled Reports",
                description:
                  "Automatically email PDF or PNG snapshots of your dashboards on a daily, weekly, or monthly cadence.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-border bg-card p-8 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/10 text-chart-2">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="container py-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-chart-2">
          How it works
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          From data to dashboard in three steps
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              step: "01",
              title: "Connect",
              description:
                "Link your data source in seconds — no engineering help needed. We support PostgreSQL, MySQL, BigQuery, and 20+ other connectors.",
            },
            {
              step: "02",
              title: "Design",
              description:
                "Pick a template or start blank. Our drag-and-drop editor lets you customise chart types, colours, layouts, and interactivity.",
            },
            {
              step: "03",
              title: "Share",
              description:
                "Publish your dashboard to the web, embed it in your app, or schedule automated reports for your team's inbox.",
            },
          ].map((item) => (
            <div key={item.step} className="relative rounded-xl border border-border bg-card p-8">
              <span className="absolute -top-4 left-6 rounded-full bg-chart-2 px-3 py-1 text-xs font-bold text-white">
                Step {item.step}
              </span>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-y border-border bg-muted/40 py-24">
        <div className="container">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-chart-2">
            Pricing
          </p>
          <h2 className="mt-3 text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Simple, transparent pricing
          </h2>
          <div className="mx-auto mt-12 grid max-w-3xl gap-8 md:grid-cols-3">
            {[
              {
                name: "Hobby",
                price: "$0",
                period: "/month",
                features: ["5 dashboards", "1 data source", "Community support"],
              },
              {
                name: "Pro",
                price: "$19",
                period: "/month",
                features: [
                  "Unlimited dashboards",
                  "10 data sources",
                  "Priority support",
                  "Embeds",
                ],
                highlighted: true,
              },
              {
                name: "Team",
                price: "$49",
                period: "/month",
                features: [
                  "Everything in Pro",
                  "Unlimited sources",
                  "SSO & audit logs",
                  "Dedicated account manager",
                ],
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl border bg-card p-8 transition-all hover:shadow-md ${
                  plan.highlighted
                    ? "border-chart-2 shadow-lg shadow-chart-2/10"
                    : "border-border"
                }`}
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <svg
                        className="h-4 w-4 shrink-0 text-chart-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 block rounded-full py-2.5 text-center text-sm font-semibold transition-colors ${
                    plan.highlighted
                      ? "bg-chart-2 text-white hover:bg-chart-2/90"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  Get started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <span className="text-lg font-bold tracking-tight text-foreground">
            Chart<span className="text-primary">Mept</span>
          </span>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} ChartMept. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
