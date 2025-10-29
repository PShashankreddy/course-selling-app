import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { api, authHeader } from '../../api/client'

export default function EditCourse() {
  const { id } = useParams()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    // Load all admin courses and find this one (backend lacks single course endpoint)
    api.get('/admin/course/bulk', { headers: authHeader('admin') })
      .then(r => {
        const c = (r.data.courses || []).find(x => x._id === id)
        if (!c) return
        setTitle(c.title || '')
        setDescription(c.description || '')
        setPrice(String(c.price ?? ''))
        setImageUrl(c.imageUrl || '')
      })
  }, [id])

  async function submit(e) {
    e.preventDefault()
    setError('')
    try {
      await api.put('/admin/course', { courseId: id, title, description, price: Number(price), imageUrl }, { headers: authHeader('admin') })
      navigate('/admin/courses')
    } catch (err) {
      setError('Failed to update course')
    }
  }

  return (
    <div className="auth-card">
      <h2>Edit Course</h2>
      <form onSubmit={submit}>
        <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <input placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        <input placeholder="Price" type="number" value={price} onChange={e => setPrice(e.target.value)} />
        <textarea placeholder="Description" value={description} onChange={e => setDescription(e.target.value)} />
        <button type="submit">Save</button>
        {error && <div className="error small">{error}</div>}
      </form>
    </div>
  )
}

