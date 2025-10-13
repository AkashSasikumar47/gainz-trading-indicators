import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  return (
    <div className="max-w-screen-sm bg-white mx-auto px-4 py-8 flex flex-col gap-8">
      <form
        className="bg-white rounded-lg border border-neutral-200 p-4 shadow-xs flex flex-col gap-4"
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
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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

      <p className="text-neutral-500 font-normal text-sm">
        Your insights and feedback help GAINZ grow stronger. Let’s build
        smarter, data-driven trading tools — together.
      </p>
    </div>
  );
};

export default ContactForm;
