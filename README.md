<p align="center">
  <img src="app/apple-icon.png" width="72" height="72" alt="GAINZ logo" />
</p>

<h1 align="center">GAINZ</h1>

<p align="center">35 open-source TradingView indicators in Pine Script v6.</p>

---

![GAINZ](./app/opengraph-image.png)

A one-page gallery of 35 free TradingView indicators: trend, momentum, volatility, volume and levels. Each one opens with its chart, how to read it, its default settings and a link to the source.

Live at [gainz-trading-indicators.vercel.app](https://gainz-trading-indicators.vercel.app).

## Features

- **Gallery:** every indicator as a light TradingView chart, in one to three columns.
- **Indicator dialog:** the chart, what it does, how to read it, its defaults and View source, with previous and next (arrow keys work too).
- **Intro:** a short loader that counts the charts in, then hands the wordmark to the panel.
- Works on desktop and phone. No backend, no accounts, no tracking.

## Stack

Next.js 16, React 19, TypeScript 7, Tailwind CSS 4, shadcn/ui, Motion and Vercel. Node 24 and pnpm 12.6.

## Getting started

```bash
pnpm install
pnpm dev                           # http://localhost:3000
```

No environment variables are needed.

## Scripts

| Command              | What it does              |
| -------------------- | ------------------------- |
| `pnpm dev`           | Start the dev server      |
| `pnpm build`         | Production build          |
| `pnpm typecheck`     | Type-check the project    |
| `pnpm format`        | Format with Prettier      |
| `pnpm format:check`  | Check formatting (CI)     |
| `pnpm ui:add <name>` | Add a shadcn/ui component |

## Data

Indicator content lives in `lib/indicators.ts` and the charts in `public/indicators`. The Pine Script lives in seven collections of five indicators each:

| Collection                                                            | Indicators                                                                                           |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [v1](https://github.com/AkashSasikumar47/pine-strategy-indicators-v1) | EMA, RSI, SMA, Stochastic Oscillator, Trading Volume                                                 |
| [v2](https://github.com/AkashSasikumar47/pine-strategy-indicators-v2) | ATR, Bollinger Bands, CCI, MACD, Williams %R                                                         |
| [v3](https://github.com/AkashSasikumar47/pine-strategy-indicators-v3) | Aroon Oscillator, Fibonacci Retracement, On-Balance Volume, Parabolic SAR, Ichimoku Cloud            |
| [v4](https://github.com/AkashSasikumar47/pine-strategy-indicators-v4) | ADX, Chaikin Volatility, Keltner Channels, Relative Volatility Index, Volatility Ratio               |
| [v5](https://github.com/AkashSasikumar47/pine-strategy-indicators-v5) | Adaptive Moving Average, Chandelier Exit, Relative Momentum Index, Supertrend, Trend Strength Index  |
| [v6](https://github.com/AkashSasikumar47/pine-strategy-indicators-v6) | Awesome Oscillator, Cumulative Volume Index, Hull Moving Average, Moon Phases, Visible Average Price |
| [v7](https://github.com/AkashSasikumar47/pine-strategy-indicators-v7) | Balance of Power, McGinley Dynamic, Relative Vigor Index, Vortex Indicator, Woodies CCI              |

To use one, open its `.pine` file, paste it into the [Pine Editor](https://www.tradingview.com/pine/) on TradingView, save it and add it to your chart.

## Deployment

Vercel builds `main` only, in region `bom1`. There is nothing to configure.

## Disclaimer

For learning and research. Indicators describe what price has done, not what it will do. Nothing here is financial advice.

## License

[MIT](LICENSE)
