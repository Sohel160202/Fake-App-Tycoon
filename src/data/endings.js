// src/data/endings.js
export const endings = [
  {
    id: 'ipo',
    condition: (stats) => stats.funding >= 2000000 && stats.users >= 50000,
    title: "📈 IPO Victory",
    description: "Your fake app becomes so hyped it actually IPOs. Wall Street loves the illusion."
  },
  {
    id: 'crash-and-burn',
    condition: (stats) => stats.bugs > 25 || stats.reputation <= -5,
    title: "🔥 Crash and Burn",
    description: "The bugs and backlash finally bring it all down. You flee to Bali with what's left."
  },
  {
    id: 'buyout',
    condition: (stats) => stats.funding >= 1000000 && stats.reputation >= 5,
    title: "💰 Corporate Buyout",
    description: "A tech giant offers to buy your app for billions. You sell out instantly."
  },
  {
    id: 'ghost-town',
    condition: (stats) => stats.users < 500 && stats.hype < 10,
    title: "👻 Ghost Town",
    description: "Nobody downloaded your app. It vanishes without a trace."
  },
  {
    id: 'cult-following',
    condition: (stats) => stats.reputation >= 8 && stats.hype >= 20,
    title: "🌀 Cult Following",
    description: "You never made money, but your app has a weird loyal fanbase that worships it."
  }
];
