import Image from 'next/image'
import styles from './page.module.css'
import TeamShowcase from '@/components/TeamShowcase'
import ValuesSection from '@/components/ValuesSection'

export default function About() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>About Echo Digital</h1>
          <p className={styles.subtitle}>
            We are a creative design agency dedicated to transforming ideas into exceptional digital experiences.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <span className={styles.sectionLabel}>OUR STORY</span>
              <h2>Building Digital Excellence Since Day One</h2>
              <p>
                Founded with a vision to bridge creativity and technology, Echo Digital has been at the forefront 
                of digital innovation for over a decade. We started as a small team of passionate designers and 
                developers who believed that every brand deserves a unique digital presence.
              </p>
              <p>
                Today, we are a global agency with a diverse team of 50+ creative professionals, serving clients 
                across continents. Our journey has been marked by continuous learning, innovation, and an 
                unwavering commitment to excellence.
              </p>
              <p>
                We've had the privilege of working with startups, established businesses, and Fortune 500 
                companies, helping them achieve their digital goals through thoughtful design and strategic 
                thinking.
              </p>
            </div>
            <div className={styles.storyImage}>
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                alt="Creative team collaboration"
                width={800}
                height={600}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </section>

      <ValuesSection />

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-md)' }}>Our Team</h2>
          <p style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto var(--spacing-lg)' }}>
            Meet the creative minds behind Echo Digital
          </p>
          <TeamShowcase />
        </div>
      </section>
    </>
  )
}

