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
  const toolCount = stack.reduce((total, stage) => total + stage.tools.length, 0);
  return (
    <div className={`${syne.variable} ${sora.variable} ${styles.page} w-full`}>
      <div className={styles.background} aria-hidden="true">
        <div className={styles.vignette} />
        <div className={styles.glowA} />
        <div className={styles.glowB} />
        <div className={styles.grid} />
      </div>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div>
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
          </div>

          <div className={`${styles.heroPanel} ${styles.reveal}`} style={{ animationDelay: "0.26s" }}>
            <div className="flex items-center justify-between">
              <p className={styles.kicker}>Operating principles</p>
              <span className={styles.tag}>Toolkit</span>
            </div>
            <div className="mt-4 space-y-3">
              {principles.map((item) => (
                <div key={item.title}>
                  <p className={`${styles.display} text-base`}>{item.title}</p>
                  <p className="text-sm text-[var(--muted)]">{item.description}</p>
                </div>
              ))}
            </div>
            <div className={styles.statGrid}>
              <div className={styles.statCard}>
                <p className={styles.statValue}>05</p>
                <p className={styles.statLabel}>Stages</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>{toolCount.toString().padStart(2, "0")}</p>
                <p className={styles.statLabel}>Tools</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>TypeScript</p>
                <p className={styles.statLabel}>Core</p>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.flowRail} ${styles.reveal}`} style={{ animationDelay: "0.32s" }}>
          {stack.map((item) => (
            <div key={item.title} className={styles.flowItem}>
              <span className={styles.flowBadge} style={{ "--accent": item.accent } as CSSProperties}>
                {item.step}
              </span>
              <div>
                <p className={`${styles.display} text-sm`}>{item.title}</p>
                <p className="text-xs text-[var(--muted)]">{item.summary}</p>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.stageGrid}>
          {stack.map((section, index) => (
            <article
              key={section.title}
              className={`${styles.stageCard} ${styles.reveal}`}
              style={{ "--accent": section.accent, animationDelay: `${0.4 + index * 0.08}s` } as CSSProperties}
            >
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
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
