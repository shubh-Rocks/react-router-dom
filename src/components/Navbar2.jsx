import { useNavigate } from "react-router-dom";
const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="bg-amber-300 py-5 px-10 h-18">
      <button
        onClick={() => {
          navigate("/");
        }}
        className=" mr-10 bg-blue-500 cursor-pointer hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded"
      >
        Return to home page
      </button>

      <button
        onClick={() => {
          navigate(+1);
        }}
        className=" mr-10 bg-blue-500 cursor-pointer hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded"
      >
        next
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className=" bg-blue-500 cursor-pointer hover:bg-blue-700 active:scale-95 text-white font-bold py-2 px-4 rounded"
      >
        back
      </button>
    </div>
  );
};

export default Navbar2;
