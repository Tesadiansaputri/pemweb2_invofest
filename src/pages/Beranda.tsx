export default function Beranda() {
  return (
    <div className="bg-white text-slate-800">

      {/* HERO */}
      <section className="min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* Kiri */}
          <div className="flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
              alt="Invofest"
              className="w-64"
            />

            <p className="text-slate-600 text-lg leading-relaxed">
              Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik
              Informatika Universitas Harkat Negeri, adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi
              muda Indonesia dalam menghadapi era digital.
            </p>

            <p className="text-red-900 font-semibold text-xl">
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow”
            </p>

            <div className="flex gap-4">
              <button className="bg-red-900 text-white px-6 py-3 font-semibold tracking-wide hover:bg-red-800 transition rounded-xl">
                INFO SELENGKAPNYA
              </button>

              <button className="border-2 border-red-900 text-red-900 px-6 py-3 font-semibold tracking-wide hover:bg-red-50 transition rounded-xl">
                HUBUNGI PANITIA
              </button>
            </div>
          </div>

          {/* Kanan */}
          <div className="flex justify-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="maskot"
              className="w-450px object-contain"
            />
          </div>
        </div>
      </section>

      {/* TENTANG */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold text-red-900 mb-6">
            Tentang INVOFEST
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed max-w-4xl mx-auto">
            Invofest 2025 menghadirkan berbagai kegiatan menarik seperti
            kompetisi IT, workshop IT, seminar nasional dan talkshow bersama
            para ahli teknologi untuk mengembangkan kreativitas serta inovasi
            generasi muda Indonesia.
          </p>

        </div>
      </section>

      {/* EVENT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* CARD */}
            {[
              {
                title: "IT Seminar",
                desc: "Seminar nasional tentang Human-AI Integration.",
              },
              {
                title: "IT Talkshow",
                desc: "Talkshow kolaborasi manusia dan AI di masa depan.",
              },
              {
                title: "IT Competition",
                desc: "Kompetisi inovasi digital generasi muda.",
              },
              {
                title: "IT Workshop",
                desc: "Workshop AI untuk sustainable future.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg p-8 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center text-red-900 text-2xl font-bold mb-6">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                <button className="text-red-900 font-semibold hover:underline">
                  INFO SELENGKAPNYA →
                </button>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* DETAIL EVENT */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {/* SEMINAR */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                alt="seminar"
                className="w-80 object-contain rounded-2xl shadow-xl"
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-red-900">
                IT Seminar
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Seminar Nasional Teknologi Informasi dengan tema
                “Human-AI Integration: Merancang Arsitektur Kolaboratif,
                Bukan Kompetitif”.
              </p>

              <button className="bg-red-900 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition">
                DAFTAR IT SEMINAR
              </button>
            </div>
          </div>

          {/* TALKSHOW */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-red-900">
                IT Talkshow
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed">
                Talkshow berskala nasional tentang Humanizing Technology
                dan kolaborasi manusia bersama AI di masa depan.
              </p>

              <button className="bg-red-900 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition">
                DAFTAR IT TALKSHOW
              </button>
            </div>

            <div className="order-1 lg:order-2">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
                alt="talkshow"
                className="w-80 object-contain rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>
      </section>

      {/* WORKSHOP */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        <div>
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="workshop"
            className="w-80 object-contain rounded-2xl shadow-xl"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-red-900">
            IT Workshop
          </h2>

          <p className="text-slate-600 text-lg leading-relaxed">
            Workshop “AI for a Sustainable Future: The Role of Z Generation
            in the Digital Era” membekali generasi muda dengan keterampilan
            praktis AI untuk menciptakan solusi digital yang inovatif dan
            berkelanjutan.
          </p>

          <button className="bg-red-900 text-white px-6 py-3 rounded-xl hover:bg-red-800 transition">
            DAFTAR IT WORKSHOP
          </button>
        </div>

      </div>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">

          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-red-900 mb-4">
              FAQ
            </h2>

            <p className="text-slate-600">
              Punya Pertanyaan? Lihat Disini
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Apa itu INVOFEST?",
              "Kapan dan dimana INVOFEST dilaksanakan?",
              "Apakah ada biaya pendaftaran?",
              "Bagaimana cara mendaftar event?",
            ].map((faq, index) => (
              <div
                key={index}
                className="border rounded-2xl p-6 hover:shadow-lg transition"
              >
                <h3 className="font-semibold text-lg">{faq}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      

      {/* FOOTER */}
      <footer className="bg-red-500 text-white py-14">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

          <div>
            <img
              src="https://www.invofest-harkatnegeri.com/assets/nav-logo.png"
              alt="logo"
              className="w-44 mb-4"
            />

            <p className="text-slate-300 leading-relaxed">
              Festival teknologi tahunan untuk generasi muda Indonesia.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Menu Navigasi
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Beranda</li>
              <li>Seminar</li>
              <li>Competition</li>
              <li>Workshop</li>
              <li>Talkshow</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-4">
              Ikuti Kami
            </h3>

            <ul className="space-y-3 text-slate-300">
              <li>Instagram</li>
              <li>Youtube</li>
              <li>Alamat</li>
            </ul>
          </div>

        </div>

        <div className="border-t border-red-700 mt-10 pt-6 text-center text-slate-400 text-sm">

        </div>
      </footer>

    </div>
  );
}