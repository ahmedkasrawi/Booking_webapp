import { Link } from 'react-router-dom';
import Button from '../Button';
import LogoutIcon from "@mui/icons-material/Logout";

export default function AuthButtons({ user, handleLogout,children }) {

  return (
    <div className="hidden items-center gap-3 md:flex">
      { user ? (
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleLogout}
            className="font-bold text-xl hover:text-red-600 transition"
            aria-label="Logout"
          >
            <LogoutIcon />
          </button>
          {children}
        </div>
      ) : (
        <>
          <Link to="/login">
            <Button className="bg-blue-500 text-white hover:bg-blue-600">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-black text-white hover:bg-slate-800">
              Signup
            </Button>
          </Link>
          {children}
        </>
      )}
    </div>
  );
}
