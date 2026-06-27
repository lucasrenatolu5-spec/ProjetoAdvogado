import { motion } from 'framer-motion'
import { fadeUp, slideInLeft } from '../assets/variants'
import { useInViewAnimation } from '../hooks/useInViewAnimation'
import { CREDENTIALS } from '../data'
import styles from './About.module.css'
import photo from '../assets/imagens/drFernando2.jpg'

export function About() {
  const { ref, isInView } = useInViewAnimation()

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={styles.section}
      id="sobre"
    >
      <div className={styles.inner}>
        {/* Photo */}
        <motion.div
          className={styles.photoWrap}
          variants={slideInLeft}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Replace with real <img> */}
          <div className={styles.photoPlaceholder}>
            <img src={photo} alt="Dr. Fernando advogado" />
          </div>
        </motion.div>

        {/* Content */}
        <div className={styles.content}>
          <motion.h2
            className={styles.name}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
          >
            Dr. Fernando Silva
          </motion.h2>

          <motion.p
            className={styles.oab}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0.5}
          >
            OAB/SP 123.456
          </motion.p>

          <motion.p
            className={styles.bio}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
          >
            Minha missão é simples: defender seus direitos como se fossem meus. Com mais
            de 15 anos de advocacia, aprendi que cada cliente traz uma história única, e é
            essa individualidade que guia cada estratégia que desenvolvo.
          </motion.p>

          <motion.p
            className={styles.bio}
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1.4}
          >
            Não acredito em fórmulas prontas ou atendimento padronizado. Acredito em
            pessoas, em escutar verdadeiramente e em construir soluções que fazem sentido
            para sua realidade.
          </motion.p>

          <div className={styles.credentials}>
            {CREDENTIALS.map((cred, i) => (
              <motion.div
                key={cred}
                className={styles.credItem}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={2 + i * 0.15}
              >
                <div className={styles.checkIcon}>✓</div>
                <span className={styles.credText}>{cred}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
