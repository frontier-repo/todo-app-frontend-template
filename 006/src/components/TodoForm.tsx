import { useState } from 'react'

type TodoFormProps = {
  onAddTodo: (title: string) => void
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (title.trim() === '') {
      return
    }
    onAddTodo(title) // 親から渡された関数を呼び出す
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="新しいタスクを入力"
          className="input input-bordered flex-1"
        />
        <button type="submit" className="btn btn-primary">
          追加
        </button>
      </div>
    </form>
  )
}

export default TodoForm
