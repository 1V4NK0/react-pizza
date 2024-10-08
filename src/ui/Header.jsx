import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
function Header() {
  return (
    <header className="font-sans bg-yellow-500 px-4 py-3 border-b border-stone-500 sm:px-6 flex items-center justify-between">
      <Link to="/" className="tracking-[2px]">
        ivanko pizza co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
