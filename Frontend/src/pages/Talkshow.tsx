import SpeakerCard from "../components/ui/SpeakerCard";

export default function Talkshow() {
  const speakers = [
    { nama: "Moh. Ichsan Maulana", role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera", foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png" },
    { nama: "M. Zaim Zamzami", role: "Programmer, PT. Pertamina Drilling Service Indonesia", foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png" },
    { nama: "Daffa Zuhdan Muhtar", role: "Android Developer, PT. Astra Internasional", foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png" },
    { nama: "Bayu Adi Prasetiyo", role: "Software Engineer, KOMPAS.ID", foto: "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png" },
  ];

  const faqs = [
    "Apa itu INVOFEST?",
    "Kapan dan dimana INVOFEST dilaksanakan?",
    "Apakah ada biaya pendaftaran di INVOFEST?",
    "Bagaimana saya mengetahui pemenang kompetisi?",
    "Apa yang didapat pemenang dalam kompetisi?",
    "Bagaimana cara mendaftar event?",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <span className="text-red-900 font-semibold tracking-widest uppercase text-sm">
            IT Talkshow
          </span>
          <h1 className="text-4xl font-bold text-slate-800 leading-tight">
            "Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan"
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            Sebuah diskusi interaktif yang mengeksplorasi cara mengintegrasikan
            nilai-nilai kemanusiaan seperti etika, empati, dan kreativitas ke
            dalam pengembangan kecerdasan buatan.
          </p>
          <div>
            <button className="bg-red-900 text-white px-6 py-3 font-semibold tracking-wide hover:bg-red-800 transition">
              Daftar Sekarang
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt="talkshow"
            className="w-80 h-80 object-cover rounded-full"
          />
        </div>
      </div>

      {/* Tentang Section */}
      <div className="bg-pink-100 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-red-900 uppercase tracking-wide">
            Tentang IT Talkshow
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
            Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin
            meresap ke dalam setiap aspek kehidupan kita, muncul sebuah
            pertanyaan fundamental: Apakah kita sedang menciptakan teknologi
            yang melayani manusia, atau justru sebaliknya? Acara ini dirancang
            untuk menggali bagaimana kita dapat menanamkan nilai-nilai
            kemanusiaan—seperti empati, etika, dan kreativitas—ke dalam inti
            pengembangan AI.
          </p>
        </div>
      </div>

      {/* Speakers Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-red-900 text-center mb-12">
          Temui Pembicara Khusus Kami
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {speakers.map((speaker) => (
            <SpeakerCard
              key={speaker.nama}
              name={speaker.nama}
              role={speaker.role}
              imageUrl={speaker.foto}
            />
          ))}
        </div>
      </div>
      {/* Pelaksanaan Section */}
      <div className="bg-pink-100 text-pink-500 py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            Pelaksanaan IT Talkshow
          </h2>
          <div className="flex flex-col gap-2 text-black text-lg">
            <p>📅 Senin, 24 November 2025</p>
            <p>🕗 08.00 WIB - 12.00 WIB</p>
            <p>📍 Aula Gedung C, Kampus 1 (Mataram) Universitas Harkat Negeri</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">
          Punya Pertanyaan? Lihat Disini
        </h2>
        <p className="text-slate-500 mb-8">
          Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.
        </p>
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => (
            <div key={faq} className="border border-slate-200 rounded-lg px-6 py-4 flex justify-between items-center hover:bg-slate-50 cursor-pointer transition">
              <span className="text-slate-700 font-medium">{faq}</span>
              <span className="text-red-900 text-xl">+</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}