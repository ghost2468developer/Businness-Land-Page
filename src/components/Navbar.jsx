import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <h2>Kenneth.dev</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/landing">Landing</Link>
        <Link to="/business">Business</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </nav>
  )
}