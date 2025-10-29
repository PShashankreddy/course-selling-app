import { useEffect, useState } from 'react'
import { api, authHeader } from '../api/client'
import CourseCard from '../components/CourseCard'
import SkeletonCard from '../components/SkeletonCard'
import EmptyState from '../components/EmptyState'

export default function Purchases() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/user/purchases', { headers: authHeader('user') })
      .then(r => setCourses(r.data.courses || []))
      .catch(() => setError('Failed to load purchases'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="grid">
      {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  )
  if (error) return <div className="center error">{error}</div>

  if (!courses.length) return <EmptyState title="No purchases yet" subtitle="Buy a course to see it here" />

  return (
    <div className="grid">
      {courses.map(course => (
        <CourseCard key={course._id} course={course} />
      ))}
    </div>
  )
}

