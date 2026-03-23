import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { SiWhatsapp } from "react-icons/si";
import { Mail, MessageCircle, Clock, CheckCircle } from "lucide-react";
import { useSeo } from "@/hooks/use-seo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const BOARDS = ["IB", "IGCSE", "A-Level", "AP", "CBSE", "ICSE / ISC", "Edexcel", "GCSE", "SAT", "Other"];
const SUBJECTS = ["Physics", "Mathematics", "Chemistry", "Biology", "Computer Science", "Commerce", "English", "Other"];

export default function Contact() {
  useSeo({
    title: "Contact PhyFix | Book a Free Demo or Get Help",
    description: "Contact PhyFix to book a free demo, ask about our tutors, or find the right tutor for your curriculum. Reach us via WhatsApp, email, or our contact form.",
    keywords: "contact PhyFix, book free demo, physics tutor contact, online tutoring enquiry",
    canonical: "https://phyfix.com/contact",
  });

  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", subject: "", board: "", grade: "", message: "",
  });

  function handleChange(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({ title: "Message sent! We'll reply within 24 hours." });
    }, 1200);
  }

  return (
    <div className="flex flex-col">
      <section className="py-14 md:py-20 bg-background border-b border-border/40">
        <div className="container px-4 mx-auto max-w-3xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get in Touch</p>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight mb-4">
              Contact <span className="text-primary">PhyFix</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Book a free demo, ask about our tutors, or tell us what you need. We respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container px-4 mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                <h2 className="font-display font-bold text-2xl mb-6">Ways to Reach Us</h2>
                <div className="space-y-4">
                  <a href="https://wa.me/918684901516?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20demo%20class" target="_blank" rel="noopener noreferrer">
                    <Card className="p-5 flex items-center gap-4 hover-elevate cursor-pointer transition-all border-green-200 dark:border-green-900/40" data-testid="card-contact-whatsapp">
                      <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <SiWhatsapp className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-semibold">WhatsApp (Fastest)</p>
                        <p className="text-sm text-muted-foreground">+91 86849 01516</p>
                        <p className="text-xs text-green-600 dark:text-green-400 mt-0.5">Usually responds within 1 hour</p>
                      </div>
                    </Card>
                  </a>
                  <a href="mailto:ashishpachar27@gmail.com">
                    <Card className="p-5 flex items-center gap-4 hover-elevate cursor-pointer transition-all" data-testid="card-contact-email">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Email</p>
                        <p className="text-sm text-muted-foreground">ashishpachar27@gmail.com</p>
                        <p className="text-xs text-muted-foreground mt-0.5">Replies within 24 hours</p>
                      </div>
                    </Card>
                  </a>
                  <a href="https://freedemoclasses.netlify.app" target="_blank" rel="noopener noreferrer">
                    <Card className="p-5 flex items-center gap-4 hover-elevate cursor-pointer transition-all border-primary/20" data-testid="card-contact-demo">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">Book Free Demo Online</p>
                        <p className="text-sm text-muted-foreground">freedemoclasses.netlify.app</p>
                        <p className="text-xs text-primary mt-0.5">45 minutes, completely free</p>
                      </div>
                    </Card>
                  </a>
                </div>
                <div className="mt-8 p-4 rounded-xl bg-muted/40 border border-border/40">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="font-semibold text-sm">Our Response Times</span>
                  </div>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>WhatsApp: within 1 hour (7am–10pm IST)</li>
                    <li>Email: within 24 hours</li>
                    <li>Contact form: within 24 hours</li>
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              {submitted ? (
                <Card className="p-10 text-center flex flex-col items-center gap-4">
                  <CheckCircle className="w-16 h-16 text-green-500" />
                  <h3 className="font-bold text-xl">Message Sent!</h3>
                  <p className="text-muted-foreground">Thank you for reaching out. We will get back to you within 24 hours at {form.email}.</p>
                  <a href="https://wa.me/918684901516" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="gap-2 rounded-full mt-2">
                      <SiWhatsapp className="w-4 h-4 text-green-500" />
                      WhatsApp Us
                    </Button>
                  </a>
                </Card>
              ) : (
                <Card className="p-6 md:p-8">
                  <h2 className="font-display font-bold text-xl mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-name">Full Name *</Label>
                        <Input id="contact-name" placeholder="Your name" value={form.name} onChange={e => handleChange("name", e.target.value)} required data-testid="input-contact-name" />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="contact-email">Email Address *</Label>
                        <Input id="contact-email" type="email" placeholder="your@email.com" value={form.email} onChange={e => handleChange("email", e.target.value)} required data-testid="input-contact-email" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label>Subject</Label>
                        <Select onValueChange={v => handleChange("subject", v)}>
                          <SelectTrigger data-testid="select-contact-subject"><SelectValue placeholder="Select subject" /></SelectTrigger>
                          <SelectContent>{SUBJECTS.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-1.5">
                        <Label>Board / Curriculum</Label>
                        <Select onValueChange={v => handleChange("board", v)}>
                          <SelectTrigger data-testid="select-contact-board"><SelectValue placeholder="Select board" /></SelectTrigger>
                          <SelectContent>{BOARDS.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-grade">Current Grade / Year</Label>
                      <Input id="contact-grade" placeholder="e.g. Grade 11, Year 12, IB Year 2" value={form.grade} onChange={e => handleChange("grade", e.target.value)} data-testid="input-contact-grade" />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="contact-message">Message *</Label>
                      <Textarea id="contact-message" placeholder="Tell us what you need help with, your exam date, and any other details..." rows={5} value={form.message} onChange={e => handleChange("message", e.target.value)} required data-testid="input-contact-message" />
                    </div>
                    <Button type="submit" size="lg" className="w-full rounded-full" disabled={loading} data-testid="button-contact-submit">
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">For the fastest response, message us on <a href="https://wa.me/918684901516" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">WhatsApp</a>.</p>
                  </form>
                </Card>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
