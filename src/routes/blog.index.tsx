import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PostCard } from "@/components/site/HomeSections";
import { SectionHeading } from "@/components/site/common";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | Suleman Designs" },
      { name: "description", content: "Tips on websites, apps and growing your business online from Suleman Designs." },
      { property: "og:title", content: "Blog | Suleman Designs" },
      { property: "og:description", content: "Latest insights on web design, apps and freelancing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <SiteLayout>
      <section className="container-site pb-10 pt-36">
        <SectionHeading label="Blog" title="Latest Insights" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </SiteLayout>
  ),
});
