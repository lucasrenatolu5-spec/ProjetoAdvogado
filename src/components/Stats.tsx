import { motion } from 'framer-motion'
import { fadeUp } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { STATS } from '../data'
import styles from './Stats.module.css'

export function Stats() {
  const { ref, isInView } = useInViewAnimation({ margin: '-60px' })

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.stats}
    >
      <div className={styles.grid}>
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            className={styles.item}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={i}
          >
            <motion.div
              className={styles.iconBox}
              whileHover={{ scale: 1.1, rotate: -4 }}
            >
              <span className={styles.icon}>{stat.icon}</span>
            </motion.div>
            <div className={styles.value}>{stat.value}</div>
            <div className={styles.label}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
