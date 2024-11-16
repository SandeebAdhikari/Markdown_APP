import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import IconMenu from "/assets/icon-menu.svg";
import IconClose from "/assets/icon-close.svg";
import IconMarkDown from "/assets/MARKDOWN.svg";
import IconDoc from "/assets/icon-document.svg";
import IconDelete from "/assets/icon-delete.svg";
import IconSave from "/assets/icon-save.svg";
import SideBar from "./SideBar";
import { welcome } from "../utils/welcome";

interface Document {
  name: string;
  content: string;
  date: string;
}

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [documentCount, setDocumentCount] = useState(1);
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  const getCurrentDocumentName = () => {
    if (location.pathname === "/") return "welcome.md";
    const match = location.pathname.match(/\/doc(\d+)/);
    return match ? `doc${match[1]}.md` : "welcome.md";
  };

  const handleToggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  useEffect(() => {
    const savedDocuments = JSON.parse(
      localStorage.getItem("documents") || "[]"
    );

    if (!savedDocuments.find((doc: Document) => doc.name === "welcome")) {
      const welcomeDoc = {
        name: "welcome",
        content: welcome,
        date: new Date().toLocaleDateString(),
      };
      savedDocuments.unshift(welcomeDoc);
    }

    setDocuments(savedDocuments);
    setDocumentCount(savedDocuments.length);
  }, []);

  useEffect(() => {
    localStorage.setItem("documents", JSON.stringify(documents));
  }, [documents]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

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
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));
  };

  const handleDeleteDocument = () => {
    const currentDocName = getCurrentDocumentName().replace(".md", "");

    if (currentDocName === "welcome") {
      alert("Cannot delete the welcome document!");
      return;
    }

    const updatedDocuments = documents.filter(
      (doc) => doc.name !== currentDocName
    );

    setDocuments(updatedDocuments);
    localStorage.setItem("documents", JSON.stringify(updatedDocuments));

    navigate("/");
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
          <button onClick={handleToggleTheme} className="text-100">
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <img
            src={IconDelete}
            alt="Delete Icon"
            className="w-[18px] h-[20px] hover:cursor-pointer"
            onClick={handleDeleteDocument}
          />
          <button
            onClick={handleSaveDocument}
            className="w-[152px] h-[40px] py-[10px] bg-orange text-100 flex items-center justify-center text-[15px] gap-2 rounded hover:bg-orangeHover"
          >
            <img src={IconSave} alt="Save Icon" className="w-4 h-4" />
            <h1>SAVE</h1>
          </button>
        </div>
      </div>

      {/* Sidebar */}
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
