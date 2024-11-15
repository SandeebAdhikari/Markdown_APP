import IconMenu from "/assets/icon-menu.svg";

const NavBar = () => {
  return (
    <div className="flex items-center justify-center w-full h-[72px] ">
      <img src={IconMenu} alt="Menu Icon" className="w-18 h-18 mr-[24.75px]" />
    </div>
  );
};

export default NavBar;
