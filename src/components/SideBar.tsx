import React from "react";
import { useNavigate } from "react-router-dom";
import IconDoc from "/assets/icon-document.svg";
import IconClose from "/assets/icon-close.svg";

interface Document {
  name: string;
  content: string;
  date: string;
}

interface SideBarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  handleNewDocument: () => void;
  documents: Document[];
}

const SideBar: React.FC<SideBarProps> = ({
  isOpen,
  toggleSidebar,
  handleNewDocument,
  documents,
}) => {
  const navigate = useNavigate();

  const handleDocumentClick = (docName: string) => {
    if (docName === "welcome") {
      navigate("/");
    } else {
      navigate(`/${docName}`);
    }
    toggleSidebar();
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-[250px] min-h-screen bg-900/95 transform text-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4">
          <h1 className="text-[14px] font-light">MY DOCUMENTS</h1>
          <button onClick={toggleSidebar} className="hover:cursor-pointer">
            <img
              src={IconClose}
              alt="Close Icon"
              className="w-[16px] h-[16px]"
            />
          </button>
        </div>

        {/* New Document Button */}
        <button
          onClick={handleNewDocument}
          className="mt-4 w-[202px] h-[40px] rounded bg-orange text-100 px-[44px] py-3 mx-6 text-[14px] flex items-center justify-start"
        >
          + New Document
        </button>

        {/* List of Documents */}
        <div className="mt-8 ml-6 flex flex-col gap-4">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="flex items-center gap-2 hover:cursor-pointer"
              onClick={() => handleDocumentClick(doc.name)}
            >
              <img
                src={IconDoc}
                alt="Document Icon"
                className="w-[14px] h-[16px]"
              />
              <div>
                <p className="text-[12px] font-light text-gray-400">
                  {doc.date}
                </p>
                <p className="text-[13px] font-medium text-white">
                  {doc.name}.md
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
