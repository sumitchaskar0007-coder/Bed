import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiImage, FiFileText, FiBriefcase, FiEdit } from 'react-icons/fi';
import api from '../../api';
import toast from 'react-hot-toast';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    gallery: 0,
    notices: 0,
    careers: 0,
    blogs: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [galleryRes, noticesRes, careersRes, blogsRes] = await Promise.all([
        api.get('/gallery?isActive=true'),
        api.get('/notices?isActive=true'),
        api.get('/careers?isActive=true'),
        api.get('/blogs?isActive=true'),
      ]);

      setStats({
        gallery: galleryRes.data.length,
        notices: noticesRes.data.length,
        careers: careersRes.data.length,
        blogs: blogsRes.data.length,
      });
    } catch (error) {
      toast.error('Failed to fetch statistics');
    } finally {
      setLoading(false);
    }
  };

  const adminInfo = JSON.parse(localStorage.getItem('adminInfo') || '{}');

  const cards = [
    {
      title: 'Gallery',
      count: stats.gallery,
      icon: FiImage,
      color: 'bg-purple-500',
      link: '/admin/gallery',
    },
    {
      title: 'Notices',
      count: stats.notices,
      icon: FiFileText,
      color: 'bg-blue-500',
      link: '/admin/notices',
    },
    {
      title: 'Careers',
      count: stats.careers,
      icon: FiBriefcase,
      color: 'bg-green-500',
      link: '/admin/careers',
    },
    {
      title: 'Blogs',
      count: stats.blogs,
      icon: FiEdit,
      color: 'bg-orange-500',
      link: '/admin/blogs',
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminInfo');
    window.location.href = '/admin/login';
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {adminInfo.username}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card) => (
              <Link
                key={card.title}
                to={card.link}
                className="bg-white overflow-hidden shadow rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <card.icon className={`h-6 w-6 text-white ${card.color} p-1 rounded`} />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {card.title}
                        </dt>
                        <dd className="text-lg font-semibold text-gray-900">
                          {loading ? '...' : card.count}
                        </dd>
                      </dl>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;