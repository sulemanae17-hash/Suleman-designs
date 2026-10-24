import { createContext, useContext, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
const face = { url: "/images/suleman-face.jpg" };

export const faceUrl = face.url;

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeading({ label, title, dark, center, className }: { label: string; title: string; dark?: boolean; center?: boolean; className?: string }) {
  return (
    <Reveal className={cn(center && "text-center", className)}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-primary">{label}</p>
      <h2 className={cn("text-4xl font-extrabold sm:text-5xl", dark ? "text-surface-foreground" : "text-foreground")}>
        {title}
        <span className="text-primary">.</span>
      </h2>
    </Reveal>
  );
}

export function ArrowCircle({ className, tone = "primary" }: { className?: string; tone?: "primary" | "light" | "dark" }) {
  return (
    <span
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-transform duration-300",
        tone === "primary" && "bg-primary text-primary-foreground",
        tone === "light" && "bg-card text-foreground",
        tone === "dark" && "bg-surface text-surface-foreground",
        className,
      )}
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

export function Logo({ dark = true, size = "md" }: { dark?: boolean; size?: "md" | "lg" }) {
  return (
    <span className="flex items-center gap-2.5">
      <img
        src={faceUrl}
        alt="Suleman, founder of Suleman Designs"
        className={cn("rounded-full object-cover ring-2 ring-primary", size === "lg" ? "h-12 w-12" : "h-10 w-10")}
      />
      <span className={cn("font-extrabold tracking-tight", size === "lg" ? "text-2xl" : "text-base", dark ? "text-surface-foreground" : "text-foreground")}>
        Suleman Designs<span className="text-primary">.</span>
      </span>
    </span>
  );
}

const ContactCtx = createContext<{ open: boolean; setOpen: (v: boolean) => void }>({ open: false, setOpen: () => {} });
export function ContactProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  return <ContactCtx.Provider value={{ open, setOpen }}>{children}</ContactCtx.Provider>;
}
export const useContactDialog = () => useContext(ContactCtx);
