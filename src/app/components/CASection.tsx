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
      className="relative mx-auto flex flex-col items-center justify-center max-w-full overflow-hidden"
      style={{ width: '1467px', height: '219px' }}
    >
      {/* CA Button (Contract Address Display) */}
      <div 
        data-testid="ca-button"
        className="bg-cream border-black border-7 rounded-40 cursor-pointer hover:opacity-90 transition-opacity"
        style={{ width: '1467px', height: '80px' }}
        onClick={handleCopy}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Click to copy contract address"
      >
        <div 
          className="font-jua text-2xl text-black cursor-pointer select-none flex items-center"
          style={{ 
            position: 'absolute',
            left: '453px',
            top: '27px'
          }}
        >
          {contractAddress}
        </div>
      </div>

      {/* Copy Button */}
      <button
        className="bg-red-primary border-black border-7 rounded-40 shadow-custom hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-red-300"
        style={{ 
          width: '378px', 
          height: '80px',
          position: 'absolute',
          left: '555px',
          top: '139px'
        }}
        onClick={handleCopy}
        aria-label="Copy contract address to clipboard"
      >
        <span 
          className="font-jua text-6xl text-black select-none"
          style={{
            position: 'absolute',
            left: '124px',
            top: '-3px'
          }}
        >
          copy
        </span>
      </button>

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
    </section>
  );
};

export default CASection; 