import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, ArrowRight, GraduationCap, Users, DollarSign, Clock } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion } from "framer-motion";

const PLATFORM_WHATSAPP = "918684901516";

export default function BecomeTutor() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display font-bold text-4xl md:text-6xl tracking-tight mb-6 text-foreground">
              Join Our <span className="text-primary">Expert</span> Teaching Community
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Share your knowledge, earn on your terms, and make a difference in students' lives. 
              Zero commission means you keep 100% of your earnings.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/api/login">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-xl shadow-primary/20">
                  Register as Tutor
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <a 
                href={`https://wa.me/${PLATFORM_WHATSAPP}?text=Hi, I'm interested in becoming a tutor on PhyFix.`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-2">
                  <SiWhatsapp className="mr-2 w-5 h-5" />
                  Contact Us
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Teach with PhyFix?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover-elevate">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Zero Commission</h3>
                <p className="text-muted-foreground text-sm">
                  Keep 100% of your earnings. Students pay you directly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Global Reach</h3>
                <p className="text-muted-foreground text-sm">
                  Connect with students from around the world seeking quality education.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Flexible Schedule</h3>
                <p className="text-muted-foreground text-sm">
                  Set your own hours and teach at your convenience.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover-elevate">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-bold text-lg mb-2">Verified Profile</h3>
                <p className="text-muted-foreground text-sm">
                  Get verified and build credibility with TeacherOn integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">How to Get Started</h2>
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Create Your Profile</h3>
                <p className="text-muted-foreground">
                  Sign up with your Google account and fill in your teaching experience, subjects, qualifications, and rates.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Get Verified</h3>
                <p className="text-muted-foreground">
                  Our team reviews your profile and activates it. Link your TeacherOn profile for added credibility.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Start Teaching</h3>
                <p className="text-muted-foreground">
                  Students contact you directly via WhatsApp. Schedule classes and get paid directly - no middleman fees.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/api/login">
              <Button size="lg" className="h-14 px-10 text-lg rounded-full">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl opacity-90 mb-8">
            Reach out to us on WhatsApp for quick assistance
          </p>
          <a 
            href={`https://wa.me/${PLATFORM_WHATSAPP}?text=Hi, I have a question about becoming a tutor on PhyFix.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="secondary" className="h-14 px-8 text-lg rounded-full">
              <SiWhatsapp className="mr-2 w-6 h-6" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </section>
    </div>
  );
}
