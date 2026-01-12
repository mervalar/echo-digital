'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>E</div>
          <span>Echo Digital</span>
        </Link>
        <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.active : ''}`}>
          <li>
            <Link 
              href="/about" 
              className={pathname === '/about' ? styles.active : ''}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/services" 
              className={pathname === '/services' ? styles.active : ''}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link 
              href="/projects" 
              className={pathname === '/projects' ? styles.active : ''}
              onClick={closeMobileMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className={pathname === '/contact' ? styles.active : ''}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <button 
          className={styles.mobileMenuToggle}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
    </nav>
  )
}

