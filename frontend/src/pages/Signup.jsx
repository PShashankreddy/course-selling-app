import { useState } from 'react'
import { api } from '../api/client'
import { useNavigate, Link } from 'react-router-dom'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [error, setError] = useState('')
  const [ok, setOk] = useState('')
  const navigate = useNavigate()

  async function submit(e) {
    e.preventDefault()
    setError('')
    setOk('')
    try {
      await api.post('/user/signup', { email, password, firstName, lastName })
      setOk('Signup succeeded. Please sign in.')
      setTimeout(() => navigate('/signin'), 800)
    } catch (err) {
      setError('Signup failed')
    }
  }

  return (
    <div className="auth-card">
      <h2 className="card-title">User Sign up</h2>
      <form onSubmit={submit}>
        <input placeholder="First name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input placeholder="Last name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" style={{ width: '100%' }}>Create account</button>
        {error && <div className="error small">{error}</div>}
        {ok && <div className="success small">{ok}</div>}
      </form>
      <div className="small">
        Already have an account? <Link to="/signin">Sign in</Link>
      </div>
    </div>
  )
}

