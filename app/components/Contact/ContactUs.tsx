import React from "react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="max-w-screen-sm bg-white mx-auto px-4 py-8 flex flex-col gap-8"
      aria-label="Contact GAINZ Support"
    >
      <h2 className="font-bold text-2xl mt-16">Let’s Connect</h2>

      <div className="flex flex-col gap-3 text-neutral-500">
        <p className="font-normal text-base">
          Have a question, collaboration idea, or feedback about{" "}
          <span className="font-medium text-black">
            GAINZ TradingView indicators
          </span>
          ? We’d love to hear from you.
        </p>

        <p className="font-normal text-base">
          Whether you're a trader looking to integrate custom scripts or a
          developer interested in contributing, feel free to reach out to us.
        </p>
      </div>
    </section>
  );
};

export default ContactUs;
