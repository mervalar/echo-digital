'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './ServicesGrid.module.css'

const services = [
  {
    icon: '🎨',
    title: 'Brand Identity',
    description: 'Create memorable brands.',
    color: 'deep-green',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop'
  },
  {
    icon: '💻',
    title: 'Website Design',
    description: 'Beautiful websites.',
    color: 'terracotta',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop'
  },
  {
    icon: '📱',
    title: 'UI & UX Design',
    description: 'Intuitive experiences.',
    color: 'deep-green',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop'
  },
  {
    icon: '🎬',
    title: 'Video Marketing',
    description: 'Compelling content.',
    color: 'terracotta',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop'
  }
]

export default function ServicesGrid() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <div ref={sectionRef} className={`${styles.servicesSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.servicesContent}>
        <div className={styles.servicesLeft}>
          <span className={styles.servicesLabel}>OUR SERVICES</span>
          <h2 className={styles.servicesTitle}>
            What We Do.
            <span className={styles.titleUnderline}></span>
          </h2>
          <p className={styles.servicesDescription}>
            We are a creative design agency dedicated to transforming ideas into exceptional digital experiences. 
            Our team combines strategic thinking with innovative design to deliver solutions that make a difference.
          </p>
          <p className={styles.servicesDescription}>
            From brand identity to digital platforms, we work closely with our clients to understand their vision 
            and bring it to life with creativity, precision, and passion. We believe in creating meaningful connections 
            between brands and their audiences through thoughtful design and strategic execution.
          </p>
          <Link href="/services" className={styles.viewAllBtn}>VIEW ALL</Link>
        </div>
        
        <div className={styles.servicesRight}>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div key={index} className={`${styles.serviceCard} ${styles[service.color]}`}>
                <div className={styles.serviceImageWrapper}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceCardContent}>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
