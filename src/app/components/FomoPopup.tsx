// Performance optimized FOMO popup notification component
// Fixed: Reduced notification frequency to improve performance
// Fixed: Limited maximum concurrent notifications to prevent DOM bloat
// Fixed: Using more efficient state management with useCallback
// Added: Configurable limits to prevent memory leaks

'use client';
import { useEffect, useState, useCallback } from 'react';
import styles from './FomoPopup.module.css';

interface FomoNotification {
  id: string;
  address: string;
  amount: string;
}

const MAX_NOTIFICATIONS = 3; // Limit concurrent notifications
const NOTIFICATION_INTERVAL = 15000; // Increased from 8000ms to 15000ms
const NOTIFICATION_DURATION = 5000;

export default function FomoPopup() {
  const [notifications, setNotifications] = useState<FomoNotification[]>([]);

  const generateRandomAddress = useCallback(() => {
    const chars = '0123456789abcdef';
    let address = '0x';
    for (let i = 0; i < 8; i++) {
      address += chars[Math.floor(Math.random() * chars.length)];
    }
    return address + '...';
  }, []);

  const generateRandomAmount = useCallback(() => {
    const amount = (Math.random() * 2).toFixed(2);
    return amount;
  }, []);

  const removeNotification = useCallback((id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  }, []);

  const addNotification = useCallback(() => {
    // Only add notification if we haven't reached the limit
    setNotifications(prev => {
      if (prev.length >= MAX_NOTIFICATIONS) {
        return prev; // Don't add more if at limit
      }
      
      const newNotification = {
        id: Date.now().toString(),
        address: generateRandomAddress(),
        amount: generateRandomAmount(),
      };

      // Schedule removal
      setTimeout(() => {
        removeNotification(newNotification.id);
      }, NOTIFICATION_DURATION);

      return [...prev, newNotification];
    });
  }, [generateRandomAddress, generateRandomAmount, removeNotification]);

  useEffect(() => {
    const interval = setInterval(addNotification, NOTIFICATION_INTERVAL);
    return () => clearInterval(interval);
  }, [addNotification]);

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