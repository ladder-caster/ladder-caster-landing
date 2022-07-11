import { motion, AnimatePresence } from 'framer-motion';
import useCountdown from '../../shared/countdown/countdown';
import styles from '../../styles/Countdown.module.css';
import { useMemo } from 'react';

const Countdown = () => {
  const now = new Date();
  const endDate = new Date(1649440800 * 1000);
  const dif = (endDate.getTime() - now.getTime()) / 1000;

  const countdown = useCountdown({
    seconds: dif,
    onCompleted: () => {},
  });

  const { day, hour, minute, second } = useMemo(() => {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      second: 0,
    };
  }, [countdown]);

  return (
    <div className={styles.countdown}>
      <div>
        <section className={styles.time}>
          <AnimatePresence>
            <motion.div
              key={`day${day}`}
              exit={{ y: 75, opacity: 0, position: 'absolute' }}
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 1,
              }}
            >
              {day}
            </motion.div>
          </AnimatePresence>
        </section>
        <span>days</span>
      </div>
      <div>
        <section className={styles.time}>
          <AnimatePresence>
            <motion.div
              key={`hour${hour}`}
              exit={{ y: 75, opacity: 0, position: 'absolute' }}
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 1,
              }}
            >
              {hour}
            </motion.div>
          </AnimatePresence>
        </section>
        <span>hours</span>
      </div>
      <div>
        <section className={styles.time}>
          <AnimatePresence>
            <motion.div
              key={`minute${minute}`}
              exit={{ y: 75, opacity: 0, position: 'absolute' }}
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeOut',
                duration: 1,
              }}
            >
              {minute}
            </motion.div>
          </AnimatePresence>
        </section>
        <span>minutes</span>
      </div>
      <div>
        <section className={styles.time}>
          <AnimatePresence>
            <motion.div
              key={`second${second}`}
              exit={{ y: 75, opacity: 0, position: 'absolute' }}
              initial={{ y: -150, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                ease: 'easeInOut',
                duration: 1,
              }}
            >
              {second}
            </motion.div>
          </AnimatePresence>
        </section>
        <span>seconds</span>
      </div>
    </div>
  );
};

export default Countdown;
