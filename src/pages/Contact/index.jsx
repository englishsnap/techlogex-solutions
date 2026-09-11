import {useRef, useState } from "react";

import emailjs from "@emailjs/browser";

import contactData from "../../data/contactData"

import "./Contact.css";


function Contact(){

    const form = useRef();

    const [isSending, setIsSending] = useState(false);

    const [status, setStatus] = useState("");


    const sendEmail = (event)=>{

        event.preventDefault();

        setIsSending(true)

        setStatus("")

        emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
        publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        }
)
        .then(() => {

            setStatus("success");

            setIsSending(false);

            form.current.reset();

        })
        .catch((error) => {

            console.error(
                "EmailJS Error:",
                error
            );

            setStatus("error");

            setIsSending(false);

        });

    };



    return(
        <main className="contact-page">
             {/* ========================================
                Contact Hero
            ======================================== */}

            <section className="contact-hero">

                <div className="container">

                    <div className="contact-hero-content">

                        <p className="section-eyebrow">
                            Contact Us
                        </p>

                        <h1>
                            Let's Start a
                            <span> Conversation.</span>
                        </h1>

                        <p>
                            Have a project in mind, a question
                            about our services, or simply want
                            to say hello? We'd love to hear from
                            you.
                        </p>
                    </div>
                </div>
            </section>

            {/* ========================================
                Contact Section
            ======================================== */}

            <section className="contact-section">

                <div className="container">

                    <div className="contact-grid">

                        {/* ==================================
                            Contact Information
                        ================================== */}

                        <div className="contact-information">

                            <p className="section-eyebrow">
                                Get In Touch
                            </p>

                            <h2>
                                We'd Love to
                                <span>Hear From You.</span>
                            </h2>

                            <p className="contact-information-intro">
                                Whether you're looking to start
                                a project, need more information,
                                or have a question, feel free to
                                reach out to us.
                            </p>

                            {/* Phone */}

                            <a
                                href={contactData.phone.href}
                                className="contact-info-item"
                            >
                                <div className="contact-info-icon">
                                    <i
                                        className={`bi ${contactData.phone.icon}`}
                                        aria-hidden="true"
                                    ></i>

                                </div>

                                <div>

                                    <span>{contactData.phone.label}</span>

                                    <strong>{contactData.phone.value}</strong>
                                </div>
                            </a>

                            {/* Email */}

                            <a
                                href={contactData.email.href}
                                className="contact-info-item"
                            >
                                <div className="contact-info-icon">

                                    <i
                                        className={`bi ${contactData.email.icon}`}
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div>

                                    <span>{contactData.email.label}</span>

                                    <strong>{contactData.email.value}</strong>
                                </div>

                            </a>

                            {/* Address */}

                            <a
                                href={contactData.address.href}
                                className="contact-info-item"
                            >
                                <div className="contact-info-icon">

                                    <i
                                        className={`bi ${contactData.address.icon}`}
                                        aria-hidden="true"
                                    ></i>
                                </div>

                                <div>

                                    <span>{contactData.address.label}</span>

                                    <strong>{contactData.address.value}</strong>
                                </div>

                            </a>


                            {/* Social Media */}


                            <div className="contact-social">

                                <span>Follow Us</span>

                                <div className="contact-social-links">

                                    {contactData.socialLinks.map(
                                        (social) => (

                                            <a
                                                key={social.id}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={
                                                    social.name
                                                }
                                            >

                                                <i
                                                    className={`bi ${social.icon}`}
                                                    aria-hidden="true"
                                                ></i>

                                            </a>

                                        )
                                    )}
                                </div>
                            </div>

                        </div>

                        {/* ==================================
                            Contact Form
                        ================================== */}

                        <div className="contact-form-wrapper">

                            <form
                                ref={form}
                                className="contact-form"
                                onSubmit={sendEmail}
                                id="contact-form"
                            >

                                <div className="contact-form-heading">

                                    <p className="section-eyebrow">
                                        Send a Message
                                    </p>

                                    <h2>
                                        Tell Us About
                                        <span> Your Project.</span>
                                    </h2>
                                </div>

                                {/* Name */}

                                <div className="contact-form-group">

                                    <label htmlFor="user-name">
                                        Your Name
                                    </label>

                                    <input
                                        id="user-name"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                    />

                                </div>

                                 {/* Email */}

                                <div className="contact-form-group">

                                    <label htmlFor="user-email">
                                        Email Address
                                    </label>

                                    <input
                                        id="user-email"
                                        type="email"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                    />

                                </div>

                                 {/* Subject */}

                                <div className="contact-form-group">

                                    <label htmlFor="subject">
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="How can we help?"
                                        required
                                    />

                                </div>

                                {/* Message */}

                                <div className="contact-form-group">

                                    <label htmlFor="message">
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        placeholder="Tell us about your project..."
                                        required
                                    ></textarea>

                                </div>

                                 {/* Status */}

                                {status === "success" && (

                                    <div
                                        className="contact-form-status success"
                                        role="status"
                                    >

                                        <i
                                            className="bi bi-check-circle"
                                            aria-hidden="true"
                                        ></i>

                                        <span>
                                            Your message has been
                                            sent successfully. We'll
                                            get back to you soon.
                                        </span>

                                    </div>

                                )}


                                {status === "error" && (

                                    <div
                                        className="contact-form-status error"
                                        role="alert"
                                    >

                                        <i
                                            className="bi bi-exclamation-circle"
                                            aria-hidden="true"
                                        ></i>

                                        <span>
                                            Something went wrong.
                                            Please try again or
                                            contact us directly
                                            by email.
                                        </span>

                                    </div>

                                )}

                                {/* Submit */}

                                <button
                                    type="submit"
                                    className="contact-submit-button"
                                    disabled={isSending}
                                >

                                    {isSending
                                        ? "Sending..."
                                        : "Send Message"
                                    }

                                    {!isSending && (

                                        <span aria-hidden="true">
                                            →
                                        </span>

                                    )}

                                </button>


                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Contact;