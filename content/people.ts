export const facultyAdvisor = { name: "Adil Ali", title: "Faculty Advisor", photo: "/team/adil-ali.jpg" } as const;

/** The Fall 2026 board, one gallery frame per group. Titles are from the club's Instagram post. */
export const boardFrames = [
  {
    label: "President and VP",
    title: "President and Vice President",
    people: [
      { name: "Saanvi Kakde", title: "President", photo: "/team/saanvi-kakde.jpg" },
      { name: "Shashwat Raj", title: "Vice President", photo: "/team/shashwat-raj.jpg" },
    ],
  },
  {
    label: "Marketing",
    title: "Marketing and social media",
    people: [
      { name: "Ashley Cyril", title: "Marketing Lead", photo: "/team/ashley-cyril.jpg" },
      { name: "David Fisher", title: "Video Production Lead", photo: "/team/david-fisher.jpg" },
    ],
  },
  {
    label: "Easy section",
    title: "Easy section officers",
    people: [
      { name: "Mark Bestwina", title: "Easy Technical Officer", photo: "/team/mark-bestwina.jpg" },
      { name: "Andrew Laymon", title: "Easy Technical Officer", photo: "/team/andrew-laymon.jpg" },
      { name: "Nish Patha", title: "Easy Section Officer", photo: "/team/nish-patha.jpg" },
      { name: "Brayden Sutherland", title: "Easy Technical Officer", photo: "/team/brayden-sutherland.jpg" },
    ],
  },
  {
    label: "Medium section",
    title: "Medium section officers",
    people: [
      { name: "Sohum Sheth", title: "Technical Lead", photo: "/team/sohum-sheth.jpg" },
      { name: "Dean Richardson", title: "Medium Technical Officer", photo: "/team/dean-richardson.jpg" },
      { name: "Griffin Charlson", title: "Medium Technical Officer", photo: "/team/griffin-charlson.jpg" },
    ],
  },
  {
    label: "Finance",
    title: "Finance",
    people: [{ name: "Harsh Kumar", title: "Treasurer", photo: "/team/harsh-kumar.jpg" }],
  },
  {
    label: "Faculty",
    title: "Faculty",
    people: [facultyAdvisor],
  },
] as const;

export const partners = [
  { name: "AI Society (AIS)", work: "AI inference and post-training workshop" },
  { name: "Women in Computer Science (WiCS)", work: "Mock online assessment and the Ada Lovelace Summit" },
  { name: "Software Developers Association (SoDA)", work: "Mock interviews, the SoDA Code Challenge and the Ada Lovelace Summit" },
  { name: "ACM at ASU", work: "ICPC preparation" },
  { name: "Mathematics Tomorrow", work: "Co-hosted Medium section" },
  { name: "Dell Technologies", work: "Intern and recruiting mixer" },
  { name: "Ira A. Fulton Schools of Engineering", work: "Faculty support" },
] as const;
