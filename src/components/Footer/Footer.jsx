import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span>© 2024 Polar Code Consulting</span>
        <Link to="/politica-de-privacidad">Política de Privacidad</Link>
      </div>
    </footer>
  )
}
