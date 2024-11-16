import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { welcome } from "../utils/welcome";
import IconPreview from "/assets/icon-show-preview.svg";

const MarkdownEditor: React.FC = () => {
  const [markdownText, setMarkdownText] = useState<string>(welcome);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMarkdownText(event.target.value);
  };

  return (
    <div className="flex  w-full min-h-screen bg-300">
      {/* Markdown Editor */}
      <div className="w-1/2 h-full bg-200">
        <h2 className="text-[14px] text-500 letterSpacing-wider font-medium py-3 ml-4 ">
          MARKDOWN
        </h2>
        <textarea
          value={markdownText}
          onChange={handleChange}
          className="w-full h-screen p-4 bg-100 text-black hide-scrollbar focus:outline-none resize-none"
        />
      </div>
      <div className=" flex w-[1px] h-full" />
      {/* Markdown Preview */}
      <div className="w-1/2 flex flex-col items-center justify-center bg-200">
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
        <div className="prose  max-w-full bg-100 p-4">
          <ReactMarkdown>{markdownText}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default MarkdownEditor;
