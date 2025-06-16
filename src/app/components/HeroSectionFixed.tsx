'use client';

import Image from 'next/image';

// Fixed positioning version - exact Figma coordinates
// Use this when you need pixel-perfect alignment matching Figma
const HeroSectionFixed = () => {
  return (
    <section 
      data-testid="hero-section"
      className="relative overflow-hidden w-full"
      style={{ 
        minHeight: '800px', 
        maxWidth: '1920px', 
        background: 'none', 
        marginLeft: 'auto', 
        marginRight: 'auto' 
      }}
    >
      {/* 
        Strategy: Use exact Figma coordinates for pixel-perfect positioning
        Each element positioned using the inspector values from Figma
      */}
      
      {/* Cat Character - Primary focal point */}
      <div 
        data-testid="cat-container"
        className="absolute z-20"
        style={{
          position: 'absolute',
          left: '182px',  // Exact Figma X coordinate
          top: '86px',    // Exact Figma Y coordinate
          width: '399px', // Exact Figma width
          height: '670px' // Exact Figma height
        }}
      >
        <Image
          data-testid="hero-cat"
          src="/figma-exports/characters/cat-hero.svg"
          alt="Cat Hero Character - NOTFINE Mascot"
          width={399}
          height={670}
          className="absolute top-0 left-0 z-20 debug-image"
          data-filename="cat-hero.svg"
          priority
        />
      </div>

      {/* Flame Elements - Positioned using exact Figma coordinates */}
      {/* 
        Note: These coordinates should match exactly what you see in Figma inspector
        If elements look misaligned, double-check Figma X,Y values
      */}
      <Image
        data-testid="hero-flame-1"
        src="/figma-exports/decorations/hero-flame-1.svg"
        alt="Hero Flame 1 Decoration"
        width={324}
        height={441}
        className="absolute z-10 debug-image"
        data-filename="hero-flame-1.svg"
        style={{
          position: 'absolute',
          left: '182px',  // Figma X coordinate
          top: '366px',   // Figma Y coordinate (86 + 280)
          width: '324px',
          height: '441px'
        }}
      />

      <Image
        data-testid="hero-flame-2"
        src="/figma-exports/decorations/hero-flame-2.svg"
        alt="Hero Flame 2 Decoration"
        width={586}
        height={334}
        className="absolute z-10 debug-image"
        data-filename="hero-flame-2.svg"
        style={{
          position: 'absolute',
          left: '519px',  // Figma X coordinate (182 + 337)
          top: '493px',   // Figma Y coordinate (86 + 407)
          width: '586px',
          height: '334px'
        }}
      />

      <Image
        data-testid="hero-flame-3"
        src="/figma-exports/decorations/hero-flame-3.svg"
        alt="Hero Flame 3 Decoration"
        width={444}
        height={276}
        className="absolute z-10 debug-image"
        data-filename="hero-flame-3.svg"
        style={{
          position: 'absolute',
          left: '1525px',  // Exact Figma X coordinate
          top: '486px',    // Exact Figma Y coordinate
          width: '444px',
          height: '276px'
        }}
      />

      {/* Speech Bubble Group - Container for bubble and text */}
      <div
        data-testid="speech-bubble-group"
        className="absolute z-30"
        style={{
          position: 'absolute',
          left: '555px',  // Figma X coordinate for bubble group
          top: '3px',     // Figma Y coordinate for bubble group
          width: '1356px', // Total width needed for bubble + content
          height: '628px'  // Total height needed
        }}
      >
        {/* Speech Bubble Background - Positioned within group */}
        <Image
          data-testid="speech-bubble-svg"
          src="/figma-exports/backgrounds/bg-speech-bubble-1.svg"
          alt="Speech Bubble Background"
          width={1082}
          height={628}
          className="absolute debug-image"
          data-filename="bg-speech-bubble-1.svg"
          style={{
            position: 'absolute',
            left: '274px',  // Relative to bubble group
            top: '0px',     // Relative to bubble group
            width: '1082px',
            height: '628px'
          }}
        />

        {/* Text Content - Positioned within bubble group */}
        <div
          data-testid="speech-text-content"
          className="absolute font-jua text-black text-lg leading-relaxed"
          style={{
            position: 'absolute',
            left: '1013px',  // Relative to bubble group (458 + 555)
            top: '101px',    // Relative to bubble group
            width: '771px',
            height: '481px'
          }}
        >
          <p className="mb-4">
            Hello, my name is Deg! $NOTFINE is the memecoin for those who embrace being "not fine" - the perfect coin for our imperfect world.
          </p>
          <p className="mb-4">
            Born from the chaos of internet culture, $NOTFINE represents everyone who's tired of pretending everything is perfect.
          </p>
          <p>
            Join our community of beautifully broken souls and let's make "not fine" the new fine! 🔥
          </p>
        </div>

        {/* Star Decorations - Positioned relative to bubble group */}
        <Image
          data-testid="hero-stars-1"
          src="/figma-exports/decorations/stars-1.svg"
          alt="Hero Stars 1 Decoration"
          width={152}
          height={144}
          className="absolute z-40 debug-image"
          data-filename="stars-1.svg"
          style={{
            position: 'absolute',
            left: '831px',   // Relative to bubble group
            top: '42px',     // Relative to bubble group
            width: '152px',
            height: '144px'
          }}
        />

        <Image
          data-testid="hero-stars-2"
          src="/figma-exports/decorations/stars-1.svg"
          alt="Hero Stars 2 Decoration"
          width={92}
          height={87}
          className="absolute z-40 debug-image"
          data-filename="stars-1.svg"
          style={{
            position: 'absolute',
            left: '1814px',  // Relative to bubble group
            top: '374px',    // Relative to bubble group
            width: '92px',
            height: '87px'
          }}
        />

        <Image
          data-testid="hero-stars-2-duplicate"
          src="/figma-exports/decorations/stars-1.svg"
          alt="Hero Stars 2 Duplicate Decoration"
          width={178}
          height={169}
          className="absolute z-40 debug-image"
          data-filename="stars-1.svg"
          style={{
            position: 'absolute',
            left: '1729px',  // Relative to bubble group
            top: '0px',      // Relative to bubble group
            width: '178px',
            height: '169px'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSectionFixed; 