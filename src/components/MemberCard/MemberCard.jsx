// MemberCard - avatar (initials), name, role badge and a small role-colored action button.
import styles from './MemberCard.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: "Leader" | "Member" | "Guest", isActive: boolean}} props.member
 * @param {boolean} props.isSelected - true when this is the selected member (the card gets styles.selected)
 * @param {(memberId: number) => void} props.onSelect - call it with member.id when the card is clicked
 */
export default function MemberCard({ member, isSelected, onSelect }) {
  const initials = member.name
  .split(' ')
  .map(word => word[0])
  .join('')
    return (
 <div
  className={`${styles.card} ${isSelected ? styles.selected : ''} ${!member.isActive ? styles.inactive : ''}`}
  onClick={() => onSelect(member.id)}
>
  <div className={styles.avatar}>
    {initials}
  </div>

  <div className={styles.memberInfo}>
    <h3 className={styles.name}>{member.name}</h3>
    <span className={styles.badge}>{member.role}</span>
  </div>

  <button
    className={`${styles.roleButton} ${styles[member.role.toLowerCase()]}`}
    disabled={!member.isActive}
  >
    Contact
  </button>
</div>
)
 
}
