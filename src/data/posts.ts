export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  gradient: string;
  body: { type: "p" | "h2" | "ul"; text?: string; items?: string[] }[];
};

export const posts: Post[] = [
  {
    slug: "why-every-local-business-needs-a-website-2026",
    title: "Why Every Local Business Needs a Website in 2026",
    category: "Business",
    date: "Sep 28, 2026",
    readTime: "4 min read",
    excerpt: "Social media pages are not enough anymore. Here's why a real website is the best investment a local business can make this year.",
    gradient: "from-primary to-primary-hover",
    body: [
      { type: "p", text: "In 2026, the first thing most customers do before visiting a salon, gym, clinic or restaurant is search for it online. If they can't find a clean, trustworthy website, many of them simply move on to the next result. A social media page helps, but it isn't a replacement for a home you fully own." },
      { type: "h2", text: "1. Trust is built in seconds" },
      { type: "p", text: "A professional website tells visitors you are serious. Clear services, real photos, prices and contact details answer their questions before they even ask. Businesses with a polished site look bigger, more reliable and more established than competitors without one." },
      { type: "h2", text: "2. Google sends you customers for free" },
      { type: "p", text: "When someone searches \"best gym near me\" or \"hair salon in my city\", Google shows websites and map listings. A fast, well-structured site with the right keywords helps you appear in those results, bringing in customers every day without paying for ads." },
      { type: "h2", text: "3. You control everything" },
      { type: "p", text: "Social platforms change their algorithms constantly, and your reach can drop overnight. Your website is yours. You decide the design, the message and the call to action, and you can connect it with WhatsApp, booking forms and email so no lead gets lost." },
      { type: "h2", text: "4. It works while you sleep" },
      { type: "p", text: "A website answers common questions, shows your menu or price list and collects enquiries 24 hours a day. That means fewer repeated phone calls and more time to focus on serving your customers." },
      { type: "h2", text: "The bottom line" },
      { type: "p", text: "A website is no longer a luxury for big brands. It's the foundation of every local business's online presence. The good news is that a modern, mobile-friendly site is more affordable and faster to build than ever. If you've been putting it off, 2026 is the year to make it happen." },
    ],
  },
  {
    slug: "5-things-salon-or-gym-website-must-have",
    title: "5 Things a Great Salon or Gym Website Must Have",
    category: "Web Design",
    date: "Sep 14, 2026",
    readTime: "4 min read",
    excerpt: "From booking buttons to real photos, these five elements turn casual visitors into paying members and clients.",
    gradient: "from-surface to-surface-card",
    body: [
      { type: "p", text: "I've built websites for salons and gyms, and the ones that bring in the most customers all share a few key features. If your site is missing any of these, you are probably losing bookings to competitors." },
      { type: "h2", text: "1. A clear call to action above the fold" },
      { type: "p", text: "Visitors should see a \"Book Now\", \"Join Today\" or \"Chat on WhatsApp\" button the moment the page loads. Don't make them scroll or hunt for a way to contact you. One bold, contrasting button is enough." },
      { type: "h2", text: "2. Real photos of your space and results" },
      { type: "p", text: "Stock photos feel generic. Show your actual salon chairs, your gym equipment, your trainers and stylists, and before-and-after results. Real images build trust instantly and help customers picture themselves there." },
      { type: "h2", text: "3. Simple services and pricing" },
      { type: "p", text: "List your main services or membership plans with clear prices or starting prices. People hate guessing. Transparent pricing filters out the wrong leads and encourages the right ones to reach out." },
      { type: "h2", text: "4. Social proof" },
      { type: "p", text: "Reviews and testimonials from happy clients are some of the most persuasive content on any page. Add a few short quotes with names, and link to your Google reviews if you have them." },
      { type: "h2", text: "5. Mobile-first speed" },
      { type: "p", text: "Most of your visitors are on their phones. Your website must load in a couple of seconds and be easy to tap through with one thumb. Compressed images, clean code and a simple layout make a huge difference." },
      { type: "h2", text: "Bonus: location and opening hours" },
      { type: "p", text: "Add a map, your address and your opening hours in the footer or contact section. It sounds basic, but it's one of the most searched pieces of information for any local business. Get these five things right and your website becomes your best salesperson." },
    ],
  },
  {
    slug: "website-vs-mobile-app-which-one",
    title: "Website vs Mobile App: Which One Does Your Business Need?",
    category: "Apps",
    date: "Aug 30, 2026",
    readTime: "5 min read",
    excerpt: "Both are powerful, but they solve different problems. Here's a simple way to decide what to build first.",
    gradient: "from-primary-hover to-surface",
    body: [
      { type: "p", text: "One of the most common questions clients ask me is whether they should build a website or a mobile app. The honest answer: it depends on what you want your customers to do. Here's how to think about it." },
      { type: "h2", text: "When a website is the right choice" },
      { type: "p", text: "A website is the best starting point for almost every business. It's found through Google, opens instantly from any link and works on every device without installing anything. If your goal is to get discovered, explain your services and collect enquiries, a website wins." },
      { type: "ul", items: ["You need new customers to find you online", "You want to show services, prices and contact info", "You have a limited budget and need results fast"] },
      { type: "h2", text: "When a mobile app makes sense" },
      { type: "p", text: "Apps shine when customers come back often and need to do something repeatedly: booking classes, ordering food, tracking workouts or earning loyalty points. Apps can send push notifications and feel faster for frequent tasks." },
      { type: "ul", items: ["You have loyal, returning customers", "You need features like notifications, accounts or offline use", "Your service is used weekly or daily"] },
      { type: "h2", text: "The smart path: start with a website" },
      { type: "p", text: "For most businesses, I recommend launching a strong website first. It brings in customers and validates your ideas. Once you have a loyal audience asking for more convenience, a cross-platform app built for Android and iOS is a natural next step." },
      { type: "h2", text: "Can you have both?" },
      { type: "p", text: "Absolutely. Many successful brands use their website to attract new customers and their app to keep existing ones engaged. With modern cross-platform tools, building both is more affordable than ever. If you're unsure which one fits your goals, send me a message and I'll give you an honest recommendation." },
    ],
  },
  {
    slug: "how-i-build-a-website-in-7-days",
    title: "How I Build a Website in 7 Days: My Simple Process",
    category: "Freelancing",
    date: "Aug 16, 2026",
    readTime: "4 min read",
    excerpt: "A transparent look at my week-long process, from the first chat to launch day.",
    gradient: "from-surface-card to-primary",
    body: [
      { type: "p", text: "Clients often expect a website to take months. For most business sites, I deliver in about a week. The secret isn't rushing; it's a clear, simple process that keeps everyone on the same page." },
      { type: "h2", text: "Day 1: Discovery" },
      { type: "p", text: "We start with a quick call or WhatsApp chat. I learn about your business, your customers, your competitors and your goals. I also collect your logo, photos, services and any content you already have." },
      { type: "h2", text: "Day 2: Structure and design direction" },
      { type: "p", text: "I plan the pages and sections, then create a design direction with colors, fonts and layout. You review it and share feedback before a single line of final code is written." },
      { type: "h2", text: "Days 3–5: Development" },
      { type: "p", text: "This is where the site comes to life. I build it mobile-first, making sure it's fast, responsive and SEO-friendly. I add contact forms, WhatsApp buttons, maps and anything else your customers need. You get a preview link to follow progress." },
      { type: "h2", text: "Day 6: Review and polish" },
      { type: "p", text: "You test the site on your phone and computer and send me your notes. I fine-tune text, images and details, and test everything on different devices and browsers." },
      { type: "h2", text: "Day 7: Launch" },
      { type: "p", text: "I connect your domain, set up basic SEO and analytics, and publish the site. Then I walk you through how everything works." },
      { type: "h2", text: "After launch" },
      { type: "p", text: "My work doesn't stop on launch day. I offer friendly support for small updates and questions so your website keeps working for you. Clear steps, regular updates and no surprises: that's how a great website gets built in seven days." },
    ],
  },
];
