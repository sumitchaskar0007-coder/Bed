import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { FiEdit2, FiTrash2, FiEye, FiEyeOff, FiPlus } from 'react-icons/fi';
import api from '../../api';

const GalleryAdmin = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'other',
    image: null,
  });

  useEffect(() => {
    fetchGalleryItems();
  }, []);

  const fetchGalleryItems = async () => {
    try {
      const { data } = await api.get('/gallery');
      setGalleryItems(data);
    } catch (error) {
      toast.error('Failed to fetch gallery items');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('category', formData.category);

    if (formData.image) {
      formDataToSend.append('image', formData.image);
    }

    try {
      if (editingItem) {
        await api.put(`/gallery/${editingItem._id}`, formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Gallery item updated successfully');
      } else {
        await api.post('/gallery', formDataToSend, {
          headers: { 'Content-Type': 'multipart/form-data' },
        });
        toast.success('Gallery item created successfully');
      }

      setShowModal(false);
      setEditingItem(null);
      setFormData({ title: '', description: '', category: 'other', image: null });

      fetchGalleryItems();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Operation failed');
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item);

    setFormData({
      title: item.title,
      description: item.description || '',
      category: item.category,
      image: null,
    });

    setShowModal(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await api.delete(`/gallery/${id}`);
        toast.success('Gallery item deleted successfully');
        fetchGalleryItems();
      } catch (error) {
        toast.error('Failed to delete gallery item');
      }
    }
  };

  const handleToggleStatus = async (id, currentStatus) => {
    try {
      await api.patch(`/gallery/${id}/toggle`);
      toast.success(`Item ${currentStatus ? 'deactivated' : 'activated'} successfully`);
      fetchGalleryItems();
    } catch (error) {
      toast.error('Failed to toggle status');
    }
  };

  const categories = [
    { value: 'event', label: 'Event' },
    { value: 'achievement', label: 'Achievement' },
    { value: 'campus', label: 'Campus' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Navbar */}
      <nav className="bg-white shadow-sm mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link to="/admin/dashboard" className="text-gray-700 hover:text-gray-900 mr-4">
                ← Dashboard
              </Link>
              <h1 className="text-xl font-semibold text-gray-900">
                Gallery Management
              </h1>
            </div>

            <button
              onClick={() => {
                setEditingItem(null);
                setFormData({ title: '', description: '', category: 'other', image: null });
                setShowModal(true);
              }}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 flex items-center"
            >
              <FiPlus className="mr-2" />
              Add New Item
            </button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <main className="max-w-7xl mx-auto mt-12 py-6 sm:px-6 lg:px-8">
        <div className="px-4 sm:px-0">

          {loading ? (
            <div className="text-center py-12">Loading...</div>
          ) : (

            <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-6">
              <ul className="divide-y divide-gray-200">

                {galleryItems.map((item) => (
                  <li key={item._id} className="px-6 py-4">

                    <div className="flex items-center space-x-4">

                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        className="h-16 w-16 object-cover rounded"
                      />

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">
                          {item.title}
                        </p>

                        <p className="text-sm text-gray-500">
                          Category: {item.category} | Status: {item.isActive ? 'Active' : 'Inactive'}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">

                        <button
                          onClick={() => handleToggleStatus(item._id, item.isActive)}
                          className={`p-2 rounded-full ${
                            item.isActive
                              ? 'text-green-600 hover:bg-green-100'
                              : 'text-gray-400 hover:bg-gray-100'
                          }`}
                        >
                          {item.isActive ? <FiEye /> : <FiEyeOff />}
                        </button>

                        <button
                          onClick={() => handleEdit(item)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-full"
                        >
                          <FiEdit2 />
                        </button>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-full"
                        >
                          <FiTrash2 />
                        </button>

                      </div>
                    </div>
                  </li>
                ))}

                {galleryItems.length === 0 && (
                  <li className="px-6 py-12 text-center text-gray-500">
                    No gallery items found. Click "Add New Item".
                  </li>
                )}

              </ul>
            </div>

          )}

        </div>
      </main>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-10 overflow-y-auto">

          <div className="flex items-center justify-center min-h-screen px-4">

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75"></div>

            <div className="bg-white rounded-lg shadow-xl max-w-lg w-full mt-12 relative">

              <form onSubmit={handleSubmit}>

                <div className="p-6">

                  <h3 className="text-lg font-semibold mb-4">
                    {editingItem ? 'Edit Gallery Item' : 'Add New Gallery Item'}
                  </h3>

                  <div className="space-y-4">

                    <input
                      type="text"
                      name="title"
                      required
                      placeholder="Title"
                      value={formData.title}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    />

                    <textarea
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    />

                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full border rounded px-3 py-2"
                    >
                      {categories.map((cat) => (
                        <option key={cat.value} value={cat.value}>
                          {cat.label}
                        </option>
                      ))}
                    </select>

                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      required={!editingItem}
                    />

                  </div>

                </div>

                <div className="bg-gray-50 px-6 py-3 flex justify-end space-x-3">

                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-4 py-2 border rounded"
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded"
                  >
                    {editingItem ? 'Update' : 'Create'}
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

export default GalleryAdmin;