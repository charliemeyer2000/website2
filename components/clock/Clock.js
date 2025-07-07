import { useState, useEffect } from 'react';
import styles from './Clock.module.scss';

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = time.getHours() % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  return (
    <div 
      className={styles.clock}
      style={{
        '--now-h': hours,
        '--now-m': minutes,
        '--now-s': seconds,
      }}
    >
      <div className={styles.second}></div>
      <div className={styles.minute}></div>
      <div className={styles.hour}></div>
    </div>
  );
}