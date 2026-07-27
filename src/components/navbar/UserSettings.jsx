import { useState } from "react";
import Person from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
export default function UserSettings({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  if (!user) return;
  
  return (
    <div className="relative ">
      <button
        type="button"
        onClick={() => setIsOpen((c) => !c)}
        className="w-7.5 h-7.5 bg-text-main/20 border rounded-full flex justify-center items-center text-sm cursor-pointer"
      >
        <Person />
      </button>
      <div
        className={`absolute left-0 -bottom-6.5 translate-x-1/2  border-8 w-2 border-transparent border-b-text-black/80 ${isOpen ? "" : "hidden"}`}
      ></div>
      <div
        className={`absolute w-60 bg-text-white/95 top-28 left-15 -translate-1/2 flex flex-col gap-1 border border-text-black/70 rounded-md px-2 py-3 ${isOpen ? "" : "hidden"}`}
      >
        <div className="">
          {"الأسم: "}
          {user?.name}
        </div>
        <div className="flex">
          {"الإيميل: "}
          {user?.email}
        </div>
        <Link to={"/settings"} className="bg-primary flex justify-center text-white rounded mt-2">
          {"الإعدادات"}
        </Link>
      </div>
    </div>
  );
}
