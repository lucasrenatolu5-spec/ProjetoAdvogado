import { motion } from 'framer-motion'
import { fadeUp } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { TESTIMONIALS } from '../data'
import styles from './Testimonials.module.css'

export function Testimonials() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.section}
      id="clientes"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={styles.title}>O Que Dizem Nossos Clientes</h2>
          <p className={styles.subtitle}>
            Histórias reais de quem confiou em nosso trabalho e conquistou seus direitos
          </p>
        </motion.div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              className={styles.card}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(26,42,108,0.12)' }}
            >
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  <span>{t.avatar}</span>
                </div>
                <div>
                  <p className={styles.authorName}>{t.name}</p>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
              <div className={styles.stars}>
                {'★'.repeat(t.stars)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
