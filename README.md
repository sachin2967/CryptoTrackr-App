# CryptoTrackr

A React single-page cryptocurrency market dashboard that retrieves public market information from the CoinGecko API and visualizes historical price, market-cap and volume series.

## Features

- Search and select a cryptocurrency using the coin identifiers returned by CoinGecko
- View current USD price, 24-hour market-cap change, 24-hour trading volume, all-time high, community sentiment, and 24-hour high/low
- Compare historical price, market capitalization and trading volume
- Switch chart windows between 1 day, 1 week, 1 month, 6 months and 1 year
- Dashboard components built with React and ApexCharts

## Tech stack

- React 18 and Create React App (`react-scripts`)
- JavaScript and React Hooks
- ApexCharts / `react-apexcharts`
- Bootstrap-based UI styling
- CoinGecko public API

## Run locally

Requires Node.js and npm.

```bash
git clone https://github.com/sachin2967/CryptoTrackr-App.git
cd CryptoTrackr-App
npm install
npm start
```

The development server opens at [http://localhost:3000](http://localhost:3000).

Create a production build with:

```bash
npm run build
```

The repository uses Create React App's test runner:

```bash
npm test -- --watchAll=false
```

## Data source and limitations

Market data is requested directly from CoinGecko in the browser. Availability, response shape and request limits are controlled by that external service. The app has no backend, user accounts, transaction execution, wallet integration, portfolio persistence or investment recommendations. It is a market-data visualization project, not a trading product.

## Project structure

```text
src/
  App.jsx                 Selected-coin state and data requests
  Components/
    Header.jsx            Coin search and selection
    Cards.jsx             Current market summary
    Charts.jsx            Historical market charts
    Developer.jsx         Dashboard attribution strip
```

## License

No license is currently specified. All rights remain with the copyright holder unless a license is added.
