import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { About, BlogPreview, ContactSection, CtaBanner, Hero, Projects, Services, Skills, Stats, Testimonials } from "@/components/site/HomeSections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Suleman Designs | Web & App Developer" },
      { name: "description", content: "Suleman builds fast, beautiful, conversion-focused websites and mobile apps for ambitious businesses." },
      { property: "og:title", content: "Suleman Designs | Web & App Developer" },
      { property: "og:description", content: "Fast, modern websites and mobile apps that grow brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <Hero /><About /><Services /><Skills /><Projects /><Stats /><Testimonials /><BlogPreview /><CtaBanner /><ContactSection />
    </SiteLayout>
  ),
});
