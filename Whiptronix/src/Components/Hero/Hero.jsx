import React, { useEffect, useRef } from 'react'
import { animate, stagger, createDrawable } from 'animejs'
import styles from './Hero.module.css'

const Hero = () => {
  const circuitRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Animate circuit paths drawing using createDrawable
    const paths = circuitRef.current?.querySelectorAll('.circuit-path')
    if (paths && paths.length > 0) {
      const drawables = []
      paths.forEach((path) => {
        try {
          const drawable = createDrawable(path)
          drawables.push(drawable)
        } catch (e) {
          // Fallback for non-path elements
        }
      })

      if (drawables.length > 0) {
        animate(drawables, {
          draw: '0 1',
          ease: 'inOutCubic',
          duration: 2500,
          delay: stagger(200, { start: 300 }),
        })
      }
    }

    // Animate circuit dots
    const dots = document.querySelectorAll('.circuit-dot')
    if (dots.length > 0) {
      animate(dots, {
        scale: [0, 1],
        opacity: [0, 1],
        ease: 'outElastic(1, 0.5)',
        duration: 800,
        delay: stagger(100, { start: 1800 }),
      })

      // Pulse loop
      setTimeout(() => {
        animate(dots, {
          scale: [1, 1.3, 1],
          opacity: [1, 0.6, 1],
          ease: 'inOutSine',
          duration: 2000,
          delay: stagger(300),
          loop: true,
        })
      }, 3000)
    }

    // Title animation
    animate(titleRef.current, {
      opacity: [0, 1],
      translateY: [40, 0],
      ease: 'outCubic',
      duration: 1000,
      delay: 600,
    })

    // Subtitle animation
    animate(subtitleRef.current, {
      opacity: [0, 1],
      translateY: [30, 0],
      ease: 'outCubic',
      duration: 1000,
      delay: 900,
    })

    // CTA animation
    animate(ctaRef.current, {
      opacity: [0, 1],
      translateY: [20, 0],
      ease: 'outCubic',
      duration: 1000,
      delay: 1200,
    })
  }, [])

  return (
    <section id="inicio" className={styles.hero}>
      {/* Animated Circuit Background */}
      <div className={styles.circuitBg} ref={circuitRef}>
        <svg
          viewBox="0 0 1440 800"
          className={styles.circuitSvg}
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Main horizontal traces */}
          <path className="circuit-path" d="M0 200 H300 L350 250 H600" stroke="#19E62C" strokeWidth="1.5" fill="none" opacity="0.3" />
          <path className="circuit-path" d="M1440 300 H1100 L1050 350 H800 L750 300 H600" stroke="#19E62C" strokeWidth="1.5" fill="none" opacity="0.25" />
          <path className="circuit-path" d="M0 500 H200 L250 450 H450 L500 500 H700" stroke="#19E62C" strokeWidth="1.5" fill="none" opacity="0.2" />
          <path className="circuit-path" d="M1440 600 H1200 L1150 550 H950" stroke="#19E62C" strokeWidth="1.5" fill="none" opacity="0.3" />

          {/* Vertical traces */}
          <path className="circuit-path" d="M400 0 V150 L450 200 V400" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.15" />
          <path className="circuit-path" d="M1000 0 V100 L950 150 V300" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.2" />
          <path className="circuit-path" d="M700 800 V650 L750 600 V450" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.15" />
          <path className="circuit-path" d="M200 800 V700 L250 650 V550" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.2" />

          {/* Diagonal connectors */}
          <path className="circuit-path" d="M100 100 L200 200 H350" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.2" />
          <path className="circuit-path" d="M1300 100 L1200 200 H1050" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.2" />
          <path className="circuit-path" d="M1300 700 L1200 600 H1050 L1000 550" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.15" />
          <path className="circuit-path" d="M100 700 L200 600 H350 L400 550" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.15" />

          {/* Short branch traces */}
          <path className="circuit-path" d="M600 250 V350 L650 400" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.2" />
          <path className="circuit-path" d="M800 350 V450 L850 500 H950" stroke="#19E62C" strokeWidth="1" fill="none" opacity="0.15" />
          <path className="circuit-path" d="M450 200 H550 L600 250" stroke="#19E62C" strokeWidth="1.5" fill="none" opacity="0.25" />

          {/* Circuit dots / nodes */}
          <circle className="circuit-dot" cx="300" cy="200" r="4" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="600" cy="250" r="5" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="350" cy="250" r="3" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="1100" cy="300" r="4" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="750" cy="300" r="5" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="800" cy="350" r="3" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="200" cy="500" r="4" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="500" cy="500" r="3" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="700" cy="500" r="5" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="1200" cy="600" r="4" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="950" cy="550" r="3" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="400" cy="400" r="3" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="450" cy="200" r="4" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="1000" cy="150" r="3" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="650" cy="400" r="4" fill="#19E62C" opacity="0" />
          <circle className="circuit-dot" cx="950" cy="500" r="3" fill="#19E62C" opacity="0" />
        </svg>
      </div>

      {/* Gradient overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 ref={titleRef} className={styles.title} style={{ opacity: 0 }}>
          WHIP<span className={styles.greenText}>TRONIX</span>
        </h1>
        <p ref={subtitleRef} className={styles.subtitle} style={{ opacity: 0 }}>
          Reparación de Celulares, Computadores<br />y Electrónica en General
        </p>
        <a
          ref={ctaRef}
          href="https://wa.me/573173746159"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          style={{ opacity: 0 }}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  )
}

export default Hero
