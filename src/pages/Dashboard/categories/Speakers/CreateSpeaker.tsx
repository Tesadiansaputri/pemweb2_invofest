import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateSpeaker() {

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const handleSubmit = () => {

    const oldData =
      JSON.parse(localStorage.getItem("speakers") || "[]");

    const newSpeaker = {
      id: Date.now(),
      name,
      profession,
      photo,
    };

    const updatedData = [...oldData, newSpeaker];

    localStorage.setItem(
      "speakers",
      JSON.stringify(updatedData)
    );

    navigate("/dashboard/speaker");
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Create Speaker
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow max-w-xl space-y-5">

        <div className="flex flex-col gap-2">
          <label>Name</label>

          <input
            type="text"
            placeholder="Input speaker name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Role</label>

          <input
            type="text"
            placeholder="Input Role..."
            value={profession}
            onChange={(e) => setProfession(e.target.value)}
            className="border p-3 rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label>Foto</label>

          <input
            type="text"
            placeholder="Input Foto..."
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            className="border p-3 rounded-xl"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="bg-pink-500 text-white px-5 py-3 rounded-xl"
        >
          Save Speaker
        </button>

      </div>
    </div>
  );
}