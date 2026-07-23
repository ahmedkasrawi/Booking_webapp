import { Route, Routes } from "react-router-dom";
import PageTransition from "../components/animation/PageTransition";
import Container from "../components/Container";
import AdminNavbar from "./components/AdminNavbar";
import AdminSidebar from "./components/AdminSidebar";
import UsersPage from "./pages/Users";
import Services from "./pages/Services";
import BookingsPage from "./pages/Booking";
import { useState } from "react";
export default function AdminPage() {
  const [isOpen,setIsOpen]= useState(false)
  return (
    <PageTransition>
      <main className="w-full min-h-screen">
        <AdminNavbar handelClick={() => setIsOpen((c) => !c)} />
        <AdminSidebar isOpen={isOpen} />
        <div className={` duration-300 pt-20 ${isOpen ? "pr-20" : ""}`}>
          <Container>
            <Routes>
              <Route path="/" element={<UsersPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="services" element={<Services />} />
              <Route path="bookings" element={<BookingsPage />} />
            </Routes>
          </Container>
        </div>
      </main>
    </PageTransition>
  );
}
