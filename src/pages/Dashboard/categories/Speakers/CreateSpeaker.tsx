import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateSpeaker() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  const [nameError, setNameError] = useState("");
  const [roleError, setRoleError] = useState("");
  const [imageError, setImageError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async () => {
    let isValid = true;

    setNameError("");
    setRoleError("");
    setImageError("");

    if (!name.trim()) { setNameError("Nama harus diisi"); isValid = false; }
    if (!role.trim()) { setRoleError("Role harus diisi"); isValid = false; }
    if (!image.trim()) { setImageError("Foto harus diisi"); isValid = false; }

    if (!isValid) return;

    setIsLoading(true);
    try {
      const response = await fetch("https://be-production-16db.up.railway.app/speakers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, role, image }),
      });

      if (!response.ok) throw new Error("Gagal menyimpan");

      navigate("/dashboard/speaker");
    } catch (error) {
      alert("Gagal menyimpan speaker, coba lagi.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Create Speaker</h1>

      <div className="bg-white p-6 rounded-2xl shadow max-w-xl space-y-5">

        {/* NAME */}
        <div className="flex flex-col gap-2">
          <label>Name</label>
          <input
            type="text"
            placeholder="Input speaker name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-3 rounded-xl"
          />
          {nameError && <p className="text-red-600 text-sm">{nameError}</p>}
        </div>

        {/* ROLE */}
        <div className="flex flex-col gap-2">
          <label>Role</label>
          <input
            type="text"
            placeholder="Input role..."
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border p-3 rounded-xl"
          />
          {roleError && <p className="text-red-600 text-sm">{roleError}</p>}
        </div>

        {/* IMAGE */}
        <div className="flex flex-col gap-2">
          <label>Foto (URL)</label>
          <input
            type="text"
            placeholder="Input URL foto..."
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border p-3 rounded-xl"
          />
          {imageError && <p className="text-red-600 text-sm">{imageError}</p>}
          {image && (
            <img src={image} alt="preview" className="w-20 h-20 rounded-full object-cover mt-2" />
          )}
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="bg-red-700 hover:bg-red-800 text-white px-5 py-3 rounded-xl disabled:bg-gray-300"
        >
          {isLoading ? "Menyimpan..." : "Save Speaker"}
        </button>

      </div>
    </div>
  );
}