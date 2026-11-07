import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], weight: ["300", "400", "600"], variable: "--font-sora", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Hacker Devils · Competitive coding at ASU",
    template: "%s · Hacker Devils",
  },
  description:
    "Hacker Devils is the competitive coding organization at Arizona State University. Technical interview prep: Easy and Medium LeetCode sections and system design on Wednesdays, with GPU programming coming soon. Free pizza at every meeting.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#18161b",
};

/**
 * Runs before first paint so the stored theme applies without a flash.
 * Dark is the brand default for everyone, so only a saved choice from the toggle changes it.
 */
const themeScript = `(function(){try{var t=localStorage.getItem('hkd-theme');if(t!=='light'&&t!=='dark'){t='dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${sora.variable} ${plexMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
