import { links } from "./site";

export const faq = [
  { q: "Do I need competitive programming experience?", a: "No. The Easy group is built for people who have never done an interview problem. Move up to Medium when you’re ready." },
  { q: "I’m not a CS major. Can I join?", a: "Yes. We focus on technical interviews, so the content is built for tech majors, but every ASU student is welcome." },
  { q: "How do I become a member?", a: "Join our Discord and register on Sun Devil Central. Then show up on Wednesday." },
  { q: "What should I bring to a meeting?", a: "A laptop with any language you’re comfortable in. Python, Java and C++ are the most common." },
  { q: "Is there food?", a: "Yes. There’s free pizza at every meeting." },
  { q: "Can my organization collaborate with Hacker Devils?", a: `Yes. Email ${links.email} with your idea. We regularly co-host with WiCS and SoDA.` },
] as const;
