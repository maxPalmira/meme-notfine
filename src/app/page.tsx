// Updated: Fixed section order to match correct sequence

"use client";

import { useState, useEffect } from "react";
import GridOverlay from "./components/GridOverlay";
import ConfigDebugConsole from "./components/ConfigDebugConsole";
import DebugLabels from "./components/DebugLabels";
import HeaderNavigation from "./components/HeaderNavigation";
import HeroSection from "./components/HeroSection";
import CASection from "./components/CASection";
import MemesSection from "./components/MemesSection";

export default function Home() {
  // State for controlling debug features individually
  const [showGrid, setShowGrid] = useState(true);
  const [showLabels, setShowLabels] = useState(true);
  const [showBorders, setShowBorders] = useState(true);
  const [showSectionBorders, setShowSectionBorders] = useState(false);

  // Handle debug-mode class toggle
  useEffect(() => {
    if (showBorders) {
      document.body.classList.add("debug-mode");
    } else {
      document.body.classList.remove("debug-mode");
    }
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove("debug-mode");
    };
  }, [showBorders]);

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
                <svg
                  className="w-16 h-16 text-[#DB4646] transform rotate-60 debug-svg"
                  data-filename="arrow-connector"
                  fill="currentColor"
                  viewBox="0 0 71 64"
                >
                  <path
                    d="M58.6577 4.04294C61.7369 4.04294 63.6614 7.37627 62.1218 10.0429L37.0071 53.5429C35.4675 56.2096 31.6185 56.2096 30.0789 53.5429L4.96416 10.0429C3.42456 7.37627 5.34906 4.04294 8.42826 4.04294L58.6577 4.04294Z"
                    stroke="black"
                    strokeWidth="8"
                  />
                </svg>
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
                <svg
                  className="w-16 h-16 text-[#DB4646] transform -rotate-30 debug-svg"
                  data-filename="arrow-2"
                  fill="currentColor"
                  viewBox="0 0 64 71"
                >
                  <path
                    d="M4.04294 8.4282C4.04294 5.349 7.37627 3.4245 10.0429 4.9641L53.5429 30.0788C56.2096 31.6184 56.2096 35.4674 53.5429 37.007L10.0429 62.1218C7.37627 63.6614 4.04294 61.7369 4.04294 58.6577L4.04294 8.4282Z"
                    stroke="black"
                    strokeWidth="8"
                  />
                </svg>
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
                <svg
                  className="w-16 h-16 text-[#DB4646] transform -rotate-30 debug-svg"
                  data-filename="arrow-3"
                  fill="currentColor"
                  viewBox="0 0 64 71"
                >
                  <path
                    d="M4.04294 8.4282C4.04294 5.349 7.37627 3.4245 10.0429 4.9641L53.5429 30.0788C56.2096 31.6184 56.2096 35.4674 53.5429 37.007L10.0429 62.1218C7.37627 63.6614 4.04294 61.7369 4.04294 58.6577L4.04294 8.4282Z"
                    stroke="black"
                    strokeWidth="8"
                  />
                </svg>
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
            <div className="relative pt-24 debug-image" data-filename="cat-sad">
              <div
                className="w-full h-auto max-w-md mx-auto relative z-10"
                style={{ width: '400px', height: '600px' }}
              >
                <svg width="255" height="474" viewBox="0 0 255 474" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sad Cat Character" className="w-full h-full">
                  <g clipPath="url(#clip0_65_5918)">
                    <path d="M187.303 203.698C201.546 206.465 212.856 208.156 220.604 209.193C229.752 210.422 236.394 211.071 242.334 216.182C246.918 220.124 249.124 225.034 250.538 229.217C257.289 249.108 250.656 265.539 249.084 299.89C248.701 308.206 247.546 318.823 245.228 340.061C244.446 347.222 243.262 356.811 236.016 361.893C233.087 363.948 230.007 364.68 227.806 364.97C227.261 396.554 226.715 428.143 226.17 459.727C224.942 460.562 221.724 462.514 217.169 462.592C212.944 462.666 209.844 461.093 208.552 460.336C208.419 430.694 208.282 401.056 208.149 371.414C192.658 373.655 177.168 375.896 161.677 378.137C161.564 402.536 161.446 426.934 161.333 451.332C159.78 451.976 157.466 452.738 154.568 452.969C151.964 453.175 149.778 452.885 148.225 452.561C147.758 456.994 147.287 461.432 146.82 465.866C146.496 466.269 140.752 473.174 133.496 471.798C131.521 471.425 129.944 470.535 128.77 469.64C128.229 438.568 127.689 407.5 127.153 376.427C118.27 374.834 109.383 373.242 100.5 371.65C88.2175 367.791 75.9399 363.933 63.6574 360.075C63.8097 391.452 63.962 422.825 64.1143 454.202C63.6181 454.777 60.1593 458.631 54.5094 458.596C48.1814 458.557 44.6146 453.671 44.2756 453.185C44.7619 419.689 45.2483 386.188 45.7347 352.692C49.5521 345.939 53.3745 339.186 57.1919 332.433C100.564 289.519 143.931 246.611 187.303 203.698Z" fill="#FF9D33"/>
                    <path d="M180.11 54.1094C181.575 51.0178 185.883 40.8781 182.665 28.7135C181.987 26.1478 179.875 18.5492 172.982 12.2039C167.862 7.49038 162.522 5.68657 159.319 4.63967C156.287 3.65175 151.001 1.92658 144.339 2.64909C134.498 3.72056 127.964 9.45148 124.937 12.1105C118.437 17.8119 114.807 24.6782 111.879 30.2125C110.847 32.1589 110.071 33.8153 109.56 34.9506C108.15 33.2648 105.035 30.0258 100.014 28.3006C98.0927 27.642 90.4333 25.0124 85.2845 29.1214C81.7225 31.9623 81.246 36.5234 80.8677 40.1163C79.8949 49.3467 84.1004 56.4981 85.2845 58.4543C88.9545 64.5096 93.4941 67.4733 100.559 71.9608C108.626 77.0871 120.231 84.4646 135.746 83.8305C140.649 83.629 144.624 82.6853 147.203 81.9186C152.519 75.7453 159.382 68.8741 168.069 62.2732C172.215 59.1227 176.264 56.4244 180.106 54.1045L180.11 54.1094Z" fill="#FF9D33"/>
                    <path d="M196.712 50.8016C193.847 49.3419 190.246 50.3691 186.389 52.281C174.52 58.1742 146.451 81.8105 145.027 83.0147C139.789 83.5111 132.11 83.6242 123.203 81.5156C112.016 78.8615 103.9 73.8826 99.1982 70.4617C94.7863 70.963 90.3793 71.4644 85.9674 71.9608C83.7959 69.8277 80.4403 66.4707 76.446 62.234C70.4914 55.9231 64.1291 49.9956 58.2826 43.5814C55.5264 40.5538 51.6992 36.2433 46.2949 35.742C44.2363 35.5503 43.0474 36.0172 42.4922 36.2826C38.9499 37.9931 38.1049 42.8933 37.6578 45.7146C32.5237 77.9817 34.0172 83.3784 35.6484 87.3792C36.6211 89.763 38.208 93.0561 40.8463 96.6834C39.7016 97.6221 37.4957 99.7012 36.1053 103.122C34.877 106.15 34.8525 108.833 34.9458 110.278C30.7698 112.819 28.2641 115.798 26.918 117.666C26.122 118.771 20.4328 126.975 22.1425 137.857C22.6829 141.287 23.7982 143.971 24.6629 145.706C22.9532 147.067 20.7276 149.181 18.9491 152.248C9.70276 168.192 23.7491 190.526 26.235 194.478C34.9851 208.387 47.2775 215.543 54.4947 218.915C53.6742 229.591 52.6818 238.482 51.876 244.96C47.98 276.303 43.9563 286.767 39.6033 294.759C37.3483 298.897 35.162 302.077 33.7372 304.038C31.5657 304.245 26.8393 305.002 22.4029 308.501C20.1036 310.315 15.1759 314.198 15.3675 320.012C15.5296 324.888 19.2438 329.41 24.599 331.602C23.0612 334.988 19.5927 343.87 21.7347 354.933C23.0809 361.878 26.1073 366.936 28.1708 369.826C25.3114 370.509 18.7967 372.49 13.5496 378.403C11.9873 380.162 3.46815 389.761 7.4133 399.007C9.7912 404.58 16.07 408.556 21.5972 408.148C23.7048 407.991 24.2158 407.313 29.9149 404.192C41.1657 398.038 42.615 398.815 46.7321 395.079C49.1542 392.882 52.8636 389.516 53.9199 384.271C54.4112 381.819 53.7872 381.617 52.554 372.264C51.4879 364.184 51.4486 360.497 51.4633 358.757C51.4928 354.496 51.5076 352.363 52.1463 350.436C54.4013 343.609 62.2327 340.321 66.3006 338.984C69.2386 340.075 72.1717 341.171 75.1097 342.263C72.9774 345.654 70.688 350.205 69.2583 355.862C65.2984 371.551 70.7076 384.861 73.0315 389.806C70.4128 390.764 65.9764 392.809 62.1 397.099C59.8204 399.621 53.0699 407.102 55.6885 415.521C57.7274 422.078 64.414 425.877 70.01 426.575C74.8296 427.174 78.2737 425.4 84.7834 422.053C93.1896 417.728 99.4094 414.523 102.195 407.475C103.787 403.445 103.016 399.154 101.66 390.641C100.132 381.027 98.078 379.017 99.0852 373.473C100.22 367.206 104.047 363.107 105.192 361.908C109.049 357.878 114.04 355.597 123.621 353.833C136.896 351.39 141.072 353.243 153.767 352.294C160.07 351.822 171.699 350.864 184.842 345.398C191.872 342.474 201.777 338.222 210.483 328.206C212.88 325.448 218.668 318.646 221.665 308.285C223.424 302.205 224.2 294.98 221.331 278.731C217.489 256.972 210.596 238.732 203.781 224.233C200.239 216.694 195.292 207.144 188.556 196.483C190.565 196.055 193.68 195.107 196.805 192.811C202.651 188.516 204.494 182.475 205.019 180.435C207.112 177.708 209.2 174.98 211.293 172.247C210.552 172.562 206.302 174.297 201.747 172.247C198.726 170.89 197.149 168.58 196.564 167.607C197.095 165.853 197.734 163.326 198.063 160.24C198.564 155.565 198.136 151.633 196.834 144.959C195.852 139.921 194.402 133.502 192.231 126.09C196.102 118.658 198.466 112.225 199.905 107.752C199.905 107.752 208.513 80.9651 200.878 56.6947C200.342 54.9843 199.286 52.1188 196.692 50.7967L196.712 50.8016Z" fill="#957C5E"/>
                    <path d="M141.121 127.688C138.306 125.318 133.643 121.947 127.158 119.583C121.921 117.676 115.996 115.518 109.565 117.125C99.4733 119.651 92.3297 130.391 91.1359 140.752C90.9394 142.433 89.7553 154.455 98.5496 163.459C110.213 175.403 127.767 170.114 129.207 169.652C131.934 168.782 141.283 165.794 146.117 156.283C146.84 154.858 151.477 145.362 147.07 135.542C145.321 131.644 142.777 129.093 141.121 127.683V127.688Z" fill="#FFF3DC"/>
                    <path d="M64.645 115.808C61.6038 112.937 57.8257 112.515 51.4584 111.886C45.2779 111.276 42.1876 110.971 38.5077 111.945C32.0815 113.64 22.7861 119.44 21.0715 130.042C19.4993 139.783 25.1443 148.537 32.111 152.788C41.8142 158.711 52.1954 154.74 55.2857 153.56C58.4595 152.346 66.4087 149.304 69.4695 141.553C71.6755 135.974 70.3048 130.597 68.9242 125.181C67.8384 120.929 67.1358 118.162 64.645 115.813V115.808Z" fill="#FFF3DC"/>
                    <path d="M73.9748 158.269C72.3289 156.863 70.1082 156.372 66.3596 155.575C62.7191 154.804 60.9012 154.415 58.656 154.489C54.7403 154.617 48.8791 156.136 47.2529 160.22C45.7594 163.975 48.6089 167.951 52.5098 170.247C58.8673 173.987 65.4753 172.763 66.2417 172.537C66.7723 172.38 70.8157 171.126 73.8126 167.425C74.7707 166.241 76.1267 164.521 75.9793 162.378C75.8614 160.672 75.0507 159.193 73.9748 158.274V158.269Z" fill="#4F3B24"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_65_5918">
                      <rect width="255" height="474" fill="white" transform="matrix(-1 0 0 1 255 0)"/>
                    </clipPath>
                  </defs>
                </svg>
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
          <svg
            width="120"
            height="200"
            viewBox="0 0 120 200"
            fill="none"
            className="opacity-90 debug-svg"
            data-filename="flame-left"
          >
            <path
              d="M10 200C20 180 30 160 25 140C20 120 15 100 30 80C45 60 60 40 50 20C40 10 30 5 20 0C40 10 70 30 80 60C90 90 85 120 75 140C65 160 60 180 70 190C80 200 90 195 100 180C110 165 105 150 95 140C85 130 75 125 80 110C85 95 95 85 110 90C125 95 130 110 120 125C110 140 95 150 85 160C75 170 70 185 80 195C90 200 100 190 110 175L10 200Z"
              fill="#FF9D33"
              stroke="#000000"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Right Flame Decoration */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 scale-x-[-1] z-10">
          <svg
            width="120"
            height="200"
            viewBox="0 0 120 200"
            fill="none"
            className="opacity-90 debug-svg"
            data-filename="flame-right"
          >
            <path
              d="M10 200C20 180 30 160 25 140C20 120 15 100 30 80C45 60 60 40 50 20C40 10 30 5 20 0C40 10 70 30 80 60C90 90 85 120 75 140C65 160 60 180 70 190C80 200 90 195 100 180C110 165 105 150 95 140C85 130 75 125 80 110C85 95 95 85 110 90C125 95 130 110 120 125C110 140 95 150 85 160C75 170 70 185 80 195C90 200 100 190 110 175L10 200Z"
              fill="#FFC756"
              stroke="#000000"
              strokeWidth="3"
            />
          </svg>
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
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1200 400"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              {/* Main curved path */}
              <path
                d="M50 350 Q200 280 350 320 T650 250 Q800 200 950 280 T1150 200"
                stroke="black"
                strokeWidth="4"
                fill="none"
                className="drop-shadow-sm"
              />

              {/* Milestone dots */}
              <circle
                cx="50"
                cy="350"
                r="8"
                fill="black"
                className="drop-shadow-sm"
              />
              <circle
                cx="200"
                cy="300"
                r="8"
                fill="black"
                className="drop-shadow-sm"
              />
              <circle
                cx="350"
                cy="320"
                r="8"
                fill="black"
                className="drop-shadow-sm"
              />
              <circle
                cx="650"
                cy="250"
                r="8"
                fill="black"
                className="drop-shadow-sm"
              />
              <circle
                cx="950"
                cy="280"
                r="8"
                fill="black"
                className="drop-shadow-sm"
              />
              <circle
                cx="1150"
                cy="200"
                r="8"
                fill="black"
                className="drop-shadow-sm"
              />
            </svg>

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
                    className="relative z-10"
                    style={{ width: '300px', height: '400px' }}
                  >
                    <svg width="332" height="1112" viewBox="0 0 332 1112" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cat on Rocket" className="w-full h-full">
                      <g clipPath="url(#clip0_73_56313)">
                        <path d="M264.522 918.006C270.715 917.572 297.757 915.005 317.59 892.589C339.917 867.351 338.622 833.308 335.846 832.434C334.294 831.947 331.592 841.597 320.138 854.464C315.878 859.25 311.822 862.893 308.674 865.479C310.478 859.656 313.548 851.328 318.861 842.18C338.148 808.972 366.224 800.62 363.86 793.884C361.239 786.416 323.247 786.821 291.858 805.469C274.99 815.49 264.15 828.333 257.724 837.52C258.928 832.984 261.191 826.616 265.789 820.15C270.421 813.642 274.917 810.564 274.279 809.56C273.278 807.978 259.88 811.939 250.506 819.726C227.535 838.813 221.859 886.611 244.564 907.84C250.752 913.63 258.072 916.525 264.517 918.006H264.522Z" fill="#FF9D33"/>
                        <path d="M253.909 902.331C259.354 903.875 275.425 907.643 290.814 899.436C305.295 891.721 313.325 876.528 311.643 874.791C310.516 873.624 305.459 878.984 295.088 881.57C288.165 883.297 282.01 883.008 277.683 882.419C282.266 877.614 287.009 872.104 291.665 865.827C302.781 850.851 309.956 836.198 314.66 824.049C309.288 822.901 291.781 819.885 273.863 829.463C263.695 834.9 257.439 842.229 254.122 846.832C253.895 845.828 253.653 844.535 253.484 843.02C252.29 832.246 256.593 825.386 255.606 824.802C254.05 823.875 238.007 837.954 232.515 860.1C227.134 881.782 232.882 907.783 242.136 909.602C244.859 910.137 248.63 908.728 253.909 902.326V902.331Z" fill="#FF9D33"/>
                        <path d="M229.551 892.994C232.346 897.206 247.919 892.478 256.641 888.42C290.186 872.817 285.423 837.838 314.66 824.053C317.01 822.949 326.607 818.659 333.255 808.937C335.542 805.589 339.468 799.674 337.379 794.034C335.464 788.866 329.6 786.898 328.391 786.522C319.161 783.67 309.84 790.131 303.801 794.434C299.217 797.705 291.902 803.775 283.431 816.758C270.343 836.815 273.858 843.695 260.857 859.236C254.021 867.409 250.602 871.495 245.859 874.704C238.999 879.345 231.495 881.926 229.556 888.946C229.193 890.259 228.763 891.812 229.546 892.989L229.551 892.994Z" fill="#957C5E"/>
                      </g>
                      <defs>
                        <clipPath id="clip0_73_56313">
                          <rect width="364" height="1112" fill="white" transform="matrix(-1 0 0 1 364 0)"/>
                        </clipPath>
                      </defs>
                    </svg>
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
                  <svg className="w-full h-20" viewBox="0 0 400 80">
                    <path
                      d="M0,40 Q50,20 100,40 T200,40 T300,40 T400,40 L400,0 L0,0 Z"
                      fill="#666"
                      opacity="0.7"
                    />
                    <path
                      d="M0,50 Q60,30 120,50 T240,50 T360,50 T400,50 L400,10 L0,10 Z"
                      fill="#777"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                {/* Fire decorations */}
                <div className="absolute bottom-0 left-0 right-0">
                  {[1, 2, 3, 4, 5].map((flame) => (
                    <div
                      key={flame}
                      className={`absolute bottom-0`}
                      style={{ left: `${flame * 20}%` }}
                    >
                      <svg width="40" height="60" viewBox="0 0 40 60">
                        <path
                          d="M20 60 Q10 40 15 20 Q20 10 25 20 Q30 40 20 60"
                          fill="#FF9D33"
                          stroke="#000"
                          strokeWidth="2"
                        />
                      </svg>
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
                  <svg className="w-full h-20" viewBox="0 0 400 80">
                    <path
                      d="M0,40 Q50,20 100,40 T200,40 T300,40 T400,40 L400,0 L0,0 Z"
                      fill="#666"
                      opacity="0.7"
                    />
                    <path
                      d="M0,50 Q60,30 120,50 T240,50 T360,50 T400,50 L400,10 L0,10 Z"
                      fill="#777"
                      opacity="0.6"
                    />
                  </svg>
                </div>

                {/* Fire decorations */}
                <div className="absolute bottom-0 left-0 right-0">
                  {[1, 2, 3, 4, 5].map((flame) => (
                    <div
                      key={flame}
                      className={`absolute bottom-0`}
                      style={{ left: `${flame * 20}%` }}
                    >
                      <svg width="40" height="60" viewBox="0 0 40 60">
                        <path
                          d="M20 60 Q10 40 15 20 Q20 10 25 20 Q30 40 20 60"
                          fill="#FF9D33"
                          stroke="#000"
                          strokeWidth="2"
                        />
                      </svg>
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
            <svg width="40" height="60" viewBox="0 0 40 60">
              <path
                d="M20 60 Q10 40 15 20 Q20 10 25 20 Q30 40 20 60"
                fill="#FF9D33"
                stroke="#000"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="absolute top-40 right-16 animate-pulse delay-500">
            <svg width="30" height="45" viewBox="0 0 30 45">
              <path
                d="M15 45 Q8 30 12 15 Q15 8 18 15 Q22 30 15 45"
                fill="#FFC756"
                stroke="#000"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="absolute bottom-20 right-12 animate-pulse delay-1000">
            <svg width="35" height="50" viewBox="0 0 35 50">
              <path
                d="M17 50 Q9 35 13 18 Q17 10 21 18 Q26 35 17 50"
                fill="#FF9D33"
                stroke="#000"
                strokeWidth="2"
              />
            </svg>
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
