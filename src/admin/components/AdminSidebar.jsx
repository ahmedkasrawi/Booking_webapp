import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminSidebar({ isOpen }) {
  const [active, setActive] = useState("users");
  return (
    <div
      className={`bg-primary/20 border-2 duration-300  bg-2 w-20 pt-1  top-13 fixed h-full ${isOpen ? "right-0" : "-right-20 "}`}
    >
      <div className="w-full min-h-40 flex flex-col items-center gap-0.5">
        <Link
          className={`text-sm w-full flex justify-center duration-300 hover:bg-primary/70 py-2 ${active === "users" ? "bg-primary/90 text-white" : " "}`}
          to="/admin/users"
          onClick={() => setActive("users")}
        >
          Users
        </Link>
        <Link
          className={`text-sm w-full flex justify-center duration-300 hover:bg-primary/70 py-2 ${active === "services" ? "bg-primary/90 text-white" : " "}`}
          to="/admin/services"
          onClick={() => setActive("services")}
        >
          Services
        </Link>
        <Link
          className={`text-sm w-full flex justify-center duration-300 hover:bg-primary/70 py-2 ${active === "bookings" ? "bg-primary/90 text-white" : " "}`}
          to="/admin/bookings"
          onClick={() => setActive("bookings")}
        >
          Bookings
        </Link>
      </div>
    </div>
  );
}
