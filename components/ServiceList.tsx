'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import styles from './ServiceList.module.css'

const services = [
  {
    id: 1,
    title: 'Brand Identity',
    description: 'Create a memorable brand that resonates with your audience and stands out in the market.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop',
    benefits: [
      'Logo design and brand guidelines',
      'Color palette and typography selection',
      'Brand voice and messaging strategy',
      'Complete brand identity package'
    ],
    color: 'deep-green'
  },
  {
    id: 2,
    title: 'Website Design',
    description: 'Beautiful, responsive websites that convert visitors into customers and drive business growth.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    benefits: [
      'Responsive design for all devices',
      'SEO optimization',
      'Fast loading times',
      'Content management system integration'
    ],
    color: 'terracotta'
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'Intuitive user experiences that delight users and maximize engagement across all devices.',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=300&fit=crop',
    benefits: [
      'User research and persona development',
      'Wireframing and prototyping',
      'Usability testing',
      'Design system creation'
    ],
    color: 'deep-green'
  },
  {
    id: 4,
    title: 'Video Marketing',
    description: 'Compelling video content that tells your story and connects with your target audience.',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&h=300&fit=crop',
    benefits: [
      'Video concept and scriptwriting',
      'Professional production',
      'Post-production and editing',
      'Multi-platform distribution strategy'
    ],
    color: 'terracotta'
  },
  {
    id: 5,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with your business goals and maximize ROI.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    benefits: [
      'Market research and analysis',
      'Competitive analysis',
      'Digital roadmap development',
      'Performance tracking and optimization'
    ],
    color: 'deep-green'
  },
  {
    id: 6,
    title: 'E-Commerce Solutions',
    description: 'Complete e-commerce platforms that drive sales and provide exceptional shopping experiences.',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=400&h=300&fit=crop',
    benefits: [
      'Shopping cart and checkout optimization',
      'Payment gateway integration',
      'Inventory management',
      'Analytics and reporting'
    ],
    color: 'terracotta'
  }
]

export default function ServiceList() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set())
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems((prev) => new Set(prev).add(index))
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach((observer) => {
        if (observer) observer.disconnect()
      })
    }
  }, [])

  return (
    <div ref={sectionRef} className={styles.serviceList}>
      {services.map((service, index) => (
        <div
          key={service.id}
          ref={(el) => {
            itemRefs.current[index] = el
          }}
          className={`${styles.serviceItem} ${visibleItems.has(index) ? styles.visible : ''}`}
        >
          <div className={styles.serviceImageWrapper}>
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className={styles.serviceImage}
            />
          </div>
          <div className={styles.serviceHeader}>
            <h2 style={{ color: 'var(--deep-green)' }}>{service.title}</h2>
          </div>
          <p className={styles.serviceDescription}>{service.description}</p>
          <div className={styles.benefitsSection}>
            <h3 style={{ color: 'var(--terracotta)', marginBottom: 'var(--spacing-xs)', fontSize: '0.95rem' }}>Key Benefits:</h3>
            <ul className={styles.benefitsList}>
              {service.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex}>{benefit}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}

