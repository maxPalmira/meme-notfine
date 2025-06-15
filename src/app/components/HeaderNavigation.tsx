'use client';

import Image from 'next/image';

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
        {/* Navigation Links - SVG Images */}
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
            <Image
              src="/figma-exports/ui-elements/nav-tokenomics.svg"
              alt="Tokenomics Navigation Button"
              width={120}
              height={40}
              className="h-auto debug-image"
              data-filename="nav-tokenomics.svg"
            />
          </div>

          {/* Roadmap SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-roadmap"
            role="button"
            tabIndex={0}
          >
            <Image
              src="/figma-exports/ui-elements/nav-roadmap.svg"
              alt="Roadmap Navigation Button"
              width={100}
              height={40}
              className="h-auto debug-image"
              data-filename="nav-roadmap.svg"
            />
          </div>

          {/* Our Team SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-ourteam"
            role="button"
            tabIndex={0}
          >
            <Image
              src="/figma-exports/ui-elements/nav-ourteam.svg"
              alt="Our Team Navigation Button"
              width={110}
              height={40}
              className="h-auto debug-image"
              data-filename="nav-ourteam.svg"
            />
          </div>

          {/* Art community SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-artcommunity"
            role="button"
            tabIndex={0}
          >
            <Image
              src="/figma-exports/ui-elements/nav-artcommunity.svg"
              alt="Art Community Navigation Button"
              width={130}
              height={40}
              className="h-auto debug-image"
              data-filename="nav-artcommunity.svg"
            />
          </div>

          {/* How to buy SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-howtobuy"
            role="button"
            tabIndex={0}
          >
            <Image
              src="/figma-exports/ui-elements/nav-howtobuy.svg"
              alt="How to Buy Navigation Button"
              width={115}
              height={40}
              className="h-auto debug-image"
              data-filename="nav-howtobuy.svg"
            />
          </div>

          {/* F.A.Q SVG */}
          <div 
            className="hover:scale-105 transition-transform cursor-pointer"
            data-testid="nav-faq"
            role="button"
            tabIndex={0}
          >
            <Image
              src="/figma-exports/ui-elements/nav-faq.svg"
              alt="FAQ Navigation Button"
              width={80}
              height={40}
              className="h-auto debug-image"
              data-filename="nav-faq.svg"
            />
          </div>
        </nav>

        {/* Social Icons */}
        <div 
          className="flex items-center gap-4"
          data-testid="social-icons"
        >
          {/* Discord - Fixed single SVG implementation */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-discord"
          >
            <Image
              src="/figma-exports/social-icons/discord.svg"
              alt="Discord Social Icon"
              width={24}
              height={24}
              className="w-6 h-6 debug-image"
              data-filename="discord.svg"
            />
          </div>

          {/* Twitter */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-twitter"
          >
            <Image
              src="/figma-exports/social-icons/twitter.svg"
              alt="Twitter Social Icon"
              width={24}
              height={24}
              className="w-6 h-6 debug-image"
              data-filename="twitter.svg"
            />
          </div>

          {/* Telegram */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-telegram"
          >
            <Image
              src="/figma-exports/social-icons/telegram.svg"
              alt="Telegram Social Icon"
              width={24}
              height={24}
              className="w-6 h-6 debug-image"
              data-filename="telegram.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation; 