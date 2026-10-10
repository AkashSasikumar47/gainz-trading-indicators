const CATEGORIES = [
  "Trend",
  "Momentum",
  "Volatility",
  "Volume",
  "Levels",
] as const;

type Category = (typeof CATEGORIES)[number];

export type Indicator = {
  slug: string;
  name: string;
  code: string;
  category: Category;
  summary: string;
  reading: string;
  settings: [string, string][];
  repo: number;
};

export const INDICATORS: Indicator[] = (
  [
    {
      slug: "adaptive-moving-average",
      name: "Adaptive Moving Average",
      code: "AMA",
      category: "Trend",
      summary:
        "A moving average that speeds up in trends and slows down in chop, blending a fast and a slow EMA.",
      reading:
        "A rising, highlighted line means the trend is in charge. When it flattens out, the market is losing direction.",
      settings: [
        ["Length", "14"],
        ["Fast EMA", "2"],
        ["Slow EMA", "30"],
        ["Source", "Close"],
      ],
      repo: 5,
    },
    {
      slug: "aroon-oscillator",
      name: "Aroon Oscillator",
      code: "AROON",
      category: "Trend",
      summary:
        "Tracks how recently price made its highest high and its lowest low, then subtracts one from the other.",
      reading:
        "Above zero, recent highs dominate and the trend leans up. Below zero, lows dominate. A cross through zero is a change of hands.",
      settings: [["Length", "14"]],
      repo: 3,
    },
    {
      slug: "average-true-range",
      name: "Average True Range",
      code: "ATR",
      category: "Volatility",
      summary:
        "Measures how far price typically travels in one bar, gaps included.",
      reading:
        "It says nothing about direction. Use it to size stops and positions: a rising ATR means wider swings and more room to give.",
      settings: [["Length", "14"]],
      repo: 2,
    },
    {
      slug: "awesome-oscillator",
      name: "Awesome Oscillator",
      code: "AO",
      category: "Momentum",
      summary:
        "The gap between a 5-bar and a 34-bar average of each bar's midpoint, drawn as a histogram.",
      reading:
        "Green bars mean momentum is building, red bars mean it is fading. Alerts fire the moment the colour flips.",
      settings: [
        ["Fast", "5"],
        ["Slow", "34"],
        ["Alerts", "Colour change"],
      ],
      repo: 6,
    },
    {
      slug: "bollinger-bands",
      name: "Bollinger Bands",
      code: "BB",
      category: "Volatility",
      summary:
        "A 20-bar average wrapped in bands two standard deviations wide, with the space between them shaded.",
      reading:
        "Bands squeeze before big moves and widen during them. Price riding a band is strength, not automatically an exit.",
      settings: [
        ["Length", "20"],
        ["Std. deviation", "2.0"],
        ["Source", "Close"],
      ],
      repo: 2,
    },
    {
      slug: "chandelier-exit",
      name: "Chandelier Exit",
      code: "CE",
      category: "Volatility",
      summary:
        "A trailing stop hung from the highest high, or the lowest low, by three times the ATR.",
      reading:
        "Buy and Sell labels mark the bar where price crosses the stop and the trend flips. An alert fires on every change of direction.",
      settings: [
        ["ATR period", "22"],
        ["ATR multiplier", "3.0"],
        ["Labels", "Buy / Sell"],
      ],
      repo: 5,
    },
    {
      slug: "commodity-channel-index",
      name: "Commodity Channel Index",
      code: "CCI",
      category: "Momentum",
      summary:
        "How far the typical price has strayed from its average, scaled by how far it usually strays.",
      reading:
        "Above +100 is stretched to the upside, below −100 to the downside. Moves back inside the band often mark the turn.",
      settings: [
        ["Length", "20"],
        ["Source", "HLC3"],
        ["Smoothing", "SMA 5"],
      ],
      repo: 2,
    },
    {
      slug: "cumulative-volume-index",
      name: "Cumulative Volume Index",
      code: "CVI",
      category: "Volume",
      summary:
        "A breadth line: the running total of volume in advancing stocks minus volume in declining ones, for the exchange you pick.",
      reading:
        "When it rises with price, the rally has broad support. When price climbs and the CVI doesn't, fewer stocks are carrying the move.",
      settings: [
        ["Exchange", "NYSE"],
        ["Also", "NASDAQ, AMEX, ARCX, US, DJ"],
      ],
      repo: 6,
    },
    {
      slug: "exponential-moving-average",
      name: "Exponential Moving Average",
      code: "EMA",
      category: "Trend",
      summary:
        "An average that gives recent prices more weight, so it turns sooner than a simple average.",
      reading:
        "Price above a rising EMA is an uptrend in plain sight. Pair a short and a long one to trade the crossovers.",
      settings: [
        ["Length", "14"],
        ["Source", "Close"],
      ],
      repo: 1,
    },
    {
      slug: "fibonacci-retracement",
      name: "Fibonacci Retracement",
      code: "FIB",
      category: "Levels",
      summary:
        "Finds the last major swing on its own and draws the classic Fibonacci levels across it, with prices on every line.",
      reading:
        "Watch 38.2%, 50% and 61.8% for pullbacks to stall. Deviation and depth decide how big a swing has to be to count.",
      settings: [
        ["Deviation", "3"],
        ["Depth", "10"],
        ["Extend", "Right"],
      ],
      repo: 3,
    },
    {
      slug: "hull-moving-average",
      name: "Hull Moving Average",
      code: "HMA",
      category: "Trend",
      summary:
        "A weighted average built to cut lag almost to nothing while staying smooth.",
      reading:
        "Its slope is the signal. Turning up, the short-term trend is up. Turning down, it's down.",
      settings: [
        ["Length", "9"],
        ["Source", "Close"],
      ],
      repo: 6,
    },
    {
      slug: "ichimoku-cloud",
      name: "Ichimoku Cloud",
      code: "ICHI",
      category: "Trend",
      summary:
        "Five lines that show trend, momentum, support and resistance in a single view, with a cloud projected ahead of price.",
      reading:
        "Above a green cloud is bullish, below a red one bearish, inside it undecided. The cloud's edges act as support and resistance.",
      settings: [
        ["Conversion", "9"],
        ["Base", "26"],
        ["Span B", "52"],
        ["Lagging", "26"],
      ],
      repo: 3,
    },
    {
      slug: "macd",
      name: "Moving Average Convergence Divergence",
      code: "MACD",
      category: "Momentum",
      summary:
        "The gap between a 12- and a 26-bar EMA, with a 9-bar signal line and a histogram.",
      reading:
        "MACD crossing its signal line marks a shift in momentum. The histogram shows how much force is behind it.",
      settings: [
        ["Fast EMA", "12"],
        ["Slow EMA", "26"],
        ["Signal", "9"],
      ],
      repo: 2,
    },
    {
      slug: "moon-phases",
      name: "Moon Phases",
      code: "MOON",
      category: "Levels",
      summary:
        "Marks every new moon and full moon on the chart and tints the waxing and waning halves of each cycle.",
      reading:
        "For traders who study cycles and sentiment. It's a calendar, not a signal: use it to see whether turns line up with the moon.",
      settings: [
        ["Waxing", "Blue"],
        ["Waning", "White"],
      ],
      repo: 6,
    },
    {
      slug: "on-balance-volume",
      name: "On-Balance Volume",
      code: "OBV",
      category: "Volume",
      summary:
        "Adds a bar's volume when it closes up and subtracts it when it closes down, for one running total.",
      reading:
        "OBV leading price higher hints that buyers are quietly accumulating. A divergence between the two is the warning sign.",
      settings: [["Smoothing", "SMA 5"]],
      repo: 3,
    },
    {
      slug: "parabolic-sar",
      name: "Parabolic SAR",
      code: "PSAR",
      category: "Trend",
      summary:
        "Dots that trail price and close in faster the longer a trend runs.",
      reading:
        "Dots below price mean up, above mean down. When price touches them they flip sides, which makes a ready-made trailing stop.",
      settings: [
        ["AF start", "0.02"],
        ["AF step", "0.02"],
        ["AF max", "0.20"],
      ],
      repo: 3,
    },
    {
      slug: "relative-momentum-index",
      name: "Relative Momentum Index",
      code: "RMI",
      category: "Momentum",
      summary:
        "RSI's cousin: it compares each close with the close a few bars back instead of the one just before it.",
      reading:
        "Smoother than RSI and quicker to show a trend. Breakouts above overbought or below oversold are highlighted for you.",
      settings: [
        ["Length", "14"],
        ["Momentum", "3"],
        ["Source", "Close"],
      ],
      repo: 5,
    },
    {
      slug: "relative-strength-index",
      name: "Relative Strength Index",
      code: "RSI",
      category: "Momentum",
      summary:
        "Weighs the size of recent gains against recent losses on a scale from 0 to 100.",
      reading:
        "Above 70 is overbought, below 30 oversold. In strong trends it can stay there for a while, so watch for divergence too.",
      settings: [
        ["Length", "14"],
        ["Overbought", "70"],
        ["Oversold", "30"],
      ],
      repo: 1,
    },
    {
      slug: "simple-moving-average",
      name: "Simple Moving Average",
      code: "SMA",
      category: "Trend",
      summary:
        "The plain average of the last 14 closes. Nothing more, nothing less.",
      reading:
        "Slow and steady. Use it to define the trend and to see where price keeps finding support.",
      settings: [
        ["Length", "14"],
        ["Source", "Close"],
      ],
      repo: 1,
    },
    {
      slug: "stochastic-oscillator",
      name: "Stochastic Oscillator",
      code: "STOCH",
      category: "Momentum",
      summary:
        "Shows where the close sits inside the recent high–low range, from 0 to 100.",
      reading:
        "%K crossing %D above 80 or below 20 marks a likely turn. It shines in ranges; strong trends can pin it to the edges.",
      settings: [
        ["Length", "14"],
        ["%K smoothing", "3"],
        ["%D smoothing", "3"],
      ],
      repo: 1,
    },
    {
      slug: "supertrend",
      name: "Supertrend",
      code: "STI",
      category: "Trend",
      summary:
        "Three ATR-based trend lines at different distances from price, from tight to loose.",
      reading:
        "Green under price means up, red above means down. When all three agree the trend is strong; the tight line flips first.",
      settings: [
        ["Line 1", "ATR 10 × 1"],
        ["Line 2", "ATR 11 × 2"],
        ["Line 3", "ATR 12 × 3"],
      ],
      repo: 5,
    },
    {
      slug: "trading-volume",
      name: "Trading Volume",
      code: "RVOL",
      category: "Volume",
      summary:
        "Relative volume: each bar's volume divided by its 20-bar average, with busier-than-usual bars painted green on the chart.",
      reading:
        "Above 1 is more activity than normal. Breakouts on high relative volume tend to hold; moves on thin volume often fade.",
      settings: [
        ["Average", "SMA 20"],
        ["Highlight", "Above 1×"],
      ],
      repo: 1,
    },
    {
      slug: "trend-strength-index",
      name: "Trend Strength Index",
      code: "TSI",
      category: "Momentum",
      summary:
        "Measures how close to a straight line price has moved over the last 30 bars, from 0 to 1.",
      reading:
        "Near 1, price has moved in a clean line; near 0, it has chopped back and forth with no trend worth following. It shows strength, not direction.",
      settings: [
        ["Length", "30"],
        ["Smoothing", "5"],
      ],
      repo: 5,
    },
    {
      slug: "visible-average-price",
      name: "Visible Average Price",
      code: "VAP",
      category: "Levels",
      summary:
        "The average price of every bar on your screen, redrawn as you scroll and zoom.",
      reading:
        "A quick fair-value line for the window you're looking at. Above it, price is strong for that view; below it, weak.",
      settings: [["Source", "Close"]],
      repo: 6,
    },
    {
      slug: "williams-r",
      name: "Williams %R",
      code: "%R",
      category: "Momentum",
      summary:
        "Where the close sits against the highest high of the last 14 bars, from 0 down to −100.",
      reading:
        "Above −20 is overbought, below −80 oversold. The turns out of those zones are the signals.",
      settings: [
        ["Length", "14"],
        ["Source", "Close"],
      ],
      repo: 2,
    },
    {
      slug: "average-directional-index",
      name: "Average Directional Index",
      code: "ADX",
      category: "Trend",
      summary:
        "Measures how strong a trend is, whichever way it's heading, on a scale from 0 to 100.",
      reading:
        "Below 20 the market is drifting; above 25 a trend has real strength. A rising ADX means the trend is gaining force.",
      settings: [
        ["ADX smoothing", "14"],
        ["DI length", "14"],
      ],
      repo: 4,
    },
    {
      slug: "balance-of-power",
      name: "Balance of Power",
      code: "BOP",
      category: "Momentum",
      summary:
        "Close minus open, divided by high minus low: a bar-by-bar score of who was in control, buyers or sellers.",
      reading:
        "Above zero, buyers pushed price up through the bar; below zero, sellers did. The longer it stays on one side, the clearer the winner.",
      settings: [["Formula", "(C − O) / (H − L)"]],
      repo: 7,
    },
    {
      slug: "chaikin-volatility",
      name: "Chaikin Volatility",
      code: "CV",
      category: "Volatility",
      summary: "The rate of change of an average of each bar's high–low range.",
      reading:
        "A sharp rise means ranges are widening fast, often near panicky tops and bottoms. A falling line means the market is calming down.",
      settings: [
        ["Length", "10"],
        ["ROC length", "12"],
      ],
      repo: 4,
    },
    {
      slug: "keltner-channels",
      name: "Keltner Channels",
      code: "KC",
      category: "Volatility",
      summary:
        "A 20-bar EMA with bands set two ATRs above and below it, the space between them shaded.",
      reading:
        "Closes outside the channel signal a strong push. Inside it, the middle line works like a magnet.",
      settings: [
        ["Length", "20"],
        ["Multiplier", "2.0"],
        ["ATR length", "10"],
        ["Average", "EMA"],
      ],
      repo: 4,
    },
    {
      slug: "mcginley-dynamic",
      name: "McGinley Dynamic",
      code: "MD",
      category: "Trend",
      summary:
        "A moving average that tunes its own speed to the market, hugging price without the usual whipsaws.",
      reading:
        "Read it like a smarter moving average: above it is an uptrend, below it a downtrend, and it rarely gets left behind on fast moves.",
      settings: [["Length", "14"]],
      repo: 7,
    },
    {
      slug: "relative-vigor-index",
      name: "Relative Vigor Index",
      code: "RVGI",
      category: "Momentum",
      summary:
        "Compares where each bar closes against where it opened, relative to its range, with a signal line alongside.",
      reading:
        "In uptrends bars tend to close above their open. RVGI crossing over its signal line is bullish; crossing under is bearish.",
      settings: [["Length", "10"]],
      repo: 7,
    },
    {
      slug: "relative-volatility-index",
      name: "Relative Volatility Index",
      code: "RVI",
      category: "Volatility",
      summary:
        "RSI's logic applied to volatility: it asks whether price swings are bigger on up bars or on down bars.",
      reading:
        "Above 50, volatility sides with the buyers; below 50, with the sellers. Best used to confirm another signal, with 80 and 20 as the outer bands.",
      settings: [
        ["Length", "10"],
        ["MA", "SMA 14"],
      ],
      repo: 4,
    },
    {
      slug: "volatility-ratio",
      name: "Volatility Ratio",
      code: "VR",
      category: "Volatility",
      summary:
        "Compares the current bar's true range with the range of the last 14 bars.",
      reading:
        "Readings above the breakout level are shaded on the chart: bars that are unusually wide for this market, often where a breakout begins.",
      settings: [
        ["Length", "14"],
        ["Breakout level", "0.5"],
      ],
      repo: 4,
    },
    {
      slug: "vortex-indicator",
      name: "Vortex Indicator",
      code: "VI",
      category: "Trend",
      summary:
        "Two lines, VI+ and VI−, that measure upward and downward movement from one bar to the next.",
      reading:
        "VI+ crossing above VI− starts an uptrend; the opposite cross starts a downtrend. The wider the gap, the stronger the move.",
      settings: [["Length", "14"]],
      repo: 7,
    },
    {
      slug: "woodies-cci",
      name: "Woodies CCI",
      code: "WCCI",
      category: "Momentum",
      summary:
        "Two CCIs in one pane, a fast 6-bar turbo and a 14-bar main line, with zero and ±100 lines for Woodie's patterns.",
      reading:
        "Trade on the side of zero the main line is on. The turbo line bouncing off zero inside that trend is the classic entry.",
      settings: [
        ["Turbo length", "6"],
        ["CCI length", "14"],
      ],
      repo: 7,
    },
  ] satisfies Indicator[]
).sort((a, b) => a.name.localeCompare(b.name));

export const COLLECTIONS_URL =
  "https://github.com/AkashSasikumar47?tab=repositories&q=pine-strategy-indicators";

export function sourceUrl(indicator: Indicator) {
  return `https://github.com/AkashSasikumar47/pine-strategy-indicators-v${indicator.repo}/blob/main/indicators/${indicator.slug}.pine`;
}
