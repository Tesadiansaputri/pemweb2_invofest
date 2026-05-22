export default function Competition() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col gap-8">
        <span className="text-red-900 font-semibold tracking-widest uppercase text-sm">
          IT Competition
        </span>
        <h1 className="text-5xl font-bold text-slate-800 leading-tight">
          "From Creation <br /> to Innovation"
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
          Kompetisi dalam INVOFEST ini mengusung tema{" "}
          <strong>"From Creation to Innovation"</strong>, Tema ini bertujuan
          mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
          guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
          mewujudkan masa depan yang berkelanjutan.
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

      {/* Daftar Kompetisi */}
      <div className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">DAFTAR KOMPETISI</h2>
          <p className="text-slate-500 mb-10">Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.</p>
          <div className="flex flex-col gap-6">
            {[
              { nama: "Poster Design Competition", deskripsi: "Kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.", href: "/competition/poster" },
              { nama: "UI/UX Design Competition", deskripsi: "Kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.", href: "/competition/ui-ux" },
              { nama: "Web Design Competition", deskripsi: "Kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.", href: "/competition/web-design" },
            ].map((item) => (
              <div key={item.nama} className="bg-white rounded-xl p-6 border border-slate-200 flex justify-between items-center gap-6 hover:shadow-md transition">
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-red-900">{item.nama}</h3>
                  <p className="text-slate-600">{item.deskripsi}</p>
                </div>
                <a href={item.href} className="shrink-0 bg-red-900 text-white px-5 py-2 font-semibold text-sm hover:bg-red-800 transition rounded">
                  INFO SELENGKAPNYA
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Punya Pertanyaan? Lihat Disini</h2>
        <p className="text-slate-500 mb-8">Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat melihat daftar pertanyaan di bawah ini.</p>
        <div className="flex flex-col gap-3">
          {[
            "Apa itu INVOFEST?",
            "Kapan dan dimana INVOFEST dilaksanakan?",
            "Apakah ada biaya pendaftaran di INVOFEST?",
            "Bagaimana saya mengetahui pemenang kompetisi?",
            "Apa yang didapat pemenang dalam kompetisi?",
            "Bagaimana cara mendaftar event?",
          ].map((faq) => (
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