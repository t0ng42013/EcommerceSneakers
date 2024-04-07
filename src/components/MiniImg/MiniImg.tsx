import { useDispatch, useSelector } from "react-redux";
import {  miniImg } from "../../redux/sliceImg/imgSlice";


export const MiniImg = () => {
const {  currentImg } = useSelector((state: any) => state.img);
 const dispatch = useDispatch();

  return (
    <div className="hidden md:flex gap-[2%] md:h-24 md:mt-5 hover:[&>img]:opacity-45  hover:[&>img]:cursor-pointer [&>img]:w-[25%] [&>img]:object-cover [&>img]:h-[100%]">
      <img
        onClick={() => dispatch(miniImg(1))}
        className={`md:rounded-xl ${
          currentImg === 1 ? "border-orange border-2 opacity-60" : ""
        } `}
        src="/assets/images/image-product-1-thumbnail.jpg"
        alt="product-1"
      />
      <img
        onClick={() => dispatch(miniImg(2))}
        className={`md:rounded-xl ${
          currentImg === 2 ? "border-orange border-2 opacity-60" : ""
        }`}
        src="/assets/images/image-product-2-thumbnail.jpg"
        alt="product-2"
      />
      <img
        onClick={() => dispatch(miniImg(3))}
        className={`md:rounded-xl ${
          currentImg === 3 ? "border-orange border-2 opacity-60" : ""
        }`}
        src="/assets/images/image-product-3-thumbnail.jpg"
        alt="product-3"
      />
      <img
        onClick={() => dispatch(miniImg(4))}
        className={`md:rounded-xl ${
          currentImg === 4 ? "border-orange border-2 opacity-60" : ""
        }`}
        src="/assets/images/image-product-4-thumbnail.jpg"
        alt="product-4"
      />
    </div>
  );
}
