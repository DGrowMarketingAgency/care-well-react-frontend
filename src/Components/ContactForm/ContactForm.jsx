import React, { useState } from "react";
import "./ContactForm.css";
import img1 from "../../assets/contact-img.png";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  MailIcon,
  Map,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  ArrowBigLeft,
  ArrowRight,
} from "lucide-react";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    appointment: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbyCkVAy4Xu2G12wtLUCr2DnTv7spgVTrsfVJRjSyHkDjRmMaD3xBMA-l_Cvzt5FxpcO/exec";

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch(GAS_URL, {
        method: "POST",
        body: JSON.stringify(form),
        mode: "no-cors",
      });

      alert("Message sent successfully!");
      setForm({
        name: "",
        email: "",
        phone: "",
        appointment: "",
        message: "",
      });
    } catch (err) {
      alert("Failed to send message");
    }

    setLoading(false);
  };

  return (
    <div className="contact-wrapper">
      {/* LEFT SIDE */}
      <div className="contact-left">
        <img src={img1} alt="contact" className="contact-img" />

        <div className="contact-info-section">
          <div className="contact-inner-info">
            <div className="contact-page-box">
              <div className="contact-page-icon">
                <Phone />
              </div>
              <div className="contact-page-text">
                <h4>Contact us</h4>
                <p>+91 63816 01020</p>
              </div>
            </div>
            <div className="contact-page-box">
              <div className="contact-page-icon">
                <MailIcon />
              </div>
              <div className="contact-page-text">
                <h4>Email Address</h4>
                <p>Carewellhospitals@gmail.com</p>
              </div>
            </div>
            <div className="contact-page-box">
              <div className="contact-page-icon">
                <Map />
              </div>
              <div className="contact-page-text">
                <h4>Hospital Address</h4>
                <p>
                  2, TMR Rd, Swaminathan Nagar,
                  <br /> Purushpo Nagar, Kottivakkam, Chennai - 600065
                </p>
              </div>
            </div>
          </div>

          <div className="social">
            <span>Follow us:</span>
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <YoutubeIcon />
            </a>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="contact-right">
        <h5>We’d Love to hear from You</h5>
        <h2>Let’s Talk With Us!</h2>
        <p>
          By submitting this form, you acknowledge and agree to our Privacy
          Policy. Your information will be kept strictly confidential.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name *"
              required
              value={form.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid-2">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              required
              value={form.phone}
              onChange={handleChange}
            />
            <input
              type="text"
              name="appointment"
              placeholder="Type of Appointment *"
              required
              value={form.appointment}
              onChange={handleChange}
            />
          </div>

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={form.message}
            onChange={handleChange}
          ></textarea>

          <div className="terms-container">
            <div className="terms">
              <input type="checkbox" required /> Agree to our terms and
              conditions
            </div>

            <div className="btn-contact-con">
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message "}
              </button>
              <div className="btn-icon-contact">
                <ArrowRight className="btn-arrow" />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
