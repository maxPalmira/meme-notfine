'use client';

// Created: How to Buy component with step-by-step instructions
// Features: SVG arrows between steps
// Added: Uniform section title styling
// Added: Mobile optimizations
// Added: Left-aligned step numbers

import ArrowDown from './ArrowDown';
import config from '../config';

export default function HowToBuy() {
  return (
    <section id="how-to-buy" className="how-to-buy-section">
      <h2 className="section-title">
        {config.content.howToBuy.title}
      </h2>
      <div className="steps-container">
        {config.content.howToBuy.steps.map((step, i) => (
          <div className="step" key={i}>
            <div className="step-left">
              <div className="step-number">{i + 1}</div>
            </div>
            <div className="step-content">
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
            {i < config.content.howToBuy.steps.length - 1 && (
              <div className="step-arrow">
                <ArrowDown />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 