/** Problems shown in the LeetCode panel. Every example below was run against its solution. */
export type Problem = {
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  statement: string;
  code: string[];
  examples: string[];
  complexity: string;
};

export const problems: Problem[] = [
  {
    title: "Two Sum",
    difficulty: "Easy",
    statement: "Return the indices of the two numbers in nums that add up to target. Exactly one answer exists.",
    code: [
      "def two_sum(nums, target):",
      "    seen = {}  # value -> index",
      "    for i, n in enumerate(nums):",
      "        if target - n in seen:",
      "            return [seen[target - n], i]",
      "        seen[n] = i",
    ],
    examples: ["[2,7,11,15], 9 returns [0, 1]", "[3,2,4], 6 returns [1, 2]", "[3,3], 6 returns [0, 1]"],
    complexity: "O(n) time, O(n) space",
  },
  {
    title: "Number of Islands",
    difficulty: "Medium",
    statement: "Given a grid of '1' (land) and '0' (water), count the islands. Land connects up, down, left and right.",
    code: [
      "def num_islands(grid):",
      "    rows, cols = len(grid), len(grid[0])",
      "    def sink(r, c):",
      '        if 0 <= r < rows and 0 <= c < cols and grid[r][c] == "1":',
      '            grid[r][c] = "0"',
      "            for dr, dc in ((1, 0), (-1, 0), (0, 1), (0, -1)):",
      "                sink(r + dr, c + dc)",
      "    count = 0",
      "    for r in range(rows):",
      "        for c in range(cols):",
      '            if grid[r][c] == "1":',
      "                sink(r, c)",
      "                count += 1",
      "    return count",
    ],
    examples: ["4×5 grid, one landmass returns 1", "4×5 grid, three islands returns 3", "1×1 grid of water returns 0"],
    complexity: "O(m·n) time, depth-first search",
  },
  {
    title: "Trapping Rain Water",
    difficulty: "Hard",
    statement: "Given bar heights, compute how much rain water is trapped between the bars after it rains.",
    code: [
      "def trap(height):",
      "    l, r = 0, len(height) - 1",
      "    left_max = right_max = water = 0",
      "    while l < r:",
      "        if height[l] < height[r]:",
      "            left_max = max(left_max, height[l])",
      "            water += left_max - height[l]",
      "            l += 1",
      "        else:",
      "            right_max = max(right_max, height[r])",
      "            water += right_max - height[r]",
      "            r -= 1",
      "    return water",
    ],
    examples: ["[0,1,0,2,1,0,1,3,2,1,2,1] returns 6", "[4,2,0,3,2,5] returns 9", "[] returns 0"],
    complexity: "O(n) time, O(1) space",
  },
];
