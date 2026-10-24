import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { contact } from "@/data/site";
import { submitToFormSubmit } from "@/lib/formsubmit";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  service: z.string().min(1, "Please choose a service"),
  message: z.string().trim().min(10, "Message should be at least 10 characters").max(2000),
  _honey: z.string().optional(),
});
type Values = z.infer<typeof schema>;

export const serviceOptions = ["Website", "Mobile App", "Landing Page", "Other"];

export function ContactForm({ onSuccess }: { onSuccess?: () => void }) {
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);
  const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", message: "", _honey: "" },
  });

  const onSubmit = async (v: Values) => {
    setStatus(null);
    if (v._honey) return; // bot
    const result = await submitToFormSubmit(contact.formEndpoint, {
      name: v.name,
      email: v.email,
      phone: v.phone || "",
      service: v.service,
      message: v.message,
      _subject: "New portfolio message",
      _template: "table",
      _captcha: "false",
    });
    setStatus(result);
    if (result.ok) {
      toast.success("Message sent! I'll get back to you soon.");
      reset();
      onSuccess?.();
    } else {
      toast.error(`Couldn't send message: ${result.message}`);
    }
  };

  const field = "h-12 rounded-2xl bg-background";
  const err = (m?: string) => m && <p className="mt-1 text-xs text-destructive">{m}</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
      <input type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden {...register("_honey")} />
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <Label htmlFor="cf-name" className="mb-1.5 block">Name</Label>
          <Input id="cf-name" placeholder="Your name" className={field} {...register("name")} />
          {err(errors.name?.message)}
        </div>
        <div>
          <Label htmlFor="cf-email" className="mb-1.5 block">Email</Label>
          <Input id="cf-email" type="email" placeholder="you@example.com" className={field} {...register("email")} />
          {err(errors.email?.message)}
        </div>
        <div>
          <Label htmlFor="cf-phone" className="mb-1.5 block">Phone <span className="text-muted-foreground">(optional)</span></Label>
          <Input id="cf-phone" placeholder="+92 ..." className={field} {...register("phone")} />
        </div>
        <div>
          <Label className="mb-1.5 block">Service</Label>
          <Controller control={control} name="service" render={({ field: f }) => (
            <Select value={f.value} onValueChange={f.onChange}>
              <SelectTrigger className="h-12 rounded-2xl bg-background"><SelectValue placeholder="Choose a service" /></SelectTrigger>
              <SelectContent>{serviceOptions.map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
            </Select>
          )} />
          {err(errors.service?.message)}
        </div>
      </div>
      <div>
        <Label htmlFor="cf-msg" className="mb-1.5 block">Message</Label>
        <Textarea id="cf-msg" rows={5} placeholder="Tell me about your project..." className="rounded-2xl bg-background" {...register("message")} />
        {err(errors.message?.message)}
      </div>
      {status && (
        <p role="status" className={status.ok ? "text-sm font-semibold text-primary" : "text-sm text-destructive"}>
          {status.ok ? "Message sent! I'll get back to you soon." : `Couldn't send message: ${status.message}`}
        </p>
      )}
      <button type="submit" disabled={isSubmitting} className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-6 font-bold text-primary-foreground transition-colors hover:bg-primary-hover disabled:opacity-60">
        {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
