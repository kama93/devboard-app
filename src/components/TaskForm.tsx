interface TaskFormProps {
  onAddTask: (title: string, description: string, priority: 'low' | 'medium' | 'high') => void;
}

function TaskForm({ onAddTask }: TaskFormProps) {
  async function formAction(formData: FormData) {
    const title = (formData.get("title") as string) || "";
    const description = (formData.get("description") as string) || "";
    const priority = (formData.get("priority") as 'low' | 'medium' | 'high') || "low";

    if (!title.trim()) return;
    onAddTask(title, description, priority);
  }

  return (
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', margin: '10px 0' }}>
      <form action={formAction}>
        <input type="text" id="title" name="title" placeholder="task" /><br />
        <input type="text" id="description" name="description" placeholder="description" /><br />
        <select name="priority" style={{ padding: '4px', margin: '8px' }}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select><br/>
        <button type='submit' style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', background: '#eee', margin: '8px', cursor: 'pointer' }}>ADD</button>
      </form>
    </div>
  )
}

export default TaskForm;