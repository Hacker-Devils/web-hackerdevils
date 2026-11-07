export const meetingFacts = [
  { label: "Time", value: "Wednesdays, 6 to 7 PM Arizona time" },
  { label: "Place", value: "Wilson Hall, Tempe campus" },
  { label: "Bring", value: "A laptop and any language you like" },
  { label: "Food", value: "Free pizza, every meeting" },
] as const;

/** The two weeks that alternate through the semester. */
export const rotation = [
  {
    title: "One week",
    sessions: [
      { name: "Easy section", room: "WLSN 114" },
      { name: "System design", room: "WLSN 253" },
    ],
    note: "Same hour, so pick one.",
  },
  {
    title: "The next week",
    sessions: [{ name: "Medium section", room: "WLSN 114" }],
    note: "Then the rotation repeats.",
  },
] as const;

export const agenda = [
  { time: "6:00", title: "Problem drop", body: "Grab a slice while officers introduce the night’s problem or design prompt." },
  { time: "6:10", title: "Solve together", body: "Work in small groups, with help when you’re stuck." },
  { time: "6:40", title: "Review", body: "Walk through solutions, complexity and edge cases." },
] as const;
