import type { CSSProperties } from "react";
import { Syne, Sora } from "next/font/google";
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

const stack = [
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
] as const;

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
  return (
    <div
      className={`${syne.variable} ${sora.variable} ${styles.page} h-screen w-screen overflow-y-auto overscroll-y-contain`}
    >
      <div className={styles.background} aria-hidden="true">
        <div className={styles.vignette} />
        <div className={styles.glowA} />
        <div className={styles.glowB} />
        <div className={styles.grid} />
      </div>

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-16 md:pt-24">
        <header className="max-w-3xl">
          <p className={`${styles.kicker} ${styles.reveal}`} style={{ animationDelay: "0.05s" }}>
            Mobile stack
          </p>
          <h1
            className={`${styles.display} ${styles.reveal} mt-4 text-4xl font-semibold md:text-6xl`}
            style={{ animationDelay: "0.12s" }}
          >
            The ultimate mobile app workflow, distilled.
          </h1>
          <p
            className={`${styles.reveal} mt-5 text-lg text-[var(--muted)] md:text-xl`}
            style={{ animationDelay: "0.2s" }}
          >
            A modern, Stripe-level stack from frontend to analytics. Keep every tool in sync,
            start free, and scale smoothly.
          </p>
        </header>

        <section className="mt-10">
          <div className={styles.flowPanel}>
            <ol className="grid gap-4 md:grid-cols-5">
              {stack.map((item, index) => (
                <li
                  key={item.title}
                  className={`${styles.reveal} relative z-10 flex items-start gap-3`}
                  style={{ animationDelay: `${0.28 + index * 0.06}s` }}
                >
                  <span className={styles.flowBadge} style={{ "--accent": item.accent } as CSSProperties}>
                    {item.step}
                  </span>
                  <div>
                    <p className={`${styles.display} text-base`}>{item.title}</p>
                    <p className="text-sm text-[var(--muted)]">{item.summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="relative mt-16">
          <div className={styles.timelineLine} aria-hidden="true" />
          <div className="space-y-10">
            {stack.map((section, index) => (
              <article
                key={section.title}
                className={`relative pl-16 ${styles.reveal}`}
                style={
                  {
                    "--accent": section.accent,
                    animationDelay: `${0.4 + index * 0.08}s`,
                  } as CSSProperties
                }
              >
                <div className={styles.stepMarker}>{section.step}</div>
                <div className={styles.sectionCard}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className={styles.tag}>Stack Stage</span>
                    <h2 className={`${styles.display} text-2xl md:text-3xl`}>{section.title}</h2>
                  </div>
                  <p className="mt-3 text-base text-[var(--muted)]">{section.detail}</p>

                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {section.tools.map((tool) => (
                      <a
                        key={tool.name}
                        href={tool.url}
                        target="_blank"
                        rel="noreferrer"
                        className={styles.toolCard}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className={`${styles.display} text-lg`}>{tool.name}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                              {tool.label}
                            </p>
                          </div>
                          {tool.tag ? <span className={styles.tag}>{tool.tag}</span> : null}
                        </div>
                        <p className="mt-3 text-sm text-[var(--muted)]">{tool.description}</p>
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className={`${styles.sectionCard} ${styles.reveal}`} style={{ animationDelay: "0.82s" }}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className={`${styles.display} text-2xl md:text-3xl`}>Operating principles</h2>
              <p className="text-sm text-[var(--muted)]">Start free. Ship fast. Measure everything.</p>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {principles.map((item) => (
                <div key={item.title} className={styles.toolCard}>
                  <p className={`${styles.display} text-lg`}>{item.title}</p>
                  <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
