'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.css'

export default function Hero() {
  const [techCount, setTechCount] = useState(0)
  const targetCount = 50

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 50
    const increment = targetCount / steps
    const stepDuration = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      if (currentStep <= steps) {
        setTechCount(Math.min(Math.floor(increment * currentStep), targetCount))
      } else {
        setTechCount(targetCount)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1>We Are Creative Design Agency</h1>
            <p>
              Transforming ideas into digital experiences that inspire, engage, and drive results. 
              We craft beautiful, functional solutions for brands worldwide.
            </p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={`${styles.btnPrimary} btn`}>Get Started</Link>
              <Link href="/about" className={`${styles.btnSecondary} btn`}>
                Learn More <span className={styles.arrow}>→</span>
              </Link>
            </div>
          </div>
          <div className={styles.heroImage}>
            <div className={styles.imageWrapper}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Creative professional working on design"
                width={800}
                height={600}
                priority
                className={styles.image}
              />
              <div className={styles.glowShape1}></div>
              <div className={styles.glowShape2}></div>
              <div className={styles.glowShape3}></div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar at Bottom */}
        <div className={styles.statsBar}>
          <div className={styles.statsLeft}>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Projects</div>
              <div className={styles.statNumber}>500+</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Clients</div>
              <div className={styles.statNumber}>300+</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>People Worked With</div>
              <div className={styles.statNumber}>250+</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statLabel}>Technology</div>
              <div className={styles.statNumber}>{techCount}+</div>
            </div>
          </div>
          <div className={styles.statsRight}>
            <div className={styles.teamAvatars}>
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                alt="Team member"
                width={40}
                height={40}
                className={styles.avatar}
              />
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                alt="Team member"
                width={40}
                height={40}
                className={styles.avatar}
              />
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                alt="Team member"
                width={40}
                height={40}
                className={styles.avatar}
              />
              <Image
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                alt="Team member"
                width={40}
                height={40}
                className={styles.avatar}
              />
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                alt="Team member"
                width={40}
                height={40}
                className={styles.avatar}
              />
              <div className={styles.moreAvatars}>+245</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

