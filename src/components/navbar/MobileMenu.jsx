import { Link } from "react-router-dom";
import Button from "../Button";
import LogoutIcon from "@mui/icons-material/Logout";
export default function MobileMenu({
  setMenuOpen,
  menuOpen,
  navItems,
  handleLogout,
  user,
  children
}) {
    
  return (
    <>
      {menuOpen && (
        <div className="md:hidden border-t  mb-2 border-text-main/10 bg-bg-main/50 px-4 py-4 shadow-sm shadow-text-main/15">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              // تعديل هام: استخدام Link بدلاً من a لمنع الـ Page Reload
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-base font-medium  transition hover:bg-text-main/10 "
              >
                {item.label}
              </Link>
            ))}
            {children}
          </div>

          <div className="mt-4 flex flex-col gap-3">
            {user ? (
              <div className="flex items-center gap-4 w-full">
                <Button
                  onClick={handleLogout}
                  className="bg-red-500 text-white w-full hover:bg-red-600 flex justify-center items-center gap-2"
                >
                  تسجيل الخروج
                  <LogoutIcon />
                </Button>
              </div>
            ) : (
              <>
                <Link to="/login" onClick={() => setMenuOpen(false)}>
                  <Button className="bg-blue-500 text-white w-full hover:bg-blue-600">
                    Login
                  </Button>
                </Link>
                <Link to="/register" onClick={() => setMenuOpen(false)}>
                  <Button className="bg-black text-white w-full hover:bg-slate-800">
                    Signup
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
