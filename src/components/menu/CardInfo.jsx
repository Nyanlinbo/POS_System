import { ClipboardPlus, Trash2 } from "lucide-react";

const CardInfo = () => {
  return (
    <div className="px-4 py-2">
      <h1 className="text-lg text-[#e4e4e4] font-semibold tracking-wide">
        Order Details
      </h1>
      <div className="mt-4 overflow-y-scroll scrollbar-hide h-[#380px]">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <Trash2 className="text-[#ababab] cursor-pointer" size={20} />
              <ClipboardPlus
                className="text-[#ababab] cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-[#f5f5f5] text-md font-bold">$123</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide h-[#380px]">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <Trash2 className="text-[#ababab] cursor-pointer" size={20} />
              <ClipboardPlus
                className="text-[#ababab] cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-[#f5f5f5] text-md font-bold">$123</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-scroll scrollbar-hide h-[#380px]">
        <div className="bg-[#1f1f1f] rounded-lg px-4 py-4 mb-2">
          <div className="flex items-center justify-between">
            <h1 className="text-[#ababab] font-semibold tracking-wide text-md">
              Chicken Tikka
            </h1>
            <p className="text-[#ababab] font-semibold">x2</p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-3">
              <Trash2 className="text-[#ababab] cursor-pointer" size={20} />
              <ClipboardPlus
                className="text-[#ababab] cursor-pointer"
                size={20}
              />
            </div>
            <p className="text-[#f5f5f5] text-md font-bold">$123</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
