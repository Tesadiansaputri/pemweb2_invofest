import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

export default function DashboardLayout() {
  const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* kiri */}
      <div className="min-h-screen bg-pink-400 w-64 flex flex-col p-4">

        <div className="border-b border-gray-100 py-6">
          <h1 className="text-white text-2xl font-bold">
            Invofest Dashboard
          </h1>
        </div>

        <div>
          <nav className="flex flex-col gap-2">
            <Link to="/dashboard" className="p-4 text-white text-lg hover:bg-black transition">
              Dashboard
            </Link>

            <Link to="/dashboard/category" className="p-4 text-white text-lg hover:bg-black transition">
              Categories
            </Link>

            <Link to="/dashboard/speaker" className="p-4 text-white text-lg hover:bg-black transition">
              Speaker
            </Link>

            <Link to="/dashboard/event" className="p-4 text-white text-lg hover:bg-black transition">
              Event
            </Link>
          </nav>
        </div>

        <div>
          <button
            onClick={handleLogout}
            className="bg-red-400 p-4 w-full hover:bg-red-500 cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      {/* kanan */}
      <div className="flex-1 p-6">
        <Outlet />
      </div>

    </div>
  );
}