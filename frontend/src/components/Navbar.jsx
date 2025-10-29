import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()
  const userToken = localStorage.getItem('userToken')
  const adminToken = localStorage.getItem('adminToken')

  function logout() {
    localStorage.removeItem('userToken')
    localStorage.removeItem('adminToken')
    navigate('/')
  }

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="nav-left">
          <Link to="/" className="brand">CourseApp</Link>
          <Link to="/">Home</Link>
          <Link to="/purchases">My Purchases</Link>
          {adminToken && <Link to="/admin/courses">My Courses</Link>}
        </div>
        <div className="nav-right">
          {!userToken && !adminToken && (
            <>
              <Link to="/signin">Sign in</Link>
              <Link to="/signup" className="primary">Sign up</Link>
              <span className="divider">|</span>
              <Link to="/admin/signin">Admin</Link>
            </>
          )}
          {(userToken || adminToken) && (
            <button className="danger" onClick={logout}>Logout</button>
          )}
        </div>
      </div>
    </nav>
  )
}

