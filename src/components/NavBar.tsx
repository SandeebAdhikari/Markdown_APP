import IconMenu from "/assets/icon-menu.svg";
import IconMarkDown from "/assets/MARKDOWN.svg";
import IconDoc from "/assets/icon-document.svg";
import IconDelete from "/assets/icon-delete.svg";
import IconSave from "/assets/icon-save.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full h-[72px] bg-800 ">
      <div className="flex items-center gap-6">
        <div className="bg-700 w-18 h-18 flex items-center justify-center py-[27px] px-[21px] hover:cursor-pointer">
          <img src={IconMenu} alt="Menu Icon" className="w-[30px] h-[18px] " />
        </div>

        <img src={IconMarkDown} alt="Markdown Icon" className="ml-[24.75px]" />

        <div className="ml-[30.15px] w-[1px] h-[40px] bg-600" />

        <div className="ml-6 flex items-center gap-4">
          <img
            src={IconDoc}
            alt="Document Icon"
            className="w-[18px] h-[18px]"
          />
          <div className="flex flex-col">
            <p className="text-[13px] font-light text-500">Document Name</p>
            <p className="text-[15px] font-regular text-100">welcome.md</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6 mr-4">
        <img
          src={IconDelete}
          alt="Delete Icon"
          className="w-[18px] h-[20px] hover:cursor-pointer"
        />

        <button className="w-[152px] h-[40px] py-[10px] bg-orange text-100 flex items-center justify-center text-[15px] gap-2 rounded">
          <img src={IconSave} alt="Save Icon" className="w-4 h-4 " />
          <h1>SAVE</h1>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
