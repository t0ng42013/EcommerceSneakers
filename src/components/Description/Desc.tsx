import { SecPrice } from "../SecPrice/SecPrice";


export const Desc = () => {
  return (
    <section className="p-6 ">
      <h3 className="text-xs uppercase font-Kumbh font-semibold text-orange">
        sneaker company
      </h3>
      <h2 className="font-Kumbh text-3xl font-bold mas my-3 md:text-5xl">
        Fall Limited Edition Sneaker
      </h2>
      <p className="text-gray md:my-8">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <SecPrice />
    </section>
  );
}
