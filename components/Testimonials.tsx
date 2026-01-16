'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Testimonials.module.css'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechCorp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Echo Digital transformed our brand identity completely. Their creative approach and attention to detail exceeded our expectations. Highly recommended!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Founder, FashionHub',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Working with Echo Digital was a game-changer. They delivered a stunning website that perfectly captures our brand essence. Professional and innovative!'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Marketing Director, GreenEnergy',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'The team at Echo Digital is exceptional. They understood our vision and brought it to life beautifully. Our new website has significantly increased engagement.'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'CTO, HealthPlus',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Outstanding work! Echo Digital created an intuitive UI/UX design that our users love. The entire process was smooth and collaborative.'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Brand Manager, EduTech',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Amazing results! Echo Digital helped us create a cohesive brand identity that resonates with our target audience. Their expertise is unmatched.'
  },
  {
    id: 6,
    name: 'James Taylor',
    role: 'Director, FinanceFlow',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop',
    rating: 5,
    comment: 'Professional, creative, and results-driven. Echo Digital delivered beyond our expectations. Our new platform has received incredible feedback.'
  }
]

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className={styles.stars}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`${styles.star} ${index < rating ? styles.filled : ''}`}
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Responsive testimonials per view
  const [testimonialsPerView, setTestimonialsPerView] = useState(3)
  
  useEffect(() => {
    const updateTestimonialsPerView = () => {
      if (window.innerWidth <= 768) {
        setTestimonialsPerView(1)
      } else if (window.innerWidth <= 968) {
        setTestimonialsPerView(2)
      } else {
        setTestimonialsPerView(3)
      }
    }
    
    updateTestimonialsPerView()
    window.addEventListener('resize', updateTestimonialsPerView)
    return () => window.removeEventListener('resize', updateTestimonialsPerView)
  }, [])
  
  const maxIndex = Math.max(0, testimonials.length - testimonialsPerView)

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + testimonialsPerView)

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What They Say About Us</h2>
        <p className={styles.sectionDescription}>
          Don't just take our word for it - hear from our satisfied clients
        </p>
        
        <div className={styles.testimonialsWrapper}>
          <button 
            className={styles.navButton}
            onClick={prevTestimonials}
            aria-label="Previous testimonials"
          >
            ←
          </button>
          
          <div className={styles.testimonialsGrid}>
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <StarRating rating={testimonial.rating} />
                <p className={styles.comment}>{testimonial.comment}</p>
                <div className={styles.author}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.authorImage}
                  />
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button 
            className={styles.navButton}
            onClick={nextTestimonials}
            aria-label="Next testimonials"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}
