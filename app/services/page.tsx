import Link from 'next/link'
import styles from './page.module.css'
import ServiceList from '@/components/ServiceList'

export default function Services() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <ServiceList />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.ctaSection}>
            <h2>Want to Start Your Project?</h2>
            <p>
              Let's work together to create something amazing. Get in touch today and let's discuss 
              how we can help bring your vision to life.
            </p>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

