import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/HomeSections";
import { cn } from "@/lib/utils";
import { posts } from "@/data/posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Suleman Designs` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
          { name: "twitter:card", content: "summary_large_image" },
        ]
      : [{ title: "Unavailable" }, { name: "robots", content: "noindex" }],
  }),
  component: PostPage,
});

function PostPage() {
  const { post } = Route.useLoaderData();
  return (
    <SiteLayout>
      <article className="container-site max-w-3xl pt-32">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-bold hover:text-primary"><ArrowLeft className="h-4 w-4" /> Back to Blog</Link>
        <div className={cn("mt-6 flex aspect-[21/9] items-end rounded-3xl bg-gradient-to-br p-6", post.gradient)}>
          <span className="rounded-full bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
        </div>
        <h1 className="mt-8 text-4xl font-extrabold leading-tight sm:text-5xl">{post.title}</h1>
        <p className="mt-3 text-sm font-semibold text-muted-foreground">{post.date} · {post.readTime}</p>
        <div className="prose-article mt-8">
          {post.body.map((b, i) =>
            b.type === "h2" ? <h2 key={i}>{b.text}</h2> : b.type === "ul" ? <ul key={i}>{b.items?.map((x) => <li key={x}>{x}</li>)}</ul> : <p key={i}>{b.text}</p>,
          )}
        </div>
      </article>
      <CtaBanner />
    </SiteLayout>
  );
}
