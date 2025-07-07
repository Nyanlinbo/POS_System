import { getRandomBG } from "../../utils";

const TableCard = ({ name, status, initials, onClick }) => {
  return (
    <div
      onClick={onClick}
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
      <div className="flex items-center justify-center mt-6 mb-4">
        <h1
          className={`${getRandomBG()} text-white rounded-full w-20 h-20 flex items-center justify-center text-2xl transition duration-300 hover:brightness-110`}
        >
          {initials}
        </h1>
      </div>
    </div>
  );
};

export default TableCard;
