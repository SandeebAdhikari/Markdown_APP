import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownPage: React.FC = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch("/src/content.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-8 bg-gray-900 text-white rounded-lg shadow-lg">
      <ReactMarkdown className="prose prose-invert">
        {markdownContent}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownPage;
