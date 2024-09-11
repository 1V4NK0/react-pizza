import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector((state) => state.user.username);
  const pizzaId = useSelector((state) => state.cart.pizzaId);

  const dispatch = useDispatch();

  if (!cart.length) {
    return <EmptyCart />;
  }
  return (
    <div className="py-3 px-4">
      <LinkButton to="/menu">back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-300 border-b mt-3">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>
      <div className="mt-6 space-x-5">
        <Button type="primary" to="/order/new">
          Order
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
