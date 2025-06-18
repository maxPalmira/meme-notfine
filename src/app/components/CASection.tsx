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
    } catch {
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
      className="py-8 px-4 relative flex flex-col items-center justify-center overflow-hidden"
      style={{ maxWidth: '1920px', background: 'none', marginLeft: 'auto', marginRight: 'auto' }}
    >
      <div className="w-full max-w-6xl relative">
        {/* CA Button (Contract Address Display) */}
        <div 
          data-testid="ca-button"
          className="bg-cream border-black border-7 rounded-40 cursor-pointer hover:opacity-90 transition-opacity p-6 mb-4 w-full"
          onClick={handleCopy}
          onKeyDown={handleKeyDown}
          role="button"
          tabIndex={0}
          aria-label="Click to copy contract address"
        >
          <div 
            className="font-jua text-xl md:text-2xl text-black cursor-pointer select-none text-center break-all"
          >
            {contractAddress}
          </div>
        </div>

        {/* Copy Button */}
        <div className="flex justify-center">
          <button
            className="bg-red-primary border-black border-7 rounded-40 shadow-custom hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300 px-8 py-4"
            onClick={handleCopy}
            aria-label="Copy contract address to clipboard"
          >
            <span className="font-jua text-4xl md:text-6xl text-black select-none">
              copy
            </span>
          </button>
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