import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../hooks/useScrolled'
import { navbarSlide, mobileMenu } from '../assets/variants'
import { NAV_LINKS, WHATSAPP_URL } from '../data'
import styles from './Navbar.module.css'

export function Navbar() {
  const scrolled = useScrolled()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <motion.nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
      variants={navbarSlide}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.inner}>
        {/* ── Logo ── */}
        <a href="#inicio" className={styles.logo}>
          <span className={styles.logoIcon}>⚖️</span>
          <span className={styles.logoText}>
            Silva <span className={styles.logoAccent}>Advocacia</span>
          </span>
        </a>

        {/* ── Desktop links ── */}
        <div className={styles.desktopLinks}>
          {NAV_LINKS.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              className={styles.navLink}
              whileHover={{ color: 'var(--gold)' }}
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
            whileHover={{ scale: 1.04, boxShadow: '0 0 24px rgba(37,211,102,0.45)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span>💬</span> Falar no WhatsApp
          </motion.a>
        </div>

        {/* ── Hamburger ── */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className={styles.hamburgerBar}
              animate={
                menuOpen
                  ? i === 0 ? { rotate: 45, y: 7 }
                  : i === 1 ? { opacity: 0, scaleX: 0 }
                  : { rotate: -45, y: -7 }
                  : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
              }
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            variants={mobileMenu}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileLink}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mobileCta}
              onClick={() => setMenuOpen(false)}
            >
              💬 Falar no WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
