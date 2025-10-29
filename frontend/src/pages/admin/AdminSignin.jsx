import { useState } from 'react'
import { api, setAdminToken } from '../../api/client'
import { useNavigate, Link } from 'react-router-dom'

export default function AdminSignin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setError('')
    try {
      const r = await api.post('/admin/signin', { email, password })
      setAdminToken(r.data.token)
      navigate('/admin/courses')
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="auth-card">
      <h2 className="card-title">Admin Sign in</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" style={{ width: '100%' }}>Sign in</button>
        {error && <div className="error small">{error}</div>}
      </form>
      <div className="small">
        New admin? <Link to="/admin/signup">Create account</Link>
      </div>
    </div>
  )
}

