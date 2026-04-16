import api from '../api';

export const blogService = {
  // Public methods
  getBlogs: (params) => api.get('/blogs', { params }),
  getBlogBySlug: (slug) => api.get(`/blogs/${slug}`),

  // Admin methods
  getAdminBlogs: (params) => api.get('/blogs/admin/all', { params }),
  getBlogById: (id) => api.get(`/blogs/admin/${id}`),
  createBlog: (data) => api.post('/blogs', data),
  updateBlog: (id, data) => api.put(`/blogs/${id}`, data),
  deleteBlog: (id) => api.delete(`/blogs/${id}`),
};