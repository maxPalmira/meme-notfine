'use client';

const HeroSection = () => {
  return (
    <section 
      data-testid="hero-section"
      className="relative overflow-hidden w-full"
      style={{ 
        minHeight: '800px', 
        maxWidth: '1920px', 
        background: 'none', 
        marginLeft: 'auto', 
        marginRight: 'auto',
        marginTop: '100px'
      }}
    >
      {/* Cat Container - for flame positioning relative to cat */}
      <div 
        data-testid="cat-container"
        className="relative z-20"
        style={{
          position: 'absolute',
          left: '0',
          bottom: '0',
          width: '1000px',
          height: '760px'
        }}
      >
        {/* Cat Character */}
        <div
          id="hero-cat-container"
          className="svg-container debug-image absolute z-20"
          data-filename="cat-hero.svg"
          style={{
            position: 'absolute',
            bottom: '0',
            top: 'auto',
            width: '399px',
            height: '670px'
          }}
        >

        </div>

        {/* Flame 1 - positioned relative to cat */}
        <div
          id="hero-flame-1-container"
          className="svg-container debug-image absolute z-10"
          data-filename="hero-flame-1.svg"
          style={{
            position: 'absolute',
            left: '0px',
            bottom: '0',
            top: 'auto',
            width: '324px',
            height: '441px'
          }}
        >
        </div>

        {/* Flame 2 - positioned relative to cat */}
        <div
          id="hero-flame-2-container"
          className="svg-container debug-image absolute z-10"
          data-filename="hero-flame-2.svg"
          style={{
            position: 'absolute',
            left: '337px',
            bottom: '0',
            top: 'auto',
            width: '586px',
            height: '334px'
          }}
        >
        </div>
      </div>

      {/* Flame 3 - positioned relative to section */}
      <div
        id="hero-flame-3-container"
        className="svg-container debug-image absolute z-10"
        data-filename="hero-flame-3.svg"
        style={{
          position: 'absolute',
          left: 'auto',
          right: '0',
          bottom: '0',
          width: '444px',
          height: '276px'
        }}
      >
      </div>

      {/* Speech Bubble Container - bubble as background for text */}
      <div
        data-testid="speech-bubble-group"
        className="absolute z-30"
        style={{
          position: 'absolute',
          right: '0',   // Figma x position 
          top: '20px',      // Figma y position
          width: '1356px', // Bubble width - matches Figma
          height: '628px'  // Bubble height - matches Figma
        }}
      >
        {/* Speech Bubble as Background - fills entire container */}
        <div
          id="speech-bubble-container"
          className="svg-container debug-image absolute inset-0 w-full h-full"
          data-filename="bg-speech-bubble-1.svg"
            style={{
              position: 'absolute',
              top: '0px',
              left: '0px',
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
        >
        </div>

        {/* Text Content - centered within bubble container */}
        <div
          data-testid="speech-text-content"
          className="absolute font-jua text-black text-center flex flex-col justify-center items-center"
          style={{
            position: 'absolute',
            left: 'auto',
            top: '0',
            bottom: '0',
            right: '0',
            width: '70%',
            padding: '20px',
            fontSize: '21.27px',
            lineHeight: '1.25em'
          }}
        >
          <div className="mb-6 text-xl font-bold">
            Hello, my name is Deg!
          </div>
          
          <div className="mb-6 leading-relaxed">
            $NOTFINE is the memecoin that embraces the chaos of the crypto world! 
            Combining humor and satirical commentary on the struggles of every trader, 
            we&apos;ve created a community that finds strength in the absurd.
          </div>
          
          <div className="mb-2 text-lg font-semibold">
            THIS IS $NOTFINE
          </div>
          
          <div className="text-base">
            enjoy :)
          </div>
        </div>
      </div>

      {/* Stars - positioned relative to main section */}
      <div
        id="hero-stars-1-container"
        className="svg-container debug-image absolute z-40"
        data-filename="stars-1.svg"
        style={{
          position: 'absolute',
          left: '100px',  
          top: '0',     
          width: '152px',
          height: '144px'
        }}
      >
      </div>

      <div
        id="hero-stars-2-container"
        className="svg-container debug-image absolute z-40"
        data-filename="stars-1.svg"
        style={{
          position: 'absolute',
          right: '0px', 
          top: '0px',   
          width: '92px',
          height: '87px'
        }}
      >
      </div>

      <div
        id="hero-stars-3-container"
        className="svg-container debug-image absolute z-40"
        data-filename="stars-1.svg"
        style={{
          position: 'absolute',
          right: '0px',  
          bottom: '0px',    
          width: '92px',
          height: '87px'
        }}
      >
      </div>

    </section>
  );
};

export default HeroSection; 