import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { deleteToCart } from "../../redux/cart/cartSlice";

export const MenuCart = () => {
  const hidden = useSelector((state: any) => state.cart.hidden);
  const cartItem = useSelector((state: any) => state.cart.cartItem);
  const count = useSelector((state: any) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <section
      className={` absolute top-0 left-0 mt-[70px] w-[96%] ml-[2%]  md:top-10   ${
        hidden ? "block" : "hidden"
      }`}
    >
      <div className="bg-white rounded-xl md:max-w-96 mr-0 md:ml-auto md:shadow-lg">
        <span className="font-semibold font-Kumbh block p-4">Cart</span>
        <hr className="relative text-gray border-1 opacity-55" />
        <section className="p-4 pb-8 md:p-6 md:pt-0">
          <ul>
            {cartItem === 0 ? (
              <li className="p-16 text-center">
                <p className="font-semibold text-gray">Your cart is empty</p>
              </li>
            ) : (
              <li className="flex items-center justify-between w-full py-5 ">
                <figure className="flex gap-4">
                  <img
                    className="w-14 rounded-md"
                    src="/assets/images/image-product-1-thumbnail.jpg"
                    alt="producto"
                  />
                  <div className="block ">
                    <p className="text-gray-600 text-sm">
                      Fall Limited Edition Snaker
                    </p>
                    <span className="text-gray-600 text-sm">
                      $125.00 x ${count}
                    </span>
                    <span className="font-bold text-sm pl-2">
                      $${125 * count}.00
                    </span>
                  </div>
                </figure>
                <div className="cursor-pointer text-gray hover:text-red-700">
                  <FaRegTrashCan onClick={() => dispatch(deleteToCart())} />
                </div>
              </li>
            )}
          </ul>
          <div>
            {cartItem === 0 ? (
              " "
            ) : (
              <button className="border-none py-4 px-16  bg-orange text-white font-Kumbh rounded-lg w-full hover:opacity-50">
                Checkout
              </button>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};
