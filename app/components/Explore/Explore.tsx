import React from "react";
import Link from "next/link";

const Explore = () => {
  return (
    <section
      id="explore"
      className="max-w-screen-sm bg-white mx-auto px-4 py-4 flex flex-col gap-8"
      aria-label="Explore TradingView Indicators"
    >
      <h2 className="font-bold text-lg">
        Explore Powerful TradingView Indicators
      </h2>
      <p className="font-normal text-base text-neutral-500">
        Discover a complete suite of custom TradingView indicators, designed to
        sharpen your stock market analysis and enhance your trading decisions
        with clear, actionable insights.
      </p>

      <div className="text-neutral-500 flex flex-col gap-6">
        <article className="flex flex-col gap-2">
          <img
            src="/Indicators/Adaptive Moving Average (AMA).png"
            alt="Adaptive Moving Average (AMA) TradingView Indicator"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-3"
          />
          <h3 className="font-medium text-base">
            Adaptive Moving Average (AMA)
          </h3>
          <p className="font-normal text-sm">
            A TradingView indicator that tracks trend momentum and adjusts
            dynamically to market volatility for precise analysis.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <img
            src="/Indicators/Bollinger Bands.png"
            alt="Bollinger Bands TradingView Indicator"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-3"
          />
          <h3 className="font-medium text-base">Bollinger Bands</h3>
          <p className="font-normal text-sm">
            Identify price extremes and market volatility using this TradingView
            Bollinger Bands indicator for smarter trading decisions.
          </p>
        </article>

        <article className="flex flex-col gap-2">
          <img
            src="/Indicators/Moon Phases.png"
            alt="Moon Phases TradingView Indicator"
            className="w-full h-auto object-cover rounded-lg shadow-lg mb-3"
          />
          <h3 className="font-medium text-base">Moon Phases</h3>
          <p className="font-normal text-sm">
            A unique TradingView tool linking lunar cycles with market behavior,
            helping traders anticipate potential market movements.
          </p>
        </article>
      </div>
      <Link
        href="/indicators"
        className="text-black hover:text-orange-500 hover:underline font-medium text-sm"
      >
        See All Indicators →
      </Link>
    </section>
  );
};

export default Explore;
