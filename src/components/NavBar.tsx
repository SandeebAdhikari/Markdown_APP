import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconMenu from "/assets/icon-menu.svg";
import IconClose from "/assets/icon-close.svg";
import IconMarkDown from "/assets/MARKDOWN.svg";
import IconDoc from "/assets/icon-document.svg";
import IconDelete from "/assets/icon-delete.svg";
import IconSave from "/assets/icon-save.svg";
import SideBar from "./SideBar";

interface Document {
  name: string;
  content: string;
  date: string;
}

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentCount, setDocumentCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Get current document name from URL
  const getCurrentDocumentName = () => {
    if (location.pathname === "/") return "welcome.md";
    const match = location.pathname.match(/\/doc(\d+)/);
    return match ? `doc${match[1]}.md` : "welcome.md";
  };

  // Load documents from localStorage on initial render
  useEffect(() => {
    const savedDocuments = JSON.parse(
      localStorage.getItem("documents") || "[]"
    );
    setDocuments(savedDocuments);
    setDocumentCount(savedDocuments.length + 1);
  }, []);

  // Save documents to localStorage whenever the documents array changes
  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
  }, [documents]);

  // Handle creating a new document
  const handleNewDocument = () => {
    const newDocName = `doc${documentCount}`;
    const newDocument = {
      name: newDocName,
      content: "",
      date: new Date().toLocaleDateString(),
    };
    setDocuments([...documents, newDocument]);
    setDocumentCount(documentCount + 1);
    navigate(`/${newDocName}`);
    toggleSidebar();
  };

  // Handle saving the current document
  const handleSaveDocument = () => {
    const textarea = document.getElementById(
      "markdown-textarea"
    ) as HTMLTextAreaElement;
    const content = textarea?.value || "";

    if (content.trim() === "") return;

    const currentDocName = getCurrentDocumentName().replace(".md", "");
    const updatedDocuments = documents.map((doc) =>
      doc.name === currentDocName
        ? { ...doc, content, date: new Date().toLocaleDateString() }
        : doc
    );

    setDocuments(updatedDocuments);
  };

  return (
    <>
      <div className="flex items-center justify-between w-full h-[72px] bg-800">
        <div className="flex items-center gap-6">
          <div
            onClick={toggleSidebar}
            className="bg-700 w-18 h-18 flex items-center justify-center py-[27px] px-[21px] hover:cursor-pointer"
          >
            <img
              src={isOpen ? IconClose : IconMenu}
              alt="Menu Icon"
              className="w-[30px] h-[18px]"
            />
          </div>

          <img
            src={IconMarkDown}
            alt="Markdown Icon"
            className="ml-[24.75px]"
          />

          <div className="ml-[30.15px] w-[1px] h-[40px] bg-600" />

          <div className="ml-6 flex items-center gap-4">
            <img
              src={IconDoc}
              alt="Document Icon"
              className="w-[18px] h-[18px]"
            />
            <div className="flex flex-col">
              <p className="text-[13px] font-light text-500">Document Name</p>
              <p className="text-[15px] font-regular text-100">
                {getCurrentDocumentName()}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 mr-4">
          <img
            src={IconDelete}
            alt="Delete Icon"
            className="w-[18px] h-[20px] hover:cursor-pointer"
          />
          <button
            onClick={handleSaveDocument}
            className="w-[152px] h-[40px] py-[10px] bg-orange text-100 flex items-center justify-center text-[15px] gap-2 rounded"
          >
            <img src={IconSave} alt="Save Icon" className="w-4 h-4" />
            <h1>SAVE</h1>
          </button>
        </div>
      </div>

      <SideBar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        handleNewDocument={handleNewDocument}
        documents={documents}
      />
    </>
  );
};

export default NavBar;
