import { motion } from 'framer-motion'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoIcon}>⚖️</span>
            <span className={styles.logoText}>
              Silva <span className={styles.logoAccent}>Advocacia</span>
            </span>
          </div>
          <p className={styles.brandDesc}>
            Escritório comprometido com a defesa dos seus direitos, atuando com
            excelência e dedicação desde 2009.
          </p>
        </div>

        {/* Contato */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contato</h4>
          <div className={styles.colItems}>
            <div className={styles.colItem}>
              <span>📞</span>
              <span>(11) 99999-9999</span>
            </div>
            <div className={styles.colItem}>
              <span>✉️</span>
              <span>contato@silvaadvocacia.com.br</span>
            </div>
          </div>
        </div>

        {/* Endereço */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Endereço</h4>
          <div className={styles.colItem}>
            <span>📍</span>
            <span>
              Av. Paulista, 1000 - 15º andar<br />
              Bela Vista, São Paulo - SP<br />
              CEP: 01310-100
            </span>
          </div>
        </div>

        {/* Horário */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Horário</h4>
          <div className={styles.colItems}>
            <div className={styles.colItem}>
              <span>🕐</span>
              <span>Segunda a Sexta: 9h – 18h</span>
            </div>
            <div className={styles.colItemIndent}>Sábado: 9h – 13h</div>
            <div className={`${styles.colItemIndent} ${styles.online}`}>
              Atendimento online e presencial
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.copy}>
          © 2024 Silva Advocacia. Todos os direitos reservados.
        </span>
        <div className={styles.socials}>
          {['Instagram', 'LinkedIn', 'Facebook'].map((s) => (
            <motion.a
              key={s}
              href="#"
              className={styles.socialLink}
              whileHover={{ color: 'var(--gold)' }}
            >
              {s}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
