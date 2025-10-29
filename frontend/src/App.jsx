import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Purchases from './pages/Purchases'
import AdminSignin from './pages/admin/AdminSignin'
import AdminSignup from './pages/admin/AdminSignup'
import AdminCourses from './pages/admin/AdminCourses'
import CreateCourse from './pages/admin/CreateCourse'
import EditCourse from './pages/admin/EditCourse'
import { AdminRoute, UserRoute } from './components/ProtectedRoutes'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchases" element={<UserRoute><Purchases /></UserRoute>} />

        <Route path="/admin/signin" element={<AdminSignin />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/courses" element={<AdminRoute><AdminCourses /></AdminRoute>} />
        <Route path="/admin/courses/new" element={<AdminRoute><CreateCourse /></AdminRoute>} />
        <Route path="/admin/courses/:id/edit" element={<AdminRoute><EditCourse /></AdminRoute>} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

