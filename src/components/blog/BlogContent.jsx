import React, { useEffect, useRef } from "react";

const BlogContent = ({ content }) => {
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      // Add classes to all images
      const images = contentRef.current.querySelectorAll("img");
      images.forEach((img) => {
        img.classList.add("blog-image");
        
        // Add figure wrapper for images
        const figure = document.createElement("figure");
        figure.className = "image-figure";
        img.parentNode.insertBefore(figure, img);
        figure.appendChild(img);
        
        // Add caption if alt text exists
        if (img.alt) {
          const figcaption = document.createElement("figcaption");
          figcaption.className = "image-caption";
          figcaption.textContent = img.alt;
          figure.appendChild(figcaption);
        }
      });

      // Add classes to blockquotes
      const blockquotes = contentRef.current.querySelectorAll("blockquote");
      blockquotes.forEach((quote) => {
        quote.classList.add("blog-quote");
      });

      // Add classes to lists
      const lists = contentRef.current.querySelectorAll("ul, ol");
      lists.forEach((list) => {
        list.classList.add("blog-list");
      });

      // Add drop cap to first paragraph
      const firstParagraph = contentRef.current.querySelector("p:first-of-type");
      if (firstParagraph && !firstParagraph.querySelector(".drop-cap")) {
        const firstLetter = firstParagraph.textContent.charAt(0);
        const restOfText = firstParagraph.textContent.slice(1);
        
        firstParagraph.innerHTML = `
          <span class="drop-cap">${firstLetter}</span>${restOfText}
        `;
      }
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: content }}
    />

  );
};

export default BlogContent;