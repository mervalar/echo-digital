import Image from 'next/image'
import styles from './ValuesSection.module.css'

const values = [
  {
    title: 'Mission',
    description: 'To empower businesses worldwide with innovative digital solutions that drive growth and create meaningful connections with their audiences.',
    icon: '🎯'
  },
  {
    title: 'Vision',
    description: 'To be the leading creative agency that sets the standard for excellence in digital design and user experience.',
    icon: '👁️'
  },
  {
    title: 'Values',
    description: 'We believe in creativity, integrity, collaboration, and continuous innovation. Every project is an opportunity to push boundaries and exceed expectations.',
    icon: '💎'
  }
]

export default function ValuesSection() {
  return (
    <section className={`${styles.valuesSection} section-black`}>
      <div className={styles.container}>
        <h2 style={{ textAlign: 'center', marginBottom: 'var(--spacing-lg)' }}>Mission, Vision & Values</h2>
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={index} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
        <div className={styles.illustration}>
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
            alt="Creative workspace"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}

