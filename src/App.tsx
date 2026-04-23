import Header from "./components/Header";
import Button from "./components/ui/Button";
import { Collapse } from "./components/ui/Collapse";
import SpeakerCard from "./components/ui/SpeakerCard";
import { Card } from "./components/ui/Card";

function App() {
  const speakers = [
    {
      name: "Dery Agung Triyadi",
      role: "Aws Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      name: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      name: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital. Dengan mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for a Smarter Tomorrow ”.",
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description:
        "Invofest akan diselenggarakan pada tanggal 15-17 November 2024 di Jakarta Convention Center (JCC), Jakarta, Indonesia.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description:
        "Invofest terbuka untuk semua kalangan, terutama mahasiswa, pelajar, profesional muda, dan siapa saja yang tertarik dengan teknologi dan inovasi. Acara ini dirancang untuk memberikan inspirasi dan pengetahuan kepada semua peserta, tanpa memandang latar belakang atau tingkat keahlian.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan masa depan yang berkelanjutan.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <section
          id="hero"
          className="py-20 flex flex-col md:flex-row gap-10 justify-between items-center"
        >
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt=""
              className="w-96"
            />
            <p>
              Invofest (Informatics Vocational Festival) adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow ”.
            </p>

            {/* Tombol */}
            <div className="flex gap-4 mt-4">
              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="transform transition duration-300 hover:scale-105 active:scale-95 shadow-lg rounded-lg px-6 py-2"
              />
              <Button
                label="Hubungi Panitia"
                variant="outline"
                className="bg-white border-2 text-red-500 px-6 py-2 rounded-lg shadow-sm hover:bg-red-900 hover:text-white hover:scale-105 transition-all duration-300"
              />
            </div>
          </div>

          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt=""
              className="w-72"
            />
          </div>
        </section>

        {/* Speaker Section */}
        <section id="speaker" className="py-24 flex flex-col gap-10 px-6">
          {/* Deskripsi Kompetisi */}
          <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-red-700 mb-4">DESKRIPSI KOMPETISI</h2>
            <p className="text-gray-700 leading-relaxed">
              Kompetisi atau perlombaan yang ada dalam kegiatan 
              <strong> INVOFEST (Informatics Vocational Festival) 2025 </strong> 
              adalah diantaranya <strong>National Poster Design Competition</strong>, 
              <strong> UI UX Design Competition</strong>, dan juga 
              <strong> UI/UX Design Competition</strong>. Kompetisi dalam INVOFEST ini 
              mengusung tema <strong>“From Creation to Innovation”</strong>. Tema ini 
              bertujuan mengajak generasi muda untuk mengembangkan inovasi dan kreativitas 
              guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan 
              masa depan yang berkelanjutan. Melalui pendekatan ini, diharapkan generasi ini 
              akan berperan dalam menciptakan solusi-solusi baru untuk tantangan masa kini 
              dan mendatang, baik dalam hal teknologi, lingkungan, pendidikan, maupun 
              tanggung jawab sosial.
            </p>
          </div>

          {/* Judul Narasumber */}
          <h2 className="text-3xl font-bold text-center text-red-700">
            Narasumber Invofest 2025
          </h2>

          {/* Daftar pembicara */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {speakers.map((speaker, index) => (
              <SpeakerCard
                key={index}
                name={speaker.name}
                role={speaker.role}
                imageUrl={speaker.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* Cards Section */}
        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10 px-3"
        >
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4">{item.title}</h3>
              <p>{item.description}</p>
              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="mt-4 transform transition duration-300 hover:scale-105 active:scale-95 shadow-md rounded-lg px-5 py-2"
              />
            </Card>
          ))}
        </section>

        {/* FAQ Section */}
        <section id="collapse" className="py-24 flex flex-col gap-2 px-3">
          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
