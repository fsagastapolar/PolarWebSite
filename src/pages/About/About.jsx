import { Link } from 'react-router-dom'
import fernandoPhoto from '../../assets/fotoferabout.jpg'
import robertoPhoto from '../../assets/foto_bio-1.png'
import styles from './About.module.css'

export default function About() {
  return (
    <>
      {/* Team */}
      <section className={styles.team}>
        <div className={styles.inner}>
          <h1 className={styles.pageTitle}>About us</h1>
          <div className={styles.teamGrid}>
            {/* Fernando */}
            <div className={styles.member}>
              <img src={fernandoPhoto} alt="Fernando Sagasta" className={styles.photo} />
              <h2 className={styles.memberName}>Fernando Sagasta</h2>
              <p className={styles.memberSubtitle}>Software developer and Bachelor degree on equity markets</p>
              <p>With 6 years of hands-on experience in the industry, he blends creativity with technical acumen, in a journey that spans across digital artistry and gaming to financial markets. With a deep understanding of Unity and C#, games come alive that are not only technically sound, but also visually captivating. Years of painting experience have shaped a keen sense of beauty and aesthetics, infusing each project with an unmistakable charm.</p>
              <p>The artistic flair is mirrored in a proficiency for equity markets. Leveraging a bachelor&apos;s degree in the field and a strong command over Python, strategic financial models are developed that reflect both financial acumen and innovative spirit.</p>
              <p>Pivoting seamlessly between roles, thriving where art and technology intersect, there&apos;s a passion for crafting experiences that resonate with audiences, all the while maintaining a robust technical backbone. The diverse skillset, spanning from game design to financial technology, promises unique and compelling solutions, ready to meet any creative or technical challenge head-on. Whether the task involves Unity game development or financial technology, you can trust in the depth of experience and a track record of success to bring ideas into reality. This blend of gaming and financial expertise provides a strong foundation for innovative solutions in various sectors, including the financial industry.</p>
            </div>

            {/* Roberto */}
            <div className={styles.member}>
              <img src={robertoPhoto} alt="Roberto Yanes" className={styles.photo} />
              <h2 className={styles.memberName}>Roberto Yanes</h2>
              <p className={styles.memberSubtitle}>Software Developer</p>
              <p>With a track record of 15 years in the industry. Expert in various technologies such as .Net, Python, Unity, his experience has been instrumental in numerous successful projects. Throughout his career, this experienced professional has worked extensively with renowned organizations in different sectors, such as Oil &amp; Gas, banks, universities, software factory, health services, travel agencies, government entities and the video game industry.</p>
              <p>His international exposure and exceptional adaptability have been crucial in achieving outstanding results. Currently, he works as a technical reference in a prestigious software factory, supervising team management and project administration.</p>
              <p>His extensive knowledge of the project life cycle and outstanding leadership skills ensure smooth execution and customer satisfaction. Recognized for his unwavering commitment to excellence, this professional is driven by a passion to create innovative technological solutions tailored to the needs of each client. His portfolio features an outstanding variety of immersive digital experiences, demonstrating his meticulousness and penchant for innovation.</p>
              <p>For those looking for a dedicated and highly-skilled professional, this developer&apos;s credentials speak for themselves. With vast experience and an impeccable track record, he is ready to turn your ideas into reality.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Get In Touch callout */}
      <section className={styles.callout}>
        <div className={styles.calloutInner}>
          <h4 className={styles.calloutHeading}>Get In Touch</h4>
          <p>
            <a href="mailto:fsagasta@polarcodeconsulting.com">
              fsagasta@polarcodeconsulting.com
            </a>
          </p>
          <Link to="/contact" className={styles.calloutLink}>More Ways to Get In Touch →</Link>
        </div>
      </section>
    </>
  )
}
