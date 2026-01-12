import Image from 'next/image'
import styles from './TeamShowcase.module.css'

const teamMembers = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Lead Designer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'UX Strategist',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
  },
  {
    id: 4,
    name: 'David Rodriguez',
    role: 'Frontend Developer',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
  }
]

export default function TeamShowcase() {
  return (
    <div className={styles.teamGrid}>
      {teamMembers.map((member) => (
        <div key={member.id} className={styles.teamMember}>
          <Image
            src={member.image}
            alt={member.name}
            width={400}
            height={400}
            className={styles.memberImage}
          />
          <h4>{member.name}</h4>
          <p className={styles.role}>{member.role}</p>
        </div>
      ))}
    </div>
  )
}

