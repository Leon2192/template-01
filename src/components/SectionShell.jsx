import { motion } from 'framer-motion';

const viewportConfig = { once: true, amount: 0.3 };

function SectionShell({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`section-shell ${className}`.trim()}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportConfig}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  );
}

export default SectionShell;
