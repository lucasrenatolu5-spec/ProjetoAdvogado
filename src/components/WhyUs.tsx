import { motion } from 'framer-motion'
import { fadeUp } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { WHY_ITEMS } from '../data'
import styles from './WhyUs.module.css'

export function WhyUs() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.section}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <h2 className={styles.title}>Por Que Nos Escolher?</h2>
          <p className={styles.subtitle}>
            Diferenciais que transformam desafios jurídicos em vitórias concretas
          </p>
        </motion.div>

        <div className={styles.grid}>
          {WHY_ITEMS.map((item, i) => (
            <motion.div
              key={item.title}
              className={styles.item}
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={i}
              whileHover={{ y: -8 }}
            >
              <motion.div
                className={styles.iconBox}
                whileHover={{ scale: 1.12, rotate: 6 }}
              >
                <span className={styles.icon}>{item.icon}</span>
              </motion.div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDesc}>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
