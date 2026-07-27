import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./components/animation/ScrollToTop";

// pages => lazy loading
const HomePage = lazy(() => import("./pages/Home/Home.page"));
const NotFoundPage = lazy(() => import("./pages/else/NotFound.page"));
const LoginPage = lazy(() => import("./pages/login/LoginPage"));
const RegisterPage = lazy(() => import("./pages/login/RegisterPage"));
const ProviderPage = lazy(() => import("./pages/login/ProviderPage"));
const ExplorePage = lazy(() => import("./pages/explore/ExplorePage"));
const ExpertPage = lazy(() => import("./pages/explore/ExpertPage"));
const BookingsPage = lazy(() => import("./pages/bookings/BookingsPage"));
const ProviderBooking = lazy(() => import("./pages/provider/Provider.page"));
// const ServiceDetails = lazy(() => import("./pages/ServicesPage/ServiceDetailsPage" ));
const AdminPage = lazy(() => import("./admin/AdminPage"));
const ContactPage = lazy(() => import("./pages/else/ContactPage"));
const AboutPage = lazy(() => import("./pages/else/AboutPage"));
const SettingsPage = lazy(() => import("./pages/settings/SettingsPage"));

// layout
import MainLayout from "./pages/else/MainLayout";
import RouteProtect from "./pages/else/RouteProtect";
function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className=" w-30 h-30 flex justify-center items-center bg-blue-300 rounded-3xl border-3 border-blue-600 border-y-red-500 animate-pulse">
            <span className="  text-xl font-semibold text-blue-600 ">
              {"مسار"}
            </span>
          </div>
        </div>
      }
    >
      <div className="relative ">
        <Toaster position="top-center" />
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/experts/:id" element={<ExpertPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/settings" element={<SettingsPage />} />

            <Route element={<RouteProtect allowedRoles={["user"]} />}>
              <Route path="/bookings" element={<BookingsPage />} />
            </Route>

            <Route element={<RouteProtect allowedRoles={["provider"]} />}>
              <Route path="/manage" element={<ProviderBooking />} />
            </Route>
          </Route>
          <Route element={<RouteProtect allowedRoles={["admin"]} />}>
            <Route path="/admin/*" element={<AdminPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/provider" element={<ProviderPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
