import Link from "next/link";

const tools = [
  { name: "Raycast", description: "Productivity launcher", url: "https://raycast.com" },
  { name: "Ghostty", description: "Terminal emulator", url: "https://ghostty.org" },
  { name: "Linear", description: "Project management", url: "https://linear.app" },
  { name: "Claude Code", description: "Coding assistant", url: "https://claude.ai/code" },
  { name: "GitHub", description: "Version control", url: "https://github.com" },
  { name: "Vercel", description: "Deployment", url: "https://vercel.com" },
  { name: "Supabase", description: "Backend platform", url: "https://supabase.com" },
  { name: "Clerk", description: "Authentication", url: "https://clerk.com" },
  { name: "Stripe", description: "Payments", url: "https://stripe.com" },
  { name: "Figma", description: "Design", url: "https://figma.com" },
  { name: "Resend", description: "Email API", url: "https://resend.com" },
  { name: "Cal.com", description: "Scheduling", url: "https://cal.com" },
  { name: "Google Workspace", description: "Productivity", url: "https://workspace.google.com" },
  { name: "Upstash", description: "Serverless data", url: "https://upstash.com" },
];

export default function ToolsPage() {
  return (
    <>
      <style>{`
        html, body {
          background: #0a0a0a !important;
          overflow: auto !important;
          height: 100% !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .tools-page {
          min-height: 100vh;
          width: 100vw;
          background: #0a0a0a;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          box-sizing: border-box;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .tools-page * {
          box-sizing: border-box;
        }

        .back-link {
          position: absolute;
          top: 24px;
          left: 24px;
          color: #6b6f76;
          text-decoration: none;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.15s;
        }

        .back-link:hover {
          color: #a0a0a0;
        }

        .glass-card {
          background: linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 24px;
          padding: 32px;
          backdrop-filter: blur(20px);
          box-shadow:
            0 4px 24px rgba(0,0,0,0.4),
            0 8px 48px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.05);
          max-width: 580px;
          width: 100%;
        }

        .card-header {
          text-align: center;
          margin-bottom: 24px;
        }

        .card-title {
          color: #f0f0f0;
          font-size: 20px;
          font-weight: 500;
          margin: 0 0 4px 0;
          letter-spacing: -0.02em;
        }

        .card-subtitle {
          color: #6b6f76;
          font-size: 13px;
          margin: 0;
          letter-spacing: -0.01em;
        }

        .divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          margin-bottom: 20px;
        }

        .tools-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4px 32px;
        }

        .tool-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          margin: 0 -12px;
          border-radius: 8px;
          text-decoration: none;
          transition: background 0.15s;
        }

        .tool-item:hover {
          background: rgba(255,255,255,0.04);
        }

        .tool-name {
          color: #e0e0e0;
          font-size: 13px;
          font-weight: 500;
          transition: color 0.15s;
        }

        .tool-item:hover .tool-name {
          color: #ffffff;
        }

        .tool-desc {
          color: #505050;
          font-size: 11px;
          transition: color 0.15s;
        }

        .tool-item:hover .tool-desc {
          color: #6b6f76;
        }

        .card-footer {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid rgba(255,255,255,0.05);
          text-align: center;
        }

        .tool-count {
          color: #404040;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .twitter-link {
          margin-top: 32px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          box-shadow: 0 2px 12px rgba(0,0,0,0.3);
        }

        .twitter-link:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.12);
        }

        .twitter-link svg {
          width: 18px;
          height: 18px;
          fill: #6b6f76;
          transition: fill 0.15s;
        }

        .twitter-link:hover svg {
          fill: #a0a0a0;
        }

        @media (max-width: 500px) {
          .tools-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="tools-page">
        <Link href="/" className="back-link">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>

        <div className="glass-card">
          <div className="card-header">
            <h1 className="card-title">Tools</h1>
            <p className="card-subtitle">Software (Speed + Simplicity)</p>
          </div>

          <div className="divider" />

          <div className="tools-grid">
            {tools.map((tool) => (
              <a
                key={tool.name}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-item"
              >
                <span className="tool-name">{tool.name}</span>
                <span className="tool-desc">{tool.description}</span>
              </a>
            ))}
          </div>

          <div className="card-footer">
            <span className="tool-count">{tools.length} tools</span>
          </div>
        </div>

        <a
          href="https://x.com/MoizIbnYousaf"
          target="_blank"
          rel="noopener noreferrer"
          className="twitter-link"
        >
          <svg viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
