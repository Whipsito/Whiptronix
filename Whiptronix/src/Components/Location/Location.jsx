import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import styles from './Location.module.css'

const Location = () => {
  const sectionRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = contentRef.current?.children
            if (children && children.length > 0) {
              animate(children, {
                opacity: [0, 1],
                translateY: [40, 0],
                ease: 'outCubic',
                duration: 800,
                delay: stagger(200),
              })
            }
            observer.disconnect()
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="ubicacion" ref={sectionRef} className={`${styles.location} section-padding`}>
      <div className="container">
        <h2 className="section-title">
          Nuestra <span>Ubicación</span>
        </h2>
        <p className="section-subtitle">
          Visítanos y recibe atención personalizada
        </p>

        <div ref={contentRef} className={styles.grid}>
          <div className={styles.mapWrapper} style={{ opacity: 0 }}>
            <iframe
              title="Ubicación Whiptronix"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18904.372706656748!2d-75.6634838!3d4.8540369!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3881011762123b%3A0x7bdde5232daa4a11!2sWhipTronix!5e1!3m2!1ses-419!2sco!4v1771969061918!5m2!1ses-419!2sco"
              className={styles.map}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.info} style={{ opacity: 0 }}>
            <div className={styles.infoCard}>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#19E62C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Dirección</h4>
                  <p className={styles.infoText}>Pereira, Risaralda, Colombia</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#19E62C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Teléfono</h4>
                  <p className={styles.infoText}>317 374 6159</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#19E62C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Horario</h4>
                  <p className={styles.infoText}>Lunes a Domingo</p>
                  <p className={styles.infoText}>8:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#19E62C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <h4 className={styles.infoLabel}>Instagram</h4>
                  <a href="https://www.instagram.com/whip.tronix/?hl=es" target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                    @Whip.Tronix
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location
