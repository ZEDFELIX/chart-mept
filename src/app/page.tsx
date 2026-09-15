import {
  ArrowRight,
  Bell,
  Check,
  Database,
  Gauge,
  Globe,
  Layers,
  MousePointer2,
  Share2,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";

const LOGOS = [
  "Northwind",
  "Hexcore",
  "Pixelate",
  "Orbital",
  "Vanta",
  "Nimbus",
  "Lumen",
  "Kite",
];

const STATS = [
  { value: "12B+", label: "Data points rendered daily", grad: "text-chart-1" },
  { value: "99.99%", label: "Uptime SLA", grad: "text-chart-2" },
  { value: "40K+", label: "Teams shipping dashboards", grad: "text-chart-3" },
  { value: "120ms", label: "Median query time", grad: "text-chart-4" },
];

const TABS = ["Revenue", "Funnels", "Retention", "Realtime"];

const AREA_PATH =
  "M0,210C60,200 80,150 130,160C170,168 200,120 250,120C300,120 320,74 380,86C430,96 460,60 510,52C560,44 600,70 640,42";

const DASH_BARS = [
  { h: 34, hot: false },
  { h: 52, hot: false },
  { h: 48, hot: false },
  { h: 61, hot: false },
  { h: 58, hot: false },
  { h: 76, hot: false },
  { h: 70, hot: false },
  { h: 88, hot: true },
  { h: 64, hot: false },
  { h: 82, hot: false },
  { h: 74, hot: false },
  { h: 92, hot: true },
  { h: 70, hot: false },
  { h: 96, hot: false },
];

const STEPS = [
  {
    n: "01",
    title: "Connect",
    desc: "Link PostgreSQL, BigQuery, Sheets, or any REST API — in seconds, no engineering help required.",
    Icon: Database,
  },
  {
    n: "02",
    title: "Compose",
    desc: "Drag and drop from 50+ chart types. Style every axis, colour, and label until it reads beautifully.",
    Icon: SlidersHorizontal,
  },
  {
    n: "03",
    title: "Share",
    desc: "Publish to the web, embed in your app, or schedule automated reports to your team's inbox.",
    Icon: Share2,
  },
];

const PLANS = [
  {
    name: "Hobby",
    price: "$0",
    blurb: "For side projects and exploration.",
    features: [
      "5 dashboards",
      "1 data source",
      "Community support",
      "7-day history",
    ],
    featured: false,
  },
  {
    name: "Pro",
    price: "$19",
    blurb: "For teams shipping real products.",
    features: [
      "Unlimited dashboards",
      "10 data sources",
      "Embeds & scheduled reports",
      "Priority support",
    ],
    featured: true,
  },
  {
    name: "Scale",
    price: "$49",
    blurb: "For orgs that live in the data.",
    features: [
      "Everything in Pro",
      "Unlimited sources",
      "SSO & audit logs",
      "Dedicated engineer",
    ],
    featured: false,
  },
];

const GRID_Y = [40, 90, 140, 190, 240];
const GRID_X = [80, 160, 240, 320, 400, 480, 560];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-background text-foreground">
      {/* ─── NAV ─── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
        <nav
          aria-label="Main"
          className="container flex h-16 items-center justify-between"
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-chart-1/15 ring-1 ring-chart-1/30">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 17l5-6 4 3 6-8"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span className="font-display text-lg font-bold tracking-tight">
              Chart<span className="text-chart-1">Mept</span>
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how" className="transition-colors hover:text-foreground">
              How it works
            </a>
            <a
              href="#pricing"
              className="transition-colors hover:text-foreground"
            >
              Pricing
            </a>
          </div>

          <a
            href="#pricing"
            className="rounded-full bg-chart-1 px-5 py-2 text-sm font-semibold text-white transition-all hover:shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
          >
            Start for free
          </a>
        </nav>
      </header>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div
          className="pointer-events-none absolute inset-0 bg-dots mask-fade-b"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-[-16rem] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(59,130,246,0.18),transparent)] blur-2xl"
          aria-hidden="true"
        />

        <div className="container relative pb-24 pt-20 text-center md:pb-32 md:pt-28">
          <div
            className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-muted-foreground animate-rise"
            style={{ animationDelay: "0.05s" }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-live"
              aria-hidden="true"
            />
            v2.0 is live — now in public beta
          </div>

          <h1
            className="mx-auto mt-7 max-w-4xl font-display text-[clamp(2.6rem,7vw,6rem)] font-bold leading-[1.02] tracking-[-0.035em] animate-rise"
            style={{ animationDelay: "0.12s" }}
          >
            Turn raw data into{" "}
            <span className="text-gradient-data">living dashboards</span>
          </h1>

          <p
            className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground animate-rise"
            style={{ animationDelay: "0.18s" }}
          >
            Connect any data source, drag in a chart, and ship an interactive
            dashboard in minutes. No code, no friction — just insight.
          </p>

          <div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row animate-rise"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-full bg-chart-1 px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(59,130,246,0.4)]"
            >
              Start for free{" "}
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <a
              href="#how"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
            >
              See how it works
            </a>
          </div>

          <p
            className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground animate-rise"
            style={{ animationDelay: "0.3s" }}
          >
            Free forever plan &middot; No card required &middot; SOC 2 ready
          </p>

          {/* ─── DASHBOARD MOCKUP ─── */}
          <div
            className="relative mx-auto mt-16 max-w-5xl text-left animate-rise"
            style={{ animationDelay: "0.35s" }}
          >
            <div
              className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(59,130,246,0.2),transparent)] blur-2xl"
              aria-hidden="true"
            />

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-card shadow-2xl shadow-black/40">
              {/* titlebar */}
              <div className="flex items-center justify-between border-b border-white/5 px-5 py-3">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
                    acme/insights &middot; overview
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-chart-2">
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-live"
                      aria-hidden="true"
                    />
                    Live
                  </span>
                  <span className="hidden h-6 w-6 items-center justify-center rounded-full bg-chart-1/15 font-mono text-[10px] font-semibold text-chart-1 md:flex">
                    JD
                  </span>
                </div>
              </div>

              {/* tabs */}
              <div className="flex items-center gap-2 border-b border-white/5 px-5 py-2.5">
                {TABS.map((t, i) => (
                  <span
                    key={t}
                    className={`rounded-md px-2.5 py-1 text-xs font-medium ${
                      i === 0
                        ? "bg-white/10 text-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid lg:grid-cols-[minmax(0,1fr)_300px]">
                {/* main chart */}
                <div className="relative p-5 md:p-7">
                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        Gross revenue
                      </p>
                      <p className="mt-1 text-3xl font-semibold tracking-tight">
                        $128,420{" "}
                        <span className="text-sm font-semibold text-chart-2">
                          &uarr; 12.4%
                        </span>
                      </p>
                    </div>
                    <div className="hidden items-center gap-2 sm:flex">
                      {["30D", "90D", "1Y"].map((r, i) => (
                        <span
                          key={r}
                          className={`rounded-md border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                            i === 0
                              ? "border-chart-1/40 bg-chart-1/10 text-chart-1"
                              : "border-white/10 text-muted-foreground"
                          }`}
                        >
                          {r}
                        </span>
                      ))}
                    </div>
                  </div>

                  <svg
                    viewBox="0 0 640 280"
                    preserveAspectRatio="none"
                    className="mt-6 h-52 w-full md:h-60"
                    role="img"
                    aria-label="Gross revenue trend chart rising over six months"
                  >
                    <defs>
                      <linearGradient
                        id="cm-area"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="280"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop
                          offset="0%"
                          stopColor="hsl(var(--chart-1))"
                          stopOpacity="0.35"
                        />
                        <stop
                          offset="100%"
                          stopColor="hsl(var(--chart-1))"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                    {GRID_Y.map((y) => (
                      <line
                        key={`gy-${y}`}
                        x1="0"
                        x2="640"
                        y1={y}
                        y2={y}
                        stroke="rgba(148,163,184,0.08)"
                        strokeWidth="1"
                      />
                    ))}
                    {GRID_X.map((x) => (
                      <line
                        key={`gx-${x}`}
                        x1={x}
                        x2={x}
                        y1="0"
                        y2="280"
                        stroke="rgba(148,163,184,0.08)"
                        strokeWidth="1"
                      />
                    ))}
                    <path
                      d={`${AREA_PATH} L640,280 L0,280 Z`}
                      fill="url(#cm-area)"
                      className="animate-area"
                    />
                    <path
                      d={`${AREA_PATH} C660,36 680,48 720,66`}
                      fill="none"
                      stroke="hsl(var(--chart-1))"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeDasharray="5 6"
                      strokeLinecap="round"
                    />
                    <path
                      d={AREA_PATH}
                      fill="none"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      pathLength="1"
                      className="animate-line"
                    />
                    <circle
                      cx="250"
                      cy="120"
                      r="4"
                      fill="hsl(var(--background))"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth="2.5"
                    />
                    <circle
                      cx="640"
                      cy="42"
                      r="4"
                      fill="hsl(var(--chart-2))"
                      stroke="hsl(var(--background))"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <div className="mt-2 flex justify-between font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                    {MONTHS.map((m) => (
                      <span key={m}>{m}</span>
                    ))}
                  </div>

                  <div className="absolute right-6 top-24 hidden rounded-lg border border-white/10 bg-black/70 px-3 py-2 backdrop-blur md:block">
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      Jun 12
                    </p>
                    <p className="text-sm font-semibold">
                      $48,240{" "}
                      <span className="text-chart-2">&uarr; 4.1%</span>
                    </p>
                  </div>
                </div>

                {/* KPI column */}
                <div className="grid grid-cols-3 gap-px bg-white/10 border-t border-white/5 lg:grid-cols-1 lg:border-l lg:border-t-0">
                  <div className="bg-card px-5 py-5">
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <Gauge className="h-3 w-3 text-chart-1" aria-hidden="true" />
                      Revenue / MRR
                    </p>
                    <p className="mt-3 text-2xl font-bold tracking-tight">
                      $128.4K{" "}
                      <span className="align-middle text-sm font-semibold text-chart-2">
                        &uarr; 12%
                      </span>
                    </p>
                    <svg
                      viewBox="0 0 200 56"
                      preserveAspectRatio="none"
                      className="mt-2 h-14 w-full"
                      aria-hidden="true"
                    >
                      <path
                        d="M0,40C40,36 60,20 90,26C120,32 150,12 200,10 L200,56 L0,56 Z"
                        fill="hsl(var(--chart-2))"
                        fillOpacity="0.18"
                      />
                      <path
                        d="M0,40C40,36 60,20 90,26C120,32 150,12 200,10"
                        fill="none"
                        stroke="hsl(var(--chart-2))"
                        strokeWidth="2"
                        strokeLinecap="round"
                        pathLength="1"
                        className="animate-line"
                      />
                    </svg>
                    <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                      vs $114.6K last month
                    </p>
                  </div>

                  <div className="flex flex-col bg-card px-5 py-5">
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <Sparkles className="h-3 w-3 text-chart-3" aria-hidden="true" />
                      Conversion
                    </p>
                    <div
                      className="relative mt-3 h-20 w-20 rounded-full"
                      style={{
                        background:
                          "conic-gradient(hsl(var(--chart-3)) 0% 64%, rgba(148,163,184,0.12) 64% 100%)",
                      }}
                    >
                      <div className="absolute inset-[7px] flex items-center justify-center rounded-full bg-card text-sm font-bold">
                        3.2%
                      </div>
                    </div>
                    <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                      checkout funnel
                    </p>
                  </div>

                  <div className="flex flex-col bg-card px-5 py-5">
                    <p className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      <Database className="h-3 w-3 text-chart-4" aria-hidden="true" />
                      Sessions
                    </p>
                    <div className="mt-3 flex h-14 items-end gap-1">
                      {[35, 55, 40, 70, 52, 85, 64].map((h, i) => (
                        <div
                          key={`s-${i}`}
                          className="flex-1 rounded-sm bg-chart-4/70 animate-bar-grow"
                          style={{
                            height: `${h}%`,
                            animationDelay: `${i * 70}ms`,
                          }}
                        />
                      ))}
                    </div>
                    <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                      sessions / sec
                    </p>
                  </div>
                </div>
              </div>

              {/* bottom bar chart */}
              <div className="border-t border-white/5 px-5 py-4 md:px-7">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Daily active users
                  </p>
                  <span className="font-mono text-[10px] text-chart-2">
                    &uarr; 18% WoW
                  </span>
                </div>
                <div className="mt-3 flex h-16 items-end gap-1.5">
                  {DASH_BARS.map((b, i) => (
                    <div
                      key={`b-${i}`}
                      className={`flex-1 rounded-t ${
                        b.hot ? "bg-chart-1" : "bg-chart-1/25"
                      } animate-bar-grow`}
                      style={{
                        height: `${b.h}%`,
                        animationDelay: `${i * 55}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── LOGO MARQUEE ─── */}
      <section className="border-b border-white/10 py-9">
        <p className="mb-6 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Trusted by data teams at
        </p>
        <div className="flex overflow-hidden mask-fade-x">
          <div className="flex w-max shrink-0 animate-marquee items-center gap-14 pr-14">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex shrink-0 items-center gap-14"
                aria-hidden={i === 1}
              >
                {LOGOS.map((l) => (
                  <span
                    key={l}
                    className="flex items-center gap-2.5 font-display text-lg font-bold uppercase tracking-[0.18em] text-white/35"
                  >
                    <span
                      className="h-2 w-2 rotate-45 rounded-[3px] bg-white/25"
                      aria-hidden="true"
                    />
                    {l}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="border-b border-white/10 bg-white/[0.06]">
        <div className="container grid grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-background px-6 py-12 text-center md:px-10"
            >
              <p
                className={`font-display text-4xl font-bold tracking-tight md:text-5xl ${s.grad}`}
              >
                {s.value}
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="container scroll-mt-20 py-24 md:py-32">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Why ChartMept
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight md:text-6xl">
              Everything you need to{" "}
              <span className="text-gradient-data">see the signal.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm text-muted-foreground">
            Built for analysts who care about the last 10%, not the first 50%.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Live data feeds */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/12 text-chart-1">
              <Database className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Live Data Feeds</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              SQL, REST, Sheets, or CSV. Charts refresh in real time the
              instant your data changes.
            </p>
            <div className="relative mt-6 h-24">
              <svg
                viewBox="0 0 300 96"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="cm-feat-a"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="hsl(var(--chart-1))"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M0,72C40,68 60,44 100,52C140,60 160,28 200,24C240,20 270,36 300,16 L300,96 L0,96 Z"
                  fill="url(#cm-feat-a)"
                />
                <path
                  d="M0,72C40,68 60,44 100,52C140,60 160,28 200,24C240,20 270,36 300,16"
                  fill="none"
                  stroke="hsl(var(--chart-1))"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  pathLength="1"
                  className="animate-line"
                />
              </svg>
              <span className="absolute right-2 top-2 flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-2 py-0.5 font-mono text-[9px] uppercase tracking-widest text-chart-1 backdrop-blur">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-chart-1 animate-live"
                  aria-hidden="true"
                />
                live
              </span>
            </div>
          </div>

          {/* Drag & drop builder */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-2/12 text-chart-2">
              <SlidersHorizontal className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Drag-and-Drop Builder</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Bar, line, pie, funnel, heatmap — 50+ chart types, styled in
              seconds, no query fiddling.
            </p>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                ["Bar", "hsl(var(--chart-1))"],
                ["Line", "hsl(var(--chart-2))"],
                ["Pie", "hsl(var(--chart-3))"],
                ["Funnel", "hsl(var(--chart-4))"],
                ["Heat", "hsl(var(--chart-5))"],
                ["Gauge", "hsl(var(--chart-1))"],
              ].map(([name, color]) => (
                <div
                  key={name}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] py-2 text-[11px] font-medium text-muted-foreground"
                >
                  <span
                    className="h-2 w-2 rounded-[3px]"
                    style={{ backgroundColor: color }}
                    aria-hidden="true"
                  />
                  {name}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive tooltips */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-3/12 text-chart-3">
              <MousePointer2 className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Interactive Tooltips</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Hover, click, and drill into any point. Stakeholders explore
              insights — not export files.
            </p>
            <div className="relative mt-6 h-16">
              <svg
                viewBox="0 0 300 64"
                preserveAspectRatio="none"
                className="h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M0,40 C70,44 140,20 300,26 L300,64 L0,64 Z"
                  fill="rgba(139,92,246,0.14)"
                />
                <path
                  d="M0,40 C70,44 140,20 300,26"
                  fill="none"
                  stroke="hsl(var(--chart-3))"
                  strokeOpacity="0.5"
                  strokeWidth="1.5"
                  pathLength="1"
                  className="animate-line"
                />
                <circle
                  cx="140"
                  cy="26"
                  r="4"
                  fill="hsl(var(--chart-3))"
                  stroke="hsl(var(--background))"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-md border border-white/10 bg-black/80 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-foreground backdrop-blur">
                &uarr; $4,820
              </span>
            </div>
          </div>

          {/* Embed anywhere */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-4/12 text-chart-4">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Embed Anywhere</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              One snippet drops charts into Notion, Confluence, or your own app.
              Responsive and lightweight.
            </p>
            <div className="mt-6 space-y-2">
              <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] text-muted-foreground">
                &lt;iframe src=&quot;chart.mept/export/9f2a&quot;&gt;
              </div>
              <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2 font-mono text-[10px] text-muted-foreground">
                mode=&quot;dark&quot; &middot; live &middot; h-96
              </div>
            </div>
          </div>

          {/* Team workspaces */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-5/12 text-chart-5">
              <Layers className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Team Workspaces</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              View or edit permissions, comments on charts, and async analysis
              with your whole org.
            </p>
            <div className="mt-6 flex items-center">
              <div className="flex -space-x-2.5">
                {[
                  ["AL", "hsl(var(--chart-1))"],
                  ["MK", "hsl(var(--chart-2))"],
                  ["JD", "hsl(var(--chart-3))"],
                  ["SR", "hsl(var(--chart-4))"],
                ].map(([ini, color]) => (
                  <span
                    key={ini}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card font-mono text-[10px] font-semibold text-background"
                    style={{ backgroundColor: color }}
                  >
                    {ini}
                  </span>
                ))}
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-card bg-white/10 font-mono text-[10px] text-muted-foreground">
                  +12
                </span>
              </div>
              <span className="ml-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                4 of 5 online
              </span>
            </div>
          </div>

          {/* Scheduled reports */}
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 transition-colors hover:border-white/20">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-chart-1/12 text-chart-1">
              <Bell className="h-5 w-5" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">Scheduled Reports</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Automatically email PDF or PNG snapshots on a daily, weekly, or
              monthly cadence.
            </p>
            <div className="mt-6">
              <div className="flex items-center justify-between gap-1">
                {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                  <div key={`d-${i}`} className="flex-1 text-center">
                    <p className="font-mono text-[9px] uppercase text-muted-foreground">
                      {d}
                    </p>
                    <div
                      className={`mt-1 h-8 rounded ${
                        i === 3
                          ? "bg-chart-4/25 ring-1 ring-inset ring-chart-4/60"
                          : "bg-white/5"
                      }`}
                    />
                  </div>
                ))}
              </div>
              <p className="mt-2 font-mono text-[10px] text-muted-foreground">
                Weekly digest — every Thursday 09:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section
        id="how"
        className="relative scroll-mt-20 overflow-hidden border-y border-white/10 bg-card/40"
      >
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[700px] -translate-x-1/2 bg-dots mask-fade-b opacity-60"
          aria-hidden="true"
        />
        <div className="container relative py-24 md:py-32">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              How it works
            </p>
            <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
              From data to decision in three steps
            </h2>
          </div>

          <div className="relative mt-14">
            <div
              className="absolute left-[16%] right-[16%] top-[44px] hidden border-t border-dashed border-white/10 md:block"
              aria-hidden="true"
            />
            <div className="grid gap-6 md:grid-cols-3">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="relative rounded-2xl border border-white/10 bg-background p-7"
                >
                  <span className="font-display text-5xl font-bold text-outline-soft">
                    {s.n}
                  </span>
                  <h3 className="mt-4 flex items-center gap-2 text-xl font-semibold">
                    <s.Icon
                      className="h-4 w-4 text-chart-2"
                      aria-hidden="true"
                    />
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section
        id="pricing"
        className="container scroll-mt-20 py-24 md:py-32"
      >
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Pricing
          </p>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
            Start free. Scale when{" "}
            <span className="text-gradient-data">you&apos;re ready.</span>
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={
                p.featured
                  ? "relative rounded-2xl bg-gradient-to-b from-chart-1 via-chart-2/50 to-transparent p-px shadow-[0_20px_80px_rgba(34,211,238,0.12)]"
                  : "relative rounded-2xl border border-white/10 bg-card"
              }
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-chart-1 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">
                  Most popular
                </span>
              )}
              <div
                className={`flex h-full flex-col p-7 ${
                  p.featured ? "rounded-[calc(1rem-1px)] bg-card" : ""
                }`}
              >
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight">
                    {p.price}
                  </span>
                  {p.price !== "$0" && (
                    <span className="text-sm text-muted-foreground">/month</span>
                  )}
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2.5 text-sm text-muted-foreground"
                    >
                      <Check
                        className="h-4 w-4 shrink-0 text-chart-2"
                        aria-hidden="true"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#pricing"
                  className={`mt-8 block rounded-full py-2.5 text-center text-sm font-semibold transition-all ${
                    p.featured
                      ? "bg-chart-1 text-white hover:shadow-[0_8px_30px_rgba(59,130,246,0.35)]"
                      : "border border-white/15 text-foreground hover:bg-white/5"
                  }`}
                >
                  {p.price === "$0" ? "Start for free" : "Get started"}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="container pb-24 md:pb-32">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-chart-1/25 via-card to-chart-3/20 px-8 py-20 text-center md:py-28">
          <div
            className="pointer-events-none absolute inset-0 bg-grid-faint opacity-70"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-0 h-64 w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(139,92,246,0.2),transparent)] blur-2xl"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Measure what matters
            </p>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight md:text-6xl">
              Stop guessing.{" "}
              <span className="text-gradient-data">Start measuring.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-muted-foreground md:text-lg">
              Join 40,000+ teams turning scattered data into clear decisions.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-background transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(255,255,255,0.25)]"
              >
                Start for free{" "}
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/5"
              >
                Book a demo
              </a>
            </div>
            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Free forever plan &middot; No card required
            </p>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/10">
        <div className="container py-14">
          <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
            <div>
              <span className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-chart-1/15 ring-1 ring-chart-1/30">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3.5 w-3.5"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M3 17l5-6 4 3 6-8"
                      stroke="hsl(var(--chart-1))"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-display text-lg font-bold tracking-tight">
                  Chart<span className="text-chart-1">Mept</span>
                </span>
              </span>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground leading-relaxed">
                The analytics platform that turns raw data into living
                dashboards your whole team actually reads.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  SOC 2 Type II
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  GDPR
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
                Product
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="transition-colors hover:text-foreground"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#how"
                    className="transition-colors hover:text-foreground"
                  >
                    How it works
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="transition-colors hover:text-foreground"
                  >
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
                Company
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-foreground">
                Resources
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Docs
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    API reference
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-foreground">
                    Templates
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              © {new Date().getFullYear()} ChartMept, Inc.
            </p>
            <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              <span
                className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-live"
                aria-hidden="true"
              />
              All systems operational
            </span>
            <a
              href="#top"
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              Back to top &uarr;
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}