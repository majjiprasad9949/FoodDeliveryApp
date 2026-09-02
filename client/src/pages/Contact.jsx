import "../styles/Contact.css";

function Contact() {
  return (
    <main className="contact-page">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        Have questions or feedback? We'd love to hear from you.
      </p>

      <div className="contact-card">
        <div className="contact-item">
          <span className="contact-label">📧 Email</span>
          <span>support@foodie.com</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">📞 Phone</span>
          <span>+91 98765 43210</span>
        </div>
        <div className="contact-item">
          <span className="contact-label">📍 Address</span>
          <span>Hyderabad, Telangana, India</span>
        </div>
      </div>
    </main>
  );
}

export default Contact;