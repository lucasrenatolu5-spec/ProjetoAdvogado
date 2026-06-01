import { motion } from 'framer-motion'
import { fadeUp } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { WHATSAPP_URL } from '../data'
import styles from './CTA.module.css'

export function CTA() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.section}
      id="contato"
    >
      <div className={styles.inner}>
        <motion.h2
          className={styles.title}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0}
        >
          Não Deixe Seus Direitos
        </motion.h2>
        <motion.h2
          className={`${styles.title} ${styles.titleGold}`}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={0.6}
        >
          Para Depois
        </motion.h2>

        <motion.p
          className={styles.desc}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1.1}
        >
          Cada dia que passa pode fazer diferença no seu caso. Entre em contato agora e
          agende uma consulta para discutir sua situação. Estamos prontos para lutar pelos
          seus direitos com dedicação e profissionalismo.
        </motion.p>

        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btn}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1.6}
          whileHover={{ scale: 1.05, boxShadow: '0 14px 44px rgba(37,211,102,0.5)' }}
          whileTap={{ scale: 0.97 }}
        >
          <span>💬</span> Falar com Advogado Agora
        </motion.a>

        <motion.p
          className={styles.guarantee}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
        >
          ✓ Resposta em até 24 horas &nbsp;|&nbsp; ✓ Primeira análise gratuita
        </motion.p>
      </div>
    </section>
  )
}
