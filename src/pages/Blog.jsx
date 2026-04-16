// frontend/src/pages/Blog.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogAPI } from "../api";
import BlogHeader from "../components/blog/BlogHeader";
import BlogContent from "../components/blog/BlogContent";
import QuoteBlock from "../components/blog/QuoteBlock";
import HighlightBox from "../components/blog/HighlightBox";
import CTASection from "../components/blog/CTASection";
import ProgressBar from "../components/ui/ProgressBar";
import ShareButtons from "../components/ui/ShareButtons";

const Blog = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlog();
  }, [slug]); // Only depend on slug, not blog

  const fetchBlog = async () => {
    try {
      setLoading(true);
      const response = await blogAPI.getBySlug(slug);
      setBlog(response.data);
      
      // Update meta tags after blog is loaded
      if (response.data) {
        document.title = response.data.metaTitle || response.data.title;
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
          metaDescription.setAttribute("content", response.data.metaDescription || "");
        }
      }
    } catch (err) {
      setError("Blog not found");
      console.error("Error fetching blog:", err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="blog-loading">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="blog-error">
        <h1>404</h1>
        <p>{error || "Blog not found"}</p>
        <button onClick={() => window.history.back()} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>
      <ProgressBar />
      <article className="blog-article">
        <BlogHeader blog={blog} />
        <ShareButtons />
        
        <div className="blog-content-wrapper">
          <BlogContent content={blog.content} />
        </div>

        <CTASection />
      </article>

      <style jsx>{`
        .blog-article {
          max-width: 740px;
          margin: 0 auto;
          padding: 20px;
          background: white;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }

        .blog-content-wrapper {
          font-size: 20px;
          line-height: 1.8;
          color: #222;
        }

        .blog-loading {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 60vh;
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

        .blog-error {
          text-align: center;
          padding: 100px 20px;
        }

        .blog-error h1 {
          font-size: 72px;
          color: #dc3545;
          margin-bottom: 20px;
        }

        .blog-error p {
          font-size: 18px;
          color: #666;
          margin-bottom: 20px;
        }

        .back-btn {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }

        .back-btn:hover {
          background-color: #0056b3;
        }
      `}</style>
    </>
  );
};

export default Blog;