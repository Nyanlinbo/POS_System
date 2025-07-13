import { UtensilsCrossed } from "lucide-react";

import BackButton from "../components/shared/BackButton";

import MenuContainer from "../components/menu/MenuContainer";
import CustomerInfo from "../components/menu/CustomerInfo";
import CardInfo from "../components/menu/CardInfo";
import BillInfo from "../components/menu/BillInfo";

const Menu = () => {
  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3">
      <div className="flex-[3]">
        <div className="flex items-center justify-between px-10 py-4">
          <div className="flex items-center gap-4">
            <BackButton />
            <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
              Menu
            </h1>
          </div>
          <div className="flex items-center justify-around gap-4">
            <div className="flex items-center gap-3 cursor-pointer">
              <UtensilsCrossed
                color="#ffffff"
                className="text-[#f5f5f5] text-4xl"
              />
              <div className="flex flex-col items-start">
                <h1 className="text-md text-[#f5f5f5] font-semibold">
                  Customer Name
                </h1>
                <p className="text-xs text-[#ababab] font-semibold">
                  Table No: 2
                </p>
              </div>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      <div className="flex-[1] bg-[#1a1a1a] mt-4 mr-3 h-[780px] rounded-lg pt-2">
        <CustomerInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        <CardInfo />
        <hr className="border-[#2a2a2a] border-t-2" />
        <BillInfo />
      </div>
    </section>
  );
};

export default Menu;
