import IconMenu from "/assets/icon-menu.svg";
import IconMarkDown from "/assets/MARKDOWN.svg";
import IconDoc from "/assets/icon-document.svg";

const NavBar = () => {
  return (
    <div className="flex items-center -full h-[72px] bg-800">
      <div className="bg-700 w-18 h-18 flex items-center justify-center py-[27px] px-[21px]">
        <img src={IconMenu} alt="Menu Icon" className="w-[30px] h-[18px]" />
      </div>
      <img src={IconMarkDown} alt="Markdown Icon" className="ml-[24.75px]" />
      <div className="ml-[30.15px] w-[1px] h-[40px] bg-600" />
      <div className="ml-6 flex items-center justify-between gap-4">
        <img src={IconDoc} alt="Document Icon" className="w-[18px] h-[18px]" />
        <div className="flex  flex-col   w-full">
          <p className="text-[13px] font-light text-500 ">Document Name</p>
          <p className="text-[15px] font-regular text-100">welcome.md</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
