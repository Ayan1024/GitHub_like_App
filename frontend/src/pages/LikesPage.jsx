import React from "react";
import { FaHeart } from "react-icons/fa";

function LikesPage() {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-lg px-4">
      <table className="w-full text-sm text-left rtl:text-right bg-glass border border-white/10">
        <thead className="text-xs uppercase bg-glass">
          <tr className="border-b border-white/10">
            <th scope="col" className="p-4 border-r border-white/10">
              <div className="flex items-center justify-center">No</div>
            </th>
            <th scope="col" className="p-4 border-r border-white/10">
              <div className="flex items-center justify-center">Username</div>
            </th>
            <th scope="col" className="p-4 border-r border-white/10">
              <div className="flex items-center justify-center">Date</div>
            </th>
            <th scope="col" className="p-4">
              <div className="flex items-center justify-center">Action</div>
            </th>
          </tr>
        </thead>
        <tbody>
  <tr className="bg-glass border-b border-white/10 text-center">
    <td className="p-4 border-r border-white/10">1</td>
    <td className="p-4 border-r border-white/10">Ayan1024</td>
    <td className="p-4 border-r border-white/10">2025-04-28</td>
    <td className="p-4 border-white/10">
      <div className="flex items-center justify-center">
        <FaHeart className="text-red-500" size={20} />
        <span className="ml-2">Liked</span>
      </div>
    </td>
  </tr>
</tbody>

      </table>
    </div>
  );
}

export default LikesPage;
