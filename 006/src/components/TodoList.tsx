import type { Todo } from '../types'
import TodoItem from './TodoItem'

type TodoListProps = {
  todos: Todo[]
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return <div className="text-center py-8 text-base-content/60">タスクがありません</div>
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleTodo={onToggleTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </ul>
  )
}

export default TodoList
