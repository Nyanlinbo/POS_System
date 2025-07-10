import BottomNav from "../components/shared/BottomNav";
import BackButton from "../components/shared/BackButton";
import TableCard from "../components/tables/TableCard";

import { useState } from "react";
import { tables } from "../constants";
import TableModal from "../components/tables/TableModal";

const Tables = () => {
  const [status, setStatus] = useState("all");
  const [search, setSearch] = useState("");
  const [selectedTable, setSelectedTable] = useState(null);

  const filteredTables = tables.filter((table) => {
    const matchesStatus = status === "all" || table.status === "Booked";
    const matchesSearch =
      table.name.toLowerCase().includes(search.toLowerCase()) ||
      table.initial.toLowerCase().includes(search.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] flex flex-col">
      <div className="flex items-center justify-between px-10 py-4">
        <div className="flex items-center gap-4">
          <BackButton />
          <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wide">
            Tables
          </h1>
        </div>

        <input
          type="text"
          placeholder="Search tables..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#2c2c2c] text-[#f5f5f5] px-4 py-2 rounded-lg outline-none"
        />

        <div className="flex items-center justify-around gap-4">
          <button
            onClick={() => setStatus("all")}
            className={`text-[#ababab] text-lg ${
              status === "all" && "bg-[#383838] px-5 py-2"
            } rounded-lg px-5 py-2 font-semibold transition duration-300`}
          >
            All
          </button>
          <button
            onClick={() => setStatus("booked")}
            className={`text-[#ababab] text-lg ${
              status === "booked" && "bg-[#383838] px-5 py-2"
            } rounded-lg px-5 py-2 font-semibold transition duration-300`}
          >
            Booked
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 overflow-y-auto flex-1 scrollbar-hide">
        {filteredTables.map((table) => (
          <TableCard
            key={table.id}
            id={table.id}
            name={table.name}
            status={table.status}
            initials={table.initial}
            seats={table.seats}
            onClick={() => setSelectedTable(table)}
          />
        ))}
      </div>

      <BottomNav />

      {selectedTable && (
        <TableModal
          table={selectedTable}
          onClose={() => setSelectedTable(null)}
        />
      )}
    </section>
  );
};

export default Tables;
