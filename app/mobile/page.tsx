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
  description: "The tools and workflow I use to ship mobile apps from idea to App Store.",
};

type Tool = {
  name: string;
  url: string;
  description: string;
  tag?: string;
};

type Stage = {
  step: string;
  title: string;
  summary: string;
  accent: "cyan" | "teal" | "amber" | "emerald" | "violet";
  tools: Tool[];
};

const stages: Stage[] = [
  {
    step: "01",
    title: "Frontend",
    summary: "Ship iOS, Android, and web from one codebase.",
    accent: "cyan",
    tools: [
      { name: "Expo", url: "https://expo.dev", description: "EAS builds, OTA updates, native modules without pain." },
      { name: "NativeWind", url: "https://nativewind.dev", description: "Tailwind utilities for disciplined, fast styling." },
      { name: "LottieFiles", url: "https://lottiefiles.com", description: "Lightweight animations that feel polished." },
      { name: "Reanimated", url: "https://docs.swmansion.com/react-native-reanimated", description: "High-performance gestures and interactions." },
    ],
  },
  {
    step: "02",
    title: "Backend",
    summary: "Realtime data, auth, payments, and AI.",
    accent: "teal",
    tools: [
      { name: "Convex", url: "https://convex.dev", description: "Database, functions, realtime sync in TypeScript." },
      { name: "Clerk", url: "https://clerk.com", description: "Production-grade auth with Expo integrations." },
      { name: "Resend", url: "https://resend.com", description: "Transactional email with great DX." },
      { name: "Loops", url: "https://loops.so", description: "Marketing-focused email alternative.", tag: "Alt" },
      { name: "Superwall", url: "https://superwall.com", description: "Paywalls, receipts, subscription flow." },
      { name: "RevenueCat", url: "https://revenuecat.com", description: "IAP platform with deep integrations.", tag: "Alt" },
      { name: "OpenAI", url: "https://platform.openai.com", description: "Text, image, voice models for AI features." },
    ],
  },
  {
    step: "03",
    title: "Development",
    summary: "AI-accelerated workflow for shipping fast.",
    accent: "amber",
    tools: [
      { name: "Cursor", url: "https://cursor.com", description: "AI-first IDE for fast shipping." },
      { name: "Claude Code", url: "https://code.claude.com", description: "Terminal AI for greenfield builds." },
      { name: "Figma", url: "https://figma.com", description: "Branding, icons, App Store graphics." },
      { name: "Willow Voice", url: "https://willowvoice.com", description: "Mac speech-to-text for fast prompting." },
      { name: "Ebb", url: "https://ebb.cool", description: "Distraction blocker for deep work." },
    ],
  },
  {
    step: "04",
    title: "Marketing",
    summary: "Landing pages, content, paid growth.",
    accent: "emerald",
    tools: [
      { name: "Vercel", url: "https://vercel.com", description: "Landing page and blog with fast iteration." },
      { name: "Apple Search Ads", url: "https://ads.apple.com", description: "High-intent paid acquisition." },
      { name: "Meta Ads", url: "https://adsmanager.facebook.com", description: "Scalable paid social for mobile apps." },
      { name: "Sanity", url: "https://sanity.io", description: "CMS for shipping SEO content quickly." },
      { name: "Pallyy", url: "https://pallyy.com", description: "Social media scheduler for all platforms." },
      { name: "Screen Studio", url: "https://screen.studio", description: "Crisp app recordings for marketing." },
    ],
  },
  {
    step: "05",
    title: "Analytics",
    summary: "Track product and growth loops.",
    accent: "violet",
    tools: [
      { name: "PostHog", url: "https://posthog.com", description: "Product analytics with modern depth." },
      { name: "AppsFlyer", url: "https://appsflyer.com", description: "Attribution and MMP for paid growth." },
      { name: "AppTweak", url: "https://apptweak.com", description: "App Store optimization insights." },
    ],
  },
];

const accentClasses = {
  cyan: styles.accentCyan,
  teal: styles.accentTeal,
  amber: styles.accentAmber,
  emerald: styles.accentEmerald,
  violet: styles.accentViolet,
};

const accentColors = {
  cyan: "#38bdf8",
  teal: "#14b8a6",
  amber: "#fbbf24",
  emerald: "#10b981",
  violet: "#8b5cf6",
};

export default function MobileStackPage() {
  const toolCount = stages.reduce((sum, s) => sum + s.tools.length, 0);

  return (
    <div className={`${syne.variable} ${sora.variable} ${styles.page}`} style={{ fontFamily: "var(--font-sora)" }}>
      {/* Background */}
      <div className={styles.backdrop} aria-hidden="true">
        <div className={styles.orbA} />
        <div className={styles.orbB} />
        <div className={styles.orbC} />
        <div className={styles.grid} />
      </div>

      <main style={{ position: "relative", zIndex: 10, maxWidth: "64rem", marginLeft: "auto", marginRight: "auto", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingTop: "5rem", paddingBottom: "5rem" }}>
        {/* Hero */}
        <header className={styles.fadeUp} style={{ animationDelay: "0.1s" }}>
          <p className={styles.badge} style={{ marginBottom: "1rem" }}>Mobile Stack</p>
          <h1
            className={styles.glowText}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: "1.25rem",
            }}
          >
            The stack I use<br />to ship apps.
          </h1>
          <p style={{ fontSize: "1.125rem", color: "var(--text-secondary)", maxWidth: "32rem" }}>
            Frontend to analytics. Ship faster, monetize earlier, scale cleanly.
          </p>
        </header>

        {/* Stats row */}
        <div
          className={styles.fadeUp}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginTop: "3rem",
            animationDelay: "0.2s",
          }}
        >
          <div className={styles.statBox}>
            <div className={styles.statValue}>{stages.length.toString().padStart(2, "0")}</div>
            <div className={styles.statLabel}>Stages</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>{toolCount.toString().padStart(2, "0")}</div>
            <div className={styles.statLabel}>Tools</div>
          </div>
          <div className={styles.statBox}>
            <div className={styles.statValue}>TS</div>
            <div className={styles.statLabel}>End to End</div>
          </div>
        </div>

        {/* Stage navigation */}
        <nav
          className={styles.fadeUp}
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginTop: "3rem",
            animationDelay: "0.3s",
          }}
        >
          {stages.map((stage) => (
            <a
              key={stage.step}
              href={`#${stage.title.toLowerCase()}`}
              className={`${styles.badge} ${accentClasses[stage.accent]}`}
              style={{
                background: `color-mix(in srgb, ${accentColors[stage.accent]} 15%, transparent)`,
                borderColor: `color-mix(in srgb, ${accentColors[stage.accent]} 30%, transparent)`,
                color: accentColors[stage.accent],
              }}
            >
              {stage.step} {stage.title}
            </a>
          ))}
        </nav>

        {/* Stages */}
        <div style={{ marginTop: "4rem", display: "flex", flexDirection: "column", gap: "4rem" }}>
          {stages.map((stage, idx) => (
            <section
              key={stage.step}
              id={stage.title.toLowerCase()}
              className={styles.fadeUp}
              style={{ animationDelay: `${0.4 + idx * 0.1}s` }}
            >
              {/* Stage header */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
                <div
                  className={styles.stageDot}
                  style={{
                    borderColor: accentColors[stage.accent],
                    color: accentColors[stage.accent],
                    boxShadow: `0 0 20px color-mix(in srgb, ${accentColors[stage.accent]} 40%, transparent)`,
                  }}
                >
                  {stage.step}
                </div>
                <div>
                  <h2
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontSize: "1.75rem",
                      fontWeight: 600,
                      color: "var(--text-primary)",
                    }}
                  >
                    {stage.title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)" }}>{stage.summary}</p>
                </div>
              </div>

              {/* Tools grid */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "1rem",
                }}
              >
                {stage.tools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.toolCard} ${accentClasses[stage.accent]}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <h3
                          style={{
                            fontFamily: "var(--font-syne)",
                            fontSize: "1.1rem",
                            fontWeight: 600,
                            color: "var(--text-primary)",
                          }}
                        >
                          {tool.name}
                        </h3>
                        {tool.tag && (
                          <span
                            className={styles.badge}
                            style={{
                              fontSize: "0.6rem",
                              padding: "0.15rem 0.5rem",
                            }}
                          >
                            {tool.tag}
                          </span>
                        )}
                      </div>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "var(--text-secondary)",
                          marginTop: "0.5rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {tool.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer
          className={styles.fadeUp}
          style={{
            marginTop: "5rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--border)",
            textAlign: "center",
            animationDelay: "0.9s",
          }}
        >
          <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginBottom: "1rem" }}>
            Built with intent. Every tool earns its seat.
          </p>
          <a
            href="https://x.com/nathan_covey/status/2012553962415706585"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Inspired by @nathan_covey
          </a>
        </footer>
      </main>
    </div>
  );
}
