// frontend/src/pages/BlogList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogAPI } from "../api";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getAll();
      setBlogs(response.data);
    } catch (err) {
      setError("Failed to load blogs. Please try again later.");
      console.error("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-list-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-list-error">
        <p>{error}</p>
        <button onClick={fetchBlogs} className="retry-btn">
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="blog-list-container">
      <h1 className="blog-list-title">Our Blog</h1>
      
      {blogs.length === 0 ? (
        <p className="no-blogs">No blogs published yet. Check back soon!</p>
      ) : (
        <div className="blog-grid">
          {blogs.map((blog) => (
            <article key={blog._id} className="blog-card">
              {blog.coverImage && (
                <Link to={`/blog/${blog.slug}`} className="blog-card-image">
                  <img src={blog.coverImage} alt={blog.title} />
                </Link>
              )}
              <div className="blog-card-content">
                <h2 className="blog-card-title">
                  <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>
                <p className="blog-card-meta">
                  By {blog.author} • {new Date(blog.publishedAt).toLocaleDateString()} • {blog.readingTime} min read
                </p>
                <p className="blog-card-excerpt">{blog.metaDescription}</p>
                <div className="blog-card-tags">
                  {blog.tags && blog.tags.map((tag, index) => (
                    <span key={index} className="blog-tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/blog/${blog.slug}`} className="blog-card-link">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}

      <style jsx>{`
        .blog-list-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .blog-list-title {
          font-size: 36px;
          margin-bottom: 40px;
          text-align: center;
          color: #333;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 30px;
        }

        .blog-card {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 20px rgba(0,0,0,0.15);
        }

        .blog-card-image {
          display: block;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s;
        }

        .blog-card:hover .blog-card-image img {
          transform: scale(1.05);
        }

        .blog-card-content {
          padding: 20px;
        }

        .blog-card-title {
          font-size: 22px;
          margin: 0 0 10px;
        }

        .blog-card-title a {
          color: #333;
          text-decoration: none;
        }

        .blog-card-title a:hover {
          color: #007bff;
        }

        .blog-card-meta {
          color: #666;
          font-size: 14px;
          margin-bottom: 10px;
        }

        .blog-card-excerpt {
          color: #555;
          line-height: 1.6;
          margin-bottom: 15px;
        }

        .blog-card-tags {
          margin-bottom: 15px;
        }

        .blog-tag {
          display: inline-block;
          padding: 3px 8px;
          background: #f0f0f0;
          color: #666;
          border-radius: 3px;
          font-size: 12px;
          margin-right: 5px;
          margin-bottom: 5px;
        }

        .blog-card-link {
          color: #007bff;
          text-decoration: none;
          font-weight: 500;
        }

        .blog-card-link:hover {
          text-decoration: underline;
        }

        .no-blogs {
          text-align: center;
          color: #666;
          font-size: 18px;
          padding: 50px 0;
        }

        .blog-list-loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 400px;
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #007bff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .blog-list-error {
          text-align: center;
          padding: 100px 20px;
        }

        .blog-list-error p {
          color: #dc3545;
          margin-bottom: 20px;
        }

        .retry-btn {
          padding: 10px 20px;
          background: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .retry-btn:hover {
          background: #0056b3;
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default BlogList;