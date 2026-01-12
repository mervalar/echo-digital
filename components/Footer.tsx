'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Thank you for subscribing!')
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h4>Echo Digital</h4>
            <p>We are a creative design agency dedicated to transforming ideas into exceptional digital experiences.</p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span>f</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span>t</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <span>i</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span>in</span>
              </a>
            </div>
          </div>
          <div className={styles.footerSection}>
            <h4>Quick Links</h4>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/services">Services</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Services</h4>
            <Link href="/services">Brand Identity</Link>
            <Link href="/services">Website Design</Link>
            <Link href="/services">UI/UX Design</Link>
            <Link href="/services">Video Marketing</Link>
          </div>
          <div className={styles.footerSection}>
            <h4>Newsletter</h4>
            <p>Subscribe to get updates on our latest projects and insights.</p>
            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-secondary">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2024 Echo Digital. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

