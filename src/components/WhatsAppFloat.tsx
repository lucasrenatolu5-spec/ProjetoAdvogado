import { motion } from 'framer-motion'
import { whatsappBounce } from '../assets/variants'
import { WHATSAPP_URL } from '../data'
import styles from './WhatsAppFloat.module.css'

export function WhatsAppFloat() {
  return (
    <motion.div
      className={styles.wrapper}
      variants={whatsappBounce}
      initial="hidden"
      animate="visible"
    >
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btn}
        aria-label="Falar no WhatsApp"
        whileHover={{
          scale: 1.12,
          boxShadow: '0 14px 44px rgba(37,211,102,0.60)',
        }}
        whileTap={{ scale: 0.95 }}
      >
        <span className={styles.icon}>💬</span>

        {/* Pulsing red dot */}
        <motion.span
          className={styles.dot}
          animate={{
            scale: [1, 1.7, 1],
            opacity: [1, 0.35, 1],
          }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.a>

      {/* Tooltip */}
      <div className={styles.tooltip}>Falar no WhatsApp</div>
    </motion.div>
  )
}
