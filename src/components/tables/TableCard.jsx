import { getRandomBG } from "../../utils";
import { useNavigate } from "react-router-dom";

const TableCard = ({ name, status, initials, seats }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (status === "Booked") return;

    navigate(`/menu`);
  };

  return (
    <div
      onClick={handleClick}
      className="bg-[#262626] hover:bg-[#2c2c2c] p-6 rounded-2xl shadow-md hover:shadow-xl cursor-pointer transform transition duration-300 hover:scale-105 active:scale-95"
    >
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[#f5f5f5] text-xl font-semibold">{name}</h1>
        <p
          className={`${
            status === "Booked"
              ? "text-green-600 bg-[#2e4a40]"
              : "bg-[#664a04] text-white"
          } px-3 py-1 rounded-full text-sm font-medium`}
        >
          {status}
        </p>
      </div>

      <div className="flex items-center justify-center mb-6">
        <h1 className={`${getRandomBG()} text-white rounded-full p-5 text-xl`}>
          {initials}
        </h1>
      </div>

      <div className="flex justify-start">
        <p className="text-[#ababab] text-xs">
          Seats: <span className="text-[#f5f5f5] font-medium">{seats}</span>
        </p>
      </div>
    </div>
  );
};

export default TableCard;
