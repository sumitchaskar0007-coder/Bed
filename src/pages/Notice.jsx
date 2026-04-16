import React, { useState, useEffect } from 'react';
import api from '../api';
import { format } from 'date-fns';
import { FiStar } from 'react-icons/fi';

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const { data } = await api.get('/notices?isActive=true');
      setNotices(data);
    } catch (error) {
      console.error('Failed to fetch notices:', error);
    } finally {
      setLoading(false);
    }
  };

  const categories = ['all', ...new Set(notices.map(notice => notice.category))];

  const filteredNotices = selectedCategory === 'all'
    ? notices
    : notices.filter(notice => notice.category === selectedCategory);

  // Sort important notices first
  const sortedNotices = [...filteredNotices].sort((a, b) => {
    if (a.isImportant && !b.isImportant) return -1;
    if (!a.isImportant && b.isImportant) return 1;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Notices</h1>
          <p className="text-xl text-gray-600">
            Stay updated with the latest announcements
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 space-x-2 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize m-1 ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Notices List */}
        <div className="space-y-4">
          {sortedNotices.map((notice) => (
            <div
              key={notice._id}
              className={`bg-white rounded-lg shadow-md p-6 cursor-pointer transform transition hover:shadow-lg ${
                notice.isImportant ? 'border-l-4 border-yellow-500' : ''
              }`}
              onClick={() => setSelectedNotice(notice)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {notice.title}
                    </h3>
                    {notice.isImportant && (
                      <FiStar className="ml-2 text-yellow-500" title="Important" />
                    )}
                  </div>
                  <p className="text-gray-600 mb-2 line-clamp-2">{notice.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="capitalize">{notice.category}</span>
                    <span className="mx-2">•</span>
                    <span>{format(new Date(notice.createdAt), 'dd MMM yyyy')}</span>
                    {notice.expiryDate && new Date(notice.expiryDate) > new Date() && (
                      <>
                        <span className="mx-2">•</span>
                        <span className="text-green-600">
                          Valid until {format(new Date(notice.expiryDate), 'dd MMM yyyy')}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {sortedNotices.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No notices found in this category.
          </div>
        )}

        {/* Notice Detail Modal */}
        {selectedNotice && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedNotice(null)}
          >
            <div
              className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center">
                  <h2 className="text-2xl font-bold text-gray-900">{selectedNotice.title}</h2>
                  {selectedNotice.isImportant && (
                    <FiStar className="ml-2 text-yellow-500" size={24} />
                  )}
                </div>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  &times;
                </button>
              </div>

              <div className="mb-4 text-sm text-gray-500">
                <span className="capitalize">{selectedNotice.category}</span>
                <span className="mx-2">•</span>
                <span>Published: {format(new Date(selectedNotice.createdAt), 'dd MMM yyyy')}</span>
                {selectedNotice.expiryDate && (
                  <>
                    <span className="mx-2">•</span>
                    <span>Expires: {format(new Date(selectedNotice.expiryDate), 'dd MMM yyyy')}</span>
                  </>
                )}
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-700 whitespace-pre-line">{selectedNotice.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;