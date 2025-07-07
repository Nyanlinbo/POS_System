import { X } from "lucide-react";

const TableModal = ({ table, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#2c2c2c] p-6 sm:p-8 rounded-2xl w-[90%] max-w-[420px] text-white relative animate-fadeIn shadow-lg">
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 flex items-center justify-center bg-[#383838] hover:bg-[#4a4a4a] active:scale-95 transition-transform duration-200 rounded-lg p-2 shadow-md"
        >
          <X size={20} />
        </button> */}

        <h1 className="text-2xl font-bold mb-4 text-center">{table.name}</h1>

        <div className="space-y-3 text-base">
          <p>
            <strong className="text-gray-300">Status:</strong> {table.status}
          </p>
          <p>
            <strong className="text-gray-300">Initials:</strong> {table.initial}
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition-transform duration-200 px-6 py-2 rounded-lg shadow-md font-medium text-white"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableModal;
