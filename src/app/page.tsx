// Updated: Fixed section order to match correct sequence

"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen relative">
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

      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#869241] border-[6px] border-black">
        <div className="flex items-center justify-between px-5 py-4">
          {/* Navigation Links */}
          <nav className="flex items-center gap-14">
            {/* Tokenomics */}
            <div className="bg-[#FEC400] border-[6px] border-black rounded-lg px-4 py-2 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-xl">Tokenomics</span>
            </div>

            {/* Roadmap */}
            <div className="bg-[#FEC400] border-[6px] border-black rounded-lg px-4 py-2 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-xl">Roadmap</span>
            </div>

            {/* Our Team */}
            <div className="bg-[#FEC400] border-[6px] border-black rounded-lg px-4 py-2 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-xl">Our Team</span>
            </div>

            {/* Art community */}
            <div className="bg-[#FEC400] border-[6px] border-black rounded-lg px-6 py-2 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-xl">Art community</span>
            </div>

            {/* How to buy */}
            <div className="bg-[#FEC400] border-[6px] border-black rounded-lg px-5 py-2 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-xl">How to buy</span>
            </div>

            {/* F.A.Q */}
            <div className="bg-[#FEC400] border-[6px] border-black rounded-lg px-4 py-2 hover:scale-105 transition-transform cursor-pointer">
              <span className="text-black font-jua text-xl">F.A.Q</span>
            </div>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {/* Discord */}
            <div className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Image
                src="/figma-exports/social-icons/icon-discord.svg"
                alt="Discord"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            {/* Twitter */}
            <div className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Image
                src="/figma-exports/social-icons/icon-twitter.svg"
                alt="Twitter"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>

            {/* Telegram */}
            <div className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
              <Image
                src="/figma-exports/social-icons/icon-telegram.svg"
                alt="Telegram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="homepage-section relative pt-32 pb-16 overflow-hidden">
        {/* Flame Background Pattern */}
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 1920 782"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="filter0_dg_266_10">
                <feDropShadow
                  dx="2"
                  dy="4"
                  stdDeviation="3"
                  floodOpacity="0.3"
                />
              </filter>
            </defs>
            <g filter="url(#filter0_dg_266_10)">
              <path
                d="M864.676 747C869.812 733.981 874.824 717.12 876.943 697.085C880.779 660.893 873.348 631.713 867.762 615.214C844.033 621.336 825.547 643.953 824.246 668.461L791.378 576.357C779.999 601.037 770.388 626.532 762.646 652.588C749.509 614.806 742.6 574.86 742.281 534.859C715.923 529.153 695.776 557.281 683.532 581.339C685.498 544.132 673.527 506.356 650.511 477.088C647.313 490.811 644.111 504.539 640.913 518.262C604.792 494.292 578.767 455.541 570.211 413C556.5 452.408 568.929 495.515 579.832 535.795C590.734 576.074 599.604 621.068 579.984 657.885C573.27 641.21 566.556 624.534 559.841 607.863C555.945 634.179 546.797 659.707 533.09 682.495C524.34 628.831 502.929 577.279 471.088 533.232C473.892 569.048 470.065 605.37 459.862 639.81C461.814 599.034 432.509 564.4 406.545 532.935C389.331 512.075 372.223 487.789 365.68 462.285C365.449 541.959 358.776 621.614 345.722 700.213C321.646 676.447 304.487 645.733 296.857 612.748C286.251 657.774 293.201 706.697 315.875 747H864.671H864.676Z"
                fill="#FF9D33"
              />
              <path
                d="M570.416 410.007C571.765 410.099 572.885 411.083 573.152 412.408C581.265 452.748 605.396 489.636 638.987 513.308C640.254 507.87 641.523 502.432 642.791 496.994C644.39 490.131 645.99 483.269 647.588 476.407L647.645 476.199C647.962 475.177 648.804 474.394 649.86 474.159C650.986 473.909 652.156 474.327 652.869 475.233C673.831 501.888 685.798 535.448 686.685 569.346C691.946 560.459 698.254 551.659 705.552 544.758C715.643 535.216 728.003 528.981 742.237 531.786L742.916 531.927L743.168 531.992C744.407 532.375 745.27 533.519 745.281 534.835C745.573 571.394 751.414 607.908 762.525 642.737C769.795 619.668 778.528 597.063 788.654 575.101L788.756 574.898C789.306 573.911 790.37 573.309 791.512 573.36C792.73 573.415 793.794 574.201 794.204 575.349L823.151 656.467C828.788 635.526 845.902 617.756 867.013 612.31L867.298 612.25C868.726 612.025 870.132 612.857 870.604 614.252C876.274 631.002 883.823 660.637 879.926 697.401C877.773 717.754 872.682 734.88 867.466 748.101C867.014 749.246 865.908 750 864.676 750H315.875C314.792 750 313.792 749.415 313.26 748.471C290.218 707.513 283.158 657.82 293.937 612.061L294.006 611.811C294.408 610.587 295.556 609.745 296.863 609.748C298.257 609.751 299.466 610.714 299.78 612.072C306.841 642.594 322.204 671.145 343.719 693.879C356.115 617.337 362.455 539.815 362.68 462.276L362.694 461.996C362.827 460.612 363.904 459.483 365.309 459.308C366.807 459.121 368.21 460.077 368.585 461.539C374.954 486.362 391.688 510.217 408.859 531.025L413.751 536.955C425.241 550.905 437.098 565.67 446.263 581.368C453.566 593.876 459.229 607.091 461.659 621.107C468.198 592.443 470.392 562.782 468.097 533.466C467.992 532.126 468.791 530.88 470.053 530.416C471.315 529.952 472.731 530.385 473.519 531.475C504.008 573.651 525.01 622.644 534.611 673.81C545.851 653.223 553.437 630.634 556.874 607.424L556.92 607.177C557.206 605.958 558.227 605.033 559.488 604.884C560.833 604.724 562.117 605.486 562.624 606.742C568.496 621.321 574.367 635.905 580.239 650.488C594.887 617.128 587.773 577.446 577.953 540.374L576.936 536.578C566.108 496.572 553.301 452.473 567.377 412.015L567.47 411.78C567.978 410.638 569.151 409.92 570.416 410.007Z"
                stroke="black"
                strokeWidth="6"
                strokeLinejoin="round"
              />
            </g>
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-center gap-8 lg:gap-12 px-6 max-w-7xl mx-auto">
          {/* Left Column - Cat Character with Hat */}
          <div className="flex-shrink-0 lg:w-1/2">
            <div className="relative">
              <Image
                src="/figma-exports/characters/cat-happy.svg"
                alt="Deg the Cat Character"
                width={500}
                height={500}
                className="relative z-10 w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>

          {/* Right Column - Large Speech Bubble */}
          <div className="flex-1 lg:w-1/2">
            <div className="relative">
              {/* Star Decorations */}
              <div className="absolute -top-8 -right-8 z-20">
                <div className="w-8 h-8 text-yellow-400 animate-pulse">✦</div>
              </div>
              <div className="absolute -top-4 right-16 z-20">
                <div className="w-6 h-6 text-yellow-300 animate-pulse delay-300">
                  ★
                </div>
              </div>
              <div className="absolute top-8 -right-12 z-20">
                <div className="w-10 h-10 text-yellow-500 animate-pulse delay-700">
                  ✧
                </div>
              </div>

              {/* Main Speech Bubble */}
              <div className="bg-[#FFF3DC] border-[6px] border-black rounded-3xl p-8 relative">
                {/* Speech Bubble Tail */}
                <div className="absolute left-[-20px] top-1/2 transform -translate-y-1/2">
                  <div className="w-0 h-0 border-t-[20px] border-t-transparent border-b-[20px] border-b-transparent border-r-[20px] border-r-[#FFF3DC]"></div>
                  <div className="absolute left-[-6px] top-[-26px] w-0 h-0 border-t-[26px] border-t-transparent border-b-[26px] border-b-transparent border-r-[26px] border-r-black"></div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                  {/* Header with sparkles */}
                  <div className="flex items-center gap-2 justify-center">
                    <span className="text-yellow-400 text-xl">✦</span>
                    <h2 className="text-black font-jua text-2xl md:text-3xl text-center">
                      Hello, my name is Deg!
                    </h2>
                    <span className="text-yellow-400 text-xl">✦</span>
                  </div>

                  {/* Description */}
                  <div className="text-center space-y-4">
                    <p className="text-black font-jua text-base md:text-lg leading-relaxed">
                      <span className="font-bold">$NOTFINE</span> is the
                      memecoin that embraces the chaos of the crypto world!
                      Combining humor and satirical commentary on the struggles
                      of every trader, we&apos;ve created a community that finds
                      strength in the absurd.
                    </p>
                  </div>

                  {/* Main Title */}
                  <div className="text-center">
                    <h1 className="text-black font-jua text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      THIS IS $NOTFINE
                    </h1>
                    <p className="text-black font-jua text-xl mt-2">enjoy :)</p>
                  </div>
                </div>
              </div>

              {/* Additional Star Decorations */}
              <div className="absolute -bottom-4 left-8 z-20">
                <div className="w-6 h-6 text-yellow-400 animate-pulse delay-500">
                  ✦
                </div>
              </div>
              <div className="absolute bottom-8 -left-8 z-20">
                <div className="w-8 h-8 text-yellow-300 animate-pulse delay-1000">
                  ★
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Address Section */}
      <section className="homepage-section py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Contract Address Display */}
          <div className="relative mb-8">
            <div className="bg-[#FFF3DC] border-[7px] border-black rounded-full px-8 py-6 text-center shadow-[8px_8px_0px_#000]">
              <span className="text-black font-jua text-xl md:text-2xl">
                0x71C7656EC7ab88b098defB751B7401B5f6d8976F
              </span>
            </div>
          </div>

          {/* Copy Button */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="bg-[#E85834] border-[7px] border-black rounded-full px-16 py-4 shadow-[8px_8px_0px_#000] hover:scale-105 transition-transform cursor-pointer">
                <span className="text-black font-jua text-4xl md:text-5xl">
                  copy
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  className="w-16 h-16 text-[#DB4646] transform rotate-60"
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
                  className="w-16 h-16 text-[#DB4646] transform -rotate-30"
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
                  className="w-16 h-16 text-[#DB4646] transform -rotate-30"
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
            className="absolute top-0 right-32 w-96 h-64 transform rotate-[3.769deg] opacity-80"
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
            className="absolute bottom-0 right-16 w-96 h-64 opacity-70"
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
            <div className="relative pt-24">
              <Image
                src="/figma-exports/characters/cat-sad.svg"
                alt="Sad Cat Character"
                width={400}
                height={600}
                className="w-full h-auto max-w-md mx-auto relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="homepage-section py-16 px-6 relative overflow-hidden">
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
            className="opacity-90"
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
            className="opacity-90"
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
                <div className="relative">
                  <Image
                    src="/figma-exports/characters/cat-rocket.svg"
                    alt="Cat on Rocket"
                    width={300}
                    height={400}
                    className="relative z-10"
                  />

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
