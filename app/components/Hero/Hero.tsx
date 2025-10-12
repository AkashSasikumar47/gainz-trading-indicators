import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="max-w-screen-sm bg-white mx-auto px-4 py-8 flex flex-col gap-8"
      aria-label="Introduction"
    >
      <h1 className="font-bold text-2xl mt-16">
        Empowering Traders with Insights
      </h1>
      <div className="flex flex-col gap-3">
        <p className="font-normal text-base text-neutral-500">
          Welcome to GAINZ — your trusted resource for mastering technical
          indicators in stock trading.
        </p>
        <p className="font-normal text-base text-neutral-500">
          Explore a growing collection of expertly coded TradingView indicators
          designed to simplify analysis, enhance precision, and boost your
          trading confidence.
        </p>
      </div>
      <img
        src="/Images/Down_Arrow.svg"
        alt="Down Arrow"
        className="w-6 h-8 object-cover mt-16 animate-bounce"
      />
    </section>
  );
};

export default Hero;
