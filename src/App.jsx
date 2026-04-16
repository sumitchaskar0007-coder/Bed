import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Notice from "./pages/Notice";
// Components
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import ProtectedRoute from './components/ProtectedRoutes';
import Blog from './pages/Blog.jsx';
import BlogAdmin from './pages/admin/BlogAdmin.jsx';

// Public pages
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Admission from './pages/Admission.jsx';
import Academics from './pages/Academics.jsx';
import Gallery from './pages/Gallery.jsx';
import Career from './pages/Career.jsx';
import Library from './pages/Library.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';
import Facilities from './pages/Facilities.jsx';
import UdanBook from "./pages/UdanBook";
import Admissions from './pages/Admission.jsx';
import Course from './pages/Course.jsx';
import Student from './pages/Student.jsx';
import NAAC from './pages/Naac.jsx';
import BlogList from './pages/BlogList.jsx';
// Admin pages
import NoticeAdmin from './pages/admin/NoticeAdmin.jsx';
import AdminLogin from './pages/admin/AdminLogin.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import GalleryAdmin from './pages/admin/GalleryAdmin.jsx';
import CareerAdmin from './pages/admin/CareerAdmin.jsx';
export default function App() {
  const [enquiryOpen, setEnquiryOpen] = React.useState(false);

  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col">
        
        {/* Header */}
        <Header onEnquiryClick={() => setEnquiryOpen(true)} />

        {/* Main Routes */}
        <main className="flex-1">
          <Routes>
            {/* ---------------- PUBLIC ROUTES ---------------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/admissions" element={<Admission />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/library" element={<Library />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/udan/:id" element={<UdanBook />} />
            <Route path="/admission" element={<Admissions />} />
            <Route path="/courses" element={<Course />} />
            <Route path="/students" element={<Student />} />
            <Route path="/naac" element={<NAAC />} />
             <Route path="/" element={<Gallery />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/notice" element={<Notice />} />
        <Route path="/blog" element={<BlogList />} />
<Route path="/blog/:slug" element={<Blog />} />
            {/* ---------------- ADMIN ROUTES ---------------- */}
            <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/gallery"
          element={
            <ProtectedRoute>
              <GalleryAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/careers"
          element={
            <ProtectedRoute>
              <CareerAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/notices"
          element={
            <ProtectedRoute>
              <NoticeAdmin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/blogs"
          element={
            <ProtectedRoute>
              <BlogAdmin />
            </ProtectedRoute>
          }
        />


            {/* ---------------- REDIRECTS ---------------- */}
            <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Enquiry Button */}

        {/* Enquiry Modal */}
      </div>
    </AuthProvider>
  );
}
