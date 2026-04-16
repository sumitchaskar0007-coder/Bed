import React from "react";

const BlogHeader = ({ blog }) => {
  const readingTime = blog.readingTime || Math.ceil(blog.content.split(" ").length / 200);

  return (
    <header className="blog-header">
      <h1 className="blog-title">{blog.title}</h1>
      
      <div className="blog-meta">
        <div className="author-info">
          {blog.authorImage && (
            <img src={blog.authorImage} alt={blog.author} className="author-image" />
          )}
          <span className="author-name">{blog.author}</span>
        </div>
        
        <div className="post-info">
          <time dateTime={blog.publishedAt}>
            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <span className="separator">·</span>
          <span className="reading-time">{readingTime} min read</span>
        </div>
      </div>

      {blog.coverImage && (
        <div className="cover-image-container">
          <img
            src={blog.coverImage}
            alt={blog.title}
            className="cover-image"
          />
        </div>
      )}
      
      <style jsx>{`
        .blog-header {
          margin-bottom: 40px;
        }

        .blog-title {
          font-family: Georgia, "Playfair Display", serif;
          font-size: 40px;
          line-height: 1.2;
          margin-bottom: 24px;
          color: #222;
          font-weight: 700;
        }

        @media (min-width: 768px) {
          .blog-title {
            font-size: 48px;
          }
        }

        .blog-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 32px;
          padding-bottom: 16px;
          border-bottom: 1px solid #eee;
        }

        .author-info {
          display: flex;
          align-items: center;
        }

        .author-image {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          margin-right: 12px;
          object-fit: cover;
        }

        .author-name {
          font-size: 16px;
          font-weight: 600;
          color: #222;
        }

        .post-info {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #757575;
          font-size: 14px;
        }

        .separator {
          color: #ccc;
        }

        .cover-image-container {
          margin: 32px 0;
          width: 100%;
        }

        .cover-image {
          width: 100%;
          height: auto;
          border-radius: 8px;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .blog-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
    </header>
  );
};

export default BlogHeader;