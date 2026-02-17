"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact-form"
      className="max-w-screen-xl bg-white mx-auto px-4 py-12 md:px-8 lg:py-20"
      aria-label="Contact Form Section"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:gap-8 items-start"
      >
        <p className="max-w-sm font-normal text-sm lg:text-base text-neutral-500 lg:leading-relaxed">
          Your insights and feedback help{" "}
          <span className="font-semibold text-black">GAINZ</span> grow stronger.
          Let’s build smarter, data-driven trading tools — together.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg border border-neutral-200 p-4 shadow-xs flex flex-col gap-4 w-full lg:col-span-2 "
          aria-label="Contact GAINZ Form"
        >
          <h2 className="font-medium text-lg">Contact Us</h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border border-neutral-200 p-4 shadow-xs font-medium text-sm"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-lg border border-neutral-200 p-4 shadow-xs font-medium text-sm"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-lg border border-neutral-200 p-4 shadow-xs font-medium text-sm"
            value={formData.subject}
            onChange={(e) =>
              setFormData({ ...formData, subject: e.target.value })
            }
          />

          <textarea
            placeholder="Your Message"
            className="w-full rounded-lg border border-neutral-200 p-4 shadow-xs font-medium text-sm min-h-[120px]"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
          />

          <button
            type="submit"
            className="w-full rounded-lg p-2 font-medium text-lg text-white bg-black hover:bg-orange-500 transition-all duration-200"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;
