import React, { useState, useEffect } from "react";

const ShareButtons = () => {
  const [url, setUrl] = useState("");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const shareOnWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const shareOnTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`,
      "_blank"
    );
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <div className="share-buttons">
      <button onClick={shareOnWhatsApp} className="share-button whatsapp" title="Share on WhatsApp">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23z"/>
        </svg>
      </button>

      <button onClick={shareOnLinkedIn} className="share-button linkedin" title="Share on LinkedIn">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </button>

      <button onClick={shareOnTwitter} className="share-button twitter" title="Share on Twitter">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.447-12.253c.001-.213.001-.425-.003-.636A10.027 10.027 0 0024 4.59z"/>
        </svg>
      </button>

      <button onClick={copyToClipboard} className="share-button copy" title="Copy link">
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
        </svg>
      </button>

      <style jsx>{`
        .share-buttons {
          position: fixed;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 100;
        }

        .share-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: white;
          color: #666;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .share-button:hover {
          transform: scale(1.1);
        }

        .share-button.whatsapp:hover {
          background: #25D366;
          color: white;
        }

        .share-button.linkedin:hover {
          background: #0077B5;
          color: white;
        }

        .share-button.twitter:hover {
          background: #1DA1F2;
          color: white;
        }

        .share-button.copy:hover {
          background: #6c757d;
          color: white;
        }

        @media (max-width: 768px) {
          .share-buttons {
            position: fixed;
            left: 0;
            right: 0;
            top: auto;
            bottom: 20px;
            transform: none;
            flex-direction: row;
            justify-content: center;
            background: white;
            padding: 10px;
            box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 50px;
            width: auto;
            margin: 0 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ShareButtons;