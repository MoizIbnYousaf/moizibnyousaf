import type { CSSProperties } from "react";
import { Syne, Sora } from "next/font/google";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import styles from "./page.module.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Mobile Stack | moizibnyousaf.com",
  description:
    "A modern mobile app workflow covering frontend, backend, development, marketing, and analytics.",
};

type Tool = {
  name: string;
  label: string;
  url: string;
  description: string;
  tag?: string;
};

type StackStage = {
  step: string;
  title: string;
  summary: string;
  detail: string;
  accent: string;
  tools: Tool[];
};

const stack: StackStage[] = [
  {
    step: "01",
    title: "Frontend",
    summary: "Ship iOS, Android, and web from one codebase.",
    detail: "Cross-platform build with polished UI, motion, and consistent design tokens.",
    accent: "#0ea5e9",
    tools: [
      {
        name: "Expo",
        label: "expo.dev",
        url: "https://expo.dev",
        description: "EAS builds, OTA updates, and native modules without the setup pain.",
      },
      {
        name: "NativeWind",
        label: "nativewind.dev",
        url: "https://nativewind.dev",
        description: "Tailwind-style utilities to keep styling disciplined and fast.",
      },
      {
        name: "LottieFiles",
        label: "lottiefiles.com",
        url: "https://lottiefiles.com",
        description: "Lightweight animations for moments of delight.",
      },
      {
        name: "React Native Reanimated",
        label: "docs.swmansion.com",
        url: "https://docs.swmansion.com/react-native-reanimated",
        description: "High-performance gestures and complex interactions.",
      },
    ],
  },
  {
    step: "02",
    title: "Backend",
    summary: "Realtime data, auth, payments, and AI.",
    detail: "TypeScript-first infrastructure with best-in-class services for growth.",
    accent: "#14b8a6",
    tools: [
      {
        name: "Convex",
        label: "convex.dev",
        url: "https://convex.dev",
        description: "Database, functions, and realtime sync in one TypeScript backend.",
      },
      {
        name: "Clerk",
        label: "clerk.com",
        url: "https://clerk.com",
        description: "Production-grade auth with polished Expo integrations.",
      },
      {
        name: "Resend",
        label: "resend.com",
        url: "https://resend.com",
        description: "Transactional and marketing email with strong developer experience.",
      },
      {
        name: "Loops",
        label: "loops.so",
        url: "https://loops.so",
        description: "Marketing-focused email alternative.",
        tag: "Honorable",
      },
      {
        name: "Superwall",
        label: "superwall.com",
        url: "https://superwall.com",
        description: "Paywalls, receipts, entitlements, and subscription flow.",
      },
      {
        name: "RevenueCat",
        label: "revenuecat.com",
        url: "https://www.revenuecat.com",
        description: "Alternative IAP platform with deep integrations.",
        tag: "Honorable",
      },
      {
        name: "OpenAI",
        label: "platform.openai.com",
        url: "https://platform.openai.com",
        description: "Text, image, and voice models for AI features.",
      },
    ],
  },
  {
    step: "03",
    title: "Development",
    summary: "Accelerate building, design, and focus.",
    detail: "AI-accelerated workflow for shipping faster without burning out.",
    accent: "#f59e0b",
    tools: [
      {
        name: "Cursor",
        label: "cursor.com",
        url: "https://cursor.com",
        description: "AI-first IDE for high-velocity shipping.",
      },
      {
        name: "Claude Code",
        label: "code.claude.com",
        url: "https://code.claude.com",
        description: "Terminal-based AI for greenfield builds.",
      },
      {
        name: "Figma",
        label: "figma.com",
        url: "https://figma.com",
        description: "Branding, icons, and App Store graphics.",
      },
      {
        name: "Willow Voice",
        label: "willowvoice.com",
        url: "https://willowvoice.com",
        description: "Fast speech-to-text for prompting.",
      },
      {
        name: "Ebb",
        label: "ebb.cool",
        url: "https://ebb.cool",
        description: "Distraction blocker for deep work.",
      },
      {
        name: "Lock In Playlist",
        label: "music.apple.com",
        url: "https://music.apple.com/us/playlist/lock-in",
        description: "Focus soundtrack while building.",
      },
    ],
  },
  {
    step: "04",
    title: "Marketing",
    summary: "Landing pages, content, and paid growth.",
    detail: "Distribution stack to launch, rank, and scale acquisition.",
    accent: "#0f766e",
    tools: [
      {
        name: "Vercel + Next.js",
        label: "vercel.com",
        url: "https://vercel.com",
        description: "Landing page and blog with fast iteration.",
      },
      {
        name: "Apple Search Ads",
        label: "ads.apple.com",
        url: "https://ads.apple.com",
        description: "High-intent paid acquisition channel.",
      },
      {
        name: "Sanity",
        label: "sanity.io",
        url: "https://sanity.io",
        description: "CMS for shipping SEO content quickly.",
      },
      {
        name: "Pallyy",
        label: "pallyy.com",
        url: "https://pallyy.com",
        description: "Social scheduling across platforms.",
      },
      {
        name: "Screen Studio",
        label: "screen.studio",
        url: "https://screen.studio",
        description: "Crisp app and desktop recordings.",
      },
      {
        name: "Meta Ads",
        label: "adsmanager.facebook.com",
        url: "https://adsmanager.facebook.com",
        description: "Scalable paid social, best with a solid MMP.",
      },
    ],
  },
  {
    step: "05",
    title: "Analytics",
    summary: "Track product and growth loops.",
    detail: "Measure behavior, attribution, and store search performance.",
    accent: "#2563eb",
    tools: [
      {
        name: "PostHog",
        label: "posthog.com",
        url: "https://posthog.com",
        description: "Product analytics with modern feature depth.",
      },
      {
        name: "AppsFlyer",
        label: "appsflyer.com",
        url: "https://www.appsflyer.com",
        description: "Attribution and MMP tooling for paid growth.",
      },
      {
        name: "AppTweak",
        label: "apptweak.com",
        url: "https://apptweak.com",
        description: "App Store optimization insights.",
      },
    ],
  },
];

const principles = [
  {
    title: "Start free, scale later",
    description: "Most tools have generous free tiers so you can validate before you pay.",
  },
  {
    title: "One language, fewer context switches",
    description: "TypeScript end-to-end keeps velocity high and glue code low.",
  },
  {
    title: "Build, launch, measure",
    description: "Marketing and analytics are built into the workflow, not bolted on later.",
  },
] as const;

export default function MobileStackPage() {
  const toolCount = stack.reduce((total, stage) => total + stage.tools.length, 0);
  const stageCount = stack.length;
  const stageSummaries = stack.map((stage) => ({
    title: stage.title,
    step: stage.step,
    accent: stage.accent,
    toolCount: stage.tools.length,
    summary: stage.summary,
  }));
  return (
    <div className={`${syne.variable} ${sora.variable} ${styles.page} font-sans`}>
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.orbA} />
        <div className={styles.orbB} />
        <div className={styles.grid} />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <div className={styles.fadeUp} style={{ animationDelay: "0.05s" }}>
            <Badge className="mb-4 bg-white/80 text-slate-600">Mobile Stack</Badge>
            <h1 className="text-4xl font-semibold tracking-tight text-slate-950 md:text-6xl">
              The world-class mobile stack, curated for elite shipping.
            </h1>
            <p className="mt-5 text-lg text-slate-600 md:text-xl">
              A premium workflow from frontend to analytics. Ship faster, monetize earlier, and scale
              with absolute clarity.
            </p>
          </div>

          <Card className={`${styles.fadeUp} border-slate-200/70`} style={{ animationDelay: "0.15s" }}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge className="bg-slate-900 text-white">Operating Principles</Badge>
                <Badge variant="outline" className="border-slate-200 text-slate-500">
                  Toolkit
                </Badge>
              </div>
              <CardTitle className="text-2xl font-semibold text-slate-900">Build with intent</CardTitle>
              <CardDescription>
                Every tool earns its seat. Keep the stack lean, aligned, and relentlessly useful.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {principles.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
              ))}
              <div className="grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-slate-900">{stageCount.toString().padStart(2, "0")}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Stages</p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-slate-900">{toolCount.toString().padStart(2, "0")}</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Tools</p>
                </div>
                <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                  <p className="text-2xl font-semibold text-slate-900">TypeScript</p>
                  <p className="text-xs uppercase tracking-[0.25em] text-slate-500">Core</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <Card className={`${styles.fadeUp} relative mt-10 overflow-hidden`} style={{ animationDelay: "0.22s" }}>
          <div className="absolute left-6 right-6 top-1/2 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          <CardContent className="grid gap-4 md:grid-cols-5">
            {stageSummaries.map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold"
                  style={{ borderColor: item.accent, color: item.accent }}
                >
                  {item.step}
                </span>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                  <p className="text-xs text-slate-500">{item.summary}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <section className="mt-12 grid gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="space-y-6">
            <Card className={`${styles.fadeUp} border-slate-200/70`} style={{ animationDelay: "0.28s" }}>
              <CardHeader>
                <Badge className="bg-white/80 text-slate-600">Stack Overview</Badge>
                <CardTitle className="text-xl text-slate-900">Full workflow</CardTitle>
                <CardDescription>All stages aligned from build to growth.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {stageSummaries.map((item) => (
                  <div key={item.title} className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3">
                    <span
                      className="flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold"
                      style={{ borderColor: item.accent, color: item.accent }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                      <p className="text-xs text-slate-500">{item.toolCount} tools</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className={`${styles.fadeUp} border-slate-200/70`} style={{ animationDelay: "0.32s" }}>
              <CardHeader>
                <Badge className="bg-slate-900 text-white">Cadence</Badge>
                <CardTitle className="text-xl text-slate-900">Shipping loop</CardTitle>
                <CardDescription>Build fast. Launch clean. Measure relentlessly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-600">
                <p>Keep the stack intentionally small while scaling the impact.</p>
                <p>Every tool should save time, reduce risk, or grow revenue.</p>
              </CardContent>
            </Card>
          </aside>

          <div className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className={`${styles.fadeUp} border-slate-200/70`} style={{ animationDelay: "0.34s" }}>
                <CardHeader>
                  <Badge className="bg-white/80 text-slate-600">Coverage</Badge>
                  <CardTitle className="text-xl text-slate-900">Frontend → Analytics</CardTitle>
                  <CardDescription>
                    Everything needed to build, monetize, and grow a modern mobile product.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className={`${styles.fadeUp} border-slate-200/70`} style={{ animationDelay: "0.36s" }}>
                <CardHeader>
                  <Badge className="bg-white/80 text-slate-600">Speed</Badge>
                  <CardTitle className="text-xl text-slate-900">AI-first workflow</CardTitle>
                  <CardDescription>
                    TypeScript end-to-end with realtime sync and developer-friendly tooling.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="grid gap-6">
              {stack.map((section, index) => (
                <Card
                  key={section.title}
                  className={`${styles.fadeUp} border-l-4 border-slate-200/70`}
                  style={{ animationDelay: `${0.4 + index * 0.08}s`, borderLeftColor: section.accent }}
                >
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-white/80 text-slate-600">Stack Stage</Badge>
                        <CardTitle className="text-2xl text-slate-900">{section.title}</CardTitle>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-white/80 text-slate-600">{section.step}</Badge>
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                          {section.tools.length} tools
                        </span>
                      </div>
                    </div>
                    <CardDescription className="text-sm text-slate-600">{section.detail}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {section.tools.map((tool) => (
                        <a
                          key={tool.name}
                          href={tool.url}
                          target="_blank"
                          rel="noreferrer"
                          className="group rounded-2xl border border-slate-200/70 bg-white/80 p-4 transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_18px_45px_rgba(15,23,42,0.12)]"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <p className="text-base font-semibold text-slate-900">{tool.name}</p>
                              <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{tool.label}</p>
                            </div>
                            {tool.tag ? (
                              <Badge className="bg-slate-900 text-white">{tool.tag}</Badge>
                            ) : null}
                          </div>
                          <p className="mt-3 text-sm text-slate-600">{tool.description}</p>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
