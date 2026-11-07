export const meetingFacts = [
  { label: "Time", value: "Wednesdays, 6 to 7 PM Arizona time" },
  { label: "Place", value: "Tempe campus, room posted on Discord" },
  { label: "Bring", value: "A laptop and any language you like" },
  { label: "Food", value: "Free pizza, every meeting" },
] as const;

export const agenda = [
  { time: "6:00", title: "Problem drop", body: "Grab a slice. Officers introduce the week’s problem or design prompt." },
  { time: "6:05", title: "Pick a level", body: "Easy or Medium, with a Hard now and then." },
  { time: "6:10", title: "Solve together", body: "Work in small groups, with help when you’re stuck." },
  { time: "6:40", title: "Review", body: "Walk through solutions, complexity and edge cases." },
] as const;
