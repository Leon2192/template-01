import { AnimatePresence, motion } from 'framer-motion';

function AnimatedCounter({ value, label }) {
  return (
    <div className="counter-card">
      <div className="counter-card__value">
        <AnimatePresence initial={false} mode="wait">
          <motion.span
            key={`${label}-${value}`}
            initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
          >
            {String(value).padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="counter-card__label">{label}</span>
    </div>
  );
}

export default AnimatedCounter;
