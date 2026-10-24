import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Instagram, Mail, MapPin, Menu, MessageCircle, Phone, Twitter, X } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { contact, navLinks, services } from "@/data/site";
import { ContactProvider, Logo, useContactDialog } from "./common";
import { ContactForm } from "./ContactForm";

function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState("home");
  useEffect(() => {
    if (!enabled) return;
    const ids = navLinks.map((l) => l.id);
    const onScroll = () => {
      let cur = "home";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [enabled]);
  return active;
}

function NavItem({ id, label, active, onClick }: { id: string; label: string; active: boolean; onClick?: () => void }) {
  const cls = cn(
    "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
    active ? "bg-primary text-primary-foreground" : "text-surface-muted hover:text-surface-foreground",
  );
  if (id === "blog") return <Link to="/blog" className={cls} onClick={onClick}>{label}</Link>;
  return <Link to="/" hash={id} className={cls} onClick={onClick}>{label}</Link>;
}

function Navbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const spy = useActiveSection(isHome);
  const active = isHome ? spy : pathname.startsWith("/blog") ? "blog" : "";
  const [open, setOpen] = useState(false);
  const { setOpen: openContact } = useContactDialog();

  return (
    <header className="fixed inset-x-0 top-3 z-50">
      <div className="container-site flex items-center justify-between gap-3">
        <Link to="/" hash="home" className="rounded-full bg-surface py-1.5 pl-1.5 pr-5 shadow-soft">
          <Logo />
        </Link>
        <nav className="hidden items-center gap-1 rounded-full bg-surface p-1.5 shadow-soft lg:flex" aria-label="Main">
          {navLinks.map((l) => <NavItem key={l.id} {...l} active={active === l.id} />)}
        </nav>
        <button onClick={() => openContact(true)} className="group hidden items-center gap-3 rounded-full bg-surface py-1.5 pl-5 pr-1.5 text-sm font-bold text-surface-foreground shadow-soft lg:flex">
          Let's Talk
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary transition-transform group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span>
        </button>
        <button onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" className="flex h-12 w-12 items-center justify-center rounded-full bg-surface text-surface-foreground lg:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="container-site mt-2 lg:hidden">
            <div className="flex flex-col gap-1 rounded-3xl bg-surface p-3 shadow-soft">
              {navLinks.map((l) => <NavItem key={l.id} {...l} active={active === l.id} onClick={() => setOpen(false)} />)}
              <button onClick={() => { setOpen(false); openContact(true); }} className="mt-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground">Let's Talk</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Footer() {
  const socials = [
    { href: contact.instagram, icon: Instagram, label: "Instagram" },
    { href: contact.x, icon: Twitter, label: "X (Twitter)" },
    { href: contact.whatsapp, icon: MessageCircle, label: "WhatsApp" },
    { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
  ];
  const quick = [["about", "About"], ["skills", "Skills"], ["work", "Work"], ["blog", "Blog"], ["contact", "Contact"]] as const;
  const link = "text-sm text-surface-muted transition-colors hover:text-primary";
  return (
    <footer className="mt-24 bg-surface-card text-surface-foreground">
      <div className="container-site grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size="lg" />
          <p className="mt-4 max-w-xs text-sm text-surface-muted">Building bold websites and apps that make impact.</p>
          <div className="mt-5 flex gap-2">
            {socials.map(({ href, icon: I, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center rounded-full border border-surface-border text-surface-foreground transition-colors hover:border-primary hover:text-primary">
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Quick Links</h3>
          <ul className="space-y-2.5">
            {quick.map(([id, l]) => <li key={id}>{id === "blog" ? <Link to="/blog" className={link}>{l}</Link> : <Link to="/" hash={id} className={link}>{l}</Link>}</li>)}
          </ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Services</h3>
          <ul className="space-y-2.5">{services.map((s) => <li key={s.title}><Link to="/" hash="services" className={link}>{s.title}</Link></li>)}</ul>
        </div>
        <div>
          <h3 className="mb-4 font-bold">Contact</h3>
          <ul className="space-y-3">
            <li><a href={`mailto:${contact.email}`} className={cn(link, "flex items-center gap-2")}><Mail className="h-4 w-4 text-primary" />{contact.email}</a></li>
            <li><a href={contact.mapsUrl} target="_blank" rel="noopener noreferrer" className={cn(link, "flex items-center gap-2")}><MapPin className="h-4 w-4 text-primary" />{contact.location}</a></li>
            <li><a href={contact.phoneHref} className={cn(link, "flex items-center gap-2")}><Phone className="h-4 w-4 text-primary" />{contact.phone}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-surface-border">
        <div className="container-site flex flex-col items-center justify-center gap-2 py-6 text-center text-xs text-surface-muted sm:flex-row sm:gap-4">
          <span>© 2026 Suleman Designs. All rights reserved.</span>
          <span className="flex gap-4"><a href="#" className="hover:text-primary">Privacy Policy</a><a href="#" className="hover:text-primary">Terms &amp; Conditions</a></span>
        </div>
      </div>
    </footer>
  );
}

function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const f = () => setShow(window.scrollY > 600);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-center gap-3 print:hidden">
      <AnimatePresence>
        {show && (
          <motion.button initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top" className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-surface-foreground shadow-soft transition-colors hover:bg-primary">
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>
      <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with me on WhatsApp" className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-soft">
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40" />
        <svg viewBox="0 0 24 24" className="relative h-7 w-7 fill-current" aria-hidden><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.4 9.4 0 0 1-1.45-5.02c0-5.2 4.24-9.44 9.45-9.44a9.4 9.4 0 0 1 9.44 9.45c0 5.21-4.24 9.44-9.45 9.44m8.03-17.47A11.3 11.3 0 0 0 12.05.7C5.79.7.7 5.79.7 12.04c0 2 .52 3.95 1.52 5.67L.6 23.6l6.03-1.58a11.3 11.3 0 0 0 5.42 1.38h.01c6.25 0 11.34-5.09 11.35-11.35 0-3.03-1.18-5.88-3.33-8.02" /></svg>
        <span className="pointer-events-none absolute right-16 whitespace-nowrap rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-surface-foreground opacity-0 transition-opacity group-hover:opacity-100">Chat with me</span>
      </a>
    </div>
  );
}

function ContactDialog() {
  const { open, setOpen } = useContactDialog();
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl sm:max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-extrabold">Let's Talk<span className="text-primary">.</span></DialogTitle>
          <DialogDescription>Tell me about your project and I'll get back to you within 24 hours.</DialogDescription>
        </DialogHeader>
        <ContactForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      <div className="print:hidden"><Navbar /></div>
      <main>{children}</main>
      <div className="print:hidden"><Footer /></div>
      <FloatingButtons />
      <ContactDialog />
      <Toaster position="top-center" richColors />
    </ContactProvider>
  );
}
