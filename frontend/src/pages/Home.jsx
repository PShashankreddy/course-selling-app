import { useEffect, useState } from 'react'
import { api, authHeader } from '../api/client'
import CourseCard from '../components/CourseCard'
import SkeletonCard from '../components/SkeletonCard'

export default function Home() {
  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/course/preview')
      .then(r => setCourses(r.data.courses || []))
      .catch(() => setError('Failed to load courses'))
      .finally(() => setLoading(false))
  }, [])

  async function handlePurchase(courseId) {
    try {
      await api.post('/course/purchase', { courseId }, { headers: authHeader('user') })
      alert('Purchase successful')
    } catch (e) {
      alert('Please sign in as a user to purchase')
    }
  }

  if (loading) return (
    <div>
      <Hero />
      <div className="grid">
        {Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    </div>
  )
  if (error) return <div className="center error">{error}</div>

  return (
    <div>
      <Hero />
      <div className="grid">
        {courses.map(c => (
          <CourseCard key={c._id} course={c}>
            <button onClick={() => handlePurchase(c._id)}>Buy</button>
          </CourseCard>
        ))}
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-title">Level up your skills</div>
      <div className="hero-sub">Curated courses by creators. Simple, fast, and elegant.</div>
    </section>
  )
}

