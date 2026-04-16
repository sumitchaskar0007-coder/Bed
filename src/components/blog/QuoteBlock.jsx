import React from "react";

const QuoteBlock = ({ quote, author }) => {
  return (
    <blockquote className="medium-quote">
      <p>"{quote}"</p>
      {author && <cite>— {author}</cite>}
      
      <style jsx>{`
        .medium-quote {
          margin: 40px 0;
          padding: 24px 32px;
          background: #f9f9f9;
          border-left: 4px solid #007bff;
          font-family: Georgia, serif;
          font-size: 22px;
          line-height: 1.6;
          color: #333;
          font-style: italic;
          border-radius: 0 8px 8px 0;
        }

        .medium-quote p {
          margin: 0;
        }

        .medium-quote cite {
          display: block;
          margin-top: 16px;
          font-size: 16px;
          font-style: normal;
          color: #666;
        }

        @media (max-width: 768px) {
          .medium-quote {
            font-size: 18px;
            padding: 16px 20px;
          }
        }
      `}</style>
    </blockquote>
  );
};

export default QuoteBlock;