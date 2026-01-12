'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import styles from './ProjectsGrid.module.css'

interface Project {
  id: number
  title: string
  description: string
  category: string
  image: string
}

const allProjects: Project[] = [
  {
    id: 1,
    title: 'EcoTech Brand Identity',
    description: 'Complete brand redesign for sustainable technology company',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Fashion E-Commerce Platform',
    description: 'Modern e-commerce website with seamless shopping experience',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    description: 'User-friendly mobile application for healthcare management',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Restaurant Website',
    description: 'Beautiful website design for fine dining restaurant',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'FinTech Dashboard',
    description: 'Complex financial dashboard with data visualization',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Travel Agency Platform',
    description: 'Comprehensive booking platform for travel services',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 7,
    title: 'Tech Startup Branding',
    description: 'Complete brand identity for innovative tech startup',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop'
  },
  {
    id: 8,
    title: 'Product Launch Video',
    description: 'Compelling product launch video campaign',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop'
  },
  {
    id: 9,
    title: 'Fitness App UI/UX',
    description: 'Intuitive fitness tracking application design',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop'
  },
  {
    id: 10,
    title: 'Luxury Hotel Website',
    description: 'Elegant website design for luxury hotel chain',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop'
  },
  {
    id: 11,
    title: 'Corporate Branding Package',
    description: 'Complete corporate identity and brand guidelines',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop'
  },
  {
    id: 12,
    title: 'Online Store Platform',
    description: 'Full-featured e-commerce solution with payment integration',
    category: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
  },
  {
    id: 13,
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly banking application design',
    category: 'UI/UX',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  },
  {
    id: 14,
    title: 'Brand Video Campaign',
    description: 'Creative brand storytelling through video content',
    category: 'Video',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&h=400&fit=crop'
  },
  {
    id: 15,
    title: 'Portfolio Website',
    description: 'Modern portfolio website for creative professional',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
  }
]

interface ProjectsGridProps {
  filter: string
}

export default function ProjectsGrid({ filter }: ProjectsGridProps) {
  const [projects, setProjects] = useState<Project[]>(allProjects)
  const [currentPage, setCurrentPage] = useState(1)
  const projectsPerPage = 9

  useEffect(() => {
    if (filter === 'All') {
      setProjects(allProjects)
    } else {
      setProjects(allProjects.filter(project => project.category === filter))
    }
    setCurrentPage(1) // Reset to first page when filter changes
  }, [filter])

  // Calculate pagination
  const totalPages = Math.ceil(projects.length / projectsPerPage)
  const startIndex = (currentPage - 1) * projectsPerPage
  const endIndex = startIndex + projectsPerPage
  const currentProjects = projects.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Don't show pagination if 9 or fewer projects
  const showPagination = projects.length > projectsPerPage

  return (
    <>
      <div className={styles.projectsGrid}>
        {currentProjects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <Image
              src={project.image}
              alt={project.title}
              width={600}
              height={400}
              className={styles.projectImage}
            />
            <div className={styles.projectOverlay}>
              <span className={styles.projectCategory}>{project.category}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      {showPagination && (
        <div className={styles.pagination}>
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            ←
          </button>
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`${styles.paginationButton} ${currentPage === page ? styles.active : ''}`}
              onClick={() => handlePageChange(page)}
              aria-label={`Go to page ${page}`}
            >
              {page}
            </button>
          ))}
          
          <button
            className={styles.paginationButton}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            →
          </button>
        </div>
      )}
    </>
  )
}

