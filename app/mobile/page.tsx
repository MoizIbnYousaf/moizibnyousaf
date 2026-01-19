"use client";

import { useState, useEffect } from "react";
import { Syne, Inter } from "next/font/google";
import Link from "next/link";
import {
  Search,
  Layers,
  Server,
  Code2,
  Megaphone,
  BarChart3,
  ArrowUpRight,
  X,
  ArrowLeft,
} from "lucide-react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600"],
});

type Tool = {
  name: string;
  url: string;
  description: string;
  cost?: string;
  note?: string;
};

type Stage = {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  accent: string;
  accentBg: string;
  tools: Tool[];
};

const stages: Stage[] = [
  {
    id: "frontend",
    title: "Frontend",
    description: "One codebase for iOS, Android, and web.",
    icon: <Layers className="w-5 h-5" />,
    accent: "text-sky-400",
    accentBg: "bg-sky-500/10",
    tools: [
      { name: "Expo", url: "https://expo.dev", description: "EAS builds, OTA updates, native modules without Xcode pain.", cost: "Free" },
      { name: "NativeWind", url: "https://nativewind.dev", description: "Tailwind for React Native. Fast, disciplined styling.", cost: "Free" },
      { name: "LottieFiles", url: "https://lottiefiles.com", description: "Lightweight animations that make apps feel polished.", cost: "Free" },
      { name: "Reanimated", url: "https://docs.swmansion.com/react-native-reanimated", description: "60fps gestures and transitions on the UI thread.", cost: "Free" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Realtime data, auth, payments, AI.",
    icon: <Server className="w-5 h-5" />,
    accent: "text-teal-400",
    accentBg: "bg-teal-500/10",
    tools: [
      { name: "Convex", url: "https://convex.dev", description: "Database, functions, realtime sync. All TypeScript.", cost: "Free" },
      { name: "Clerk", url: "https://clerk.com", description: "Auth that works with Expo out of the box.", cost: "Free" },
      { name: "Resend", url: "https://resend.com", description: "Transactional email with React templates.", cost: "Free" },
      { name: "Superwall", url: "https://superwall.com", description: "Paywalls and subscription management.", cost: "Rev share" },
      { name: "OpenAI", url: "https://platform.openai.com", description: "GPT, DALL-E, Whisper for AI features.", cost: "Usage" },
    ],
  },
  {
    id: "development",
    title: "Development",
    description: "AI tools for shipping fast.",
    icon: <Code2 className="w-5 h-5" />,
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10",
    tools: [
      { name: "Cursor", url: "https://cursor.com", description: "AI-native IDE. Tab-complete entire features.", cost: "$20/mo" },
      { name: "Claude Code", url: "https://claude.ai/code", description: "Terminal AI for greenfield builds.", cost: "$20/mo" },
      { name: "Figma", url: "https://figma.com", description: "Icons, App Store screenshots, marketing assets.", cost: "Free" },
      { name: "Ebb", url: "https://ebb.cool", description: "Blocks distractions. Enforces deep work.", cost: "Free", note: "Optional" },
    ],
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Landing pages, ads, content.",
    icon: <Megaphone className="w-5 h-5" />,
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10",
    tools: [
      { name: "Vercel", url: "https://vercel.com", description: "Deploy Next.js landing pages in seconds.", cost: "Free" },
      { name: "Apple Search Ads", url: "https://ads.apple.com", description: "High-intent App Store traffic.", cost: "CPA" },
      { name: "Screen Studio", url: "https://screen.studio", description: "Beautiful app recordings for marketing.", cost: "$89" },
      { name: "Pallyy", url: "https://pallyy.com", description: "Schedule posts across all platforms.", cost: "Free" },
    ],
  },
  {
    id: "analytics",
    title: "Analytics",
    description: "Measure what matters.",
    icon: <BarChart3 className="w-5 h-5" />,
    accent: "text-violet-400",
    accentBg: "bg-violet-500/10",
    tools: [
      { name: "PostHog", url: "https://posthog.com", description: "Product analytics, session replays, feature flags.", cost: "Free" },
      { name: "AppsFlyer", url: "https://appsflyer.com", description: "Attribution for paid campaigns.", cost: "Free" },
      { name: "AppTweak", url: "https://apptweak.com", description: "ASO keywords and competitor tracking.", cost: "$99/mo", note: "Scale" },
    ],
  },
];

function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const allTools = stages.flatMap((s) =>
    s.tools.map((t) => ({ ...t, stage: s.title, accent: s.accent, accentBg: s.accentBg }))
  );

  const filtered = query
    ? allTools.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.description.toLowerCase().includes(query.toLowerCase()) ||
          t.stage.toLowerCase().includes(query.toLowerCase())
      )
    : allTools;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div className="relative flex items-start justify-center pt-[12vh] px-4">
        <div
          className="w-full max-w-lg bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 px-4 py-3 border-b border-zinc-800">
            <Search className="w-5 h-5 text-zinc-500" />
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tools..."
              className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-600 outline-none"
            />
            <button onClick={onClose} className="p-1 rounded-md hover:bg-zinc-800 transition-colors">
              <X className="w-4 h-4 text-zinc-500" />
            </button>
          </div>
          <div className="max-h-[50vh] overflow-y-auto">
            {filtered.length === 0 ? (
              <div className="py-12 text-center text-zinc-500">No tools found.</div>
            ) : (
              <div className="p-2">
                {filtered.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-zinc-800/70 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-xl ${tool.accentBg} flex items-center justify-center`}>
                      <span className={`text-sm font-bold ${tool.accent}`}>
                        {tool.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-zinc-100">{tool.name}</span>
                        <span className="text-xs text-zinc-600">{tool.stage}</span>
                      </div>
                      <p className="text-sm text-zinc-500 truncate">{tool.description}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ToolCard({ tool, accent, accentBg }: { tool: Tool; accent: string; accentBg: string }) {
  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/50 hover:bg-zinc-800/50 hover:border-zinc-700/50 transition-all duration-200"
    >
      <div className="flex items-start gap-4">
        <div className={`w-11 h-11 rounded-xl ${accentBg} flex items-center justify-center shrink-0`}>
          <span className={`text-sm font-bold ${accent}`}>{tool.name.slice(0, 2).toUpperCase()}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-zinc-100 group-hover:text-white transition-colors">
              {tool.name}
            </h3>
            <ArrowUpRight className="w-4 h-4 text-zinc-600 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
          <p className="mt-1 text-sm text-zinc-500 leading-relaxed">{tool.description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3">
        {tool.cost && (
          <span className="text-xs text-zinc-600">{tool.cost}</span>
        )}
        {tool.note && (
          <>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="text-xs text-zinc-600">{tool.note}</span>
          </>
        )}
      </div>
    </a>
  );
}

export default function AppStackPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const toolCount = stages.reduce((sum, s) => sum + s.tools.length, 0);

  if (!mounted) return null;

  return (
    <div
      className={`${syne.variable} ${inter.variable} min-h-screen bg-zinc-950`}
      style={{ fontFamily: "var(--font-inter)" }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-zinc-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Home</span>
          </Link>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-sm text-zinc-500 hover:text-zinc-400 hover:border-zinc-700 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden sm:inline ml-2 px-1.5 py-0.5 text-[10px] font-medium bg-zinc-800 rounded text-zinc-500">
              ⌘K
            </kbd>
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-16 pb-12">
        <h1
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-100"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          App Stack
        </h1>
        <p className="mt-4 text-lg text-zinc-500 max-w-xl leading-relaxed">
          {toolCount} tools to ship iOS, Android, and web from a single TypeScript codebase.
          Everything earns its place.
        </p>
      </section>

      {/* Stages */}
      <main className="max-w-4xl mx-auto px-6 pb-24 space-y-16">
        {stages.map((stage) => (
          <section key={stage.id} id={stage.id}>
            {/* Stage header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`w-10 h-10 rounded-xl ${stage.accentBg} flex items-center justify-center`}>
                <span className={stage.accent}>{stage.icon}</span>
              </div>
              <div>
                <h2
                  className="text-xl font-bold text-zinc-100"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {stage.title}
                </h2>
                <p className="text-sm text-zinc-500">{stage.description}</p>
              </div>
            </div>

            {/* Tool grid */}
            <div className="grid gap-4 sm:grid-cols-2">
              {stage.tools.map((tool) => (
                <ToolCard
                  key={tool.name}
                  tool={tool}
                  accent={stage.accent}
                  accentBg={stage.accentBg}
                />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-zinc-600">
            Built by{" "}
            <a
              href="https://x.com/moizibnyousaf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-300 transition-colors"
            >
              @moizibnyousaf
            </a>
          </p>
        </div>
      </footer>

      {/* Search modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
