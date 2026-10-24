import { createFileRoute } from "@tanstack/react-router";
import { Download, Mail, MapPin, Phone } from "lucide-react";
import { SiteLayout } from "@/components/site/Layout";
import { faceUrl } from "@/components/site/common";
import { contact, projects, resume, services } from "@/data/site";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume | Suleman, Web & App Developer" },
      { name: "description", content: "Resume of Suleman, freelance web developer and app developer at Suleman Designs." },
      { property: "og:title", content: "Resume | Suleman Designs" },
      { property: "og:description", content: "Skills, services, projects and experience of Suleman." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: ResumePage,
});

function H({ children }: { children: string }) {
  return <h2 className="mb-2 border-b-2 border-primary pb-1 text-sm font-extrabold uppercase tracking-widest text-primary">{children}</h2>;
}

function ResumePage() {
  return (
    <SiteLayout>
      <div className="container-site pb-10 pt-32">
        <div className="sticky top-24 z-30 mb-6 flex justify-end print:hidden">
          <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-bold text-primary-foreground shadow-soft hover:bg-primary-hover">
            <Download className="h-4 w-4" /> Download PDF
          </button>
        </div>
        <div id="resume-page" className="mx-auto w-full max-w-[794px] bg-card p-8 text-sm shadow-soft sm:p-12">
          <header className="flex flex-col items-center gap-5 sm:flex-row">
            <img src={faceUrl} alt="Suleman" className="h-24 w-24 rounded-full object-cover ring-4 ring-primary" />
            <div className="text-center sm:text-left">
              <h1 className="text-4xl font-extrabold">{resume.name}<span className="text-primary">.</span></h1>
              <p className="font-semibold text-primary">{resume.title}</p>
              <p className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-muted-foreground sm:justify-start">
                <span className="flex items-center gap-1"><Mail className="h-3.5 w-3.5" />{contact.email}</span>
                <span className="flex items-center gap-1"><Phone className="h-3.5 w-3.5" />{contact.phone}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{contact.location}</span>
              </p>
            </div>
          </header>
          <div className="mt-8 space-y-6">
            <section><H>Profile</H><p className="leading-relaxed">{resume.profile}</p></section>
            <div className="grid gap-6 sm:grid-cols-2">
              <section><H>Skills</H><ul className="list-disc pl-5">{resume.skills.map((s) => <li key={s}>{s}</li>)}</ul></section>
              <section><H>Services</H><ul className="list-disc pl-5">{services.map((s) => <li key={s.title}>{s.title}</li>)}</ul></section>
            </div>
            <section><H>Selected Projects</H><ul className="space-y-1">{projects.map((p) => <li key={p.title}><strong>{p.title}</strong> — <a href={p.url} className="break-all text-primary">{p.url}</a></li>)}</ul></section>
            <section><H>Experience</H>{resume.experience.map((e) => <div key={e.role}><p className="font-bold">{e.role} <span className="font-normal text-muted-foreground">· {e.period}</span></p><ul className="mt-1 list-disc pl-5">{e.points.map((x) => <li key={x}>{x}</li>)}</ul></div>)}</section>
            <div className="grid gap-6 sm:grid-cols-2">
              <section><H>Education</H>{resume.education.map((e) => <p key={e.degree}><strong>{e.degree}</strong><br />{e.school} · {e.period}</p>)}</section>
              <section><H>Languages</H><p>{resume.languages.join(", ")}</p></section>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
}
