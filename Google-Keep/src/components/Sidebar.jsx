import React, { useState } from 'react';
import { MdOutlineLightbulb } from "react-icons/md";
import { LuBell } from "react-icons/lu";
import { ImPencil } from "react-icons/im";
import { MdOutlineArchive } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";

const bartext = [
  { icon: <MdOutlineLightbulb size={15} />, text: "Notes" },
  { icon: <LuBell size={15} />, text: "Reminders" },
  { icon: <ImPencil size={15} />, text: "Edit labels" },
  { icon: <MdOutlineArchive size={15} />, text: "Archive" },
  { icon: <FaRegTrashAlt size={14} />, text: "Trash" },
];

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className='h-screen w-52 mt-1 bg-white shadow-md'>
      <div className='flex flex-col'>
        {bartext.map((item, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`flex items-center gap-4 px-4 text-gray-800 py-2 rounded-r-2xl cursor-pointer 
              ${activeIndex === index ? "bg-[#feefc3]" : "hover:bg-gray-100"}`}
          >
            {item.icon}
            <h3 className='text-sm inertext'>{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
