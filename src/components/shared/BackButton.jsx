import { ArrowBigLeft } from "lucide-react";

import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-[rgb(2,92,202)] p-2 text-xl font-bold rounded-full text-white"
    >
      <ArrowBigLeft />
    </button>
  );
};

export default BackButton;
