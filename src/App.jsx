// src/App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Profile from './pages/Profile.jsx'
import Blog from './pages/Blog.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'

function App() {
  return (
    <div>
      <header>
        <nav style={{ marginBottom: '20px' }}>
          <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '10px' }}>Profile</Link>
          <Link to="/blog/1">Blog Post 1</Link>
        </nav>
      </header>

      <main>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<Home />} />

          {/* Protected Route */}
          <Route
            path="/profile/*"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Dynamic Route */}
          <Route path="/blog/:id" element={<Blog />} />

          {/* Fallback Route */}
          <Route path="*" element={<h1>404 - Page Not Found</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App