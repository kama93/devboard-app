export interface Task {
    id: number,
    title: string,
    description: string,
    createdAt: number,
    status: 'todo' | 'doing' | 'done'
}