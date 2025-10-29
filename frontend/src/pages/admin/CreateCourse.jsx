import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api, authHeader } from '../../api/client'

export default function CreateCourse() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setError('')
    try {
      await api.post('/admin/course', { title, description, price: Number(price), imageUrl }, { headers: authHeader('admin') })
      navigate('/admin/courses')
    } catch (err) {
      setError('Failed to create course')
    }
  }

  return (
    <div className="auth-card">
      <h2>Create Course</h2>
      <form onSubmit={submit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Create</button>
        {error && <div className="error small">{error}</div>}
      </form>
    </div>
  )
}

