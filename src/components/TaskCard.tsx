import type {Task} from '../type/index';

interface TaskCardProps { 
    task: Task,
    onStatusChange: () => void;

}

function TaskCard({task, onStatusChange}: TaskCardProps) {
  const getBadgeColor = () => {
    switch (task.status) {
      case 'todo': return '#ffeeba'; // Yellow tint
      case 'doing': return '#b8daff'; // Blue tint
      case 'done': return '#c3e6cb'; // Green tint
      default: return '#eee';
    }
  };

    return (
  <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', margin: '10px 0', background: '#fff' }}>
      <h4 style={{ margin: '0 0 10px 0' }}>{task.title}</h4>
      <p style={{ margin: '0 0 15px 0', color: '#555', fontSize: '14px' }}>{task.description}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span 
          onClick={onStatusChange}
          style={{ 
            fontSize: '12px', 
            padding: '4px 8px', 
            borderRadius: '4px', 
            background: getBadgeColor(),
            cursor: task.status === 'done' ? 'not-allowed' : 'pointer',
            fontWeight: 'bold',
            userSelect: 'none'
          }}
        >
          {task.status.toUpperCase()} {task.status !== 'done' && '→'}
        </span>
      </div>
    </div>
    );
}

export default TaskCard;
