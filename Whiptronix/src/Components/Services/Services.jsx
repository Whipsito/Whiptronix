import React, { useEffect, useRef } from 'react'
import { animate, stagger } from 'animejs'
import styles from './Services.module.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#19E62C" strokeWidth="2">
        <rect x="18" y="4" width="28" height="56" rx="4" />
        <line x1="26" y1="8" x2="38" y2="8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="32" cy="52" r="3" />
        <rect x="22" y="14" width="20" height="30" rx="1" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Celulares',
    description: 'Reparación de pantallas, baterías, puertos de carga, software y más para todas las marcas.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#19E62C" strokeWidth="2">
        <rect x="4" y="10" width="56" height="36" rx="3" />
        <line x1="4" y1="38" x2="60" y2="38" strokeWidth="1.5" />
        <circle cx="32" cy="43" r="1.5" fill="#19E62C" />
        <path d="M22 52 H42" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 46 L22 52" strokeWidth="2" strokeLinecap="round" />
        <path d="M38 46 L42 52" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: 'Computadores',
    description: 'Mantenimiento, formateo, cambio de componentes, upgrade de hardware y soluciones de software.',
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" width="48" height="48" fill="none" stroke="#19E62C" strokeWidth="2">
        <rect x="8" y="16" width="48" height="32" rx="3" />
        <line x1="8" y1="24" x2="56" y2="24" strokeWidth="1.5" />
        <circle cx="16" cy="36" r="3" />
        <circle cx="32" cy="36" r="3" />
        <circle cx="48" cy="36" r="3" />
        <path d="M16 39 V44" strokeWidth="1.5" />
        <path d="M32 39 V44" strokeWidth="1.5" />
        <path d="M48 39 V44" strokeWidth="1.5" />
        <path d="M28 8 L32 16" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M36 8 L32 16" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Electrónica en General',
    description: 'Diagnóstico y reparación de consolas, tablets, audífonos, y dispositivos electrónicos diversos.',
  },
]

const Services = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const validCards = cardsRef.current.filter(Boolean)
            if (validCards.length > 0) {
              animate(validCards, {
                opacity: [0, 1],
                translateY: [60, 0],
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
    <section id="servicios" ref={sectionRef} className={`${styles.services} section-padding`}>
      <div className="container">
        <h2 className="section-title">
          Servicio <span>Técnico</span>
        </h2>
        <p className="section-subtitle">
          Soluciones profesionales para tus dispositivos electrónicos
        </p>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className={styles.card}
              style={{ opacity: 0 }}
            >
              <div className={styles.iconWrapper}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
