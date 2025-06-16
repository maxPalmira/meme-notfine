'use client';

import Image from 'next/image';

const MemesSection = () => {
  const memeButtons = [
    'chart down — not fine',
    'got rugged — not fine', 
    'wallet drained — not fine',
    'dev ghosted — not fine'
  ];

  return (
    <section 
      data-testid="memes-section"
      className="py-8 px-4 relative overflow-hidden"
      style={{ maxWidth: '1920px', background: 'none', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <div className="w-full max-w-7xl mx-auto relative min-h-[600px]">
        {/* Background Cloud 1 - Positioned responsively */}
      <Image
        data-testid="memes-bg-cloud-1"
        src="/figma-exports/backgrounds/memes-bg-cloud-1.svg"
        alt="Memes Cloud Background 1"
        width={400}
        height={200}
          className="absolute z-10 debug-image left-4 top-4 sm:left-8 sm:top-8"
        data-filename="memes-bg-cloud-1.svg"
      />

        {/* Background Cloud 2 - Positioned responsively */}
      <Image
        data-testid="memes-bg-cloud-2"
        src="/figma-exports/backgrounds/memes-bg-cloud-2.svg"
        alt="Memes Cloud Background 2"
        width={400}
        height={200}
          className="absolute z-10 debug-image right-4 top-8 sm:right-8 sm:top-12"
        data-filename="memes-bg-cloud-2.svg"
        />

        {/* Background for Sad Cat - Positioned responsively */}
        <Image
          data-testid="memes-bg-for-sad-cat"
          src="/figma-exports/backgrounds/memes-bg-for-sad-cat.svg"
          alt="Memes Background for Sad Cat"
          width={800}
          height={600}
          className="absolute z-10 debug-image left-1/2 top-12 transform -translate-x-1/2 sm:left-20 sm:top-16 sm:transform-none"
          data-filename="memes-bg-for-sad-cat.svg"
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[500px]">
          {/* Left side - Cat Character */}
          <div className="relative flex justify-center lg:justify-start">
      <Image
        data-testid="memes-cat-sad"
        src="/figma-exports/characters/memes-cat-sad.svg"
        alt="Memes Cat Sad Character - NOTFINE Mascot"
        width={300}
        height={400}
              className="z-20 debug-image"
        data-filename="memes-cat-sad.svg"
        priority
      />
          </div>

          {/* Right side - Content */}
          <div className="z-30 space-y-6">
            {/* Title */}
            <div className="text-center lg:text-left">
              <h2 className="font-jua text-black text-3xl sm:text-4xl md:text-5xl uppercase">
                whats wrong, deg?
              </h2>
        </div>

            {/* Meme Buttons Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {memeButtons.map((buttonText, index) => (
                <button
                  key={index}
                  className="bg-orange border-black border-4 rounded-66 px-4 py-6 sm:px-6 sm:py-8 font-jua text-sm sm:text-base md:text-lg text-black uppercase text-center hover:shadow-lg transition-shadow"
                >
                  {buttonText}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemesSection; 