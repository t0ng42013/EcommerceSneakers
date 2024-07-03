import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/menu/menuSlice";
import { IoClose } from "react-icons/io5";

export const Hamburger = () => {
  
  const menu = useSelector((state: any) => state.menu);
  const dispatch = useDispatch();
  
  return (
    <div
      className={`fixed top-0 left-0 z-10 bg-[#000000cb] w-full h-full transition-[.5s] ${
        menu ? "block translate-x-0" : "hidden -translate-x-full"
      } md:flex  md:translate-x-0 md:static md:bg-transparent md:items-center`}
    >
      <button
        className="bg-white p-4 w-[321px] text-start font-semibold text-gray-600 text-xl md:hidden md:w-full"
        onClick={() => dispatch(toggleMenu(menu))}
      >
        <IoClose className="text-gray hover:text-orange " />
      </button>

      <ul className=" absolute left-0  z-20 bg-white h-full pl-4 pt-4 w-[321px] md:flex md:w-full md:bg-transparent md:static md:items-center md:[&>li]:mb-0 md:gap-8 md:[&>li]:text-DarkGrayishBlue md:[&>li]:font-medium md:[&>li]:h-[100px] md:[&>li]:flex md:[&>li]:items-center md:py-0 md:hover:[&>li]:border-b-4 md:[&>li]:border-orange hover:[&>li]:text-orange md:hover:[&>li]:text-VeryDarkBlue">
        <li className="mb-3 text-gray-dark font-semibold font-Kumbh text-sm">
          <a href="#">Collection</a>
        </li>
        <li className="mb-3 text-gray-dark font-semibold font-Kumbh text-sm  ">
          <a href="#">Men</a>
        </li>
        <li className="mb-3 text-gray-dark font-semibold font-Kumbh text-sm">
          <a href="#">Women</a>
        </li>
        <li className="mb-3 text-gray-dark font-semibold font-Kumbh text-sm">
          <a href="#">About</a>
        </li>
        <li className="mb-3 text-gray-dark font-semibold font-Kumbh text-sm">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
