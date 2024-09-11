
import LinkButton from "../../ui/LinkButton";
function EmptyCart() {
  return (
    <div className="py-3 px-4 ">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="font-semibold mt-7">Your cart is empty. Let&lsquo;s get some pizzas! :)</p>
    </div>
  );
}

export default EmptyCart;
