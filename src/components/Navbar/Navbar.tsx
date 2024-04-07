import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart3 } from "react-icons/bs";
import { Hamburger } from "../Hamburger/Hamburger";
import { useDispatch, useSelector} from "react-redux";
import { toggleMenu } from "../../redux/menu/menuSlice";
import { toggleHiddenCart } from "../../redux/cart/cartSlice";



export const Navbar = () => {
 const menu = useSelector((state:any) => state.menu);
 const cartItem = useSelector((state: any) => state.cart.cartItem);
  const dispatch = useDispatch();

  return (
    <nav className="flex justify-between items-center h-max-20 h-full py-4 px-6 md:px-0 md:pb-0">
      <div className="flex justify-center items-end gap-4 md:items-center">
        <button className="md:hidden ">
          <GiHamburgerMenu
            size={24}
            color="hsl(219, 9%, 45%)"
            onClick={() => dispatch(toggleMenu(menu))}
          />
        </button>

        <h1>
          <a href="">
            <img
              className="pb-1 md:w-40 "
              src="/assets/images/logo.svg"
              alt="logo"
            />
          </a>
        </h1>

        <Hamburger />
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button
          onClick={() => {
            dispatch(toggleHiddenCart());
          }}
          className="relative"
        >
          <BsCart3 size={20} color="hsl(219, 9%, 45%)" />
          <span className="absolute bottom-3 left-2 text-xs bg-orange  rounded-full w-4 h-4  flex justify-center items-center text-white font-bold">
            {cartItem}
          </span>
        </button>
        <div className=" overflow-hidden">
          <img
            className="w-6 h-6 object-cover md:w-12 md:h-12 cursor-pointer"
            src="/assets/images/image-avatar.png"
            alt="avatar"
          />
        </div>
      </div>
    </nav>
  );
};
