import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { welcome } from "../utils/welcome";

const MarkdownEditor: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>(welcome);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 min-h-screen bg-gray-900 text-white">
      {/* Markdown Editor */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Markdown Input</h2>
        <textarea
          value={markdownText}
          onChange={handleChange}
          className="w-full h-[70vh] p-4 bg-gray-800 text-white rounded-lg focus:outline-none resize-none"
        />
      </div>

      {/* Markdown Preview */}
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-bold mb-4">Preview</h2>
        <div className="prose prose-invert max-w-full bg-gray-800 p-4 rounded-lg">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
