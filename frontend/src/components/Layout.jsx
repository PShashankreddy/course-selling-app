import Navbar from './Navbar'

function Footer() {
  return (
    <footer className="footer">
      <div className="container row space-between">
        <span className="muted">© {new Date().getFullYear()} CourseApp</span>
        <span className="muted">Built with ❤</span>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  return (
    <div className="app-container">
      <Navbar />
      <main className="container page-container">
        {children}
      </main>
      <Footer />
    </div>
  )
}

