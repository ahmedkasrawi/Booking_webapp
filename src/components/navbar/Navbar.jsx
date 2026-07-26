import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Sunny from "@mui/icons-material/Sunny";
import Moon from "@mui/icons-material/Nightlight";
import UserSettings from "./UserSettings";
import Container from "@mui/material/Container";
import AuthButtons from "./AuthButtons";
import MobileMenu from "./MobileMenu";
import { toast } from "react-hot-toast";
import { useUser, useLogout } from "../../hooks/useAuth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("/home");
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const { data: user, isLoading } = useUser();
  const logout = useLogout();

  const navItems = [
    { label: "الرئيسية", href: "/home" },
    { label: "استكشاف", href: "/explore" },
    { label: " من نحن", href: "/about" },
    { label: "تواصل معنا", href: "/contact" },
    ...(user?.role === "admin" ? [{ label: "الأدمن", href: "/admin" }] : []),
    ...(user?.role === "user"
      ? [{ label: "الحجوزات", href: "/bookings" }]
      : []),
    ...(user?.role === "provider"
      ? [{ label: "الادارة", href: "/manage" }]
      : []),
  ];

  const handleLogout = () => {
    logout();
    setMenuOpen(false);
    navigate("/login");
    toast.success("تم تسجيل الدخول بنجاح");
  };
  let moodButton = (
    <button
      type="button"
      className="cursor-pointer text-text-main hover:animate-pulse"
      onClick={handelMoodClick}
    >
      {dark ? <Sunny /> : <Moon />}
    </button>
  );

  function handelMoodClick() {
    document.documentElement.classList.toggle("dark");
    setDark((e) => !e);
  }

  return (
    <header className="fixed inset-x-0 text-text-main top-0 z-40 bg-text-white/50 backdrop-blur-sm border-b border-text-black/50 shadow-sm">
      <Container>
        <div className=" flex w-full max-w-7xl items-center justify-between py-4 ">
          <Link
            to="/home"
            className="text-2xl font-black tracking-tight sm:text-3xl drop-shadow-md drop-shadow-olive-700/90"
          >
            {"مسار"}
          </Link>

          {/* 💻 Desktop Menu */}
          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setActive(item.href)}
                className={`text-sm font-medium relative transition hover:text-primary 
                  rounded-md p-1 duration-300  hover:bg-text-black/90 ${active === item.href ? "bg-text-black/85 text-primary " : ""} `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 💻 Desktop Auth Buttons */}
          <AuthButtons
            isLoading={isLoading}
            user={user}
            handleLogout={handleLogout}
          >
            {moodButton}
            <UserSettings user={user} />
          </AuthButtons>

          {/* 📱 Mobile Menu Toggle */}
          <div className="flex gap-3 md:hidden items-center">
            {moodButton}
            <UserSettings user={user} />
            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-text-main/50 
            transition hover:border-slate-300 hover:bg-text-main/7  cursor-pointer"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <MenuOpenIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        {/* 📱 Mobile Menu */}
        <MobileMenu
          setMenuOpen={setMenuOpen}
          menuOpen={menuOpen}
          navItems={navItems}
          isLoading={isLoading}
          handleLogout={handleLogout}
          user={user}
        ></MobileMenu>
      </Container>
    </header>
  );
}
