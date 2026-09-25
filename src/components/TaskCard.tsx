import type {Task} from '../type/index';

interface TaskCardProps { 
    task: Task,
    onStatusChange?: (id: number, currentStatus: string) => void;

}

function TaskCard({task}: TaskCardProps) {
    return (
  <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', margin: '10px 0' }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
      <span style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', background: '#eee' }}>
        {task.status}
      </span>
    </div>
    );
}

export default TaskCard;
