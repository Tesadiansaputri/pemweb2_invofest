import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Competition from "./pages/Competition";
import Loginn from "./pages/Loginn";
import Register from "./pages/Register";
import Talkshow from "./pages/Talkshow";
import Seminar from "./pages/Seminar";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import CreateCategory from "./pages/Dashboard/categories/CreateCategory";
import CreateEvent from "./pages/Dashboard/categories/Events/CreatEvent";
import CreateSpeaker from "./pages/Dashboard/categories/Speakers/CreateSpeaker";
import Dashboardindex from "./pages/Dashboard/DashboardIndex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout"; // ✅ Tambah import
import CategoryList from "./pages/Dashboard/categories/CategoryList";
import SpeakerList from "./pages/Dashboard/categories/Speakers/SpeakerList";
import EventList from "./pages/Dashboard/categories/Events/EventList";
import Biodata from "./pages/Biodata/Biodata";
import CategoryEdit from "./pages/Dashboard/categories/CategoryEdit";
import SpeakerEdit from "./pages/Dashboard/categories/Speakers/SpeakerEdit";
import EventEdit from "./pages/Dashboard/categories/Events/EventEdit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />
          
        </Route>

        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Loginn />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}> {/* ✅ Struktur nested yang benar */}
            <Route path="/dashboard" element={<Dashboardindex />} />
            <Route path="/dashboard/biodata" element={<Biodata />} />
            <Route path="/dashboard/category" element={<CategoryList />} />
            <Route path="/dashboard/category/create" element={<CreateCategory />} />
            <Route path="/dashboard/category/:id/edit" element={<CategoryEdit />} />
            <Route path="/dashboard/speaker" element={<SpeakerList />} />
            <Route path="/dashboard/speaker/create" element={<CreateSpeaker />} />
            <Route path="/dashboard/speaker/:id/edit" element={<SpeakerEdit />} />
            <Route path="/dashboard/event" element={<EventList />} />
            <Route path="/dashboard/event/create" element={<CreateEvent />} />
            <Route path="/dashboard/event/:id/edit" element={<EventEdit />} />
             
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;