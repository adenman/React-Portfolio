export default function Contact() {
  return (
    <div>
      <section className="contact" id="contact">
        <form id="contactForm">
            <h2 className="heading">Contact <span>Me!</span></h2>
            <div className="input-box">
                <input type="text" id="name" name="from_name" placeholder="Full Name" required />
                <input type="email" id="email" name="email" placeholder="Email" required />
                <textarea id="message" name="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
            </div>
            <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </div>
  );
}
