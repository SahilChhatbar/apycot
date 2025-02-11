import { FaTrash } from "react-icons/fa";

const CartItem = ({ image, title, quantity, price }) => {
  return (
    <div className="flex items-center justify-between bg-[#fff6f0] p-4 rounded-2xl w-[360px] h-[80px] ml-14">
    <div className="absolute -left-2 w-24 h-24 rounded-full overflow-hidden shadow-3xl ml-6">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="flex flex-col flex-grow pl-12">
      <h3 className="text-lg font-bold text-gray-800">{title}</h3>
      <p className="text-orange-500 font-semibold">×{quantity}</p>
    </div>
    <div className="flex flex-col items-center gap-4">
    <button className="cursor-pointer"><FaTrash size={18} color="red"/></button>
      <p className="text-lg font-bold text-gray-900">${price}</p>
    </div>
  </div>
  );
};

export default CartItem;
