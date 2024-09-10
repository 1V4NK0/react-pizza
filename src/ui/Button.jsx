/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ children, disabled, type, to }) {
  const base =
    "bg-yellow-500 text-sm disabled:cursor-not-allowed  focus:outline-none focus:ring focus:ring-yellow-700 duration-300  uppercase hover:bg-yellow-400 transition-colors font-semibold inline-block tracking-wide rounded-2xl text-stone-700";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md-py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:  " text-sm px-4 py-2.5 md:px-6 md-py-3.5 border-2 border-stone-300 disabled:cursor-not-allowed  focus:outline-none focus:ring focus:ring-yellow-700 duration-300  uppercase hover:bg-stone-700 transition-colors font-semibold inline-block tracking-wide rounded-2xl text-stone-500",
    
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
