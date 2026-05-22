import { Link } from "react-router-dom";

function DashboardIndex() {
  return (
    <div className="p-8 bg-white min-h-screen text-black">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#800020]">
            Selamat Datang Admin 👋
          </h1>

          <p className="text-gray-600 mt-2">
            Kelola event, speaker, dan kategori Infofest di sini.
          </p>
        </div>

        {/* Tombol Admin */}
<Link
  to="/dashboard/biodata"
  className="flex items-center gap-3 bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-lg hover:border-[#800020] transition"
>

  {/* Foto/Admin Icon */}
  <div className="w-12 h-12 rounded-full bg-[#800020] text-white flex items-center justify-center font-bold text-lg">
    A
  </div>

    {/* INFO ADMIN */}
    <div className="text-right">
      <h3 className="text-sm font-semibold text-gray-800">
        Admin
      </h3>

      <p className="text-xs text-gray-500">
        Tesadiansaputri@gmail.com
      </p>
    </div>

</Link>

  </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-gray-500 text-lg">📅 Event</h2>
          <p className="text-4xl font-bold text-[#800020] mt-3">7</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-gray-500 text-lg">📂 Categories</h2>
          <p className="text-4xl font-bold text-[#800020] mt-3">2</p>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-gray-500 text-lg">🎤 Speakers</h2>
          <p className="text-4xl font-bold text-[#800020] mt-3">2</p>
        </div>

      </div>

      {/* List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Event List */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-5 text-[#800020]">
            Event Terbaru
          </h2>

          <div className="space-y-4">

            <div className="border border-gray-200 p-4 rounded-2xl hover:border-[#800020] transition">
              <h3 className="font-bold text-lg text-black">
                Infofest 2025
              </h3>
              <p className="text-gray-500">
                Seminar Teknologi
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-2xl hover:border-[#800020] transition">
              <h3 className="font-bold text-lg text-black">
                Tech Competition
              </h3>
              <p className="text-gray-500">
                Lomba UI/UX
              </p>
            </div>

            <div className="border border-gray-200 p-4 rounded-2xl hover:border-[#800020] transition">
              <h3 className="font-bold text-lg text-black">
                Talkshow AI
              </h3>
              <p className="text-gray-500">
                Diskusi AI Modern
              </p>
            </div>

          </div>
        </div>

        {/* Speaker List */}
        <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold mb-5 text-[#800020]">
            Speaker
          </h2>

          <div className="space-y-4">

            <div className="flex items-center gap-4 border border-gray-200 p-4 rounded-2xl hover:border-[#800020] transition">

              <div className="w-14 h-14 rounded-full bg-[#800020] text-white flex items-center justify-center font-bold text-xl">
                B
              </div>

              <div>
                <h3 className="font-bold text-black">
                  Budi Santoso
                </h3>

                <p className="text-gray-500">
                  Frontend Developer
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4 border border-gray-200 p-4 rounded-2xl hover:border-[#800020] transition">

              <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center font-bold text-xl">
                S
              </div>

              <div>
                <h3 className="font-bold text-black">
                  Siti Rahma
                </h3>

                <p className="text-gray-500">
                  UI/UX Designer
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default DashboardIndex;