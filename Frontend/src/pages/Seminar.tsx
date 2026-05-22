import SpeakerCard from "../components/ui/SpeakerCard";


export default function Seminar() {
  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-red-900 font-semibold tracking-widest uppercase text-sm">
            IT Seminar
          </span>
          <h1 className="text-4xl font-bold text-slate-800 leading-tight">
            "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif"
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Seminar nasional yang membahas strategi kolaborasi manusia dan AI
            sebagai mitra sinergis, bukan pesaing.
          </p>
          <div>
            <button className="bg-red-900 text-white px-6 py-3 font-semibold tracking-wide hover:bg-red-800 transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="seminar"
            className="w-80 object-contain"
          />
        </div>
      </div>

      {/* Tentang Section */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-bold text-red-900 uppercase tracking-wide mb-4">
              Tentang IT SEMINAR
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Di tengah pesatnya kemajuan AI, seminar ini hadir untuk mengubah
              paradigma dari persaingan menjadi kolaborasi. Kami mengupas
              bagaimana merancang sistem dan lingkungan kerja di mana AI
              memperkuat—bukan menggantikan—kecerdasan dan kreativitas manusia.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { label: "Tema", value: "Human-AI Integration" },
              { label: "Format", value: "Seminar Nasional" },
              { label: "Target", value: "Mahasiswa & Profesional IT" },
            ].map((item) => (
              <div key={item.label} className="border-l-4 border-red-900 pl-4">
                <p className="text-sm text-slate-400 uppercase tracking-wide">{item.label}</p>
                <p className="text-slate-700 font-semibold">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-900 text-center mb-12">
          Temui Pembicara Khusus Kami
        </h2>
        <div className="grid grid-cols-2 gap-8 max-w-2xl mx-auto">
          <SpeakerCard
            name="Dery Agung Triyadi"
            role="Aws Indonesia"
            imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png"
          />
          <SpeakerCard
            name="Sowam Habibi"
            role="Google Indonesia"
            imageUrl="https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png"
          />
        </div>
      </div>

    </div>
  );
}