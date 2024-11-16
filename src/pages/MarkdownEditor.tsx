import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useLocation, useParams } from "react-router-dom";
import IconPreview from "/assets/icon-show-preview.svg";
import IconHidePreview from "/assets/icon-hide-preview.svg";
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
  const [showPreviewOnly, setShowPreviewOnly] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  const isWelcomePage = location.pathname === "/";
  const currentDoc = documents.find((doc) => doc.name === `doc${docId}`);

  const [markdownText, setMarkdownText] = useState<string>(
    isWelcomePage ? welcome : currentDoc?.content || ""
  );

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

  const togglePreview = () => {
    setShowPreviewOnly(!showPreviewOnly);
  };

  const editorHeaderClass = isDarkMode ? "bg-900 text-500" : "bg-200 text-700";
  const editorContentClass = isDarkMode ? "bg-1000" : "bg-100";
  const textareaTextClass = isDarkMode ? "text-400" : "text-black";
  const previewTextClass = isDarkMode ? "text-100" : "text-black";

  return (
    <div className="flex w-full min-h-screen bg-300">
      {!showPreviewOnly && (
        <div className={`w-1/2 ${editorContentClass} h-screen flex flex-col`}>
          <h2
            className={`text-[14px] letterSpacing-wider font-medium py-3 ml-4 ${editorHeaderClass}`}
          >
            MARKDOWN
          </h2>
          <textarea
            id="markdown-textarea"
            value={markdownText}
            onChange={handleChange}
            className={`w-full flex-1 p-4 ${editorContentClass} ${textareaTextClass} hide-scrollbar focus:outline-none resize-none`}
          />
        </div>
      )}

      {!showPreviewOnly && <div className="flex w-[1px] h-screen" />}

      <div
        className={`${
          showPreviewOnly ? "w-full mx-[384px]" : "w-1/2"
        } ${editorContentClass} h-screen flex flex-col items-center justify-center`}
      >
        <div
          className={`flex items-center justify-between w-full ${editorHeaderClass}`}
        >
          <h2 className="text-[14px] letterSpacing-wider font-medium py-3 ml-4">
            PREVIEW
          </h2>
          <img
            src={showPreviewOnly ? IconHidePreview : IconPreview}
            alt="Toggle Preview"
            onClick={togglePreview}
            className="w-4 h-[11.2px] mr-4 hover:cursor-pointer"
          />
        </div>
        <div
          className={`prose w-full max-w-full p-4 flex-1 overflow-auto hide-scrollbar ${previewTextClass}`}
        >
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
