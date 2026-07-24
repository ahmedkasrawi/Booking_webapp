import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useAuth";
import Menu from "@mui/icons-material/Menu";


export default function AdminNavbar({handelClick}) {
  const { data } = useUser()
  return (
    <div 
      className="fixed inset-x-0 text-text-main top-0 z-40 bg-text-white/50  py-3 px-3
      backdrop-blur-sm border-b border-text-black/50 shadow-sm flex justify-between"
    >
      <button
      type="button"
        onClick={handelClick}
        className="cursor-pointer bg-text-main/15 p-0.5 rounded"
      >
        <Menu />
      </button>
      <div className="px-2 flex gap-5">
        <Link to="/home">Home</Link>
        <Link>{data?.name}</Link>
      </div>
    </div>
  );
}
