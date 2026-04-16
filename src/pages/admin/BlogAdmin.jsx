// frontend/src/pages/admin/BlogAdmin.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { blogAPI } from "../../api";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const BlogAdmin = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    metaTitle: "",
    metaDescription: "",
    author: "",
    coverImage: "",
    content: "",
    tags: [],
    isPublished: true,
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setError(null);
      const response = await blogAPI.getAllAdmin();
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to fetch blogs. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("image", file);

    try {
      setError(null);
      const response = await blogAPI.uploadImage(formData);
      setFormData((prev) => ({ ...prev, coverImage: response.data.url }));
    } catch (error) {
      console.error("Error uploading image:", error);
      setError("Failed to upload image. Please try again.");
    }
  };

  const validateForm = () => {
    if (!formData.title.trim()) {
      setError("Title is required");
      return false;
    }
    if (!formData.author.trim()) {
      setError("Author is required");
      return false;
    }
    if (!formData.coverImage) {
      setError("Cover image is required");
      return false;
    }
    if (!formData.content.trim()) {
      setError("Content is required");
      return false;
    }
    if (!formData.metaTitle.trim()) {
      setError("Meta title is required for SEO");
      return false;
    }
    if (!formData.metaDescription.trim()) {
      setError("Meta description is required for SEO");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setSubmitting(true);
    setError(null);

    try {
      // Prepare data for submission
      const blogData = {
        ...formData,
        tags: formData.tags.filter(tag => tag.trim() !== ""), // Remove empty tags
      };

      console.log("Submitting blog data:", blogData); // Debug log

      let response;
      if (editingBlog) {
        response = await blogAPI.update(editingBlog._id, blogData);
        console.log("Blog updated:", response.data);
      } else {
        response = await blogAPI.create(blogData);
        console.log("Blog created:", response.data);
      }

      // Reset form and fetch updated blogs
      setFormData({
        title: "",
        metaTitle: "",
        metaDescription: "",
        author: "",
        coverImage: "",
        content: "",
        tags: [],
        isPublished: true,
      });
      setEditingBlog(null);
      setShowEditor(false);
      await fetchBlogs();
      
    } catch (error) {
      console.error("Error saving blog:", error);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        setError(error.response.data.message || "Failed to save blog. Please try again.");
      } else if (error.request) {
        // The request was made but no response was received
        setError("No response from server. Please check your connection.");
      } else {
        // Something happened in setting up the request that triggered an Error
        setError("An error occurred. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      metaTitle: blog.metaTitle || "",
      metaDescription: blog.metaDescription || "",
      author: blog.author || "",
      coverImage: blog.coverImage || "",
      content: blog.content || "",
      tags: blog.tags || [],
      isPublished: blog.isPublished !== undefined ? blog.isPublished : true,
    });
    setShowEditor(true);
    setError(null);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        setError(null);
        await blogAPI.delete(id);
        await fetchBlogs();
      } catch (error) {
        console.error("Error deleting blog:", error);
        setError("Failed to delete blog. Please try again.");
      }
    }
  };

  // Quill modules configuration
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike"],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ align: [] }],
      ["blockquote", "code-block"],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className="blog-admin">
      <div className="admin-header">
        <h1>Blog Management</h1>
        <button
          className="btn btn-primary"
          onClick={() => {
            setEditingBlog(null);
            setFormData({
              title: "",
              metaTitle: "",
              metaDescription: "",
              author: "",
              coverImage: "",
              content: "",
              tags: [],
              isPublished: true,
            });
            setShowEditor(!showEditor);
            setError(null);
          }}
        >
          {showEditor ? "Cancel" : "Create New Blog"}
        </button>
      </div>

      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {showEditor && (
        <div className="blog-editor">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Blog Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                placeholder="Enter blog title"
              />
            </div>

            <div className="form-group">
              <label>Meta Title (SEO) *</label>
              <input
                type="text"
                name="metaTitle"
                value={formData.metaTitle}
                onChange={handleInputChange}
                required
                placeholder="Enter meta title for SEO (max 60 characters)"
                maxLength="60"
              />
              <small>{formData.metaTitle.length}/60 characters</small>
            </div>

            <div className="form-group">
              <label>Meta Description (SEO) *</label>
              <textarea
                name="metaDescription"
                value={formData.metaDescription}
                onChange={handleInputChange}
                rows="3"
                required
                placeholder="Enter meta description for SEO (max 160 characters)"
                maxLength="160"
              />
              <small>{formData.metaDescription.length}/160 characters</small>
            </div>

            <div className="form-group">
              <label>Author *</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                required
                placeholder="Enter author name"
              />
            </div>

            <div className="form-group">
              <label>Cover Image *</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
              {formData.coverImage && (
                <div className="image-preview">
                  <img
                    src={formData.coverImage}
                    alt="Cover"
                    className="preview-image"
                  />
                  <button
                    type="button"
                    className="btn btn-sm btn-danger"
                    onClick={() => setFormData(prev => ({ ...prev, coverImage: "" }))}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            <div className="form-group">
              <label>Content *</label>
              <ReactQuill
                theme="snow"
                value={formData.content}
                onChange={(content) =>
                  setFormData((prev) => ({ ...prev, content }))
                }
                modules={modules}
                placeholder="Write your blog content here..."
                style={{ height: "400px", marginBottom: "50px" }}
              />
            </div>

            <div className="form-group">
              <label>Tags (comma separated)</label>
              <input
                type="text"
                name="tags"
                value={formData.tags.join(", ")}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    tags: e.target.value.split(",").map((tag) => tag.trim()),
                  }))
                }
                placeholder="Enter tags separated by commas"
              />
            </div>

            <div className="form-group checkbox">
              <label>
                <input
                  type="checkbox"
                  name="isPublished"
                  checked={formData.isPublished}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      isPublished: e.target.checked,
                    }))
                  }
                />
                Publish immediately
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-success"
              disabled={submitting}
            >
              {submitting ? "Saving..." : (editingBlog ? "Update Blog" : "Create Blog")}
            </button>
          </form>
        </div>
      )}

      <div className="blogs-list">
        <h2>All Blogs</h2>
        {loading ? (
          <p>Loading...</p>
        ) : blogs.length === 0 ? (
          <p>No blogs found. Create your first blog!</p>
        ) : (
          <table className="blogs-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Published</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>{blog.title}</td>
                  <td>{blog.author}</td>
                  <td>
                    <span
                      className={`status-badge ${
                        blog.isPublished ? "published" : "draft"
                      }`}
                    >
                      {blog.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>{new Date(blog.createdAt).toLocaleDateString()}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-edit"
                      onClick={() => handleEdit(blog)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-delete"
                      onClick={() => handleDelete(blog._id)}
                    >
                      Delete
                    </button>
                    {blog.isPublished && (
                      <button
                        className="btn btn-sm btn-view"
                        onClick={() => window.open(`/blog/${blog.slug}`, "_blank")}
                      >
                        View
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <style jsx>{`
        .blog-admin {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .error-message {
          background-color: #f8d7da;
          color: #721c24;
          padding: 12px;
          border-radius: 4px;
          margin-bottom: 20px;
          border: 1px solid #f5c6cb;
        }

        .btn {
          padding: 10px 20px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 14px;
          transition: all 0.3s;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn-primary {
          background-color: #007bff;
          color: white;
        }

        .btn-primary:hover:not(:disabled) {
          background-color: #0056b3;
        }

        .btn-success {
          background-color: #28a745;
          color: white;
        }

        .btn-success:hover:not(:disabled) {
          background-color: #218838;
        }

        .btn-danger {
          background-color: #dc3545;
          color: white;
        }

        .btn-sm {
          padding: 5px 10px;
          margin: 0 5px;
          font-size: 12px;
        }

        .btn-edit {
          background-color: #ffc107;
          color: #000;
        }

        .btn-edit:hover {
          background-color: #e0a800;
        }

        .btn-delete {
          background-color: #dc3545;
          color: white;
        }

        .btn-delete:hover {
          background-color: #c82333;
        }

        .btn-view {
          background-color: #17a2b8;
          color: white;
        }

        .btn-view:hover {
          background-color: #138496;
        }

        .blog-editor {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          margin-bottom: 30px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 5px;
          font-weight: bold;
        }

        .form-group input[type="text"],
        .form-group textarea {
          width: 100%;
          padding: 8px;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 14px;
        }

        .form-group input[type="text"]:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #007bff;
          box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
        }

        .form-group small {
          display: block;
          margin-top: 5px;
          color: #666;
          font-size: 12px;
        }

        .checkbox label {
          display: inline;
          margin-left: 5px;
        }

        .image-preview {
          margin-top: 10px;
        }

        .preview-image {
          max-width: 200px;
          border-radius: 4px;
          display: block;
          margin-bottom: 10px;
        }

        .blogs-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 20px;
        }

        .blogs-table th,
        .blogs-table td {
          padding: 12px;
          text-align: left;
          border-bottom: 1px solid #ddd;
        }

        .blogs-table th {
          background-color: #f8f9fa;
          font-weight: bold;
        }

        .blogs-table tr:hover {
          background-color: #f5f5f5;
        }

        .status-badge {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: bold;
          display: inline-block;
        }

        .status-badge.published {
          background-color: #d4edda;
          color: #155724;
        }

        .status-badge.draft {
          background-color: #fff3cd;
          color: #856404;
        }
      `}</style>
    </div>
  );
};

export default BlogAdmin;