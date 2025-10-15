"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const indicators = [
  {
    name: "Adaptive Moving Average (AMA)",
    image: "/Indicators/Adaptive Moving Average (AMA).png",
    alt: "Adaptive Moving Average (AMA) TradingView Indicator",
    description:
      "Dynamically adjusts to market volatility for smoother and more responsive trend analysis.",
  },
  {
    name: "Aroon Oscillator",
    image: "/Indicators/Aroon Oscillator.png",
    alt: "Aroon Oscillator TradingView Indicator",
    description:
      "Measures trend strength and direction to help traders identify potential reversals early.",
  },
  {
    name: "Average True Range (ATR)",
    image: "/Indicators/Average True Range (ATR).png",
    alt: "Average True Range (ATR) TradingView Indicator",
    description:
      "Evaluates market volatility and helps set effective stop-loss levels.",
  },
  {
    name: "Awesome Oscillator",
    image: "/Indicators/Awesome Oscillator.png",
    alt: "Awesome Oscillator TradingView Indicator",
    description:
      "Reveals shifts in market momentum and confirms trend reversals.",
  },
  {
    name: "Bollinger Bands",
    image: "/Indicators/Bollinger Bands.png",
    alt: "Bollinger Bands TradingView Indicator",
    description:
      "Identifies volatility expansions and price extremes for better timing of entries and exits.",
  },
  {
    name: "Chandelier Exit",
    image: "/Indicators/Chandelier Exit.png",
    alt: "Chandelier Exit TradingView Indicator",
    description:
      "A volatility-based trailing stop system that protects profits during strong trends.",
  },
  {
    name: "Commodity Channel Index (CCI)",
    image: "/Indicators/Commodity Channel Index (CCI).png",
    alt: "Commodity Channel Index (CCI) TradingView Indicator",
    description:
      "Highlights overbought and oversold levels in cyclical markets.",
  },
  {
    name: "Cumulative Volume Index",
    image: "/Indicators/Cumulative Volume Index.png",
    alt: "Cumulative Volume Index TradingView Indicator",
    description:
      "Tracks cumulative volume flow to confirm bullish or bearish trends.",
  },
  {
    name: "Exponential Moving Average (EMA)",
    image: "/Indicators/Exponential Moving Average (EMA).png",
    alt: "Exponential Moving Average (EMA) TradingView Indicator",
    description:
      "Reacts faster to recent price changes, ideal for short-term traders.",
  },
  {
    name: "Fibonacci Retracement",
    image: "/Indicators/Fibonacci Retracement.png",
    alt: "Fibonacci Retracement TradingView Indicator",
    description:
      "Pinpoints potential reversal levels based on market psychology and Fibonacci ratios.",
  },
  {
    name: "Hull Moving Average (HMA)",
    image: "/Indicators/Hull Moving Average.png",
    alt: "Hull Moving Average (HMA) TradingView Indicator",
    description: "Provides ultra-smooth trend lines with minimal lag.",
  },
  {
    name: "Ichimoku Cloud",
    image: "/Indicators/Ichimoku Cloud.png",
    alt: "Ichimoku Cloud TradingView Indicator",
    description:
      "A comprehensive system offering insights into trend direction, support, and resistance.",
  },
  {
    name: "Moon Phases",
    image: "/Indicators/Moon Phases.png",
    alt: "Moon Phases TradingView Indicator",
    description:
      "A unique lunar-cycle-based indicator that explores cosmic correlations in trading behavior.",
  },
  {
    name: "Moving Average Convergence Divergence (MACD)",
    image: "/Indicators/Moving Average Convergence Divergence (MACD).png",
    alt: "Moving Average Convergence Divergence (MACD) TradingView Indicator",
    description:
      "Measures the relationship between moving averages to identify momentum shifts.",
  },
  {
    name: "On-Balance Volume (OBV)",
    image: "/Indicators/On-Balance Volume (OBV).png",
    alt: "On-Balance Volume (OBV) TradingView Indicator",
    description: "Uses volume flow to confirm the strength of price movements.",
  },
  {
    name: "Parabolic SAR (Stop and Reverse)",
    image: "/Indicators/Parabolic SAR (Stop and Reverse).png",
    alt: "Parabolic SAR (Stop and Reverse) TradingView Indicator",
    description:
      "A classic trend-following indicator that signals potential reversals.",
  },
  {
    name: "Relative Momentum Index (RMI)",
    image: "/Indicators/Relative Momentum Index (RMI).png",
    alt: "Relative Momentum Index (RMI) TradingView Indicator",
    description:
      "Combines momentum and relative strength concepts for smoother trading signals.",
  },
  {
    name: "Relative Strength Index (RSI)",
    image: "/Indicators/Relative Strength Index (RSI).png",
    alt: "Relative Strength Index (RSI) TradingView Indicator",
    description:
      "Gauges overbought and oversold conditions to time entries more accurately.",
  },
  {
    name: "Simple Moving Average (SMA)",
    image: "/Indicators/Simple Moving Averages (SMA).png",
    alt: "Simple Moving Average (SMA) TradingView Indicator",
    description:
      "Tracks average price over time to highlight long-term trends.",
  },
  {
    name: "Stochastic Oscillator",
    image: "/Indicators/Stochastic Oscillator.png",
    alt: "Stochastic Oscillator TradingView Indicator",
    description:
      "Compares closing prices to recent ranges to predict momentum reversals.",
  },
  {
    name: "Supertrend Indicator",
    image: "/Indicators/Supertrend Indicator.png",
    alt: "Supertrend Indicator TradingView Indicator",
    description:
      "Provides dynamic buy/sell signals based on price and volatility.",
  },
  {
    name: "Trading Volume",
    image: "/Indicators/Trading Volume.png",
    alt: "Trading Volume TradingView Indicator",
    description:
      "Visualizes market activity to confirm the strength of price movements.",
  },
  {
    name: "Trend Strength Index (TSI)",
    image: "/Indicators/Trend Strength Index (TSI).png",
    alt: "Trend Strength Index (TSI) TradingView Indicator",
    description:
      "Identifies trend direction and strength using momentum-based analysis.",
  },
  {
    name: "Visible Average Price",
    image: "/Indicators/Visible Average Price.png",
    alt: "Visible Average Price TradingView Indicator",
    description:
      "Calculates the average traded price visible on your chart, helping spot true value zones.",
  },
  {
    name: "Williams %R",
    image: "/Indicators/Williams R.png",
    alt: "Williams %R TradingView Indicator",
    description:
      "Determines overbought or oversold market conditions to refine entry and exit strategies.",
  },
];

const Collection = () => {
  return (
    <section
      id="collection"
      className="max-w-screen-xl bg-white mx-auto px-4 py-4 md:px-8 lg:py-8 flex flex-col gap-8 lg:gap-12"
      aria-label="Collection of TradingView Indicators"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="font-bold text-xl lg:text-2xl"
      >
        Our Custom TradingView Indicators
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl font-normal text-sm lg:text-base text-neutral-500"
      >
        Discover a complete suite of custom TradingView indicators, designed to
        sharpen your stock market analysis and enhance your trading decisions
        with clear, actionable insights.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
        className="text-neutral-500 flex flex-col gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8"
      >
        {indicators.map((indicator, index) => (
          <article key={index} className="flex flex-col gap-3">
            <img
              src={indicator.image}
              alt={indicator.alt}
              className="w-full h-auto object-cover rounded-lg shadow-lg mb-2"
            />
            <h3 className="font-medium text-base lg:text-lg">
              {indicator.name}
            </h3>
            <p className="font-normal text-xs lg:text-sm">
              {indicator.description}
            </p>
          </article>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 1.2, ease: "easeOut" }}
        className="max-w-2xl font-normal text-sm lg:text-base text-neutral-500 flex flex-col gap-3"
      >
        <p>
          Each GAINZ indicator is engineered in Pine Script for maximum clarity,
          speed, and accuracy.
        </p>
        <p>
          Whether you’re a beginner learning market dynamics or an experienced
          trader refining your strategy, these tools are built to help you trade
          with confidence and consistency.
        </p>
        <p>
          All GAINZ indicators are fully open-source and available on GitHub —
          inspect the code, test it in TradingView, and even contribute to make
          these tools better.
        </p>
        <Link
          href="https://github.com/AkashSasikumar47"
          target="_blank"
          rel="noopener noreferrer"
          className="text-black hover:text-orange-500 hover:underline font-medium text-sm lg:text-base"
        >
          Visit GitHub →
        </Link>
      </motion.div>
    </section>
  );
};

export default Collection;
