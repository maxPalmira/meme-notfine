'use client';

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
        <div
          data-testid="memes-bg-cloud-1"
          className="absolute z-10 debug-image left-4 top-4 sm:left-8 sm:top-8"
          style={{ width: '400px', height: '200px' }}
        >
          <div className="svg-container debug-image">
            {/* Memes Cloud Background 1 SVG removed */}
          </div>
        </div>

        {/* Background Cloud 2 - Positioned responsively */}
        <div
          data-testid="memes-bg-cloud-2"
          className="absolute z-10 debug-image right-8 top-12 sm:right-12 sm:top-16"
          style={{ width: '350px', height: '180px' }}
        >
          <div className="svg-container debug-image">
            {/* Memes Cloud Background 2 SVG removed */}
          </div>
        </div>

        {/* Background for sad cat */}
        <div
          data-testid="memes-bg-for-sad-cat"
          className="absolute z-20 debug-image left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '600px', height: '300px' }}
        >
          <div className="svg-container debug-image">
            {/* Background for Sad Cat SVG removed */}
          </div>
        </div>

        {/* Sad Cat Character - Main character centered */}
        <div
          data-testid="memes-cat-sad"
          className="absolute z-30 debug-image left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{ width: '300px', height: '550px' }}
        >
          <div className="svg-container debug-image">
            {/* Sad Cat Character SVG removed */}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-40 flex flex-col lg:flex-row items-center justify-between h-full min-h-[600px] pt-24">
          {/* Left content */}
          <div className="flex-1 max-w-md lg:max-w-lg">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-8 leading-tight">
              The most <span className="text-yellow-400">not fine</span><br />
              crypto experience
            </h2>
            
            {/* Meme buttons */}
            <div className="grid grid-cols-1 gap-3">
              {memeButtons.map((text, index) => (
                <button
                  key={index}
                  className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold py-3 px-6 rounded-lg border-2 border-black shadow-lg transform hover:scale-105 transition-all duration-200 text-left"
                >
                  {text}
                </button>
              ))}
            </div>
          </div>

          {/* Right content - space for the character */}
          <div className="flex-1 relative min-h-[400px] lg:min-h-[500px]">
            {/* This area is intentionally left for the absolutely positioned character */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MemesSection; 