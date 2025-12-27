import type { Todo } from '../types'

type TodoItemProps = {
  todo: Todo
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

const TodoItem = ({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) => {
  return (
    <li className="flex items-center justify-between p-4 bg-base-200 rounded-lg">
      <div className="flex items-center gap-3 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggleTodo(todo.id)}
          className="checkbox checkbox-primary"
        />
        <div>
          <p className={`font-medium ${todo.completed ? 'line-through text-base-content/50' : ''}`}>
            {todo.title}
          </p>
          <p className="text-sm text-base-content/60">
            {new Date(todo.createdAt).toLocaleString('ja-JP')}
          </p>
        </div>
      </div>
      <button onClick={() => onDeleteTodo(todo.id)} className="btn btn-error btn-sm">
        削除
      </button>
    </li>
  )
}

export default TodoItem
