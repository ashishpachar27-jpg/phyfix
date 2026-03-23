import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms & Conditions - PhyFix | Expert Physics & Math Tutoring";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4" data-testid="heading-terms">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          Please read the following terms and conditions carefully before using our services. These terms and conditions apply to all users of our services and visitors to our website. In these terms, 'we,' 'us,' and 'PhyFix' refer to phyfix.com, and 'you' refers to users, parents, guardians or students, and any individual who is using our services or website.
        </p>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          Our business aims to serve as a platform where students who want to learn can connect with tutors who wish to teach. We endeavor to bridge the demand-supply gap for quality private tutoring in Physics, Mathematics, Chemistry, and Biology for students worldwide.
        </p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Copyright Statement</h2>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>PhyFix.com exclusively owns the contents of the website and the copyrighted materials posted on it.</li>
              <li>No permission is granted to anyone to use the content of this site for commercial purposes or to modify it for any other purpose. However, you may get the print of this content for non-commercial use.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Services Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              PhyFix is an online tutoring platform that connects students with qualified tutors for personalized 1-on-1 tutoring in Physics, Mathematics, Chemistry, and Biology. We support various international curricula including IB, IGCSE, A-Level, AP, CBSE, and more. Our platform operates on a zero commission model where students pay tutors directly for their services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation on Use</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By registering or using the services of PhyFix.com, you affirm that you will use the information provided by the tutor only for the purpose of personal learning, and you may not use any of the solutions, answers, materials, or information available on or through the services to cheat. Examples include:
            </p>
            <ul className="list-decimal pl-6 text-muted-foreground space-y-2">
              <li>Submitting any solutions from the services as your own to any class.</li>
              <li>Using our tutoring services to complete tests or homework when instructed not to use outside help.</li>
              <li>Submitting this information as original student work for course credit or grade.</li>
              <li>Violating any other academic mandate from your instructors, college, university, or school.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              We will take swift action against anyone found violating the above terms. PhyFix may remove at its sole discretion the materials and terminate the account of the involved users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Zero Commission Model</h2>
            <p className="text-muted-foreground leading-relaxed">
              PhyFix operates on a zero commission model. Students pay tutors directly for their services. We do not charge any commission or fees on tutoring sessions. The platform serves as a connection service between students and tutors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">User Accounts</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To access certain features of our platform, you may need to create an account. You agree to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide accurate and complete information during registration</li>
              <li>Maintain the security of your account credentials</li>
              <li>Notify us immediately of any unauthorized access to your account</li>
              <li>Be responsible for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tutor Registration</h2>
            <p className="text-muted-foreground leading-relaxed">
              Tutors who wish to offer their services through PhyFix must complete our registration process. All tutor profiles are subject to admin approval. We reserve the right to approve, reject, or remove any tutor profile at our discretion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Warranty and Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Upon receiving a query, the fees will be a mutual decision between you and the tutor. We will do our best to help you all of the time, but we cannot guarantee the availability of specific tutors all the time. We advise you to have a prior reservation for the session well in advance to serve you most efficiently.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PhyFix provides a platform for connecting students and tutors. We are not liable for the quality of tutoring services, disputes between users, or any damages arising from the use of our platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              All payments for tutoring services are made directly between students and tutors. PhyFix is not responsible for payment disputes between students and tutors. Tutors set their own rates, which are displayed on their profiles. We reserve the right to charge membership fees or subscriptions for using our premium services in the future.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Free Demo Sessions</h2>
            <p className="text-muted-foreground leading-relaxed">
              We encourage all students to book a free demo session before committing to paid tutoring. This allows you to evaluate the tutor's teaching style and ensure compatibility before making any payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              If any of these terms becomes unenforceable as a whole or in part, the validity of other contract terms will remain unaffected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Entire Agreement</h2>
            <p className="text-muted-foreground leading-relaxed">
              'Terms of Service' mentioned in the latest agreement between the user and PhyFix will supersede and terminate all the prior agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Amendments</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the sole right to amend terms and conditions without serving notice to you. The latest version of terms and conditions will supersede previous versions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the sole right to terminate the whole or part of the service agreement at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms and Conditions are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium">PhyFix</p>
              <p className="text-muted-foreground">Founder: Ashish Pachar</p>
              <p className="text-muted-foreground">Email: ashishpachar27@gmail.com</p>
              <p className="text-muted-foreground">Phone/WhatsApp: +91 8684901516</p>
              <p className="text-muted-foreground">Website: phyfix.com</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
