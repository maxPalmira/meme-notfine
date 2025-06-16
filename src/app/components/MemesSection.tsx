'use client';

import Image from 'next/image';

const MemesSection = () => {
  return (
    <section 
      data-testid="memes-section"
      className="relative w-full overflow-hidden"
      style={{ minHeight: '600px' }}
    >
      {/* Background for Sad Cat */}
      <Image
        data-testid="memes-bg-for-sad-cat"
        src="/figma-exports/backgrounds/memes-bg-for-sad-cat.svg"
        alt="Memes Background for Sad Cat"
        width={800}
        height={600}
        className="absolute z-10 debug-image"
        data-filename="memes-bg-for-sad-cat.svg"
        style={{
          left: '100px',
          top: '50px'
        }}
      />

      {/* Cloud Background 1 */}
      <Image
        data-testid="memes-bg-cloud-1"
        src="/figma-exports/backgrounds/memes-bg-cloud-1.svg"
        alt="Memes Cloud Background 1"
        width={400}
        height={200}
        className="absolute z-10 debug-image"
        data-filename="memes-bg-cloud-1.svg"
        style={{
          left: '50px',
          top: '20px'
        }}
      />

      {/* Cloud Background 2 */}
      <Image
        data-testid="memes-bg-cloud-2"
        src="/figma-exports/backgrounds/memes-bg-cloud-2.svg"
        alt="Memes Cloud Background 2"
        width={400}
        height={200}
        className="absolute z-10 debug-image"
        data-filename="memes-bg-cloud-2.svg"
        style={{
          right: '50px',
          top: '30px'
        }}
      />

      {/* Sad Cat Character */}
      <Image
        data-testid="memes-cat-sad"
        src="/figma-exports/characters/memes-cat-sad.svg"
        alt="Memes Cat Sad Character - NOTFINE Mascot"
        width={300}
        height={400}
        className="absolute z-20 debug-image"
        data-filename="memes-cat-sad.svg"
        style={{
          left: '300px',
          top: '150px'
        }}
        priority
      />

      {/* Memes Content Area */}
      <div 
        className="absolute z-30"
        style={{
          left: '700px',
          top: '200px',
          width: '500px',
          height: '300px'
        }}
      >
        {/* Memes Title */}
        <div className="font-jua text-black text-4xl mb-8">
          When Everything Is NOT FINE
        </div>

        {/* Memes Text Content */}
        <div className="font-jua text-black text-lg leading-relaxed">
          <p className="mb-4">
            Life hits different when you're holding $NOTFINE 🐱
          </p>
          <p className="mb-4">
            Join our community of beautifully broken souls who embrace the chaos.
          </p>
          <p>
            Because sometimes being "not fine" is perfectly fine! 🔥
          </p>
        </div>
      </div>
    </section>
  );
};

export default MemesSection; 