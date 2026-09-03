import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Christopher Joshy — Computer Engineer",
  description: "Personal portfolio of Christopher Joshy. Systems, AI, Security & Open Source developer based in Kerala, India. Tech Lead of Nexus.",
  metadataBase: new URL("https://christopherjoshy.dev"),
  keywords: [
    "Christopher Joshy",
    "Computer Engineer",
    "Systems Engineer",
    "Reinforcement Learning",
    "Sensor Fusion",
    "Nexus Tech Lead",
    "Kerala India",
    "NVIDIA Nemotron Silver",
    "Anchor GPS",
    "Chadman AI"
  ],
  authors: [{ name: "Christopher Joshy", url: "https://github.com/ChristopherJoshy" }],
  openGraph: {
    title: "Christopher Joshy — Computer Engineer",
    description: "I build systems that think, adapt and act. AI / Systems / Security / Open Source.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Joshy — Computer Engineer",
    description: "I build systems that think, adapt and act. Systems, AI, Security & Open Source.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-[#F3F1EC] text-[#090909]`}>
      <body className="antialiased min-h-screen selection:bg-black selection:text-[#F3F1EC]">
        {/* Accessible Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] px-4 py-2 bg-signal-red text-white font-mono text-xs uppercase"
        >
          Skip to main content
        </a>

        {/* Butter-Smooth Weighted Scroll */}
        <SmoothScroll />

        {/* Global Minimal Navigation */}
        <Navigation />

        {/* Page Content */}
        <main id="main-content" className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
