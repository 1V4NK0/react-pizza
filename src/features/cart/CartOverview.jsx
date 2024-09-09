import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div>
      <p>
        <span>23 pizzas</span>
        <span>$230.45</span>
      </p>
      <Link to='/cart'>Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
