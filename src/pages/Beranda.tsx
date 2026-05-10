export default function Beranda() {
  return (
    <div className="min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-2 gap-12 items-center">
        
        {/* Kiri */}
        <div className="flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
            alt="Invofest"
            className="w-64"
          />
          <p className="text-slate-600 text-lg leading-relaxed">
            Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik
            Informatika Universitas Harkat Negeri, adalah festival tahunan yang
            bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema{" "}
            <strong>
              "Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow"
            </strong>.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-900 text-white px-6 py-3 font-semibold tracking-wide hover:bg-red-800 transition">
              INFO SELENGKAPNYA
            </button>
            <button className="border-2 border-red-900 text-red-900 px-6 py-3 font-semibold tracking-wide hover:bg-red-50 transition">
              HUBUNGI PANITIA
            </button>
          </div>
        </div>

        {/* Kanan */}
        <div className="flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
            alt="maskot"
            className="w-96 object-contain"
          />
        </div>

      </div>
    </div>
  );
}