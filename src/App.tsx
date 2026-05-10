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




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Beranda />} />
          <Route path="/competition" element={<Competition />} />
          <Route path="/seminar" element={<Seminar />} />
          <Route path="/talkshow" element={<Talkshow />} />

          <Route path="/category" element={<CreateCategory />} />
          <Route path="/event" element={<CreateEvent/>} />
          <Route path="/speaker" element={<CreateSpeaker/>}/>


        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Loginn />} />
          <Route path="/register" element={<Register />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;