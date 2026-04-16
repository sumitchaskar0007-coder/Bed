import React from "react";

const HighlightBox = ({ children, type = "info" }) => {
  const getBackgroundColor = () => {
    switch (type) {
      case "info":
        return "#e8f4fd";
      case "warning":
        return "#fff3cd";
      case "tip":
        return "#d4edda";
      default:
        return "#f8f9fa";
    }
  };

  const getBorderColor = () => {
    switch (type) {
      case "info":
        return "#007bff";
      case "warning":
        return "#ffc107";
      case "tip":
        return "#28a745";
      default:
        return "#ddd";
    }
  };

  return (
    <div className="highlight-box">
      {children}
      
      <style jsx>{`
        .highlight-box {
          background-color: ${getBackgroundColor()};
          border-left: 4px solid ${getBorderColor()};
          padding: 24px;
          margin: 32px 0;
          border-radius: 0 8px 8px 0;
          font-size: 18px;
          line-height: 1.6;
          color: #333;
        }

        .highlight-box :global(p:last-child) {
          margin-bottom: 0;
        }
      `}</style>
    </div>
  );
};

export default HighlightBox;