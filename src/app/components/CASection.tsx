'use client';

import { useState } from 'react';

const CASection = () => {
  const contractAddress = '0x71C7656EC7ab88b098defB751B7401B5f6d8976F';
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (error) {
      // Image failed to load, use fallback
      console.warn('Failed to load CA section image, using fallback');
      setCopyStatus('error');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCopy();
    }
  };

  return (
    <section 
      data-testid="ca-section"
      className="w-full py-8 px-4 relative flex flex-col items-center justify-center overflow-hidden"
      style={{ maxWidth: '1920px', background: 'none', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <div className="w-full max-w-6xl relative">
        {/* CA Address Container (with background SVG) */}
        <div 
          data-testid="ca-button"
          className="relative bg-cream border-black border-7 rounded-40 hover:opacity-90 transition-opacity p-6 mb-4 w-full"
          role="button"
          tabIndex={0}
          aria-label="Click to copy contract address"
        >
          {/* Background SVG Container */}
          <div className="svg-container debug-image absolute inset-0 w-full h-full pointer-events-none">
            {/* CA address background SVG removed */}
          </div>
          
          {/* Contract Address Text */}
          <div 
            className="relative z-10 font-jua text-xl md:text-2xl text-black cursor-pointer select-none text-center break-all"
            onClick={handleCopy}
            onKeyDown={handleKeyDown}
          >
            {contractAddress}
          </div>
        </div>

        {/* Copy Button */}
        <div className="flex justify-center">
          <div
            className="bg-red-primary border-black border-7 rounded-40 shadow-custom cursor-pointer hover:opacity-90 transition-opacity p-4"
            onClick={handleCopy}
            onKeyDown={handleKeyDown}
            role="button"
            tabIndex={0}
            aria-label="Copy contract address to clipboard"
          >
            {/* Copy Button SVG Container */}
            <div className="svg-container debug-image">
              {/* Copy button SVG removed */}
            </div>
            
            {/* Copy Button Text */}
            <div className="font-jua text-4xl md:text-6xl text-black text-center">
              copy
            </div>
          </div>
        </div>

        {/* Copy Status Feedback */}
        {copyStatus !== 'idle' && (
          <div 
            className={`absolute top-[-40px] left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg font-jua text-sm ${
              copyStatus === 'copied' 
                ? 'bg-green-100 text-green-800 border border-green-300' 
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}
          >
            {copyStatus === 'copied' ? 'Copied to clipboard!' : 'Error copying address'}
          </div>
        )}
      </div>
    </section>
  );
};

export default CASection; 