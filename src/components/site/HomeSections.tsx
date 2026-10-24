import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useInView, animate } from "framer-motion";
import {
  ArrowRight, ArrowUpRight, Award, Briefcase, Check, ChevronLeft, ChevronRight, Code2, Download, Dumbbell, Globe,
  Instagram, LayoutTemplate, Mail, MapPin, MessageCircle, Phone, Scissors, ShoppingCart, Smartphone, Smile, Star,
  Stethoscope, Twitter, User, Utensils,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";
const hero = { url: "/images/suleman-hero.jpg" };
import {
  about, contact, hero as heroData, projectFilters, projects, services, skillGroups, softSkills, stats, testimonials, thumb,
} from "@/data/site";
import { posts } from "@/data/posts";
import { ArrowCircle, Reveal, SectionHeading, useContactDialog } from "./common";
import { ContactForm } from "./ContactForm";

const serviceIcons = { globe: Globe, smartphone: Smartphone, layout: LayoutTemplate, cart: ShoppingCart };
const projectIcons = { scissors: Scissors, dumbbell: Dumbbell, stethoscope: Stethoscope, user: User, utensils: Utensils };
const statIcons = { award: Award, briefcase: Briefcase, smile: Smile, globe: Globe };

export function Hero() {
  const { setOpen } = useContactDialog();
  return (
    <section id="home" className="container-site grid items-center gap-14 pb-16 pt-32 lg:grid-cols-2 lg:pt-40">
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card px-4 py-2 text-xs font-bold uppercase tracking-[0.15em]">
          <span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60" /><span className="relative h-2.5 w-2.5 rounded-full bg-primary" /></span>
          {heroData.badge}
        </span>
        <h1 className="mt-6 text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
          Websites &amp; Apps
          <br />
          That <span className="text-primary">Grow</span> Brands<span className="text-primary">.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-muted-foreground">{heroData.subtext}</p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link to="/" hash="work" className="group inline-flex items-center gap-3 rounded-full bg-primary py-2 pl-6 pr-2 font-bold text-primary-foreground transition-colors hover:bg-primary-hover">
            View My Work <ArrowCircle tone="light" className="text-primary group-hover:rotate-45" />
          </Link>
          <button onClick={() => setOpen(true)} className="inline-flex items-center gap-1 font-bold transition-colors hover:text-primary">Hire Me <ArrowRight className="h-4 w-4" /></button>
          <Link to="/resume" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary">
            <Download className="h-4 w-4" /> Download Resume
          </Link>
        </div>
      </Reveal>
      <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
        <div className="absolute left-1/2 top-1/2 aspect-square w-[95%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-90 blur-[2px]" aria-hidden />
        <div className="relative overflow-hidden rounded-[32px] shadow-glow">
          <img src={hero.url} alt="Suleman, web and app developer, standing against an orange wall" className="aspect-[4/5] w-full object-cover object-[54%_20%]" fetchPriority="high" />
        </div>
        <div className="animate-float absolute -bottom-6 -left-2 rounded-3xl bg-card px-5 py-4 shadow-soft sm:-left-8">
          <p className="text-4xl font-extrabold text-primary">3+</p>
          <p className="text-sm font-semibold text-muted-foreground">Years of Experience</p>
        </div>
        <div className="animate-float-slow absolute -right-2 top-8 flex items-center gap-3 rounded-3xl bg-card px-4 py-3 shadow-soft sm:-right-6">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><Briefcase className="h-5 w-5" /></span>
          <p className="text-sm font-bold leading-tight"><span className="text-xl font-extrabold">30+</span><br />Projects Delivered</p>
        </div>
      </Reveal>
    </section>
  );
}

export function About() {
  const { setOpen } = useContactDialog();
  const chips = [
    { icon: MapPin, label: "Pakistan", href: contact.mapsUrl },
    { icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
    { icon: Briefcase, label: "Available for freelance" },
    { icon: Globe, label: "Working with clients worldwide" },
  ];
  return (
    <section id="about" className="container-site py-20">
      <SectionHeading label="About" title="About Me" />
      <div className="mt-12 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border-2 border-primary" aria-hidden />
          <img src={hero.url} alt="Portrait of Suleman" loading="lazy" className="relative aspect-square w-full rounded-3xl object-cover object-[54%_15%] shadow-soft" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-muted-foreground">{about.text}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map(({ icon: I, label, href }) => {
              const cls = "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold";
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className={cn(cls, "transition-colors hover:border-primary hover:text-primary")}><I className="h-4 w-4 text-primary" />{label}</a>
              ) : (
                <span key={label} className={cls}><I className="h-4 w-4 text-primary" />{label}</span>
              );
            })}
          </div>
          <ul className="mt-6 grid gap-3 sm:grid-cols-3">
            {about.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 font-semibold"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground"><Check className="h-3.5 w-3.5" /></span>{h}</li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/resume" className="inline-flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary"><Download className="h-4 w-4" /> Download Resume</Link>
            <button onClick={() => setOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-hover">Let's Talk <ArrowUpRight className="h-4 w-4" /></button>
          </div>
          <a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className="group mt-8 flex items-center gap-4 rounded-3xl bg-surface p-4 text-surface-foreground transition-transform hover:-translate-y-1">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary"><MapPin className="h-6 w-6" /></span>
            <span className="flex-1"><span className="block font-bold">Based in Pakistan</span><span className="text-sm text-surface-muted">View on Google Maps</span></span>
            <ArrowCircle className="group-hover:rotate-45" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="container-site py-12">
      <div className="rounded-[32px] bg-surface p-6 sm:p-10 lg:p-14">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading label="Services" title="What I Do" dark />
          <Reveal className="flex max-w-xs items-center gap-3 text-surface-muted">
            <p>Development solutions that are fast, scalable and user-focused</p>
            <ArrowCircle />
          </Reveal>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const I = serviceIcons[s.icon];
            return (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="group flex h-full flex-col rounded-3xl border border-surface-border bg-surface-card p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><I className="h-6 w-6" /></span>
                  <h3 className="mt-6 text-xl font-bold text-surface-foreground">{s.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-surface-muted">{s.desc}</p>
                  <ArrowCircle tone="light" className="mt-6 self-end group-hover:rotate-45" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Bar({ name, value }: { name: string; value: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref}>
      <div className="mb-2 flex justify-between text-sm font-semibold"><span>{name}</span><span className="text-primary">{value}%</span></div>
      <div className="h-2.5 overflow-hidden rounded-full bg-muted">
        <motion.div className="h-full rounded-full bg-primary" initial={{ width: 0 }} animate={{ width: inView ? `${value}%` : 0 }} transition={{ duration: 1.3, ease: "easeOut" }} />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="container-site py-20">
      <SectionHeading label="Skills" title="My Skills" />
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {skillGroups.map((g, i) => {
          const I = g.icon === "code" ? Code2 : Smartphone;
          return (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl bg-card p-7 shadow-soft transition-transform hover:-translate-y-1 sm:p-9">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><I className="h-6 w-6" /></span>
                <h3 className="mt-5 text-2xl font-extrabold">{g.title}</h3>
                <p className="mt-2 text-muted-foreground">{g.desc}</p>
                <div className="mt-7 space-y-5">{g.skills.map((s) => <Bar key={s.name} {...s} />)}</div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal className="mt-8 flex flex-wrap justify-center gap-3">
        {softSkills.map((s) => <span key={s} className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:border-primary hover:text-primary">{s}</span>)}
      </Reveal>
    </section>
  );
}

function ProjectCard({ p }: { p: (typeof projects)[number] }) {
  const [failed, setFailed] = useState(false);
  const I = projectIcons[p.icon];
  return (
    <a href={p.url} target="_blank" rel="noopener noreferrer" className="group block h-full overflow-hidden rounded-3xl bg-surface p-2 transition-transform duration-300 hover:-translate-y-2">
      <div className="relative aspect-[3/2] overflow-hidden rounded-[20px] bg-surface-card">
        {failed ? (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-surface-card to-primary/60"><I className="h-14 w-14 text-surface-foreground" /></div>
        ) : (
          <img src={thumb(p.url)} alt={`${p.title} preview`} loading="lazy" onError={() => setFailed(true)} className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-surface/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="inline-flex items-center gap-1 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground">Live Preview <ArrowUpRight className="h-4 w-4" /></span>
        </div>
      </div>
      <div className="flex items-end justify-between gap-3 p-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{p.category}</p>
          <h3 className="mt-1 text-lg font-bold text-surface-foreground">{p.title}</h3>
          <p className="mt-1 text-sm text-surface-muted">{p.desc}</p>
        </div>
        <ArrowCircle className="h-11 w-11 group-hover:rotate-45" />
      </div>
    </a>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]>("All");
  const { setOpen } = useContactDialog();
  const list = projects.filter((p) => filter === "All" || p.category === filter);
  return (
    <section id="work" className="container-site py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading label="Featured Work" title="Selected Projects" />
        <div className="flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button key={f} onClick={() => setFilter(f)} className={cn("rounded-full px-5 py-2 text-sm font-bold transition-colors", filter === f ? "bg-primary text-primary-foreground" : "bg-card text-foreground shadow-soft hover:text-primary")}>{f}</button>
          ))}
        </div>
      </div>
      <motion.div layout className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <motion.div layout key={p.title} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}>
            <ProjectCard p={p} />
          </motion.div>
        ))}
      </motion.div>
      <div className="mt-12 flex justify-center">
        <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-3 rounded-full border-2 border-foreground bg-primary py-2 pl-6 pr-2 font-bold text-primary-foreground transition-colors hover:bg-primary-hover">
          Start Your Project <ArrowCircle tone="dark" className="group-hover:rotate-45" />
        </button>
      </div>
    </section>
  );
}

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.6, onUpdate: (v) => setN(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <span ref={ref}>{n}</span>;
}

export function Stats() {
  return (
    <section className="container-site py-8">
      <Reveal className="grid grid-cols-2 rounded-3xl bg-peach lg:grid-cols-4">
        {stats.map((s, i) => {
          const I = statIcons[s.icon];
          return (
            <div key={s.label} className={cn("flex flex-col items-center gap-2 p-8 text-center", i % 2 === 0 && "border-r border-primary/20", i < 2 && "border-b border-primary/20 lg:border-b-0", i === 1 && "lg:border-r")}>
              <I className="h-7 w-7 text-primary" strokeWidth={1.75} />
              <p className="text-4xl font-extrabold sm:text-5xl"><Counter to={s.value} />+</p>
              <p className="text-sm font-semibold text-muted-foreground">{s.label}</p>
            </div>
          );
        })}
      </Reveal>
    </section>
  );
}

export function Testimonials() {
  const [ref, api] = useEmblaCarousel({ loop: true, align: "start" });
  useEffect(() => {
    if (!api) return;
    const t = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(t);
  }, [api]);
  const items = [...testimonials, ...testimonials];
  const btn = "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors hover:bg-primary-hover";
  return (
    <section className="container-site py-20">
      <SectionHeading label="Testimonials" title="Trusted by Great Clients" center />
      <div className="mt-12 flex items-center gap-3">
        <button className={cn(btn, "hidden sm:flex")} onClick={() => api?.scrollPrev()} aria-label="Previous testimonial"><ChevronLeft className="h-5 w-5" /></button>
        <div className="overflow-hidden" ref={ref}>
          <div className="-ml-5 flex">
            {items.map((t, i) => (
              <div key={i} className="min-w-0 shrink-0 grow-0 basis-full pl-5 md:basis-1/2 lg:basis-1/3">
                <figure className="flex h-full flex-col rounded-3xl bg-peach p-7">
                  <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-current" />)}</div>
                  <blockquote className="mt-4 flex-1 text-lg font-medium leading-relaxed">"{t.quote}"</blockquote>
                  <div className="my-5 h-px bg-primary/20" />
                  <figcaption className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">{t.name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("")}</span>
                    <span><span className="block font-bold">{t.name}</span><span className="text-sm text-muted-foreground">{t.role}, {t.business}</span></span>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
        <button className={cn(btn, "hidden sm:flex")} onClick={() => api?.scrollNext()} aria-label="Next testimonial"><ChevronRight className="h-5 w-5" /></button>
      </div>
      <div className="mt-6 flex justify-center gap-3 sm:hidden">
        <button className={btn} onClick={() => api?.scrollPrev()} aria-label="Previous testimonial"><ChevronLeft className="h-5 w-5" /></button>
        <button className={btn} onClick={() => api?.scrollNext()} aria-label="Next testimonial"><ChevronRight className="h-5 w-5" /></button>
      </div>
    </section>
  );
}

export function PostCard({ post }: { post: (typeof posts)[number] }) {
  return (
    <Link to="/blog/$slug" params={{ slug: post.slug }} className="group flex h-full flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-transform duration-300 hover:-translate-y-2">
      <div className={cn("relative flex aspect-[16/9] items-end bg-gradient-to-br p-5", post.gradient)}>
        <span className="rounded-full bg-card px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">{post.category}</span>
        <span className="absolute right-5 top-5 text-6xl font-extrabold text-primary-foreground/20">{post.title[0]}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold text-muted-foreground">{post.date} · {post.readTime}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug transition-colors group-hover:text-primary">{post.title}</h3>
        <p className="mt-2 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
      </div>
    </Link>
  );
}

export function BlogPreview() {
  return (
    <section id="blog" className="container-site py-20">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading label="Blog" title="Latest Insights" />
        <Link to="/blog" className="inline-flex items-center gap-2 self-start rounded-full border-2 border-foreground px-5 py-2.5 text-sm font-bold transition-colors hover:border-primary hover:text-primary md:self-auto">View All Posts <ArrowRight className="h-4 w-4" /></Link>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.slice(0, 3).map((p, i) => <Reveal key={p.slug} delay={i * 0.08}><PostCard post={p} /></Reveal>)}
      </div>
    </section>
  );
}

export function CtaBanner() {
  const { setOpen } = useContactDialog();
  return (
    <section className="container-site py-12">
      <Reveal className="flex flex-col items-start justify-between gap-8 rounded-[32px] bg-primary p-8 sm:p-12 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">Let's Work Together</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">Have a project in mind? Let's build something <span className="text-primary-foreground">bold.</span></h2>
        </div>
        <div className="flex flex-col items-start gap-3 lg:items-center">
          <button onClick={() => setOpen(true)} className="group inline-flex items-center gap-3 rounded-full bg-surface py-2 pl-6 pr-2 font-bold text-surface-foreground transition-transform hover:-translate-y-0.5">
            Let's Discuss Your Project <ArrowCircle className="group-hover:rotate-45" />
          </button>
          <p className="flex items-center gap-2 text-xs font-semibold text-foreground"><span className="h-2 w-2 rounded-full bg-success" /> Usually replies within 24 hours</p>
        </div>
      </Reveal>
    </section>
  );
}

export function ContactSection() {
  const cards = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
    { icon: MapPin, label: "Location", value: contact.location, href: contact.mapsUrl },
    { icon: Instagram, label: "Instagram", value: "@suleman.designs", href: contact.instagram },
    { icon: Twitter, label: "X (Twitter)", value: "@Sulemanshah179", href: contact.x },
  ];
  return (
    <section id="contact" className="container-site py-20">
      <SectionHeading label="Contact" title="Let's Talk" />
      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="space-y-3">
          {cards.map(({ icon: I, label, value, href }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="group flex items-center gap-4 rounded-3xl bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:ring-2 hover:ring-primary">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peach text-primary"><I className="h-5 w-5" /></span>
              <span className="min-w-0 flex-1"><span className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</span><span className="block truncate font-bold">{value}</span></span>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
            </a>
          ))}
          <a href={contact.whatsappProject} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-4 font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
            <MessageCircle className="h-5 w-5" /> Chat on WhatsApp
          </a>
        </Reveal>
        <Reveal delay={0.1} className="rounded-3xl bg-card p-6 shadow-soft sm:p-9">
          <h3 className="text-2xl font-extrabold">Send me a message</h3>
          <p className="mb-6 mt-1 text-muted-foreground">I'll get back to you within 24 hours.</p>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
