import styles from './PrivacyPolicy.module.css'

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <h1 className={styles.title}>Política de Privacidad.</h1>

        <p className={styles.intro}>
          En Polar Code Consulting, estamos comprometidos con la protección de la privacidad y la seguridad de la información personal que recopilamos de nuestros clientes, usuarios y visitantes de nuestro sitio web. Esta Política de Privacidad detalla cómo recopilamos, utilizamos, almacenamos y protegemos sus datos personales en cumplimiento con la normativa vigente en Argentina.
        </p>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>1. Compromiso de Privacidad</h3>
          <p>Datos Personales: Cuando nos referimos a &quot;Datos Personales&quot;, hablamos de cualquier información que pueda ser utilizada para identificarlo, como su nombre, apellido, DNI, número de teléfono, dirección de correo electrónico, y cualquier otro dato que usted decida compartir con nosotros.</p>
          <p>Nos comprometemos a procesar sus Datos Personales de acuerdo con esta Política de Privacidad y la normativa aplicable, asegurando siempre su confidencialidad y seguridad. Nos reservamos el derecho de realizar actualizaciones o modificaciones a esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará en nuestro sitio web, y la versión vigente será la aplicable en el momento de la recopilación de sus datos.</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>2. Uso de los Datos Personales</h3>
          <p>Podemos recopilar Datos Personales cuando:</p>
          <ul className={styles.list}>
            <li>Usted se pone en contacto con nosotros a través de nuestro sitio web o aplicaciones.</li>
            <li>Se suscribe a nuestros servicios o solicita información sobre nuestros productos.</li>
            <li>Participa en encuestas, promociones, o actividades similares organizadas por nuestra empresa.</li>
          </ul>
          <p>Los Datos Personales que recopilemos serán utilizados para:</p>
          <ul className={styles.list}>
            <li>Proporcionar y facturar los servicios solicitados.</li>
            <li>Responder a sus consultas y solicitudes de información.</li>
            <li>Mantenerlo informado sobre nuestros productos, servicios, y promociones.</li>
            <li>Mejorar nuestros servicios y la experiencia del usuario.</li>
            <li>Cumplir con nuestras obligaciones legales y contractuales.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>3. Confidencialidad y Transferencia de Datos Personales</h3>
          <p>Nos comprometemos a no vender, alquilar, ni divulgar sus Datos Personales a terceros, excepto en los casos descritos en esta Política de Privacidad o cuando sea requerido por la ley.</p>
          <p>Podemos compartir sus Datos Personales con:</p>
          <ul className={styles.list}>
            <li>Proveedores de servicios que actúan en nuestro nombre, bajo estrictos acuerdos de confidencialidad.</li>
            <li>Otras empresas asociadas o afiliadas a Polar Code Consulting, siempre que compartan nuestros mismos estándares de privacidad y protección de datos.</li>
            <li>Autoridades gubernamentales, si así lo exige la ley o en el marco de un proceso legal.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>4. Derechos de los Titulares de los Datos</h3>
          <p>De acuerdo con la Ley N° 25.326 de Protección de los Datos Personales, usted tiene el derecho de acceder, rectificar, actualizar, y solicitar la eliminación de sus Datos Personales en cualquier momento. Para ejercer estos derechos, puede ponerse en contacto con nosotros a través de nuestro correo electrónico de contacto o enviando una comunicación escrita a nuestra dirección postal.</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>5. Seguridad y Protección de Datos</h3>
          <p>Implementamos medidas de seguridad técnicas, administrativas, y físicas adecuadas para proteger sus Datos Personales contra acceso no autorizado, pérdida, destrucción o alteración. Sin embargo, es importante que usted también tome precauciones para proteger sus datos, como mantener la confidencialidad de sus credenciales de acceso.</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>6. Uso de Cookies y Tecnologías Similares</h3>
          <p>Nuestro sitio web puede utilizar cookies u otras tecnologías de rastreo para mejorar su experiencia de usuario. Las cookies son pequeños archivos de datos que se almacenan en su dispositivo y nos permiten recordar sus preferencias y mejorar nuestros servicios. Usted puede configurar su navegador para rechazar las cookies, aunque esto puede afectar su capacidad para utilizar algunas funciones de nuestro sitio.</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>7. Enlaces a Otros Sitios Web</h3>
          <p>Nuestro sitio web puede contener enlaces a sitios web de terceros. Esta Política de Privacidad se aplica únicamente a nuestro sitio y no somos responsables por las prácticas de privacidad de otros sitios. Recomendamos que revise las políticas de privacidad de cualquier sitio web que visite.</p>
        </section>

        <section className={styles.section}>
          <h3 className={styles.sectionTitle}>8. Contacto</h3>
          <p>
            Si tiene alguna consulta, queja, o desea ejercer sus derechos en relación con sus Datos Personales, por favor contáctenos a través del correo electrónico{' '}
            <a href="mailto:fsagasta@polarcodeconsulting.com">fsagasta@polarcodeconsulting.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
