import { useDispatch, useSelector } from "react-redux";
import { toogleImg } from "../../redux/sliceImg/imgSlice";
import { MiniImg } from "../MiniImg/MiniImg";
import { BtnNext } from "../UI/BtnNext";
import { BtnPrev } from "../UI/BtnPrev";
import { IoClose } from "react-icons/io5";

export const Modal = () => {
  const { mostrar, currentImg } = useSelector((state: any) => state.img);
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-full fixed top-0 left-0 z-10 bg-[#000000cb] "></div>

      <div className="max-w-[450px] border">
        <figure className="flex flex-col gap-2 justify-center items-center fixed top-0 left-0 z-20 w-full h-full">
          <div className="w-[450px] ">
            
            <IoClose
              onClick={() => dispatch(toogleImg(mostrar))}
              className="ml-auto text-3xl cursor-pointer text-gray hover:text-orange"
            />
           
          </div>

          <div className="relative">
            <BtnPrev />
            <BtnNext />
            <img
              className="w-[450px] h-72 object-cover md:h-auto md:max-h-[450px] md:rounded-2xl cursor-pointer z-20"
              src={`/assets/images/image-product-${currentImg}.jpg`}
              alt={`producto${currentImg}`}
            />
          </div>
        
          <MiniImg />
        </figure>
      </div>  
    </>
  );
};
