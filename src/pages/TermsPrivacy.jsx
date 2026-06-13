import HeroSection from "../components/shared/HeroSection";

export default function TermsPrivacy() {
  return (
    <div>

      <section className="section content-container">
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2>Privacy Policy</h2>
          <p>
            At Arvane, we respect your privacy and are committed to protecting your personal 
            information. This Privacy Policy outlines how we collect, use, and protect your data.
          </p>

          <h3>Information We Collect</h3>
          <p>
            We collect information you voluntarily provide through our forms, including but not 
            limited to your name, email address, phone number, and reservation details.
          </p>

          <h3>How We Use Your Information</h3>
          <p>
            Your information is used solely to process your requests, provide customer service, 
            and improve our services. We never share your information with third parties.
          </p>

          <h3>Your Rights</h3>
          <p>
            You have the right to access, correct, or delete your personal information at any time. 
            Contact us directly for any privacy concerns.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Terms of Service</h2>
          <p>
            By using Arvane's website, you agree to these Terms of Service. Our website is provided 
            "as is" without any warranties.
          </p>

          <h3>Use License</h3>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or 
            software) on Arvane's website for personal, non-commercial transitory viewing only. This 
            is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software on the website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h3>Limitation of Liability</h3>
          <p>
            In no event shall Arvane or our suppliers be liable for any damages (including, without 
            limitation, damages for loss of data or profit, or due to business interruption) arising 
            out of the use or inability to use the materials.
          </p>

          <h3>Accuracy of Materials</h3>
          <p>
            The materials appearing on Arvane's website could include technical, typographical, or 
            photographic errors. Arvane does not warrant that any of the materials on the website are 
            accurate, complete, or current.
          </p>

          <h3>Links</h3>
          <p>
            Arvane has not reviewed all of the sites linked to its website and is not responsible 
            for the contents of any such linked site. The inclusion of any link does not imply 
            endorsement by Arvane of the site. Use of any such linked website is at the user's own risk.
          </p>

          <h2 style={{ marginTop: "2rem" }}>Contact Us</h2>
          <p>
            If you have any questions about these Terms & Privacy policies, please don't hesitate 
            to contact us through our contact form or by visiting one of our locations.
          </p>

          <p style={{ marginTop: "2rem", fontSize: "var(--text-sm)", color: "var(--text-secondary)" }}>
            Last updated: June 2026
          </p>
        </div>
      </section>
    </div>
  );
}
