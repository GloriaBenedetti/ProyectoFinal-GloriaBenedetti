
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Register from '../pages/Register'
import Contact from '../pages/Contact'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default Router
