/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

function Button({ children, disabled, to }) {
  const className =
    "bg-yellow-500 disabled:cursor-not-allowed sm:px-6 sm:py-4 focus:outline-none focus:ring focus:ring-yellow-700 duration-300  uppercase hover:bg-yellow-400 transition-colors font-semibold inline-block tracking-wide rounded-2xl text-stone-700 py-3 px-4";

  if (to)
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={className}>
      {children}
    </button>
  );
}

export default Button;
