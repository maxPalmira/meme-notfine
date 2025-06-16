'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section 
      data-testid="hero-section"
      className="relative w-full overflow-hidden mx-auto"
      style={{ minHeight: '800px', maxWidth: '1920px', background: 'none' }}
    >
      {/* Cat Container - for flame positioning relative to cat */}
      <div 
        data-testid="cat-container"
        className="relative z-20"
        style={{
          position: 'absolute',
          left: '182px',
          top: '86px',
          width: '399px',
          height: '670px'
        }}
      >
        {/* Cat Character */}
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

        {/* Flame 1 - positioned relative to cat */}
        <Image
          data-testid="hero-flame-1"
          src="/figma-exports/decorations/hero-flame-1.svg"
          alt="Hero Flame 1 Decoration"
          width={324}
          height={441}
          className="absolute z-10 debug-image"
          data-filename="hero-flame-1.svg"
          style={{
            left: '0px',
            top: '280px'
          }}
        />

        {/* Flame 2 - positioned relative to cat */}
        <Image
          data-testid="hero-flame-2"
          src="/figma-exports/decorations/hero-flame-2.svg"
          alt="Hero Flame 2 Decoration"
          width={586}
          height={334}
          className="absolute z-10 debug-image"
          data-filename="hero-flame-2.svg"
          style={{
            left: '337px',
            top: '407px'
          }}
        />
      </div>

      {/* Flame 3 - positioned relative to section */}
      <Image
        data-testid="hero-flame-3"
        src="/figma-exports/decorations/hero-flame-3.svg"
        alt="Hero Flame 3 Decoration"
        width={444}
        height={276}
        className="absolute z-10 debug-image"
        data-filename="hero-flame-3.svg"
        style={{
          left: '1525px',
          top: '486px'
        }}
      />

      {/* Speech Bubble Group - positioned relative to section */}
      <div
        data-testid="speech-bubble-group"
        className="absolute z-30"
        style={{
          left: '555px',
          top: '3px',
          width: '1356px',
          height: '628px'
        }}
      >
        {/* Speech Bubble SVG - positioned relative to bubble group */}
        <Image
          data-testid="speech-bubble-svg"
          src="/figma-exports/backgrounds/bg-speech-bubble-1.svg"
          alt="Speech Bubble Background"
          width={1082}
          height={628}
          className="absolute debug-image"
          data-filename="bg-speech-bubble-1.svg"
          style={{
            left: '274px',
            top: '0px'
          }}
        />

        {/* Text Content - positioned relative to bubble group */}
        <div
          data-testid="speech-text-content"
          className="absolute font-jua text-black text-lg leading-relaxed"
          style={{
            left: '1013px',
            top: '101px',
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

        {/* Stars - positioned relative to speech bubble group */}
        <Image
          data-testid="hero-stars-1"
          src="/figma-exports/decorations/stars-1.svg"
          alt="Hero Stars 1 Decoration"
          width={152}
          height={144}
          className="absolute z-40 debug-image"
          data-filename="stars-1.svg"
          style={{
            left: '831px',
            top: '42px'
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
            left: '1814px',
            top: '374px'
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
            left: '1729px',
            top: '0px'
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection; 