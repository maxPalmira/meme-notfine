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
              {/* Tokenomics SVG removed */}
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
              {/* Roadmap SVG removed */}
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
              {/* Our Team SVG removed */}
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
              {/* Art Community SVG removed */}
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
              {/* How to Buy SVG removed */}
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
              {/* FAQ SVG removed */}
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
              {/* Discord SVG removed */}
            </div>
          </div>

          {/* Twitter */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-twitter"
          >
            <div className="svg-container debug-image">
              {/* Twitter SVG removed */}
            </div>
          </div>

          {/* Telegram */}
          <div
            className="w-8 h-8 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
            data-testid="social-telegram"
          >
            <div className="svg-container debug-image">
              {/* Telegram SVG removed */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderNavigation; 