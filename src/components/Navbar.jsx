import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-200 flex justify-between h-24 items-center px-5 text-2xl font-bold">
      <h3 className="text-5xl">Shubh Mishra</h3>
      <div className="flex gap-10">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/products">Products</Link>
        <Link to="/courses">Courses</Link>
      </div>
    </div>
  );
};

export default Navbar;
