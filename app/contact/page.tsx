'use client'

import Image from 'next/image'
import styles from './page.module.css'
import ContactForm from '@/components/ContactForm'

export default function Contact() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Get In Touch</h1>
          <p className={styles.subtitle}>
            Let's discuss your project and bring your vision to life
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <div className={styles.contactImage}>
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=600&fit=crop"
                alt="Contact Us"
                width={600}
                height={600}
                className={styles.image}
                priority
              />
            </div>

            <div className={styles.contactCard}>
              <h2>Send Us a Message</h2>
              
              <ContactForm />
              
              <div className={styles.divider}></div>
              
              <div className={styles.contactInfo}>
                <div className={styles.contactRow}>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📞</span>
                    <span className={styles.contactText}>+1 (555) 123-4567</span>
                  </div>
                  <div className={styles.contactItem}>
                    <span className={styles.contactIcon}>📧</span>
                    <span className={styles.contactText}>hello@echodigital.com</span>
                  </div>
                </div>
                
                <div className={styles.socialLinks}>
                  <a 
                    href="https://linkedin.com/company/echodigital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="LinkedIn"
                  >
                    <span>in</span>
                  </a>
                  <a 
                    href="https://discord.gg/echodigital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Discord"
                  >
                    <span>D</span>
                  </a>
                  <a 
                    href="https://upwork.com/agencies/echodigital" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Upwork"
                  >
                    <span>U</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

