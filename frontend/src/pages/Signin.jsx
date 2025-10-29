import { useState } from 'react'
import { api, setUserToken } from '../api/client'
import { useNavigate, Link } from 'react-router-dom'

export default function Signin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setError('')
    try {
      const r = await api.post('/user/signin', { email, password })
      setUserToken(r.data.token)
      navigate('/')
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className="auth-card">
      <h2 className="card-title">User Sign in</h2>
      <form onSubmit={submit}>
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" style={{ width: '100%' }}>Sign in</button>
        {error && <div className="error small">{error}</div>}
      </form>
      <div className="small">
        New here? <Link to="/signup">Create an account</Link>
      </div>
    </div>
  )
}

