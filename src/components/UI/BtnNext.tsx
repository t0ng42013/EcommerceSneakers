import { useDispatch } from "react-redux";
import { carruselbtn } from "../../redux/sliceImg/imgSlice";

import { FaAngleRight } from "react-icons/fa";


export const BtnNext = () => {
    const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(carruselbtn("next"))}
      className="font-extrabold text-4xl absolute right-0 top-1/2 p-4 -mr-6 rounded-full bg-slate-200 "
    >
      <FaAngleRight  className="w-[20px] h-[20px] hover:text-orange " />
    </button>
  );
}
