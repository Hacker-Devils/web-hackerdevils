import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Hacker Devils · Competitive coding at ASU",
    template: "%s · Hacker Devils",
  },
  description:
    "Hacker Devils is the premier competitive coding organization at Arizona State University. Weekly practice, Code-A-Thons, mock interviews and technical workshops.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0b0a0c" },
    { media: "(prefers-color-scheme: light)", color: "#faf8f5" },
  ],
};

/**
 * Runs before first paint so the stored theme applies without a flash.
 * Saved choice wins; otherwise follow the OS; otherwise dark (the brand default).
 */
const themeScript = `(function(){try{var t=localStorage.getItem('hkd-theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="wrap">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
