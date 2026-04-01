import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function ContactSection({ locale, contactSection, footer }) {
  return (
    <footer className="contact-footer" id="contact">
      <div className="shell">
        <div className="glass-card contact-card">
          <h2>{contactSection.title}</h2>
          <p>{contactSection.description}</p>
          <ContactForm locale={locale} formText={contactSection.form} />
        </div>
      </div>
      <div className="footer-shell">
        <Footer locale={locale} footer={footer} />
      </div>
    </footer>
  );
}
