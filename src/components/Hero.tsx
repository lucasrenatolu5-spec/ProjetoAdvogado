import { motion } from 'framer-motion'
import { fadeUp, slideInRight } from '../assets/variants'
import { WHATSAPP_URL } from '../data'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      {/* Background decorative glow */}
      <div className={styles.glowOrb} />

      <div className={styles.inner}>
        {/* ── Left column ── */}
        <div className={styles.left}>
          <motion.div
            className={styles.badge}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            ✓ OAB ATIVA | +15 ANOS DE EXPERIÊNCIA
          </motion.div>

          <motion.h1
            className={styles.title}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Seus Direitos,
          </motion.h1>
          <motion.h1
            className={`${styles.title} ${styles.titleGold}`}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1.5}
          >
            Nossa Prioridade
          </motion.h1>

          <motion.p
            className={styles.subtitle}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Defendemos seus interesses com excelência, ética e resultados que
            transformam vidas. Você merece um advogado que realmente se importa.
          </motion.p>

          <motion.div
            className={styles.buttons}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.8}
          >
            <motion.a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnWhatsapp}
              whileHover={{ scale: 1.04, boxShadow: '0 10px 36px rgba(37,211,102,0.5)' }}
              whileTap={{ scale: 0.97 }}
            >
              <span>💬</span> Falar no WhatsApp
            </motion.a>
            <motion.a
              href="#contato"
              className={styles.btnOutline}
              whileHover={{ background: 'rgba(255,255,255,0.12)' }}
              whileTap={{ scale: 0.97 }}
            >
              Agendar Consulta
            </motion.a>
          </motion.div>
        </div>

        {/* ── Right column — Photo card ── */}
        <motion.div
          className={styles.photoCard}
          variants={slideInRight}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className={styles.photoFrame}
            animate={{
              boxShadow: [
                '0 0 30px rgba(245,166,35,0.25)',
                '0 0 64px rgba(245,166,35,0.55)',
                '0 0 30px rgba(245,166,35,0.25)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Replace this div with an <img> tag pointing to a real photo */}
            <div className={styles.photoPlaceholder}>
              <span>👨‍⚖️</span>
            </div>
            <div className={styles.nameCard}>
              <p className={styles.nameCardName}>Dr. Fernando Silva</p>
              <p className={styles.nameCardMeta}>OAB/SP 123.456 | Especialista em Direito</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
