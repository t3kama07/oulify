export default function ContactForm({ formText }) {
  return (
    <form className="contact-form">
      <input type="text" name="name" placeholder={formText.name} />
      <input type="email" name="email" placeholder={formText.email} />
      <input type="text" name="business" className="contact-input-full" placeholder={formText.business} />
      <textarea name="message" placeholder={formText.message} rows="4" />
      <button type="submit" className="btn btn-primary">
        {formText.send}
      </button>
    </form>
  );
}
