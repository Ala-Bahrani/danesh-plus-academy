import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { BlogListPage } from './components/BlogListPage'
import {CoursesPage} from './pages/Course.tsx'
import {ContactPage} from './pages/Contact.tsx'
import {Categories} from './pages/Categories.tsx'
import {Teach} from './pages/Teach.tsx'
import {Auth} from './pages/Auth.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/courses" element={<CoursesPage/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/teach" element={<Teach/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/login" element={<Auth/>} />
      </Routes>
    </Router>
  </StrictMode>,
)