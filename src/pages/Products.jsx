import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <div className="text-black font-bold items-center h-screen justify-center text-5xl">
      <div className="flex justify-evenly">
        <Link className="text-xl font-bold" to="/products/Men">
          Men
        </Link>
        <Link className="text-xl font-bold" to="/products/Women">
          Women
        </Link>
        <Link className="text-xl font-bold" to="/products/Kids">
          Kids
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Products;
