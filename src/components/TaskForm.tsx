interface TaskFormProps {
  onAddTask: (title: string, description: string) => void;
}

function TaskForm ({ onAddTask }: TaskFormProps) {
    async function formAction(formData: FormData) {
    const title = (formData.get("title") as string) || "";
    const description = (formData.get("description") as string) || "";

    if (!title.trim()) return;
    onAddTask(title, description);
  }

    return ( 
    <div style={{ padding: '15px', border: '1px solid #ddd', borderRadius: '6px', margin: '10px 0' }}>
            <form action={formAction}>
                <input type="text" id="title" name="title" placeholder="task"/><br/>
                <input type="text" id="description" name="description" placeholder="description"  /><br/>
                <button type='submit' style={{ fontSize: '12px', padding: '4px 8px', borderRadius: '4px', background: '#eee', margin: '8px', cursor: 'pointer' }}>ADD</button>
            </form>
        </div>
    )
}

export default TaskForm;