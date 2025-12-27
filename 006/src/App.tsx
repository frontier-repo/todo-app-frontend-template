import { useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import type { Todo } from './types'

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAddTodo = (title: string) => {
    const newTodo: Todo = {
      id: String(todos.length + 1),
      title,
      completed: false,
      createdAt: new Date().toISOString(),
    }
    setTodos([...todos, newTodo])
  }

  const handleToggleTodo = (id: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-base-100">
      <div className="container mx-auto max-w-2xl p-4">
        <h1 className="text-4xl font-bold text-center mb-8">Todo App</h1>
        <TodoForm onAddTodo={handleAddTodo} />
        <TodoList todos={todos} onToggleTodo={handleToggleTodo} onDeleteTodo={handleDeleteTodo} />
      </div>
    </div>
  )
}

export default App
