export type EventItem = {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string; // e.g., "2026-11-07"
  time: string; // e.g., "09:00 AM"
};

export const events: EventItem[] = [
  {
    image: "/images/event1.png",
    title: "React Summit US 2026",
    slug: "react-summit-us-2026",
    location: "San Francisco, CA, USA",
    date: "2026-11-07",
    time: "09:00 AM",
  },
  {
    image: "/images/event2.png",
    title: "Next.js Conf 2026",
    slug: "nextjs-conf-2026",
    location: "New York, NY, USA",
    date: "2026-10-15",
    time: "10:00 AM",
  },
  {
    image: "/images/event3.png",
    title: "JavaScript Global Summit",
    slug: "javascript-global-summit",
    location: "London, UK",
    date: "2026-09-22",
    time: "02:00 PM",
  },
  {
    image: "/images/event4.png",
    title: "TypeScript Developer Conference",
    slug: "typescript-developer-conference",
    location: "Berlin, Germany",
    date: "2026-08-18",
    time: "11:30 AM",
  },
  {
    image: "/images/event5.png",
    title: "Web Performance Workshop",
    slug: "web-performance-workshop",
    location: "Austin, TX, USA",
    date: "2026-12-03",
    time: "01:00 PM",
  },
  {
    image: "/images/event6.png",
    title: "Full Stack Europe 2026",
    slug: "full-stack-europe-2026",
    location: "Amsterdam, Netherlands",
    date: "2026-10-28",
    time: "09:30 AM",
  },
];
