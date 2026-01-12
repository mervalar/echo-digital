import React from 'react'
import styles from './StatsSection.module.css'

const stats = [
  { number: '500+', label: 'Projects Done' },
  { number: '300+', label: 'Happy Clients' },
  { number: '25+', label: 'Awards' },
  { number: '50+', label: 'Team Members' }
]

export default function StatsSection() {
  return (
    <section className={`${styles.statsSection} section-black`}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

