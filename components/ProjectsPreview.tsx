import Image from 'next/image'
import styles from './ProjectsPreview.module.css'

const projects = [
  {
    id: 1,
    title: 'EcoTech Brand Identity',
    description: 'Complete brand redesign for sustainable technology company',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop'
  },
  {
    id: 2,
    title: 'Fashion E-Commerce Platform',
    description: 'Modern e-commerce website with seamless shopping experience',
    image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop'
  },
  {
    id: 3,
    title: 'Healthcare Mobile App',
    description: 'User-friendly mobile application for healthcare management',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop'
  },
  {
    id: 4,
    title: 'Restaurant Website',
    description: 'Beautiful website design for fine dining restaurant',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=400&fit=crop'
  },
  {
    id: 5,
    title: 'FinTech Dashboard',
    description: 'Complex financial dashboard with data visualization',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
  },
  {
    id: 6,
    title: 'Travel Agency Platform',
    description: 'Comprehensive booking platform for travel services',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop'
  }
]

export default function ProjectsPreview() {
  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <div key={project.id} className={styles.projectCard}>
          <Image
            src={project.image}
            alt={project.title}
            width={600}
            height={400}
            className={styles.projectImage}
          />
          <div className={styles.projectOverlay}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

