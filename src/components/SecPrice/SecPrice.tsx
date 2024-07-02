import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addQuantityCart, addToCart } from "../../redux/cart/cartSlice";



export const SecPrice = () => {
  const count = useSelector((state:any) => state.cart.count);
  const dispatch = useDispatch();

  return (
    <section>
      <div className="flex justify-between my-4 md:flex-col">
        <div className="flex items-end gap-2 font-bold text-2xl">
          $125.00
          <span className="bg-[#ffede0] text-[#ff7d1a] text-sm  px-2 rounded-md flex justify-center items-center mb-1">
            50%
          </span>
        </div>

        <div className="line-through text-GrayishBlue font-bold ">$250.00</div>
      </div>

      <div className="mb-16 md:flex md:gap-5 md:mb-0">
        <div className="relative w-full bg-LightGrayishBlue p-4 rounded-md flex items-center mb-4 md:w-auto md:mb-0">
          <button
            onClick={() => dispatch(addQuantityCart("decrement"))}
            className="border-none absolute left-4 text-3xl font-bold text-orange hover:opacity-50"
          >
            -
          </button>
          <input
            type="text"
            value={count}
            className="border-none w1/2 bg-transparent m-auto block text-center font-bold text-lg w-min md:w-32"
          />
          <button
            onClick={() => dispatch(addQuantityCart("increment"))}
            className="border-none absolute right-4 text-2xl font-bold text-orange hover:opacity-50"
          >
            +
          </button>
        </div>

        <div
          onClick={() => dispatch(addToCart())}
          className="flex justify-center items-center gap-3 font-semibold bg-orange p-4 rounded-md text-white  cursor-pointer md:w-full hover:opacity-50 "
        >
          <BsCart3 size={16} color="white" />
          Add to cart
        </div>
      </div>
    </section>
  );
};
