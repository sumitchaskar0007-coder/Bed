import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <article className="blog-card">
      {blog.featuredImage && (
        <Link to={`/blog/${blog.slug}`} className="blog-card-image">
          <img src={blog.featuredImage} alt={blog.title} loading="lazy" />
        </Link>
      )}
      
      <div className="blog-card-content">
        <h3>
          <Link to={`/blog/${blog.slug}`}>{blog.title}</Link>
        </h3>
        
        <p className="blog-card-excerpt">
          {blog.metaDescription.substring(0, 150)}...
        </p>
        
        <div className="blog-card-meta">
          <span>{blog.author}</span>
          <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
          <span>{blog.readingTime} min read</span>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;