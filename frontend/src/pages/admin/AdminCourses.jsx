import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { api, authHeader } from '../../api/client'

export default function AdminCourses() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/admin/course/bulk', { headers: authHeader('admin') })
      .then(r => setCourses(r.data.courses || []))
      .catch(() => setError('Failed to load your courses'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="center">Loading...</div>
  if (error) return <div className="center error">{error}</div>

  return (
    <div>
      <div className="row space-between">
        <h2>Your Courses</h2>
        <Link className="button" to="/admin/courses/new">Create Course</Link>
      </div>
      <div className="grid">
        {courses.map(c => (
          <div key={c._id} className="card">
            <img src={c.imageUrl} alt={c.title} />
            <div className="card-body">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="row">
                <span className="price">₹{c.price}</span>
                <Link className="button" to={`/admin/courses/${c._id}/edit`}>Edit</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

