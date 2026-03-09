import { Link } from 'react-router-dom'
import heroBg from '../../assets/image.jpeg'
import apiImg from '../../assets/apicol.png'
import financeImg from '../../assets/financecol.png'
import dataImg from '../../assets/datacol.png'
import unityImg from '../../assets/image-1.png'
import styles from './Home.module.css'

const services = [
  {
    img: apiImg,
    title: 'Software Development',
    text: 'Our competence in software development allows us to guarantee reliable and robust applications prepared to meet all your needs, including the seamless integration of different components of your daily process. Count on us to create solid and efficient API\'s that improve the functionality and performance of your business.',
  },
  {
    img: financeImg,
    title: 'Finance Expertise',
    text: 'With a unique combination of a coding background and equity markets, we excel at crafting solutions that demystify complex financial concepts. Utilize our distinct expertise to gain a competitive edge in your financial endeavors.',
  },
  {
    img: dataImg,
    title: 'Data Processes',
    text: 'Specializing in data analysis, manipulation, and visualization, we turn raw data into meaningful insights. Our data processing experience ensures our services are designed to help you make informed decisions.',
  },
  {
    img: unityImg,
    title: 'Unity',
    text: 'Expertise in Unity game development to empowers your gaming vision and improve performance. Expertise in VFX integration, digital painting, and environment stylization.',
  },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        className={styles.hero}
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className={styles.heroOverlay}>
          <h2 className={styles.heroTitle}>Welcome to Polar Code Consulting</h2>
          <p className={styles.heroSub}>
            Quality, expertise, and partnership, coders on a mission to elevate your tech game
          </p>
        </div>
      </section>

      {/* Services */}
      <section className={styles.services}>
        <div className={styles.servicesGrid}>
          {services.map(s => (
            <div key={s.title} className={styles.card}>
              <img src={s.img} alt={s.title} className={styles.cardImg} />
              <h4 className={styles.cardTitle}>{s.title}</h4>
              <p className={styles.cardText}>{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote */}
      <section className={styles.quote}>
        <blockquote className={styles.quoteBlock}>
          <p className={styles.quoteText}>&ldquo;Action should not be confused with agitation&rdquo;</p>
          <cite className={styles.quoteAttrib}>— René Guénon</cite>
        </blockquote>
      </section>

      {/* Callout */}
      <section className={styles.callout}>
        <div className={styles.calloutGrid}>
          <div className={styles.calloutCol}>
            <h4 className={styles.calloutHeading}>About Us</h4>
            <p>Want to know more about our team?</p>
            <Link to="/about" className={styles.calloutLink}>More About Us →</Link>
          </div>
          <div className={styles.calloutCol}>
            <h4 className={styles.calloutHeading}>Get In Touch</h4>
            <p>
              <a href="mailto:fsagasta@polarcodeconsulting.com">
                fsagasta@polarcodeconsulting.com
              </a>
            </p>
            <Link to="/contact" className={styles.calloutLink}>More Ways to Get In Touch →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
