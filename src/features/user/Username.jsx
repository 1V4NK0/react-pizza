import { useSelector } from "react-redux";

function Username() {
  /* again, seems like useContext where you can extract whatever u need from useContext but it is a bit different
  here you choose what you want in the parameters */
  const username = useSelector((state) => state.user.username);
  
  
  if (!username) return null;

  return (
    <div className="text-sm font-semibold hidden md:block">{username}</div>
  );
}

export default Username;
