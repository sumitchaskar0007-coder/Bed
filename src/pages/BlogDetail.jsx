import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogAPI } from '../api';

export default function BlogDetail() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    blogAPI.getById(id).then((res) => setBlog(res.data));
  }, [id]);

  if (!blog) {
    return (
      <div className="text-center py-20">
        <p>Loading blog...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-10 max-w-4xl">
      {/* BACK */}
      <Link
        to="/blog"
        className="text-blue-600 hover:underline mb-6 inline-block"
      >
        ← Back to Blogs
      </Link>

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">
        {blog.title}
      </h1>

      {/* DATE */}
      <p className="text-sm text-gray-500 mb-6">
        {new Date(blog.createdAt).toDateString()}
      </p>

      {/* IMAGE */}
      {blog.coverImage && (
        <img
          src={`https://law3.onrender.com${blog.coverImage}`}
          alt={blog.title}
          className="w-full max-h-[400px] object-cover rounded-lg mb-8"
        />
      )}

      {/* CONTENT */}
      <div className="text-gray-800 leading-relaxed whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
