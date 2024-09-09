import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between  bg-stone-800 text-stone-200 uppercase  px-4 py-4 sm:px-6 md:text-base">
      <p className="text-stone-400 sm:space-x-6 font-semibold space-x-4 ">
        <span>23 pizzas</span>
        <span>$230.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
