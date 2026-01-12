'use client'

import { useState } from 'react'
import styles from './page.module.css'
import ProjectsGrid from '@/components/ProjectsGrid'

const categories = ['All', 'Brand Identity', 'Web Design', 'UI/UX', 'Video', 'E-Commerce']

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Our Projects</h1>
          <p className={styles.subtitle}>
            Explore our portfolio of creative digital solutions
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                className={`${styles.filterBtn} ${activeFilter === category ? styles.active : ''}`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <ProjectsGrid filter={activeFilter} />
        </div>
      </section>
    </>
  )
}

