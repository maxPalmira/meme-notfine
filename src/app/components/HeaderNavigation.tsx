'use client';

const HeaderNavigation = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 border-[6px] border-black"
      style={{ backgroundColor: '#869241' }}
      role="banner"
    >
      <div 
        className="flex items-center justify-between px-5 py-4"
        data-testid="header-container"
      >
        {/* Navigation Links - Inline SVGs */}
        <nav 
          className="flex items-center gap-14"
          role="navigation"
        >
          {/* Tokenomics SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-tokenomics"
            role="button"
            tabIndex={0}
          >
            <div className="svg-container debug-image">
              <svg
                width="120"
                height="40"
                viewBox="0 0 120 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto"
                role="img"
                aria-label="Tokenomics Navigation Button"
              >
                <filter id="filter0_d_1_44" x="0" y="0" width="120" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_44"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_44" result="shape"/>
                </filter>
                <g filter="url(#filter0_d_1_44)">
                  <rect x="4" y="4" width="112" height="28" rx="14" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
                  <text x="60" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000">TOKENOMICS</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Roadmap SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-roadmap"
            role="button"
            tabIndex={0}
          >
            <div className="svg-container debug-image">
              <svg
                width="100"
                height="40"
                viewBox="0 0 100 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto"
                role="img"
                aria-label="Roadmap Navigation Button"
              >
                <filter id="filter0_d_1_45" x="0" y="0" width="100" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_45"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_45" result="shape"/>
                </filter>
                <g filter="url(#filter0_d_1_45)">
                  <rect x="4" y="4" width="92" height="28" rx="14" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
                  <text x="50" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000">ROADMAP</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Our Team SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-ourteam"
            role="button"
            tabIndex={0}
          >
            <div className="svg-container debug-image">
              <svg
                width="110"
                height="40"
                viewBox="0 0 110 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto"
                role="img"
                aria-label="Our Team Navigation Button"
              >
                <filter id="filter0_d_1_46" x="0" y="0" width="110" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_46"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_46" result="shape"/>
                </filter>
                <g filter="url(#filter0_d_1_46)">
                  <rect x="4" y="4" width="102" height="28" rx="14" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
                  <text x="55" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000">OUR TEAM</text>
                </g>
              </svg>
            </div>
          </div>

          {/* Art community SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-artcommunity"
            role="button"
            tabIndex={0}
          >
            <div className="svg-container debug-image">
              <svg
                width="130"
                height="40"
                viewBox="0 0 130 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto"
                role="img"
                aria-label="Art Community Navigation Button"
              >
                <filter id="filter0_d_1_47" x="0" y="0" width="130" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_47"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_47" result="shape"/>
                </filter>
                <g filter="url(#filter0_d_1_47)">
                  <rect x="4" y="4" width="122" height="28" rx="14" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
                  <text x="65" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000">ART COMMUNITY</text>
                </g>
              </svg>
            </div>
          </div>

          {/* How to buy SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-howtobuy"
            role="button"
            tabIndex={0}
          >
            <div className="svg-container debug-image">
              <svg
                width="115"
                height="40"
                viewBox="0 0 115 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto"
                role="img"
                aria-label="How to Buy Navigation Button"
              >
                <filter id="filter0_d_1_48" x="0" y="0" width="115" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_48"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_48" result="shape"/>
                </filter>
                <g filter="url(#filter0_d_1_48)">
                  <rect x="4" y="4" width="107" height="28" rx="14" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
                  <text x="57.5" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000">HOW TO BUY</text>
                </g>
              </svg>
            </div>
          </div>

          {/* F.A.Q SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-faq"
            role="button"
            tabIndex={0}
          >
            <div className="svg-container debug-image">
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-auto"
                role="img"
                aria-label="FAQ Navigation Button"
              >
                <filter id="filter0_d_1_49" x="0" y="0" width="80" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dy="4"/>
                  <feGaussianBlur stdDeviation="2"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_49"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_49" result="shape"/>
                </filter>
                <g filter="url(#filter0_d_1_49)">
                  <rect x="4" y="4" width="72" height="28" rx="14" fill="#FFFF00" stroke="#000000" strokeWidth="2"/>
                  <text x="40" y="22" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="#000000">F.A.Q</text>
                </g>
              </svg>
            </div>
          </div>
        </nav>

        {/* Social Icons */}
        <div 
          className="flex items-center gap-4"
          data-testid="social-icons"
        >
          {/* Discord - Inline SVG */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-discord"
          >
            <div className="svg-container debug-image">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                role="img"
                aria-label="Discord Social Icon"
              >
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" fill="#5865F2"/>
              </svg>
            </div>
          </div>

          {/* Twitter */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-twitter"
          >
            <div className="svg-container debug-image">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                role="img"
                aria-label="Twitter Social Icon"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932L18.901 1.153ZM17.61 20.644h2.039L6.486 3.24H4.298L17.61 20.644Z" fill="#000"/>
              </svg>
            </div>
          </div>

          {/* Telegram */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-telegram"
          >
            <div className="svg-container debug-image">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                role="img"
                aria-label="Telegram Social Icon"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.820 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" fill="#0088cc"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation; 