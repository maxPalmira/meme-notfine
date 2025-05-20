// Configuration file for NOTFINE meme coin website
// Contains all editable content: texts, images, links, and other configuration options
// Restored for Next.js integration

const config = {
  meta: {
    title: "NOTFINE Meme Coin",
    description: "Join the most chaotic memecoin venture where nothing is ever quite as it seems!",
  },
  social: {
    twitter: "#",
    telegram: "#",
    discord: "#",
  },
  navigation: [
    { text: "About", href: "#about" },
    { text: "Tokenomics", href: "#tokenomics" },
    { text: "How to Buy", href: "#how-to-buy" },
    { text: "Roadmap", href: "#roadmap" },
    { text: "Community", href: "#community" },
  ],
  content: {
    hero: {
      image: "meme.png",
      tagline: "Join the most chaotic memecoin venture where nothing is ever quite as it seems! $NOTFINE - because in the world of crypto, if it ain't fine, we've got a grin on our face.",
    },
    memeText: [
      { emoji: "📈", text: "chart down", status: "not fine" },
      { emoji: "💀", text: "got rugged", status: "not fine" },
      { emoji: "🧻", text: "wallet drained", status: "not fine" },
      { emoji: "🤡", text: "dev ghosted", status: "not fine" },
      { finalLine: { text: "NOTFINE", status: "FINE", emojis: "🤑📈🧠" } },
    ],
    about: {
      title: "ABOUT $NOTFINE",
      text: "$NOTFINE is the memecoin that embraces the chaos of the crypto world! Combining humor and satirical commentary on the struggles of every trader, we've created a community that finds strength in the absurd.",
    },
    tokenomics: {
      title: "TOKENOMICS",
      metrics: [
        { value: "1,000,000,000,000", label: "Total Supply" },
        { value: "2%", label: "Buy Tax" },
        { value: "2%", label: "Sell Tax" },
        { value: "40%", label: "Burned Forever" },
      ],
    },
    howToBuy: {
      title: "HOW TO BUY $NOTFINE",
      steps: [
        {
          icon: "👛",
          title: "Get a Wallet",
          text: "Don't have a wallet? Just download MetaMask from your phone's app store or as a browser extension. It's super easy!",
        },
        {
          icon: "💰",
          title: "Get Some BNB",
          text: "Buy BNB from any exchange (like Binance or Coinbase) and send it to your wallet. That's the coin you'll need to buy $NOTFINE!",
        },
        {
          icon: "🌐",
          title: "Go to Pump.fun",
          text: "Visit Pump.fun in your wallet's browser. Click 'Connect Wallet' and select your wallet. Easy peasy!",
        },
        {
          icon: "💸",
          title: "Buy $NOTFINE",
          text: "Copy our contract address, paste it in, choose how much BNB you want to spend, and click 'Swap'. Congrats, you're NOTFINE! 🎉",
        },
      ],
    },
    contract: {
      title: "Contract Address",
      address: "ХУЙ",
      copyButton: {
        text: "Copy",
        icon: "📋",
        successText: "Copied!",
        successIcon: "✅",
      },
    },
    community: {
      title: "JOIN THE CHAOS",
      stats: [
        { value: "0", label: "Holders", id: "holders-count" },
        { value: "$0", label: "Market Cap", id: "market-cap" },
        { value: "$0", label: "24h Volume", id: "volume" },
      ],
    },
    buyButton: {
      text: "Buy on pump.fun",
      emojis: "📈 🤑",
      link: "#hui",
    },
  },
  stats: {
    updateInterval: 3000, // ms
    maxHolders: 1500,
    maxMarketCap: 250000,
    maxVolume: 50000,
  },
};

export default config; 