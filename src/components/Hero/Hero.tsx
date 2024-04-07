import { useDispatch, useSelector } from "react-redux";
import { Modal } from "../Modal/Modal";
import { carruselbtn, toogleImg } from "../../redux/sliceImg/imgSlice";
import { MiniImg } from "../MiniImg/MiniImg";

export const Hero = () => {
  const { mostrar, currentImg } = useSelector((state: any) => state.img);
  const dispatch = useDispatch();

  return (
    <>
      <figure className="relative md:w-full ">
        <button
          onClick={() => dispatch(carruselbtn("next"))}
          className="font-extrabold text-3xl absolute left-0 top-1/2 p-4 ml-4 rounded-full bg-slate-200 md:hidden"
        >
          <img
            className="w-[13px] h-[13px]"
            src="/assets/images/icon-previous.svg"
            alt="icono"
          />
        </button>
        <button
          onClick={() => dispatch(carruselbtn("previous"))}
          className="font-extrabold text-4xl absolute right-0 top-1/2 p-4 mr-4 rounded-full bg-slate-200 md:hidden"
        >
          <img
            className="w-[13px] h-[13px]"
            src="/assets/images/icon-next.svg"
            alt="icono"
          />
        </button>
        <img
          onClick={() => dispatch(toogleImg(mostrar))}
          className="w-full h-72 object-cover md:h-auto md:max-h-[450px] md:rounded-2xl cursor-pointer"
          src={`/assets/images/image-product-${currentImg}.jpg`}
          alt={`producto${currentImg}`}
        />
        <MiniImg />

      </figure>
        {mostrar ? <Modal /> : ""}
    </>
  );
};
