import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach token automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Handle unauthorized
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminInfo");
      window.location.href = "/admin/login";
    }
    return Promise.reject(error);
  }
);

/* =========================
   ADMIN API
========================= */

export const adminAPI = {
  login: (data) => api.post("/admin/login", data),
  getProfile: () => api.get("/admin/profile"),
  logout: () => api.post("/admin/logout"),
};

/* =========================
   BLOG API
========================= */

export const blogAPI = {
  // Public routes
  getAll: () => api.get("/blogs"),
  getBySlug: (slug) => api.get(`/blogs/${slug}`),

  // Admin routes
  getAllAdmin: () => api.get("/blogs/admin/all"),
  create: (data) => {
    console.log('API create called with data:', data); // Debug log
    return api.post("/blogs", data);
  },
  update: (id, data) => api.put(`/blogs/${id}`, data),
  delete: (id) => api.delete(`/blogs/${id}`),
  uploadImage: (formData) =>
    api.post("/blogs/upload-image", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }),
};

export default api;