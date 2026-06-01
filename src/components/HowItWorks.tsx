import { motion } from 'framer-motion'
import { fadeUp, timelineLine } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { STEPS } from '../data'
import styles from './HowItWorks.module.css'

export function HowItWorks() {
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
          <h2 className={styles.title}>Como Funciona</h2>
          <p className={styles.subtitle}>
            Um processo transparente e eficiente do primeiro contato até a vitória
          </p>
        </motion.div>

        <div className={styles.stepsWrapper}>
          {/* Animated connecting line */}
          <motion.div
            className={styles.line}
            variants={timelineLine}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          />

          <div className={styles.steps}>
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                className={styles.step}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={i}
              >
                <motion.div
                  className={styles.stepNum}
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  {step.number}
                </motion.div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
