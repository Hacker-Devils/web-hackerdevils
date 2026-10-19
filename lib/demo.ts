/**
 * Scenarios for the home page session demo. Each one "solves" a problem line by line, then runs its tests.
 * Swap in this week's problem whenever you like: keep `code` short (under ~14 lines) so it fits the panel.
 */

export type Scenario = {
  title: string;
  blurb: string;
  file: string;
  problem: { name: string; statement: string };
  code: string[];
  tests: string[];
  verdict: string;
};

export const scenarios: Scenario[] = [
  {
    title: "Two Sum",
    blurb: "The classic warm-up.\nOne pass, one hash map.",
    file: "two_sum.py",
    problem: {
      name: "Two Sum",
      statement: "Return the indices of the two numbers in nums that add up to target. Exactly one answer exists.",
    },
    code: [
      "def two_sum(nums, target):",
      "    seen = {}  # value -> index",
      "    for i, n in enumerate(nums):",
      "        if target - n in seen:",
      "            return [seen[target - n], i]",
      "        seen[n] = i",
    ],
    tests: ["[2,7,11,15], 9  →  [0, 1]", "[3,2,4], 6  →  [1, 2]", "[3,3], 6  →  [0, 1]"],
    verdict: "Accepted · O(n) time · O(n) space",
  },
  {
    title: "Number of Islands",
    blurb: "Graphs on a grid.\nSink every island you find.",
    file: "islands.py",
    problem: {
      name: "Number of Islands",
      statement: "Given a grid of '1' (land) and '0' (water), count the islands. Land connects up, down, left and right.",
    },
    code: [
      "def num_islands(grid):",
      "    rows, cols = len(grid), len(grid[0])",
      "    def sink(r, c):",
      "        if 0 <= r < rows and 0 <= c < cols and grid[r][c] == \"1\":",
      "            grid[r][c] = \"0\"",
      "            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):",
      "                sink(r + dr, c + dc)",
      "    count = 0",
      "    for r in range(rows):",
      "        for c in range(cols):",
      "            if grid[r][c] == \"1\":",
      "                sink(r, c)",
      "                count += 1",
      "    return count",
    ],
    tests: ["4×5 grid, one landmass  →  1", "4×5 grid, three islands  →  3", "1×1 grid of water  →  0"],
    verdict: "Accepted · O(m·n) time · DFS",
  },
  {
    title: "Longest unique substring",
    blurb: "Against the clock.\nSliding window, no repeats.",
    file: "contest/p3.py",
    problem: {
      name: "Longest Substring Without Repeating Characters",
      statement: "Return the length of the longest substring of s with no repeated characters. The clock is running.",
    },
    code: [
      "def length_of_longest(s):",
      "    last, start, best = {}, 0, 0",
      "    for i, ch in enumerate(s):",
      "        if last.get(ch, -1) >= start:",
      "            start = last[ch] + 1",
      "        last[ch] = i",
      "        best = max(best, i - start + 1)",
      "    return best",
    ],
    tests: ["\"abcabcbb\"  →  3", "\"bbbbb\"  →  1", "\"pwwkew\"  →  3"],
    verdict: "Accepted · 01:12:40 elapsed · Rank #4",
  },
];
