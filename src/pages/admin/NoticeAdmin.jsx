import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiEye, FiEyeOff, FiPlus, FiStar, FiCalendar, FiTag } from 'react-icons/fi';
import api from '../../api';
import { format } from 'date-fns';

const NoticeAdmin = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingNotice, setEditingNotice] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'other',
    isImportant: false,
    expiryDate: '',
  });

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data } = await api.get('/notices');
      setNotices(data);
    } catch (error) {
      toast.error('Failed to fetch notices');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (editingNotice) {
        await api.put(`/notices/${editingNotice._id}`, formData);
        toast.success('Notice updated successfully');
      } else {
        await api.post('/notices', formData);
        toast.success('Notice created successfully');
      }

      setShowModal(false);
      setEditingNotice(null);
      setFormData({ title: '', description: '', category: 'other', isImportant: false, expiryDate: '' });
      fetchNotices();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (notice) => {
    setEditingNotice(notice);
    setFormData({
      title: notice.title,
      description: notice.description,
      category: notice.category,
      isImportant: notice.isImportant,
      expiryDate: notice.expiryDate ? format(new Date(notice.expiryDate), 'yyyy-MM-dd') : '',
    });
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await api.delete(`/notices/${id}`);
        toast.success('Notice deleted successfully');
        fetchNotices();
      } catch (error) {
        toast.error('Failed to delete notice');
      }
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await api.patch(`/notices/${id}/toggle`);
      toast.success(`Notice ${currentStatus ? 'deactivated' : 'activated'} successfully`);
      fetchNotices();
    } catch (error) {
      toast.error('Failed to toggle status');
    }
  };

  const getCategoryColor = (category) => {
    const colors = {
      exam: 'bg-purple-100 text-purple-800',
      holiday: 'bg-green-100 text-green-800',
      event: 'bg-blue-100 text-blue-800',
      result: 'bg-orange-100 text-orange-800',
      other: 'bg-gray-100 text-gray-800',
    };
    return colors[category] || colors.other;
  };

  const categories = [
    { value: 'exam', label: 'Exam' },
    { value: 'holiday', label: 'Holiday' },
    { value: 'event', label: 'Event' },
    { value: 'result', label: 'Result' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <Link
                to="/admin/dashboard"
                className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                ← Dashboard
              </Link>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Notice Management</h1>
                <p className="text-sm text-gray-500 mt-1">Create and manage notices for your institution</p>
              </div>
            </div>
            <button
              onClick={() => {
                setEditingNotice(null);
                setFormData({ title: '', description: '', category: 'other', isImportant: false, expiryDate: '' });
                setShowModal(true);
              }}
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <FiPlus className="mr-2 h-5 w-5" /> Add New Notice
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Total Notices</p>
            <p className="text-2xl font-bold text-gray-900 mt-2">{notices.length}</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Active Notices</p>
            <p className="text-2xl font-bold text-green-600 mt-2">
              {notices.filter(n => n.isActive).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Important Notices</p>
            <p className="text-2xl font-bold text-yellow-600 mt-2">
              {notices.filter(n => n.isImportant).length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-sm font-medium text-gray-600">Expiring Soon</p>
            <p className="text-2xl font-bold text-orange-600 mt-2">
              {notices.filter(n => {
                if (!n.expiryDate) return false;
                const expiryDate = new Date(n.expiryDate);
                const today = new Date();
                const diffDays = Math.ceil((expiryDate - today) / (1000 * 60 * 60 * 24));
                return diffDays <= 7 && diffDays > 0;
              }).length}
            </p>
          </div>
        </div>

        {/* Notices List */}
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gray-50">
            <h3 className="text-lg font-medium text-gray-900">All Notices</h3>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {notices.map((notice) => (
                <li key={notice._id} className="px-6 py-5 hover:bg-gray-50 transition-colors duration-200">
                  <div className="flex items-start space-x-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center mb-2">
                        <h4 className="text-base font-semibold text-gray-900 truncate">
                          {notice.title}
                        </h4>
                        {notice.isImportant && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                            <FiStar className="mr-1 h-3 w-3" /> Important
                          </span>
                        )}
                      </div>
                      
                      <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                        {notice.description}
                      </p>
                      
                      <div className="flex flex-wrap items-center gap-3 text-xs">
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-medium ${getCategoryColor(notice.category)}`}>
                          <FiTag className="mr-1 h-3 w-3" />
                          {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                        </span>
                        
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full font-medium ${
                          notice.isActive 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {notice.isActive ? 'Active' : 'Inactive'}
                        </span>
                        
                        <span className="inline-flex items-center text-gray-500">
                          <FiCalendar className="mr-1 h-3 w-3" />
                          Published: {format(new Date(notice.createdAt), 'dd MMM yyyy')}
                        </span>
                        
                        {notice.expiryDate && (
                          <span className="inline-flex items-center text-gray-500">
                            <FiCalendar className="mr-1 h-3 w-3" />
                            Expires: {format(new Date(notice.expiryDate), 'dd MMM yyyy')}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleToggleStatus(notice._id, notice.isActive)}
                        className={`p-2 rounded-lg transition-colors duration-200 ${
                          notice.isActive 
                            ? 'text-green-600 hover:bg-green-50' 
                            : 'text-gray-400 hover:bg-gray-100'
                        }`}
                        title={notice.isActive ? 'Deactivate' : 'Activate'}
                      >
                        {notice.isActive ? <FiEye className="h-5 w-5" /> : <FiEyeOff className="h-5 w-5" />}
                      </button>
                      <button
                        onClick={() => handleEdit(notice)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200"
                        title="Edit"
                      >
                        <FiEdit2 className="h-5 w-5" />
                      </button>
                      <button
                        onClick={() => handleDelete(notice._id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                        title="Delete"
                      >
                        <FiTrash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
              
              {notices.length === 0 && (
                <li className="px-6 py-16 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-500">
                    <FiCalendar className="h-12 w-12 mb-4 text-gray-400" />
                    <p className="text-lg font-medium text-gray-900 mb-1">No notices found</p>
                    <p className="text-sm text-gray-500 mb-4">Get started by creating your first notice</p>
                    <button
                      onClick={() => {
                        setEditingNotice(null);
                        setFormData({ title: '', description: '', category: 'other', isImportant: false, expiryDate: '' });
                        setShowModal(true);
                      }}
                      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      <FiPlus className="mr-2 h-5 w-5" /> Add New Notice
                    </button>
                  </div>
                </li>
              )}
            </ul>
          )}
        </div>
      </main>

      {/* Modal for Add/Edit */}
      {showModal && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-6 pt-6 pb-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {editingNotice ? 'Edit Notice' : 'Create New Notice'}
                  </h3>
                  <p className="text-sm text-gray-500 mb-6">
                    {editingNotice ? 'Update the notice details below' : 'Fill in the information below to create a new notice'}
                  </p>

                  <div className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="title"
                        required
                        value={formData.title}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                        placeholder="Enter notice title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Description <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="description"
                        rows="5"
                        required
                        value={formData.description}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                        placeholder="Enter detailed description of the notice"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                      >
                        {categories.map((cat) => (
                          <option key={cat.value} value={cat.value}>
                            {cat.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        name="isImportant"
                        id="isImportant"
                        checked={formData.isImportant}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded transition-colors duration-200"
                      />
                      <label htmlFor="isImportant" className="ml-3 block text-sm text-gray-700">
                        Mark as Important
                      </label>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                      <input
                        type="date"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split('T')[0]}
                        className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-2.5 px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm transition-colors duration-200"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2.5 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    {editingNotice ? 'Update Notice' : 'Create Notice'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setEditingNotice(null);
                    }}
                    className="w-full sm:w-auto inline-flex justify-center items-center px-6 py-2.5 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NoticeAdmin;