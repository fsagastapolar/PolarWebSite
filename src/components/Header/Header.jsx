import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/cropped-polarcodelogowebsize.png'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img src={logo} alt="Polar Code Consulting logo" className={styles.logo} />
          <span className={styles.siteName}>Polar Code Consulting</span>
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ''} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  )
}
