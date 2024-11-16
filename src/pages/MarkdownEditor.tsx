import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import IconPreview from "/assets/icon-show-preview.svg";
import { welcome } from "../utils/welcome";

interface Document {
  name: string;
  content: string;
  date: string;
}

interface MarkdownEditorProps {
  documents: Document[];
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ documents }) => {
  const { docId } = useParams();
  const location = useLocation();

  const isWelcomePage = location.pathname === "/";
  const currentDoc = documents.find((doc) => doc.name === `doc${docId}`);

  // Initialize state with the welcome message or the content of the current document
  const [markdownText, setMarkdownText] = useState<string>(
    isWelcomePage ? welcome : currentDoc?.content || ""
  );

  // Update markdownText when the route changes
  useEffect(() => {
    if (isWelcomePage) {
      setMarkdownText(welcome);
    } else {
      setMarkdownText(currentDoc?.content || "");
    }
  }, [location.pathname, currentDoc]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="flex w-full min-h-screen bg-300">
      <div className="w-1/2 bg-200 h-screen flex flex-col">
        <h2 className="text-[14px] text-500 letterSpacing-wider font-medium py-3 ml-4">
          MARKDOWN
        </h2>
        <textarea
          id="markdown-textarea"
          value={markdownText}
          onChange={handleChange}
          className="w-full flex-1 p-4 bg-100 text-black hide-scrollbar focus:outline-none resize-none"
        />
      </div>

      <div className="flex w-[1px] h-screen" />

      <div className="w-1/2 bg-200 h-screen flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-full">
          <h2 className="text-[14px] text-500 letterSpacing-wider font-medium py-3 ml-4">
            PREVIEW
          </h2>
          <img
            src={IconPreview}
            alt="Preview Icon"
            className="w-4 h-[11.2px] mr-4 hover:cursor-pointer"
          />
        </div>
        <div className="prose w-full max-w-full bg-100 p-4 flex-1 overflow-auto hide-scrollbar">
          <ReactMarkdown className="w-full">{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
