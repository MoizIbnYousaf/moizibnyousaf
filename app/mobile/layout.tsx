import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Stack | moizibnyousaf.com",
  description: "Tools and workflow to ship mobile apps from idea to App Store.",
};

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
