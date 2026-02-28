import { Navigate } from 'react-router-dom'

// Simulate authentication
const isAuthenticated = false // change to true to test access

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />
  }
  return children
}