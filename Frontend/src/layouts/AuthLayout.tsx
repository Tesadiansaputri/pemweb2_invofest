import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="bg-amber-50 min-h-screen w-full grid grid-cols-2 items-center">
      {/* Kiri */}
      <div className="min-h-screen bg-red-900 text-white flex flex-col items-center justify-center">
        <img
          src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
          alt="logo"
          className="h-16"
        />
        <p>Infovest (Informatics Vocational Festival)</p>
      </div>

      {/* Kanan */}
      <div className="p-6">
        <Outlet />
      </div>
    </div>
  );
}