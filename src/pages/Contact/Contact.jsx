import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Contact</h1>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.subTitle}>Get in touch</h2>
            <p>Let&apos;s talk 👋 Don&apos;t hesitate to reach out with the contact information below.</p>
          </div>
          <div className={styles.emailBlock}>
            <a href="mailto:fsagasta@polarcodeconsulting.com" className={styles.email}>
              fsagasta@polarcodeconsulting.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
