// Created: FOMO popup notification component that shows fake user purchases
// Features: Desktop corner notification and mobile-style notification
// Added: Random user address and amount generation
// Added: Auto-disappearing notifications with configurable timing

'use client';
import { useEffect, useState } from 'react';
import styles from './FomoPopup.module.css';

interface FomoNotification {
  id: string;
  address: string;
  amount: string;
}

export default function FomoPopup() {
  const [notifications, setNotifications] = useState<FomoNotification[]>([]);

  const generateRandomAddress = () => {
    const chars = '0123456789abcdef';
    let address = '0x';
    for (let i = 0; i < 8; i++) {
      address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address + '...';
  };

  const generateRandomAmount = () => {
    const amount = (Math.random() * 2).toFixed(2);
    return amount;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const newNotification = {
        id: Date.now().toString(),
        address: generateRandomAddress(),
        amount: generateRandomAmount(),
      };

      setNotifications(prev => [...prev, newNotification]);

      // Remove notification after 5 seconds
      setTimeout(() => {
        setNotifications(prev => prev.filter(n => n.id !== newNotification.id));
      }, 5000);
    }, 8000); // Create new notification every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.notificationContainer}>
      {notifications.map(notification => (
        <div key={notification.id} className={styles.notification}>
          <div className={styles.notificationContent}>
            <span className={styles.address}>{notification.address}</span>
            <span>just bought</span>
            <span className={styles.amount}>{notification.amount} BNB</span>
            <span>worth of $NOTFINE</span>
          </div>
        </div>
      ))}
    </div>
  );
} 