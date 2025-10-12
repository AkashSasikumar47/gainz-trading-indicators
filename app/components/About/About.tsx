import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-screen-sm bg-white mx-auto px-4 py-4 flex flex-col gap-8"
      aria-label="About Us"
    >
      <h2 className="font-bold text-lg">What is GAINZ?</h2>
      <img
        src="/Images/Explore_Image.png"
        alt="Down Arrow"
        className="w-full h-auto object-cover rounded-lg shadow-lg"
      />
      <div className="font-normal text-base text-neutral-500 flex flex-col gap-3">
        <p>
          GAINZ is a curated hub of custom-built TradingView indicators created
          to empower traders of all levels.
        </p>
        <p>
          From trend-following tools to volatility trackers, each indicator is
          designed to give you clear, data-backed insights into the market —
          helping you trade smarter, not harder.
        </p>
      </div>
    </section>
  );
};

export default About;
