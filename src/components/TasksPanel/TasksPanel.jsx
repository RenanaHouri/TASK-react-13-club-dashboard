// TasksPanel - the tasks of the selected member, with messages for the empty states.
import styles from './TasksPanel.module.css'

/**
 * @param {object} props
 * @param {{id: number, name: string, role: string, isActive: boolean} | null} props.member - the selected member, or null
 * @param {Array<{id: number, title: string, done: boolean, assignedTo: number}>} props.tasks - the tasks of the selected member
 * @param {(taskId: number) => void} props.onToggleTask - call it with task.id when a task checkbox is clicked
 */
export default function TasksPanel({ member, tasks, onToggleTask }) {
  if (member === null) {
  return <p>Select a member to see their tasks</p>
}
  if (tasks.length === 0) {
  return <p>No tasks yet</p>
}
return (
  <div className={styles.tasksPanel}>
    <h2>Tasks of {member.name}</h2>

    <div className={styles.tasks}>
      {tasks.map(task => (
        <label key={task.id} className={styles.task}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggleTask(task.id)}
          />
          <span className={task.done ? styles.done : ''}>
            {task.title}
          </span>
        </label>
      ))}
    </div>
  </div>
)
}
