export const contact = {
  email: "sulemanae17@gmail.com",
  phone: "+92 318 7670497",
  phoneHref: "tel:+923187670497",
  location: "Pakistan",
  mapsUrl: "https://maps.app.goo.gl/rTuu72JnzD7aCs8u9",
  instagram: "https://www.instagram.com/suleman.designs?obrf=N2ZlaW5kbWR2c291",
  x: "https://x.com/Sulemanshah179",
  whatsapp: "https://wa.me/923187670497",
  whatsappProject:
    "https://wa.me/923187670497?text=Hi%20Suleman%2C%20I%20want%20to%20discuss%20a%20project.",
  // FormSubmit recipient. After activation, replace this with the random token
  // from FormSubmit's email (it still delivers to sulemanae17@gmail.com).
  formSubmitId: "sulemanae17@gmail.com",
  get formEndpoint() {
    return `https://formsubmit.co/ajax/${this.formSubmitId}`;
  },
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
] as const;

export const hero = {
  badge: "Open for freelance projects",
  subtext:
    "I'm Suleman, a web and app developer who builds fast, beautiful and conversion-focused digital products for ambitious businesses.",
};

export const about = {
  text: "Hi, I'm Suleman, the creative developer behind Suleman Designs. I turn ideas into fast, modern websites and mobile apps that look great and convert visitors into customers. From salons and gyms to clinics and restaurants, I build digital experiences that help local and global businesses grow online. I care about clean code, pixel-perfect design and clear communication from the first message to the final launch.",
  highlights: ["Fast delivery", "Mobile-first design", "Friendly support after launch"],
};

export type ServiceIcon = "globe" | "smartphone" | "layout" | "cart";
export const services: { icon: ServiceIcon; title: string; desc: string }[] = [
  { icon: "globe", title: "Website Development", desc: "Fast, responsive, SEO-friendly websites for businesses, brands and personal portfolios." },
  { icon: "smartphone", title: "Mobile App Development", desc: "Cross-platform Android and iOS apps with smooth performance and clean UX." },
  { icon: "layout", title: "UI/UX & Responsive Design", desc: "Modern interfaces that look perfect on every screen and are easy to use." },
  { icon: "cart", title: "Landing Pages & E-commerce", desc: "High-converting landing pages and online stores built to turn visitors into customers." },
];

export const skillGroups = [
  {
    icon: "code" as const,
    title: "Web Developer",
    desc: "Modern, fast and responsive websites that look great and rank well.",
    skills: [
      { name: "Responsive Website Development", value: 95 },
      { name: "Frontend Development", value: 92 },
      { name: "Landing Pages & Business Websites", value: 95 },
      { name: "Website Performance & SEO", value: 88 },
    ],
  },
  {
    icon: "smartphone" as const,
    title: "App Developer",
    desc: "Smooth, cross-platform mobile apps with clean, intuitive interfaces.",
    skills: [
      { name: "Mobile App Development", value: 85 },
      { name: "App UI Design", value: 88 },
      { name: "Cross-Platform Apps", value: 82 },
      { name: "API Integration", value: 80 },
    ],
  },
];

export const softSkills = ["Problem Solving", "Clear Communication", "On-time Delivery", "Client Support", "Creative Thinking"];

export type ProjectCategory = "Business" | "Health" | "Food" | "Portfolio";
export const projectFilters = ["All", "Business", "Health", "Food", "Portfolio"] as const;

export const projects: { title: string; category: ProjectCategory; url: string; desc: string; icon: "scissors" | "dumbbell" | "stethoscope" | "user" | "utensils" }[] = [
  { title: "Hair Salon Website", category: "Business", url: "https://astounding-granita-c57051.netlify.app/#home", desc: "Elegant salon site with services, gallery and online booking feel.", icon: "scissors" },
  { title: "Gym Website", category: "Health", url: "https://irron-warrior-wahcantt-project.vercel.app", desc: "Powerful fitness website with plans, trainers and strong call-to-actions.", icon: "dumbbell" },
  { title: "Medical Website", category: "Health", url: "https://spectacular-starship-425f54.netlify.app", desc: "Clean, trustworthy clinic website that makes patient contact easy.", icon: "stethoscope" },
  { title: "Personal Portfolio", category: "Portfolio", url: "https://aesthetic-brioche-b21429.netlify.app", desc: "Modern personal portfolio built to showcase work and attract clients.", icon: "user" },
  { title: "Restaurant Website", category: "Food", url: "https://stupendous-sopapillas-93d811.netlify.app", desc: "Tasty restaurant website with menu highlights and a warm, inviting design.", icon: "utensils" },
  { title: "PowerGym Fitness", category: "Health", url: "https://powergym-fitness.vercel.app", desc: "Bold, high-energy gym website with training programs, a free-trial offer and strong call-to-actions.", icon: "dumbbell" },

];

// Project screenshots are bundled in public/images so they load on any host.
const localThumbs: Record<string, string> = {
  "Hair Salon Website": "/images/salon-preview.jpg",
  "Gym Website": "/images/gym-preview.jpg",
  "Medical Website": "/images/medical-preview.jpg",
  "Personal Portfolio": "/images/portfolio-preview.jpg",
  "Restaurant Website": "/images/restaurant-preview.jpg",
  "PowerGym Fitness": "/images/powergym-preview.jpg",
};
export const thumb = (url: string) => {
  const p = projects.find((x) => x.url === url);
  return (p && localThumbs[p.title]) ?? `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=600`;
};

export const stats = [
  { icon: "award" as const, value: 3, label: "Years Experience" },
  { icon: "briefcase" as const, value: 30, label: "Projects Completed" },
  { icon: "smile" as const, value: 20, label: "Happy Clients" },
  { icon: "globe" as const, value: 5, label: "Countries Worked" },
];

export const testimonials = [
  { quote: "Suleman understood our brand right away and delivered a website that looks amazing on every device.", name: "Ali Raza", role: "Owner", business: "Glam Hair Studio" },
  { quote: "Fast, professional and always available. Our gym website brought in new members within weeks.", name: "Hamza Khan", role: "Founder", business: "Iron Warrior Gym" },
  { quote: "Clean design, quick delivery and great communication. I'd recommend him to any business.", name: "Dr. Sara Ahmed", role: "Director", business: "City Care Clinic" },
];

export const resume = {
  name: "Suleman",
  title: "Web Developer & App Developer",
  profile:
    "Freelance web and app developer behind Suleman Designs. I build fast, responsive, conversion-focused websites and cross-platform mobile apps for salons, gyms, clinics, restaurants and personal brands, with a focus on clean code, modern design and clear communication.",
  skills: ["Web Development", "App Development", "UI/UX", "Responsive Design", "SEO basics"],
  experience: [
    {
      role: "Freelance Web & App Developer",
      period: "2023 – Present",
      points: [
        "Delivered 30+ websites and apps for clients in 5+ countries.",
        "Built business sites for salons, gyms, clinics and restaurants.",
        "Handled design, development, launch and post-launch support.",
      ],
    },
  ],
  education: [{ degree: "Your Degree / Program", school: "Your Institute", period: "Year – Year" }],
  languages: ["English", "Urdu"],
};
