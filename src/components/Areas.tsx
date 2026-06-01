import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { AREAS } from '../data'
import styles from './Areas.module.css'

export function Areas() {
  const { ref, isInView } = useInViewAnimation()
  const [hovered, setHovered] = useState<number | null>(1)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.section}
      id="areas"
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={styles.title}>Áreas de Atuação</h2>
          <p className={styles.subtitle}>
            Soluções jurídicas completas e personalizadas para cada necessidade
          </p>
        </motion.div>

        <div className={styles.grid}>
          {AREAS.map((area, i) => {
            const active = hovered === i
            return (
              <motion.div
                key={area.title}
                className={`${styles.card} ${active ? styles.cardActive : ''}`}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i * 0.8}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(26,42,108,0.14)' }}
              >
                <motion.div
                  className={styles.iconBox}
                  animate={active ? { rotate: [-4, 4, -2, 0], scale: 1.08 } : { rotate: 0, scale: 1 }}
                  transition={{ duration: 0.35 }}
                >
                  <span className={styles.icon}>{area.icon}</span>
                </motion.div>
                <h3 className={`${styles.cardTitle} ${active ? styles.cardTitleActive : ''}`}>
                  {area.title}
                </h3>
                <p className={styles.cardDesc}>{area.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
