import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - PhyFix | Expert Physics & Math Tutoring";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-16 mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold mb-4" data-testid="heading-privacy">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2026</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our website address is https://phyfix.com
            </p>
            <p className="text-muted-foreground leading-relaxed">
              PhyFix is a personalized 1-on-1 tutoring platform founded by Ashish Pachar, dedicated to helping students excel in Physics, Mathematics, Chemistry, and Biology across international curricula.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your privacy is important. This Privacy Policy sets out the procedures and policies of PhyFix regarding the collection, use, and disclosure of Personal Information we receive about you or from you on phyfix.com (hereinafter referred to as "Site").
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              By using this Site, you agree to be bound by the terms and conditions of this Privacy Policy. By accepting the Privacy Policy, you expressly consent to our collection, use, and disclosure of your personal information. If you disagree, kindly do not access this Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Collection of Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We are passionate about customer experience, and we collect information about you or from you to provide a rich experience. If you browse through this Site without providing us with any personal information, we will gather and store some information about your visits, such as:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>IP address</li>
              <li>Type of browser and operating system used</li>
              <li>Location</li>
              <li>Date and time you access our site</li>
              <li>Pages you visit</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you create an account or transact or fill out the contact form on this Site or send personal correspondence, we will collect personally identifiable information from you or about you, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Personal Information:</strong> Name, email address, phone number, WhatsApp number</li>
              <li><strong>Profile Information:</strong> For tutors - qualifications, experience, subjects taught, hourly rates, profile photos</li>
              <li><strong>Account Information:</strong> Login credentials and account preferences</li>
              <li><strong>Communication Data:</strong> Messages and inquiries sent through our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              "Cookies" are small identifiers sent from a web server and stored on your computer's hard drive, which helps us to recognize you if you revisit our website. Our Site uses cookies to track how you found our site. We do not use cookies to store or transmit any personal information about you on the Internet to protect your privacy. You can accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. We do not control the use of cookies by third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Use and Sharing of Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We know that you care about how your personal information is used and shared. You agree that we may use any information we receive about you or from you for:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2 mb-4">
              <li>Providing, maintaining, and improving our tutoring platform</li>
              <li>Connecting students with appropriate tutors</li>
              <li>Processing tutor registrations and profile approvals</li>
              <li>Sending notifications about your account and our services</li>
              <li>Marketing and promotional communications (you can opt out)</li>
              <li>Responding to your comments, questions, and requests</li>
              <li>Complying with any law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li><strong>Public Profiles:</strong> Tutor profiles (name, qualifications, subjects, rates) are publicly visible on our platform</li>
              <li><strong>Contact Information:</strong> WhatsApp and email are shared with students who wish to contact tutors</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Children</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you are considered a minor in your country, you represent that you have your parent or legal guardian's permission to use the service. Parents or legal guardians must provide their verified consent for collecting, using, or disclosing a child's personal information. We do not knowingly collect personal information from children under 13 without parental consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We safeguard your privacy using known security standards and procedures. Our Site combines industry-approved physical, electronic, and procedural safeguards to ensure that your information is well protected throughout its life cycle in our infrastructure. However, no method of transmission over the Internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
            <p className="text-muted-foreground leading-relaxed">
              We retain your personal information for as long as your account is active or as needed to provide you services. You may request deletion of your account and associated data by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have an account on this site, you have the right to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Receive an exported file of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Embedded Content from Other Websites</h2>
            <p className="text-muted-foreground leading-relaxed">
              Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Severability</h2>
            <p className="text-muted-foreground leading-relaxed">
              The provisions contained in this Privacy Policy are enforceable independent of each other. If the competent court deems any provision to be unenforceable, the other provisions will continue in effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Governing Law and Jurisdiction</h2>
            <p className="text-muted-foreground leading-relaxed">
              The provisions of this Privacy Policy are governed by and construed under the laws of India. You agree to submit to the exclusive jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              This Privacy Policy is effective as of January 2026 and will remain in effect except for any changes in its provisions in the future. We may change our Privacy Policy from time to time. If we do, we will update this Privacy Policy on our website. Your continued use of the service after we post any modifications constitutes your acceptance of the modified Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Grievance Officer</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Under the Information Technology Act, 2000 (as amended) and rules made thereunder, the name and contact details of the Grievance Officer are:
            </p>
            <div className="p-4 bg-muted rounded-lg">
              <p className="font-medium">Grievance Officer: Ashish Pachar</p>
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
