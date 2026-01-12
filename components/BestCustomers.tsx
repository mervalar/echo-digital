'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from './BestCustomers.module.css'

const customers = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'FashionHub',
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'GreenEnergy',
    logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  },
  {
    id: 4,
    name: 'HealthPlus',
    logo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
  },
  {
    id: 5,
    name: 'EduTech',
    logo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop'
  },
  {
    id: 6,
    name: 'FoodieApp',
    logo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop'
  },
  {
    id: 7,
    name: 'FinanceFlow',
    logo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop'
  },
  {
    id: 8,
    name: 'TravelWise',
    logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: 9,
    name: 'InnovateCo',
    logo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 10,
    name: 'DesignStudio',
    logo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
]

export default function BestCustomers() {
  // Split customers into two rows for different animation directions
  const firstRow = customers.slice(0, 5)
  const secondRow = customers.slice(5, 10)

  return (
    <section className={styles.customersSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Best Customers</h2>
        
        <div className={styles.customersContainer}>
          <div className={`${styles.customerRow} ${styles.rowLeft}`}>
            {[...firstRow, ...firstRow].map((customer, index) => (
              <div key={`${customer.id}-${index}`} className={styles.customerCard}>
                <div className={styles.customerLogo}>
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={50}
                    height={50}
                    className={styles.logoImage}
                  />
                </div>
                <span className={styles.customerName}>{customer.name}</span>
              </div>
            ))}
          </div>

          <div className={`${styles.customerRow} ${styles.rowRight}`}>
            {[...secondRow, ...secondRow].map((customer, index) => (
              <div key={`${customer.id}-${index}`} className={styles.customerCard}>
                <div className={styles.customerLogo}>
                  <Image
                    src={customer.logo}
                    alt={customer.name}
                    width={50}
                    height={50}
                    className={styles.logoImage}
                  />
                </div>
                <span className={styles.customerName}>{customer.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.ctaContainer}>
          <Link href="/contact" className={styles.talkButton}>Talk with Us</Link>
        </div>
      </div>
    </section>
  )
}

