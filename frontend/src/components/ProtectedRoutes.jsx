import { Navigate } from 'react-router-dom'

export function UserRoute({ children }) {
  const token = localStorage.getItem('userToken')
  return token ? children : <Navigate to="/signin" replace />
}

export function AdminRoute({ children }) {
  const token = localStorage.getItem('adminToken')
  return token ? children : <Navigate to="/admin/signin" replace />
}

