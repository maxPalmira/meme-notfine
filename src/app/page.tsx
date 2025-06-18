// Updated: Fixed section order to match correct sequence

"use client";

import { useState } from "react";
import GridOverlay from "./components/GridOverlay";
import ConfigDebugConsole from "./components/ConfigDebugConsole";
import DebugLabels from "./components/DebugLabels";
import HeaderNavigation from "./components/HeaderNavigation";
import HeroSection from "./components/HeroSection";
import CASection from "./components/CASection";
import MemesSection from "./components/MemesSection";

export default function Home() {
  // State for controlling debug features individually
  const [showGrid, setShowGrid] = useState(false);
  const [showLabels, setShowLabels] = useState(false);
  const [showBorders, setShowBorders] = useState(false);
  const [showSectionBorders, setShowSectionBorders] = useState(false);

  return (
    <div className="min-h-screen relative">
      {/* Config Console - The proper one from the repo */}
      <ConfigDebugConsole 
        onGridToggle={setShowGrid}
        onLabelsToggle={setShowLabels}
        onBordersToggle={setShowBorders}
        onSectionBordersToggle={setShowSectionBorders}
      />

      {/* Debug Labels - Controlled by Config Console */}
      <DebugLabels visible={showLabels} />

      {/* Grid Overlay - Controlled by Config Console */}
      <GridOverlay visible={showGrid} />

      {/* Debug Border Styles - Controlled by Config Console */}
      {showBorders && (
        <style dangerouslySetInnerHTML={{
          __html: `
            * {
              outline: 1px solid red !important;
            }
          `
        }} />
      )}
      
      {showSectionBorders && (
        <style dangerouslySetInnerHTML={{
          __html: `
            section {
              border: 2px solid blue !important;
            }
          `
        }} />
      )}

      {/* Original Gradient Background with Noise Filter - matching exact stops */}
      <div
        className="absolute top-0 left-0 w-full min-h-full bg-gradient-to-b from-[#A6B857] via-[#CDE26F] via-[#FFF587] to-[#FFD272] -z-20"
        style={{
          background: `linear-gradient(180deg,
               #A6B857 0%,
               #CDE26F 36%,
               #FFF587 69%,
               #FFD272 100%)`,
          height: "100%",
        }}
      />

      {/* Noise Filter Overlay */}
      <div
        className="absolute top-0 left-0 w-full min-h-full opacity-15 -z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.8' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' fill='%23000000'/%3E%3C/svg%3E")`,
          mixBlendMode: "multiply",
          height: "100%",
        }}
      />

      {/* Header Navigation - Using SVG Component */}
      <HeaderNavigation />

      {/* Hero Section - Using SVG Component */}
      <HeroSection />

      {/* Contract Address Section - Using Component */}
      <CASection />

      {/* Memes Section */}
      <MemesSection />

      {/* Platforms Section */}
      <section className="homepage-section py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Title */}
          <div className="text-center mb-16">
            <div className="bg-[#FF9D33] border-[6px] border-black rounded-3xl px-8 py-6 shadow-[4px_4px_0px_#000] inline-block">
              <h2 className="text-[#FF9D33] font-jua text-4xl md:text-5xl lg:text-6xl leading-tight">
                FOR THE FASTEST HANDS
                <br />
                IN THE WILD WEST ;D
              </h2>
            </div>
          </div>

          {/* Accordions */}
          <div className="space-y-8">
            {/* Trading Platform Accordion */}
            <div className="relative">
              {/* Connector arrows */}
              <div className="absolute left-8 top-8 z-20">
                <div
                  className="w-16 h-16 text-[#DB4646] transform rotate-60 svg-container debug-image"
                  data-filename="arrow-connector.svg"
                >
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#E85834] via-[#FF9D33] to-[#FFC756] border-[8px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_#000]">
                {/* Header */}
                <div className="text-center mb-8">
                  <div className="bg-[#FEC400] border-[4px] border-black rounded-2xl px-8 py-4 shadow-[4px_4px_0px_#000] inline-block">
                    <h3 className="text-black font-jua text-3xl md:text-4xl">
                      TRADING PLATFORM
                    </h3>
                  </div>
                </div>

                {/* Platform Buttons Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                  {/* Top row */}
                  <div className="col-start-3 bg-white border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center">
                    <span className="text-black font-jua text-xs">
                      PUMP.FUN
                    </span>
                  </div>

                  {/* Second row */}
                  <div className="bg-white border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center">
                    <span className="text-black font-jua text-xs">PHOTON</span>
                  </div>
                  <div className="bg-white border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center">
                    <span className="text-black font-jua text-xs">GMGN</span>
                  </div>
                  <div className="bg-white border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center">
                    <span className="text-black font-jua text-xs">MEVX</span>
                  </div>
                  <div className="bg-white border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center">
                    <span className="text-black font-jua text-xs">AXIOM</span>
                  </div>

                  {/* Third row */}
                  <div className="bg-black border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full border border-black"></div>
                    <span className="text-white font-jua text-xs">
                      @TradeonNovaBot
                    </span>
                  </div>
                  <div className="bg-black border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full border border-black"></div>
                    <span className="text-white font-jua text-xs">
                      @GMGN_sol_bot
                    </span>
                  </div>
                  <div className="bg-black border-[4px] border-black rounded-full px-4 py-3 shadow-[8px_8px_0px_#000] text-center flex items-center gap-2">
                    <div className="w-6 h-6 bg-white rounded-full border border-black"></div>
                    <span className="text-white font-jua text-xs">
                      @MevxTradingBot
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Screeners and On-Chain Data Accordion */}
            <div className="relative">
              <div className="absolute left-8 top-8 z-20">
                <div
                  className="w-16 h-16 text-[#DB4646] transform -rotate-30 svg-container debug-image"
                  data-filename="arrow-2.svg"
                >
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#A6B857] via-[#FFE033] to-[#FFC756] border-[8px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_#000]">
                <div className="text-center">
                  <div className="bg-[#E85834] border-[4px] border-black rounded-2xl px-8 py-4 shadow-[4px_4px_0px_#000] inline-block">
                    <h3 className="text-[#E85834] font-jua text-3xl md:text-4xl">
                      SCREENERS AND ON-CHAIN DATA
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Instant Buy via TG Accordion */}
            <div className="relative">
              <div className="absolute left-8 top-8 z-20">
                <div
                  className="w-16 h-16 text-[#DB4646] transform -rotate-30 svg-container debug-image"
                  data-filename="arrow-3.svg"
                >
                </div>
              </div>

              <div className="bg-gradient-to-b from-[#57B8AD] via-[#FF9933] to-[#FFD581] border-[8px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_#000]">
                <div className="text-center">
                  <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl px-8 py-4 shadow-[4px_4px_0px_#000] inline-block">
                    <h3 className="text-[#FFF3DC] font-jua text-3xl md:text-4xl">
                      INSTANT BUY VIA TG
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Memes Section */}
      <section className="homepage-section py-16 px-6 relative overflow-hidden">
        {/* Background Clouds */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top cloud */}
          <svg
            className="absolute top-0 right-32 w-96 h-64 transform rotate-[3.769deg] opacity-80 debug-svg"
            data-filename="cloud-top"
            viewBox="0 0 738 301"
            fill="none"
          >
            <path
              d="M552.927 35.3251C579.354 37.0662 600.963 55.28 609.331 79.8558C618.438 75.7043 628.581 73.6929 639.14 74.3885C644.243 74.7248 649.167 75.6761 653.851 77.1683C661.99 63.2311 676.976 54.3471 693.494 55.4354C717.221 56.9987 735.12 78.5422 733.472 103.554C732.103 124.347 717.656 140.989 699.191 145.115C699.17 145.529 699.149 145.944 699.121 146.359C698.187 160.547 693.166 173.441 685.354 183.855C688.008 187.989 689.411 192.987 689.063 198.276C688.201 211.356 676.96 221.265 663.956 220.408C655.956 219.881 649.153 215.402 645.302 208.988C640.42 209.872 635.368 210.178 630.216 209.839C622.363 209.322 614.936 207.349 608.154 204.188C596.127 242.685 559.158 269.422 517.356 266.668C488.026 264.735 462.959 248.721 448.238 225.608C448.219 226.366 448.186 227.126 448.136 227.889C446.14 258.179 420.109 281.125 389.994 279.142C359.879 277.158 337.083 250.994 339.078 220.704C339.353 216.535 340.083 212.505 341.216 208.66C334.841 211.861 328.044 214.31 320.947 215.902C305.554 237.589 279.692 251.01 251.324 249.141C233.503 247.967 217.455 240.941 204.906 230.05C190.135 241.644 171.24 248.039 151.08 246.71C115.004 244.333 86.1871 217.976 78.9754 184.103C73.3582 185.533 67.4269 186.116 61.3342 185.715C30.0783 183.656 6.41932 156.501 8.4902 125.064C9.93986 103.059 23.6109 84.7885 42.4028 76.5114C42.4153 76.1939 42.4329 75.8757 42.4539 75.5567C43.7389 56.0518 60.5007 41.2755 79.893 42.5529C84.9692 42.8873 89.7218 44.2901 93.9503 46.5266C102.807 36.1387 116.248 29.9253 130.864 30.8882C144.354 31.777 156.049 38.5963 163.603 48.653C171.902 26.6361 193.752 11.6624 218.32 13.2809C239.687 14.6886 257.369 28.2687 265.126 46.8582C277.989 41.027 292.418 38.1932 307.474 39.1851C329.964 40.6668 349.948 50.4284 364.682 65.3207C369.882 60.0752 375.716 55.4815 382.049 51.6624C381.933 50.4144 381.913 49.1409 381.998 47.85C382.86 34.7702 394.101 24.8615 407.105 25.7182C415.842 26.2939 423.151 31.5826 426.747 38.958C429.015 38.9338 431.302 38.9967 433.603 39.1483C457.423 40.7177 478.431 51.5748 493.369 67.9785C505.55 47.0426 528.084 33.6884 552.927 35.3251Z"
              fill="#8B625B"
              opacity="0.7"
            />
          </svg>

          {/* Bottom cloud for sad cat */}
          <svg
            className="absolute bottom-0 right-16 w-96 h-64 opacity-70 debug-svg"
            data-filename="cloud-bottom"
            viewBox="0 0 733 353"
            fill="none"
          >
            <path
              d="M468.522 286C467.757 268.626 466.991 251.252 466.226 233.878C452.4 245.129 439.653 257.483 428.181 270.749C430.343 248.707 432.504 226.662 434.662 204.62C435.614 194.899 433.221 181.441 422.515 181.111C413.482 180.831 407.083 191.395 398.098 190.525C406.133 166.25 403.134 139.108 389.95 116.781C390.366 132.867 386.915 149.024 379.913 163.795C381.014 142.47 373.231 120.861 358.477 104.276C347.319 91.7346 332.559 82.184 321.289 69.7254C306.273 53.1204 298.207 31.4902 298.65 10C296.359 43.6851 301.622 77.7904 314.097 109.57C321.714 128.968 332.161 148.936 328.185 169.216C325.485 182.992 316.334 195.003 306.125 205.463C301.405 173.203 297.065 140.899 293.11 108.554C286.488 140.591 269.639 170.816 245.155 194.591C253.429 175.051 238.497 154.272 224.448 137.694C210.4 121.117 195.655 100.137 204.29 80.7259C186.685 111.357 202.497 155.656 174.022 178.519C171.12 157.839 161.387 137.994 146.419 122.223C144.972 133.413 142.018 144.438 137.642 154.975C130.863 134.476 111.986 119.604 97.8135 102.526C86.7607 89.2082 78.5442 71.2687 81.908 55.7291C69.8968 82.2664 60.3028 110.718 69.6194 137.604C74.6379 152.083 84.898 164.924 88.0869 179.826C92.9608 202.618 80.5637 225.209 68.5555 245.689C56.2368 237.984 54.7176 222.109 55.7213 208.525C56.725 194.943 58.6571 179.996 50.0006 168.903C42.6853 178.445 29.6583 198.131 25.3843 225.986C21.2248 253.098 27.3736 274.813 31.4879 285.995H468.522V286Z"
              fill="#FF9D33"
            />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {/* Left Column - "Not Fine" Statements */}
          <div className="flex-1 space-y-6">
            <div className="bg-[#FF9D33] border-[4px] border-black rounded-full px-8 py-6 shadow-[8px_8px_0px_#000]">
              <p className="text-black font-jua text-2xl md:text-3xl text-center">
                CHART DOWN — NOT FINE
              </p>
            </div>

            <div className="bg-[#FF9D33] border-[4px] border-black rounded-full px-8 py-6 shadow-[8px_8px_0px_#000]">
              <p className="text-black font-jua text-2xl md:text-3xl text-center">
                GOT RUGGED — NOT FINE
              </p>
            </div>

            <div className="bg-[#FF9D33] border-[4px] border-black rounded-full px-8 py-6 shadow-[8px_8px_0px_#000]">
              <p className="text-black font-jua text-2xl md:text-3xl text-center">
                WALLET DRAINED — NOT FINE
              </p>
            </div>

            <div className="bg-[#FF9D33] border-[4px] border-black rounded-full px-8 py-6 shadow-[8px_8px_0px_#000]">
              <p className="text-black font-jua text-2xl md:text-3xl text-center">
                DEV GHOSTED — NOT FINE
              </p>
            </div>
          </div>

          {/* Right Column - Sad Cat and Speech */}
          <div className="flex-1 relative">
            {/* Speech bubble above cat */}
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-[#8B625B] border-[4px] border-black rounded-3xl px-8 py-4 shadow-[4px_4px_0px_#000] relative">
                <p className="text-black font-jua text-2xl md:text-3xl text-center whitespace-nowrap">
                  WHATS WRONG, DEG?
                </p>
                {/* Speech bubble tail */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[15px] border-t-[#8B625B]"></div>
                  <div className="absolute -top-[4px] left-[-19px] w-0 h-0 border-l-[19px] border-l-transparent border-r-[19px] border-r-transparent border-t-[19px] border-t-black"></div>
                </div>
              </div>
            </div>

            {/* Sad Cat Character */}
            <div className="relative pt-24 svg-container debug-image" data-filename="memes-cat-sad.svg">
              <div
                className="w-full h-auto max-w-md mx-auto relative z-10"
                style={{ width: '400px', height: '600px' }}
              >
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="homepage-section py-16 px-6 relative overflow-hidden flex lg:flex md:flex">
        {/* Coral Background with Chevron Pattern */}
        <div className="absolute inset-0 bg-[#C08080] border-t-[8px] border-b-[8px] border-black">
          {/* Chevron Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(0,0,0,0.1) 10px,
                rgba(0,0,0,0.1) 20px
              ), repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 10px,
                rgba(0,0,0,0.1) 10px,
                rgba(0,0,0,0.1) 20px
              )`,
            }}
          />
        </div>

        {/* Left Flame Decoration */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
          <div
            className="w-[120px] h-[200px] opacity-90 svg-container debug-image"
            data-filename="tokenomics-flame-1.svg"
          >
          </div>
        </div>

        {/* Right Flame Decoration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1] z-10">
          <div
            className="w-[120px] h-[200px] opacity-90 svg-container debug-image"
            data-filename="tokenomics-flame-2.svg"
          >
          </div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto">
          {/* Section Title */}
          <h2 className="text-white font-jua text-6xl md:text-7xl text-center mb-12 drop-shadow-lg">
            TOKENOMICS
          </h2>

          {/* Main Content Container */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Cat Character */}
            <div className="lg:w-1/4 flex justify-center">
              <div className="relative">
                {/* Cat Character with Sunglasses and Bottle */}
                <div className="relative w-48 h-64 bg-[#8B7355] rounded-3xl border-4 border-black shadow-lg">
                  {/* Cat face */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
                    {/* Ears */}
                    <div className="absolute -top-4 left-2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-[#8B7355]"></div>
                    <div className="absolute -top-4 right-2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-[#8B7355]"></div>

                    {/* Head */}
                    <div className="w-20 h-20 bg-[#8B7355] rounded-full border-3 border-black relative">
                      {/* Sunglasses */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-black rounded-full border-2 border-black"></div>
                      {/* Nose */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full"></div>
                    </div>
                  </div>

                  {/* Body and Bottle */}
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-16 bg-amber-600 rounded-lg border-2 border-black relative">
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-3 bg-amber-800 rounded-t-full border border-black"></div>
                      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-2 bg-yellow-200 rounded opacity-60"></div>
                    </div>
                  </div>
                </div>

                {/* Star decoration */}
                <div className="absolute -top-2 -right-2 text-yellow-400 text-2xl animate-pulse">
                  ✦
                </div>
              </div>
            </div>

            {/* Center - Stats Cards */}
            <div className="lg:w-1/2 space-y-8">
              {/* Top Row - Total Supply & Buy Tax */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F5F5DC] border-4 border-black rounded-3xl p-6 shadow-lg">
                  <h3 className="text-black font-jua text-xl text-center mb-2">
                    Total Supply
                  </h3>
                  <p className="text-[#71C345] font-jua text-3xl font-bold text-center">
                    1,000,000
                  </p>
                </div>
                <div className="bg-[#F5F5DC] border-4 border-black rounded-3xl p-6 shadow-lg">
                  <h3 className="text-black font-jua text-xl text-center mb-2">
                    Buy Tax
                  </h3>
                  <p className="text-[#71C345] font-jua text-3xl font-bold text-center">
                    2%
                  </p>
                </div>
              </div>

              {/* Bottom Row - Sell Tax & Burned Forever */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F5F5DC] border-4 border-black rounded-3xl p-6 shadow-lg">
                  <h3 className="text-black font-jua text-xl text-center mb-2">
                    Sell Tax
                  </h3>
                  <p className="text-[#71C345] font-jua text-3xl font-bold text-center">
                    2%
                  </p>
                </div>
                <div className="bg-[#F5F5DC] border-4 border-black rounded-3xl p-6 shadow-lg">
                  <h3 className="text-black font-jua text-xl text-center mb-2">
                    Burned Forever
                  </h3>
                  <p className="text-[#71C345] font-jua text-3xl font-bold text-center">
                    40%
                  </p>
                </div>
              </div>

              {/* Circular Stats */}
              <div className="flex justify-center gap-6 mt-12">
                {/* Holders */}
                <div className="w-24 h-24 bg-[#8FBC8F] border-4 border-black rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-black font-jua text-xs">Holders</span>
                  <span className="text-white font-jua text-lg font-bold">
                    175
                  </span>
                </div>

                {/* Market Cap */}
                <div className="w-24 h-24 bg-[#20B2AA] border-4 border-black rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-black font-jua text-xs">
                    Market Cap
                  </span>
                  <span className="text-white font-jua text-lg font-bold">
                    $694
                  </span>
                </div>

                {/* 24h Volume */}
                <div className="w-24 h-24 bg-[#9370DB] border-4 border-black rounded-full flex flex-col items-center justify-center shadow-lg">
                  <span className="text-black font-jua text-xs">
                    24h Volume
                  </span>
                  <span className="text-white font-jua text-lg font-bold">
                    $554
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side - Coin Decorations */}
            <div className="lg:w-1/4 relative">
              {/* Scattered Coins */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((coin, index) => (
                <div
                  key={coin}
                  className={`absolute w-8 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full border-2 border-black shadow-md ${index % 2 === 0 ? "animate-bounce" : "animate-pulse"}`}
                  style={{
                    top: `${Math.random() * 80}%`,
                    left: `${Math.random() * 80}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${2 + Math.random() * 2}s`,
                  }}
                >
                  <div className="absolute inset-1 bg-yellow-300 rounded-full opacity-60"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-800 text-xs font-bold">
                    $
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Orange Button */}
          <div className="text-center mt-12">
            <div className="inline-block bg-[#FF9D33] border-4 border-black rounded-full px-16 py-4 shadow-[8px_8px_0px_#000] hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-2xl">
                JOIN THE CHAOS
              </span>
            </div>
          </div>

          {/* Bottom $NOTFINE! Text */}
          <div className="absolute bottom-4 left-0 right-0 border-t-2 border-black bg-white py-2">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-[scroll_20s_linear_infinite]">
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
                <span className="text-black font-jua text-lg mx-8">
                  $NOTFINE!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CSS for scrolling animation */}
        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}</style>
      </section>

      {/* Roadmap Section */}
      <section className="homepage-section py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#57B8AD] border-[6px] border-black rounded-2xl px-12 py-6 shadow-[4px_4px_0px_#000]">
              <h2 className="text-[#57B8AD] font-jua text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
                ROADMAP
              </h2>
            </div>
          </div>

          {/* Roadmap Path Container */}
          <div className="relative min-h-96 mb-16">
            {/* Curved Path SVG */}
            <div
              className="absolute inset-0 w-full h-full svg-container debug-image"
              data-filename="roadmap.svg"
            >
            </div>

            {/* Milestone Labels */}
            <div className="relative z-10 h-full">
              {/* Meme Milestone */}
              <div className="absolute" style={{ left: "2%", top: "75%" }}>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000] transform -translate-x-1/2 -translate-y-full mb-4">
                  <span className="text-black font-jua text-lg md:text-xl">
                    meme
                  </span>
                </div>
              </div>

              {/* Community Milestone */}
              <div className="absolute" style={{ left: "16%", top: "50%" }}>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000] transform -translate-x-1/2 -translate-y-full mb-4">
                  <span className="text-black font-jua text-lg md:text-xl">
                    community
                  </span>
                </div>
              </div>

              {/* Chaos Milestone */}
              <div className="absolute" style={{ left: "54%", top: "35%" }}>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000] transform -translate-x-1/2 translate-y-full mt-4">
                  <span className="text-black font-jua text-lg md:text-xl">
                    chaos
                  </span>
                </div>
              </div>

              {/* Fun Milestone */}
              <div className="absolute" style={{ left: "79%", top: "45%" }}>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000] transform -translate-x-1/2 -translate-y-full mb-4">
                  <span className="text-black font-jua text-lg md:text-xl">
                    fun
                  </span>
                </div>
              </div>

              {/* Degen Party Milestone */}
              <div className="absolute" style={{ left: "96%", top: "25%" }}>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000] transform -translate-x-1/2 -translate-y-full mb-4 text-center">
                  <span className="text-black font-jua text-sm md:text-base">
                    degen party
                    <br />
                    in Thai
                    <br />
                    24.08.2025
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Flag Section */}
          <div className="flex justify-start items-end relative">
            {/* Flagpole */}
            <div className="w-1 h-32 bg-black mr-4"></div>

            {/* Flag */}
            <div className="relative">
              <div
                className="bg-[#E85834] border-[4px] border-black shadow-[8px_8px_0px_#000] relative"
                style={{
                  clipPath:
                    "polygon(0% 0%, 85% 0%, 100% 50%, 85% 100%, 0% 100%)",
                }}
              >
                <div className="px-6 py-4 pr-8">
                  <p className="text-black font-jua text-lg md:text-xl leading-tight transform -rotate-3">
                    get
                    <br />
                    the secret
                    <br />
                    code!!!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Responsive Alternative for smaller screens */}
          <div className="block md:hidden mt-16">
            <div className="space-y-8">
              {/* Mobile milestone list */}
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000]">
                  <span className="text-black font-jua text-lg">meme</span>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-8">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000]">
                  <span className="text-black font-jua text-lg">community</span>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-4">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000]">
                  <span className="text-black font-jua text-lg">chaos</span>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-12">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000]">
                  <span className="text-black font-jua text-lg">fun</span>
                </div>
              </div>

              <div className="flex items-center gap-4 ml-16">
                <div className="w-4 h-4 bg-black rounded-full"></div>
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-xl px-4 py-2 shadow-[4px_4px_0px_#000] text-center">
                  <span className="text-black font-jua text-sm">
                    degen party in Thai
                    <br />
                    24.08.2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="homepage-section py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#E85834] border-[6px] border-black rounded-2xl px-12 py-6 shadow-[4px_4px_0px_#000]">
              <h2 className="text-[#E85834] font-jua text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
                OUR TEAM
              </h2>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Team Grid */}
            <div className="lg:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
                  <div className="bg-[#FF9D33] rounded-[42.5px] h-48 mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#8B7355] rounded-full"></div>
                  </div>
                  <div className="w-full h-[2px] bg-black mb-3"></div>
                  <div className="text-center">
                    <p className="text-[#A6B857] font-jua text-lg">Nani</p>
                    <p className="text-black font-jua text-lg">SeO</p>
                  </div>
                </div>

                {/* Team Member 2 */}
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
                  <div className="bg-[#FF9D33] rounded-[42.5px] h-48 mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#8B7355] rounded-full"></div>
                  </div>
                  <div className="w-full h-[2px] bg-black mb-3"></div>
                  <div className="text-center">
                    <p className="text-[#A6B857] font-jua text-lg">Lily</p>
                    <p className="text-black font-jua text-lg">DeVopS</p>
                  </div>
                </div>

                {/* Team Member 3 - Empty placeholder */}
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
                  <div className="bg-[#FF9D33] rounded-[42.5px] h-48 mb-4"></div>
                  <div className="w-full h-[2px] bg-black mb-3"></div>
                  <div className="text-center">
                    <p className="text-[#A6B857] font-jua text-lg">TBD</p>
                    <p className="text-black font-jua text-lg">Role</p>
                  </div>
                </div>

                {/* Team Member 4 */}
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
                  <div className="bg-[#FF9D33] rounded-[42.5px] h-48 mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#8B7355] rounded-full"></div>
                  </div>
                  <div className="w-full h-[2px] bg-black mb-3"></div>
                  <div className="text-center">
                    <p className="text-[#A6B857] font-jua text-lg">Vava</p>
                    <p className="text-black font-jua text-sm">
                      deSign3r/artist
                    </p>
                  </div>
                </div>

                {/* Team Member 5 */}
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
                  <div className="bg-[#FF9D33] rounded-[42.5px] h-48 mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#8B7355] rounded-full"></div>
                  </div>
                  <div className="w-full h-[2px] bg-black mb-3"></div>
                  <div className="text-center">
                    <p className="text-[#A6B857] font-jua text-lg">Miko</p>
                    <p className="text-black font-jua text-lg">arT-dir6ctoR</p>
                  </div>
                </div>

                {/* Team Member 6 */}
                <div className="bg-[#FFF3DC] border-[4px] border-black rounded-2xl p-4 shadow-[4px_4px_0px_#000]">
                  <div className="bg-[#FF9D33] rounded-[42.5px] h-48 mb-4 flex items-center justify-center">
                    <div className="w-12 h-12 bg-[#8B7355] rounded-full"></div>
                  </div>
                  <div className="w-full h-[2px] bg-black mb-3"></div>
                  <div className="text-center">
                    <p className="text-[#A6B857] font-jua text-lg">Deg</p>
                    <p className="text-black font-jua text-sm">
                      p6rsOn on the yaer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Team Description */}
            <div className="lg:w-1/3">
              <div className="bg-white border-[4px] border-black rounded-2xl p-8 shadow-[4px_4px_0px_#000] relative">
                {/* Top and bottom borders */}
                <div className="absolute top-4 left-12 right-12 h-[2px] bg-black"></div>
                <div className="absolute bottom-4 left-12 right-12 h-[2px] bg-black"></div>

                <div className="my-8">
                  <p className="text-black font-jua text-lg leading-relaxed">
                    $NOTFINE Team is a passionate group of crypto enthusiasts,
                    developers, and creatives dedicated to building a fun,
                    community-driven meme coin. We believe in transparency,
                    humor, and decentralization. Our mission is to create a
                    vibrant ecosystem where everyone can participate, share
                    ideas, and enjoy the ride. Join us and be part of the
                    $NOTFINE revolution!
                  </p>
                </div>
              </div>

              {/* Cat Character */}
              <div className="mt-8 flex justify-center lg:justify-end">
                <div
                  className="relative debug-image"
                  data-filename="cat-rocket"
                >
                  <div
                    className="relative z-10 svg-container debug-image"
                    style={{ width: '300px', height: '400px' }}
                    data-filename="team-cat-rocket.svg"
                  >
                  </div>

                  {/* Scattered decorations */}
                  <div className="absolute top-4 -left-4 text-yellow-400 text-2xl animate-pulse">
                    ✦
                  </div>
                  <div className="absolute top-16 right-8 text-yellow-300 text-xl animate-pulse delay-700">
                    ★
                  </div>
                  <div className="absolute bottom-12 -right-4 text-yellow-500 text-lg animate-pulse delay-1000">
                    ✧
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Community Section */}
      <section className="homepage-section py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          {/* In Progress Label */}
          <div className="absolute top-8 right-8 transform rotate-12">
            <div className="bg-black text-white px-6 py-2 rounded-full">
              <span className="text-white font-jua text-xl">
                in progress!!!!
              </span>
            </div>
          </div>

          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#FEC400] border-[6px] border-black rounded-2xl px-12 py-6 shadow-[4px_4px_0px_#000]">
              <h2 className="text-[#FEC400] font-jua text-5xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
                ART COMMUNITY
              </h2>
            </div>
          </div>

          {/* Comic Panel */}
          <div className="bg-[#8B625B] border-[8px] border-black rounded-3xl p-8 shadow-[8px_8px_0px_#000] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-96">
              {/* Left Panel */}
              <div className="bg-gradient-to-b from-[#A6B857] to-[#8B625B] border-[4px] border-black rounded-2xl p-6 relative overflow-hidden">
                {/* Clouds */}
                <div className="absolute top-0 left-0 right-0">
                  <div
                    className="w-full h-20 svg-container debug-image"
                    data-filename="memes-bg-cloud-1.svg"
                  >
                  </div>
                </div>

                {/* Fire decorations */}
                <div className="absolute bottom-0 left-0 right-0">
                  {[1, 2, 3, 4, 5].map((flame) => (
                    <div
                      key={flame}
                      className={`absolute bottom-0`}
                      style={{ left: `${flame * 20}%` }}
                    >
                      <div
                        className="w-10 h-[60px] svg-container debug-image"
                        data-filename={`howto-fireball-${flame <= 3 ? flame : flame % 3 || 3}.svg`}
                      >
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cat character */}
                <div className="absolute bottom-8 left-8">
                  <div className="w-16 h-20 bg-[#8B7355] rounded-2xl border-2 border-black relative">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-12 h-12 bg-[#8B7355] rounded-full border-2 border-black relative">
                        <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-pink-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Speech bubble */}
                <div className="absolute top-8 left-20 bg-[#FFF3DC] border-[3px] border-black rounded-2xl p-4 max-w-48">
                  <p className="text-black font-jua text-lg leading-tight">
                    I accidentally burned my house down. It&apos;s not fine
                  </p>
                  <div className="absolute bottom-[-8px] left-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#FFF3DC]"></div>
                  <div className="absolute bottom-[-11px] left-7 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="bg-gradient-to-b from-[#A6B857] to-[#8B625B] border-[4px] border-black rounded-2xl p-6 relative overflow-hidden">
                {/* Clouds */}
                <div className="absolute top-0 left-0 right-0">
                  <div
                    className="w-full h-20 svg-container debug-image"
                    data-filename="memes-bg-cloud-2.svg"
                  >
                  </div>
                </div>

                {/* Fire decorations */}
                <div className="absolute bottom-0 left-0 right-0">
                  {[1, 2, 3, 4, 5].map((flame) => (
                    <div
                      key={flame}
                      className={`absolute bottom-0`}
                      style={{ left: `${flame * 20}%` }}
                    >
                      <div
                        className="w-10 h-[60px] svg-container debug-image"
                        data-filename={`howto-fireball-${flame <= 3 ? flame : flame % 3 || 3}.svg`}
                      >
                      </div>
                    </div>
                  ))}
                </div>

                {/* Person character */}
                <div className="absolute bottom-8 right-8">
                  <div className="w-16 h-20 bg-[#4A4A4A] rounded-t-2xl border-2 border-black relative">
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-10 h-10 bg-[#F4C2A1] rounded-full border-2 border-black"></div>
                    </div>
                  </div>
                </div>

                {/* Speech bubble */}
                <div className="absolute top-8 right-20 bg-[#FFF3DC] border-[3px] border-black rounded-2xl p-4 max-w-52">
                  <p className="text-black font-jua text-xl leading-tight font-bold">
                    Perfect! Let&apos;s burn 69 billion tokens lol
                  </p>
                  <div className="absolute bottom-[-8px] right-8 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#FFF3DC]"></div>
                  <div className="absolute bottom-[-11px] right-7 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-black"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="homepage-section py-16 px-6 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-[#A6B857] font-jua text-6xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg stroke-black stroke-[6px]">
                HOW TO BUY?
              </h2>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-[#57B8AD] border-[8px] border-black rounded-[44px] p-8 shadow-[4px_4px_0px_#000] flex items-center">
                <div className="flex-1 text-center">
                  <span className="text-black font-jua text-4xl md:text-5xl">
                    Get a Wallet
                  </span>
                </div>
              </div>

              {/* Number circle */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 -translate-x-full">
                <div className="w-20 h-20 bg-[#FEC400] border-[6px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] transform rotate-12">
                  <span className="text-[#FF9D33] font-jua text-4xl font-bold stroke-black stroke-4">
                    1
                  </span>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-[#57B8AD] border-[8px] border-black rounded-[44px] p-8 shadow-[4px_4px_0px_#000] flex items-center">
              <div className="flex-1 text-center">
                <span className="text-black font-jua text-4xl md:text-5xl">
                  Get Some BNB
                </span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-[#57B8AD] border-[8px] border-black rounded-[44px] p-8 shadow-[4px_4px_0px_#000] flex items-center">
              <div className="flex-1 text-center">
                <span className="text-black font-jua text-4xl md:text-5xl">
                  Go to Pump.fun
                </span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative">
              <div className="bg-[#57B8AD] border-[8px] border-black rounded-[44px] p-8 shadow-[4px_4px_0px_#000] flex items-center">
                <div className="flex-1 text-center">
                  <span className="text-black font-jua text-4xl md:text-5xl">
                    Buy $NOTFINE
                  </span>
                </div>
              </div>

              {/* Number circle */}
              <div className="absolute left-16 top-1/2 transform -translate-y-1/2 -translate-x-full">
                <div className="w-20 h-20 bg-[#FEC400] border-[6px] border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_#000] transform rotate-12">
                  <span className="text-[#FF9D33] font-jua text-4xl font-bold stroke-black stroke-4">
                    4
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative fire elements */}
          <div className="absolute top-20 right-8 animate-pulse">
            <div
              className="w-10 h-[60px] svg-container debug-image"
              data-filename="howto-fireball-1.svg"
            >
            </div>
          </div>

          <div className="absolute top-40 right-16 animate-pulse delay-500">
            <div
              className="w-[30px] h-[45px] svg-container debug-image"
              data-filename="howto-fireball-2.svg"
            >
            </div>
          </div>

          <div className="absolute bottom-20 right-12 animate-pulse delay-1000">
            <div
              className="w-[35px] h-[50px] svg-container debug-image"
              data-filename="howto-fireball-3.svg"
            >
            </div>
          </div>
        </div>
      </section>

      {/* Cross-out X marks (matching Figma design) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ textDecoration: "underline" }}
      >
        {/* Red X marks scattered around */}
        <div className="absolute top-[1676px] left-[21px] w-[287px] h-[287px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute top-[2206px] left-[408px] w-[125px] h-[125px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute top-[2180px] left-[1178px] w-[125px] h-[125px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>

        <div className="absolute top-[1845px] left-[780px] w-[125px] h-[125px]">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform rotate-45 rounded-sm"></div>
            <div className="absolute inset-0 border-[20px] border-[#E90000] transform -rotate-45 rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
