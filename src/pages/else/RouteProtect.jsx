import { Outlet, Navigate } from "react-router-dom";
import { useUser } from "../../hooks/useAuth";

export default function RouteProtect({ allowedRoles }) {
  const { data: user,isLoading } = useUser();
  if (isLoading) return <p className="flex justify-center items-center font-bold animate-pulse">...loading</p>
     if (!user) return <Navigate to={"/login"} replace />;
  if (!allowedRoles?.includes(user?.role)) return <Navigate to={"/"} replace />;

  return <Outlet/>;
}
