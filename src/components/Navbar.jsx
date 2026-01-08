import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-amber-200 flex justify-between h-36 items-center px-10 text-2xl font-bold">
      <h3>Shubh Mishra</h3>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Navbar;
