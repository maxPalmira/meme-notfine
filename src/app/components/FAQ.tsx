// Created: FAQ accordion component with dummy questions
// Features: Expandable/collapsible sections
// Added: Smooth animations and transitions
// Added: Keyboard accessibility

'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is $NOTFINE?",
    answer: "$NOTFINE is a community-driven meme token that embraces the chaotic nature of cryptocurrency trading. It's designed to bring humor and light-heartedness to the crypto space while building a strong community.",
  },
  {
    question: "Is $NOTFINE safe?",
    answer: "Like all cryptocurrency investments, $NOTFINE carries inherent risks. Always do your own research (DYOR) and never invest more than you can afford to lose. The contract has been developed with security in mind, but no investment is without risk.",
  },
  {
    question: "Where can I buy $NOTFINE?",
    answer: "You can buy $NOTFINE on Pump.fun by connecting your wallet and swapping BNB for $NOTFINE. Make sure to have enough BNB in your wallet to cover both the purchase amount and transaction fees.",
  },
  {
    question: "What are the tokenomics?",
    answer: "The total supply is 1 trillion tokens, with 40% burned forever. There is a 2% buy tax and 2% sell tax which helps maintain the project's sustainability and rewards holders.",
  },
  {
    question: "How can I join the community?",
    answer: "You can join our vibrant community through our social media channels: Twitter, Telegram, and Discord. Follow us to stay updated on the latest news and participate in community events.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqContainer}>
      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`${styles.faqItem} ${openIndex === index ? styles.active : ''}`}
        >
          <button
            className={styles.faqQuestion}
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
          >
            {item.question}
            <span className={styles.icon}>
              {openIndex === index ? '−' : '+'}
            </span>
          </button>
          <div
            className={styles.faqAnswer}
            style={{
              maxHeight: openIndex === index ? '1000px' : '0',
            }}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 