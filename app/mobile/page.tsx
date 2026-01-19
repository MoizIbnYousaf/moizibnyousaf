"use client";

import { useState, useEffect, useCallback } from "react";
import { Syne, Inter } from "next/font/google";
import Link from "next/link";
import {
  Search,
  Layers,
  Server,
  Code2,
  Megaphone,
  BarChart3,
  ExternalLink,
  Sparkles,
  Github,
  Twitter,
  ChevronDown,
} from "lucide-react";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

type Tool = {
  name: string;
  url: string;
  description: string;
  tag?: string;
  timing?: string;
  cost?: string;
  complexity?: "quick" | "moderate" | "involved";
  integrates?: string[];
  useWhen?: string;
};

type Stage = {
  id: string;
  step: string;
  title: string;
  summary: string;
  icon: React.ReactNode;
  accent: string;
  tools: Tool[];
};

const stages: Stage[] = [
  {
    id: "frontend",
    step: "01",
    title: "Frontend",
    summary: "Ship iOS, Android, and web from one codebase.",
    icon: <Layers className="w-4 h-4" />,
    accent: "#38bdf8",
    tools: [
      { name: "Expo", url: "https://expo.dev", description: "EAS builds, OTA updates, native modules without pain.", timing: "Day 1", cost: "$0", complexity: "quick" },
      { name: "NativeWind", url: "https://nativewind.dev", description: "Tailwind utilities for disciplined, fast styling.", timing: "Day 1", cost: "$0", complexity: "quick" },
      { name: "LottieFiles", url: "https://lottiefiles.com", description: "Lightweight animations that feel polished.", timing: "Week 2", cost: "$0", complexity: "quick" },
      { name: "Reanimated", url: "https://docs.swmansion.com/react-native-reanimated", description: "High-performance gestures and interactions.", timing: "Week 2-3", cost: "$0", complexity: "moderate" },
    ],
  },
  {
    id: "backend",
    step: "02",
    title: "Backend",
    summary: "Realtime data, auth, payments, and AI.",
    icon: <Server className="w-4 h-4" />,
    accent: "#14b8a6",
    tools: [
      { name: "Convex", url: "https://convex.dev", description: "Database, functions, realtime sync in TypeScript.", timing: "Day 2-3", cost: "$0", complexity: "quick" },
      { name: "Clerk", url: "https://clerk.com", description: "Production-grade auth with Expo integrations.", timing: "Week 1-2", cost: "$0", complexity: "moderate", integrates: ["Convex"] },
      { name: "Resend", url: "https://resend.com", description: "Transactional email with great DX.", timing: "Week 3-4", cost: "$0", complexity: "quick", integrates: ["Convex"] },
      { name: "Loops", url: "https://loops.so", description: "Marketing-focused email alternative.", tag: "Alt", timing: "Week 3-4", cost: "$0", complexity: "quick", useWhen: "Marketing emails are primary focus" },
      { name: "Superwall", url: "https://superwall.com", description: "Paywalls, receipts, subscription flow.", timing: "Week 4-5", cost: "$0*", complexity: "involved", integrates: ["Convex", "AppsFlyer"] },
      { name: "RevenueCat", url: "https://revenuecat.com", description: "IAP platform with deep integrations.", tag: "Alt", timing: "Week 4-5", cost: "$0*", complexity: "involved", useWhen: "Need more integrations or better paywalls" },
      { name: "OpenAI", url: "https://platform.openai.com", description: "Text, image, voice models for AI features.", timing: "varies", cost: "pay/use", complexity: "quick" },
    ],
  },
  {
    id: "development",
    step: "03",
    title: "Development",
    summary: "AI-accelerated workflow for shipping fast.",
    icon: <Code2 className="w-4 h-4" />,
    accent: "#fbbf24",
    tools: [
      { name: "Cursor", url: "https://cursor.com", description: "AI-first IDE for fast shipping.", timing: "Day 1", cost: "$20/mo", complexity: "quick" },
      { name: "Claude Code", url: "https://claude.ai/code", description: "Terminal AI for greenfield builds.", timing: "Day 1", cost: "$20/mo", complexity: "quick" },
      { name: "Figma", url: "https://figma.com", description: "Branding, icons, App Store graphics.", timing: "Week 5+", cost: "$0", complexity: "quick" },
      { name: "Willow Voice", url: "https://willowvoice.com", description: "Mac speech-to-text for fast prompting.", timing: "optional", cost: "one-time", complexity: "quick" },
      { name: "Ebb", url: "https://ebb.cool", description: "Distraction blocker for deep work.", timing: "optional", cost: "$0", complexity: "quick" },
    ],
  },
  {
    id: "marketing",
    step: "04",
    title: "Marketing",
    summary: "Landing pages, content, paid growth.",
    icon: <Megaphone className="w-4 h-4" />,
    accent: "#10b981",
    tools: [
      { name: "Vercel", url: "https://vercel.com", description: "Landing page and blog with fast iteration.", timing: "Week 5", cost: "$0", complexity: "quick" },
      { name: "Apple Search Ads", url: "https://ads.apple.com", description: "High-intent paid acquisition.", timing: "Post-launch", cost: "pay/tap", complexity: "moderate" },
      { name: "Meta Ads", url: "https://adsmanager.facebook.com", description: "Scalable paid social for mobile apps.", timing: "Post-launch", cost: "pay/result", complexity: "involved" },
      { name: "Sanity", url: "https://sanity.io", description: "CMS for shipping SEO content quickly.", timing: "Post-launch", cost: "$0", complexity: "moderate" },
      { name: "Pallyy", url: "https://pallyy.com", description: "Social media scheduler for all platforms.", timing: "Post-launch", cost: "$0", complexity: "quick" },
      { name: "Screen Studio", url: "https://screen.studio", description: "Crisp app recordings for marketing.", timing: "varies", cost: "one-time", complexity: "quick" },
    ],
  },
  {
    id: "analytics",
    step: "05",
    title: "Analytics",
    summary: "Track product and growth loops.",
    icon: <BarChart3 className="w-4 h-4" />,
    accent: "#8b5cf6",
    tools: [
      { name: "PostHog", url: "https://posthog.com", description: "Product analytics with modern depth.", timing: "Week 5", cost: "$0", complexity: "quick" },
      { name: "AppsFlyer", url: "https://appsflyer.com", description: "Attribution and MMP for paid growth.", timing: "Pre-launch", cost: "$0", complexity: "moderate" },
      { name: "AppTweak", url: "https://apptweak.com", description: "App Store optimization insights.", timing: "Scale phase", cost: "$99/mo", complexity: "moderate" },
    ],
  },
];

// Search modal component
function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");

  const allTools = stages.flatMap(s => s.tools.map(t => ({ ...t, stage: s.title, accent: s.accent })));
  const filtered = query
    ? allTools.filter(t =>
        t.name.toLowerCase().includes(query.toLowerCase()) ||
        t.description.toLowerCase().includes(query.toLowerCase()) ||
        t.stage.toLowerCase().includes(query.toLowerCase())
      )
    : allTools.slice(0, 6);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-xl mx-4 bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center px-4 border-b border-zinc-800">
          <Search className="w-4 h-4 text-zinc-500" />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search tools, stages..."
            className="flex-1 px-3 py-4 bg-transparent text-zinc-100 placeholder:text-zinc-500 outline-none text-sm"
          />
          <kbd className="px-2 py-1 text-[10px] font-medium text-zinc-500 bg-zinc-800 rounded">ESC</kbd>
        </div>
        <div className="max-h-[60vh] overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-500">No results found.</div>
          ) : (
            filtered.map(tool => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-zinc-800 transition-colors group"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold"
                  style={{ background: `${tool.accent}20`, color: tool.accent }}
                >
                  {tool.name.slice(0, 2).toUpperCase()}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-zinc-100">{tool.name}</span>
                    <span className="text-[10px] text-zinc-500">{tool.stage}</span>
                  </div>
                  <p className="text-xs text-zinc-500 truncate">{tool.description}</p>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-zinc-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

// Tool card component
function ToolCard({ tool, accent }: { tool: Tool; accent: string }) {
  const isAlt = tool.tag === "Alt";

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block p-4 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
        isAlt
          ? "border-dashed border-zinc-700/50 bg-zinc-900/30 hover:bg-zinc-800/50 hover:border-zinc-600"
          : "border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800/70 hover:border-zinc-700"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
          style={{ background: `${accent}15`, color: accent }}
        >
          {tool.name.slice(0, 2).toUpperCase()}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="text-sm font-semibold text-zinc-100">{tool.name}</h3>
            {isAlt && (
              <span className="px-1.5 py-0.5 text-[9px] font-medium rounded bg-zinc-800 text-zinc-400">ALT</span>
            )}
          </div>
          <p className="mt-1 text-xs text-zinc-500 leading-relaxed">{tool.description}</p>
          {tool.useWhen && (
            <p className="mt-2 text-[10px] text-zinc-600 italic">Use when: {tool.useWhen}</p>
          )}
        </div>
        {tool.timing && (
          <span
            className="px-2 py-1 text-[10px] font-medium rounded-md shrink-0"
            style={{ background: `${accent}15`, color: accent }}
          >
            {tool.timing}
          </span>
        )}
      </div>
      <div className="mt-3 pt-3 border-t border-zinc-800/50 flex items-center gap-3 text-[10px] text-zinc-600">
        {tool.cost && <span>{tool.cost}</span>}
        {tool.complexity && (
          <>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span>{tool.complexity}</span>
          </>
        )}
        {tool.integrates && tool.integrates.length > 0 && (
          <>
            <span className="w-1 h-1 rounded-full bg-zinc-700" />
            <span className="text-zinc-500">Works with {tool.integrates.join(", ")}</span>
          </>
        )}
      </div>
    </a>
  );
}

// Sidebar component
function Sidebar({
  activeStage,
  onStageClick,
  collapsed,
}: {
  activeStage: string | null;
  onStageClick: (id: string) => void;
  collapsed: boolean;
}) {
  const [categoriesOpen, setCategoriesOpen] = useState(true);

  return (
    <aside className={`fixed left-0 top-0 h-screen bg-zinc-950 border-r border-zinc-800 flex flex-col z-40 transition-all duration-300 ${
      collapsed ? "w-0 -translate-x-full lg:w-16 lg:translate-x-0" : "w-64"
    }`}>
      {/* Logo */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-zinc-800">
        {!collapsed && (
          <Link href="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-zinc-100">stack</span>
          </Link>
        )}
        {collapsed && (
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-violet-500 flex items-center justify-center mx-auto">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {!collapsed && (
          <>
            <div className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-2 mb-2">Browse</div>
            <a href="#all" className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 transition-colors">
              <Layers className="w-4 h-4" />
              All Tools
            </a>
          </>
        )}

        {/* Stages */}
        {!collapsed && (
          <div className="mt-6">
            <button
              onClick={() => setCategoriesOpen(!categoriesOpen)}
              className="w-full flex items-center justify-between text-[10px] font-medium text-zinc-500 uppercase tracking-wider px-2 mb-2 hover:text-zinc-400"
            >
              Stages
              <ChevronDown className={`w-3 h-3 transition-transform ${categoriesOpen ? "" : "-rotate-90"}`} />
            </button>
            {categoriesOpen && (
              <div className="space-y-0.5">
                {stages.map(stage => (
                  <button
                    key={stage.id}
                    onClick={() => onStageClick(stage.id)}
                    className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-sm transition-colors ${
                      activeStage === stage.id
                        ? "bg-zinc-800 text-zinc-100"
                        : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50"
                    }`}
                  >
                    <span style={{ color: stage.accent }}>{stage.icon}</span>
                    {stage.title}
                    <span className="ml-auto text-[10px] text-zinc-600">{stage.tools.length}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Collapsed icons */}
        {collapsed && (
          <div className="space-y-1">
            {stages.map(stage => (
              <button
                key={stage.id}
                onClick={() => onStageClick(stage.id)}
                className={`w-full p-2.5 rounded-lg flex items-center justify-center transition-colors ${
                  activeStage === stage.id ? "bg-zinc-800" : "hover:bg-zinc-800/50"
                }`}
                title={stage.title}
              >
                <span style={{ color: stage.accent }}>{stage.icon}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Footer */}
      <div className="p-3 border-t border-zinc-800">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <a href="https://github.com/moizibnyousaf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://x.com/moizibnyousaf" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}

export default function AppStackPage() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeStage, setActiveStage] = useState<string | null>(null);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(open => !open);
      }
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleStageClick = useCallback((id: string) => {
    setActiveStage(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  const toolCount = stages.reduce((sum, s) => sum + s.tools.length, 0);
  const filteredStages = activeStage ? stages.filter(s => s.id === activeStage) : stages;

  if (!mounted) return null;

  return (
    <div className={`${syne.variable} ${inter.variable} min-h-screen bg-zinc-950 text-zinc-100`} style={{ fontFamily: "var(--font-inter)" }}>
      <Sidebar
        activeStage={activeStage}
        onStageClick={handleStageClick}
        collapsed={sidebarCollapsed}
      />

      {/* Main content */}
      <main className={`transition-all duration-300 ${sidebarCollapsed ? "lg:pl-16" : "lg:pl-64"}`}>
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-14 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800 flex items-center px-6 gap-4">
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="lg:hidden p-2 -ml-2 rounded-lg hover:bg-zinc-800 transition-colors"
          >
            <Layers className="w-5 h-5 text-zinc-400" />
          </button>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex-1 max-w-md flex items-center gap-3 px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-zinc-500 hover:border-zinc-700 transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Search tools...</span>
            <kbd className="ml-auto px-2 py-0.5 text-[10px] font-medium bg-zinc-800 rounded">⌘K</kbd>
          </button>

          <div className="flex items-center gap-2">
            <a
              href="https://github.com/moizibnyousaf"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </header>

        {/* Hero */}
        <div className="px-6 py-12 border-b border-zinc-800">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            App Stack
          </h1>
          <p className="mt-3 text-zinc-500 max-w-lg">
            {toolCount} tools across {stages.length} stages. Ship iOS, Android, and web from idea to App Store.
          </p>

          {/* Stage pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            <button
              onClick={() => setActiveStage(null)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                !activeStage
                  ? "bg-zinc-100 text-zinc-900"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
              }`}
            >
              All
            </button>
            {stages.map(stage => (
              <button
                key={stage.id}
                onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                  activeStage === stage.id
                    ? "text-zinc-900"
                    : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
                }`}
                style={activeStage === stage.id ? { background: stage.accent } : {}}
              >
                {stage.icon}
                {stage.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 space-y-12">
          {filteredStages.map(stage => (
            <section key={stage.id} id={stage.id}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: `${stage.accent}20`, color: stage.accent }}
                >
                  {stage.icon}
                </div>
                <div>
                  <h2 className="text-lg font-semibold" style={{ fontFamily: "var(--font-syne)" }}>
                    {stage.title}
                  </h2>
                  <p className="text-xs text-zinc-500">{stage.summary}</p>
                </div>
                <span className="ml-auto text-xs text-zinc-600">{stage.tools.length} tools</span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {stage.tools.map(tool => (
                  <ToolCard key={tool.name} tool={tool} accent={stage.accent} />
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Footer */}
        <footer className="px-6 py-8 border-t border-zinc-800 text-center">
          <p className="text-xs text-zinc-600">
            Every tool earns its seat. Inspired by{" "}
            <a href="https://x.com/nathan_covey" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-zinc-300">
              @nathan_covey
            </a>
          </p>
        </footer>
      </main>

      {/* Search modal */}
      <SearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
