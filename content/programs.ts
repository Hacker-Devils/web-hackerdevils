export type ProgramId = "practice" | "system-design" | "gpu";

export type Program = {
  id: ProgramId;
  name: string;
  when: string;
  description: string;
  topics: string[];
  soon?: boolean;
};

export const programs: Record<ProgramId, Program> = {
  practice: {
    id: "practice",
    name: "LeetCode sections",
    when: "Easy and Medium, on alternating Wednesdays",
    description:
      "Officers bring a problem set modeled on real online assessments, and every meeting ends with a walkthrough of solutions, complexity and edge cases. Start with Easy if interview problems are new to you.",
    topics: ["Arrays, strings and hashing", "Two pointers and sliding window", "Trees, graphs and BFS/DFS", "Dynamic programming patterns"],
  },
  "system-design": {
    id: "system-design",
    name: "System design",
    when: "Every other Wednesday, alongside the Easy section",
    description: "We take one real system, such as a URL shortener, a chat app or a news feed, and design it end to end with a repeatable interview framework.",
    topics: ["Requirements and estimation", "APIs and data models", "Caching, queues and load balancing", "Trade-off discussions"],
  },
  gpu: {
    id: "gpu",
    name: "GPU programming",
    when: "Coming soon",
    soon: true,
    description: "Sessions will start with your first CUDA kernel and work up to shared-memory tiling and the optimizations behind modern machine learning.",
    topics: ["Threads, blocks and grids", "The memory hierarchy", "Coalescing and shared memory", "Profiling kernels"],
  },
};
