import React from "react";
import Link from "next/link";

const Explore = () => {
  return (
    <section
      id="explore"
      className="max-w-screen-xl bg-white mx-auto px-4 py-4 md:px-8 lg:py-8 flex flex-col gap-8 lg:gap-12"
      aria-label="Explore TradingView Indicators"
    >
      <h2 className="font-bold text-xl lg:text-2xl">
        Explore Powerful TradingView Indicators
      </h2>
      <p className="max-w-2xl font-normal text-sm lg:text-base text-neutral-500">
        Discover a complete suite of custom TradingView indicators, designed to
        sharpen your stock market analysis and enhance your trading decisions
        with clear, actionable insights.
      </p>

      <div className="text-neutral-500 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:gap-8">
        <article className="flex flex-col gap-3">
          <img
            src="/Indicators/Adaptive Moving Average (AMA).png"
            alt="Adaptive Moving Average (AMA) TradingView Indicator"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-2"
          />
          <h3 className="font-medium text-base lg:text-lg">
            Adaptive Moving Average (AMA)
          </h3>
          <p className="font-normal text-xs lg:text-sm">
            A TradingView indicator that tracks trend momentum and adjusts
            dynamically to market volatility for precise analysis.
          </p>
        </article>

        <article className="flex flex-col gap-3">
          <img
            src="/Indicators/Bollinger Bands.png"
            alt="Bollinger Bands TradingView Indicator"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-2"
          />
          <h3 className="font-medium text-base lg:text-lg">Bollinger Bands</h3>
          <p className="font-normal text-xs lg:text-sm">
            Identify price extremes and market volatility using this TradingView
            Bollinger Bands indicator for smarter trading decisions.
          </p>
        </article>

        <article className="flex flex-col gap-3">
          <img
            src="/Indicators/Moon Phases.png"
            alt="Moon Phases TradingView Indicator"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-2"
          />
          <h3 className="font-medium text-base lg:text-lg">Moon Phases</h3>
          <p className="font-normal text-xs lg:text-sm">
            A unique TradingView tool linking lunar cycles with market behavior,
            helping traders anticipate potential market movements.
          </p>
        </article>
      </div>
      <Link
        href="/indicators"
        className="text-black hover:text-orange-500 hover:underline font-medium text-sm lg:text-base"
      >
        See All Indicators →
      </Link>
    </section>
  );
};

export default Explore;
