import { useDispatch } from "react-redux";
import { carruselbtn } from "../../redux/sliceImg/imgSlice";

import { FaAngleLeft } from "react-icons/fa";

export const BtnPrev = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => dispatch(carruselbtn("previous"))}
      className="font-extrabold text-4xl absolute left-0 top-1/2 p-4 -ml-6 rounded-full bg-slate-200 "
    >
      <FaAngleLeft className="w-[20px] h-[20px] hover:text-orange " />
    </button>
  );
};
