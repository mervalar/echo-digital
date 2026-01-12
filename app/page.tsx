import Link from 'next/link'
import styles from './page.module.css'
import Hero from '@/components/Hero'
import ServicesGrid from '@/components/ServicesGrid'
import ProjectsPreview from '@/components/ProjectsPreview'
import BestCustomers from '@/components/BestCustomers'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Latest Projects</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Explore some of our recent work that showcases our creativity and expertise.
          </p>
          <ProjectsPreview />
          <div style={{ textAlign: 'center', marginTop: 'var(--spacing-lg)' }}>
            <Link href="/projects" className="btn btn-outline">View All Projects</Link>
          </div>
        </div>
      </section>
      <BestCustomers />
      <Testimonials />
    </>
  )
}

