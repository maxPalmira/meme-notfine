// Configuration file for NOTFINE meme coin website
// Contains all editable content: texts, images, links, and other configuration options

const config = {
  // Meta information
  meta: {
    title: "NOTFINE Meme Coin",
    description: "Join the most chaotic memecoin venture where nothing is ever quite as it seems!",
  },

  // Social links
  social: {
    twitter: "#",
    telegram: "#",
    discord: "#",
  },

  // Navigation links
  navigation: [
    { text: "About", href: "#about" },
    { text: "Tokenomics", href: "#tokenomics" },
    { text: "How to Buy", href: "#how-to-buy" },
    { text: "Roadmap", href: "#roadmap" },
    { text: "Community", href: "#community" },
  ],

  // Main content
  content: {
    // Hero section
    hero: {
      image: "meme.png",
      tagline: "Join the most chaotic memecoin venture where nothing is ever quite as it seems! $NOTFINE - because in the world of crypto, if it ain't fine, we've got a grin on our face.",
    },

    // Meme text section
    memeText: [
      { emoji: "📈", text: "chart down", status: "not fine" },
      { emoji: "💀", text: "got rugged", status: "not fine" },
      { emoji: "🧻", text: "wallet drained", status: "not fine" },
      { emoji: "🤡", text: "dev ghosted", status: "not fine" },
      { finalLine: { text: "NOTFINE", status: "FINE", emojis: "🤑📈🧠" } },
    ],

    // About section
    about: {
      title: "ABOUT $NOTFINE",
      text: "$NOTFINE is the memecoin that embraces the chaos of the crypto world! Combining humor and satirical commentary on the struggles of every trader, we've created a community that finds strength in the absurd.",
    },

    // Tokenomics section
    tokenomics: {
      title: "TOKENOMICS",
      metrics: [
        { value: "1,000,000,000,000", label: "Total Supply" },
        { value: "2%", label: "Buy Tax" },
        { value: "2%", label: "Sell Tax" },
        { value: "40%", label: "Burned Forever" },
      ],
    },

    // How to Buy section
    howToBuy: {
      title: "HOW TO BUY $NOTFINE",
      steps: [
        {
          icon: "👛",
          title: "Create Wallet",
          text: "Download MetaMask or your preferred wallet",
        },
        {
          icon: "💰",
          title: "Get ETH",
          text: "Buy ETH from an exchange or transfer to your wallet",
        },
        {
          icon: "🔄",
          title: "Swap for $NOTFINE",
          text: "Use pump.fun to swap ETH for $NOTFINE",
        },
      ],
    },

    // Contract section
    contract: {
      title: "Contract Address",
      address: "0x1234567890abcdef1234567890abcdef12345678hui",
      copyButton: {
        text: "Copy",
        icon: "📋",
        successText: "Copied!",
        successIcon: "✅",
      },
    },

    // Community section
    community: {
      title: "JOIN THE CHAOS",
      stats: [
        { value: "0", label: "Holders", id: "holders-count" },
        { value: "$0", label: "Market Cap", id: "market-cap" },
        { value: "$0", label: "24h Volume", id: "volume" },
      ],
    },

    // Buy button
    buyButton: {
      text: "Buy on pump.fun",
      emojis: "📈 🤑",
      link: "#hui",
    },
  },

  // Stats configuration
  stats: {
    updateInterval: 3000, // ms
    maxHolders: 1500,
    maxMarketCap: 250000,
    maxVolume: 50000,
  },
};

// Export the configuration
export default config; 
