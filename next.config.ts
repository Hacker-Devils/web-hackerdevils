import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // A lockfile higher up the filesystem would otherwise be picked as the workspace root.
  turbopack: { root: __dirname },
  // The heading photos are served at 90 so faces stay crisp; 75 is the default for everything else.
  images: { qualities: [75, 90] },
  // Programs now live on /events, and mock interviews are a once-a-semester event rather than a page.
  // The browser carries the #hash across the redirect, so /programs#codeathon still opens that tab.
  // The join steps are on every page and the FAQ moved to About, so old /join links land there.
  async redirects() {
    return [
      { source: "/programs", destination: "/events", permanent: true },
      { source: "/interviews", destination: "/events", permanent: true },
      { source: "/join", destination: "/about#faq-title", permanent: true },
    ];
  },
};

export default nextConfig;
