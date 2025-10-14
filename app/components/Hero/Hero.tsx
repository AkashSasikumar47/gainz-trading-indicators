import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-screen-xl bg-white mx-auto px-4 py-12 md:px-8 lg:py-20 flex flex-col gap-8 lg:gap-12"
      aria-label="Introduction"
    >
      <h1 className="font-bold text-2xl leading-tight mt-12 lg:text-4xl lg:leading-snug">
        Empowering Traders with Insights
      </h1>

      <div className="max-w-2xl font-normal text-neutral-500 text-base lg:text-lg lg:leading-relaxed flex flex-col gap-4">
        <p>
          Welcome to <strong className="text-black">GAINZ</strong> — your
          trusted resource for mastering technical indicators in stock trading.
        </p>
        <p>
          Explore a growing collection of expertly coded TradingView indicators
          designed to simplify analysis, enhance precision, and boost your
          trading confidence.
        </p>
      </div>

      <img
        src="/Images/Down_Arrow.svg"
        alt="Scroll Down"
        className="w-6 h-8 object-cover mt-16 animate-bounce lg:w-8 lg:h-10"
      />
    </section>
  );
};

export default Hero;
