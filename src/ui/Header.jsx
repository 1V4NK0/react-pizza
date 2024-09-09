import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">ivanko pizza co.</Link>
      <SearchOrder />
      <p>Ivan</p>
    </header>
  );
}

export default Header;
