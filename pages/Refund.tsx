import { useEffect } from "react";

export default function Refund() {
  useEffect(() => {
    document.title = "Refund & Cancellation Policy - PhyFix | Expert Physics & Math Tutoring";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-2" data-testid="heading-refund">Refund & Cancellation Policy</h1>
        <p className="text-xl text-muted-foreground mb-2">For Tutoring Services</p>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="bg-primary/5 rounded-xl p-6 mb-10">
          <h2 className="text-xl font-semibold mb-2">Book Your Demo Without Fear</h2>
          <p className="text-muted-foreground">
            Top Tutors • Personalized 1-on-1 • Zero Commission • Free Demo Available
          </p>
        </div>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          PhyFix is committed to connecting you with top tutors who help you achieve your academic goals. We operate on a zero commission model where students pay tutors directly. This page provides details about our refund and cancellation policies.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Understanding Our Model</h2>
            <p className="text-muted-foreground leading-relaxed">
              PhyFix serves as a platform that connects students with independent tutors. As we follow a <strong>zero commission model</strong>, all payments are made directly between students and tutors. PhyFix does not handle or process payments for tutoring sessions. Therefore, refund terms for tutoring sessions are agreed upon directly between students and their chosen tutors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Free Demo Sessions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We strongly encourage all students to book a <strong>free demo session</strong> before committing to paid tutoring. This allows you to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Evaluate the tutor's teaching style</li>
              <li>Ensure compatibility with your learning needs</li>
              <li>Discuss your goals and expectations</li>
              <li>Agree on payment terms before starting</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By taking advantage of free demos, you can make an informed decision before any payment is made.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cancellations</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Since payments are made directly to tutors, cancellation terms vary by tutor. We recommend the following best practices:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>24+ hours notice:</strong> Full refund or reschedule typically available</li>
              <li><strong>12-24 hours notice:</strong> Partial refund or reschedule may be offered</li>
              <li><strong>Less than 12 hours:</strong> Subject to tutor's individual policy</li>
              <li><strong>No-shows:</strong> May result in forfeiture of session fee</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We advise you to discuss and agree on cancellation terms with your tutor before starting paid sessions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">How to Request a Refund</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you are dissatisfied with a tutoring session:
            </p>
            <ol className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>First, try to resolve the issue directly with your tutor</li>
              <li>If unresolved, contact PhyFix support via WhatsApp at +91 8684901516</li>
              <li>We will discuss the issue with the tutor and try to mediate</li>
              <li>We aim to resolve all disputes within 2-3 days</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Amount of Refund</h2>
            <p className="text-muted-foreground leading-relaxed">
              Since payments are made directly to tutors, refund amounts are determined by mutual agreement between you and the tutor. PhyFix will assist in mediation but the final refund decision rests with the parties involved. We encourage tutors to maintain fair and transparent refund policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Platform Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              PhyFix currently does not charge any platform fees. If we introduce any paid premium services in the future, specific refund terms will be provided at the time of purchase with their own clearly defined refund policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Dispute Resolution</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              In case of disputes between students and tutors regarding payments or refunds:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Contact us immediately with details of the issue</li>
              <li>We will review the history and circumstances of the dispute</li>
              <li>Our team will mediate to find a fair resolution</li>
              <li>We aim to resolve disputes in a way that keeps both parties satisfied</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              If you are not satisfied with the outcome, you can reach our founder at ashishpachar27@gmail.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tutor Guidelines</h2>
            <p className="text-muted-foreground leading-relaxed">
              We encourage tutors registered on PhyFix to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-4">
              <li>Maintain clear and fair refund policies</li>
              <li>Communicate cancellation terms upfront before starting paid sessions</li>
              <li>Offer free demo sessions to prospective students</li>
              <li>Respond promptly to student concerns and refund requests</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact for Refund Queries</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For any questions regarding refunds or to report a dispute, please contact us:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium">PhyFix Support</p>
              <p className="text-muted-foreground">Founder: Ashish Pachar</p>
              <p className="text-muted-foreground">Email: ashishpachar27@gmail.com</p>
              <p className="text-muted-foreground">WhatsApp: +91 8684901516</p>
              <p className="text-muted-foreground">Website: phyfix.com</p>
              <p className="text-muted-foreground mt-2">Response time: We aim to respond within 24 hours</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Policy Updates</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right to update this Refund & Cancellation Policy at any time. Changes will be posted on this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
