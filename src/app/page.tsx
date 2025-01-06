import Image from "next/image";
import { FaMapMarkedAlt, FaFaucet, FaTools } from "react-icons/fa";
import { FaOilWell } from "react-icons/fa6";

const services = [
  {
    title: "Pengecekan Lokasi",
    description:
      "Kami melakukan survei lokasi untuk memastikan proses pengeboran sumur berjalan lancar dan sesuai dengan kondisi tanah.",
    icon: <FaMapMarkedAlt className="h-12 w-12 text-amber-400" />,
  },
  {
    title: "Pengeboran Sumur",
    description:
      "Layanan pengeboran sumur profesional untuk memenuhi kebutuhan air bersih Anda dengan hasil yang optimal.",
    icon: <FaOilWell className="h-12 w-12 text-amber-400" />,
  },
  {
    title: "Instalasi Air",
    description:
      "Pemasangan sistem instalasi air bersih yang efisien dan tahan lama untuk keperluan rumah tangga atau bisnis.",
    icon: <FaFaucet className="h-12 w-12 text-amber-400" />,
  },
  {
    title: "Maintenance",
    description:
      "Layanan perawatan rutin dan perbaikan untuk memastikan sumur Anda tetap berfungsi dengan baik.",
    icon: <FaTools className="h-12 w-12 text-amber-400" />,
  },
];
export default function Home() {
  return (
    <div>
      <section className="h-screen w-full" id="beranda">
        <div className="relative isolate h-full overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <Image
            fill
            alt="Latar belakang hero"
            className="object-cover w-full h-full"
            src="./hero-background2.webp"
          />
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="container mx-auto flex flex-col gap-6 items-center justify-center px-4">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white uppercase drop-shadow-lg text-center">
                Selamat Datang di <br />
                <span className="text-amber-400">KUTU AIR BOR</span>
              </h1>
              <p className="text-base md:text-2xl font-medium text-white/90 drop-shadow-md text-center">
                Solusi cepat dan profesional untuk pengeboran sumur Anda
              </p>
              <div className="flex gap-4 mt-6">
                <a
                  href="#services"
                  className="bg-gray-100 text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold shadow-lg hover:bg-amber-500 transition transform hover:scale-105"
                >
                  Layanan Kami
                </a>
                <a
                  href="https://wa.me/6281617619862"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-amber-400 text-gray-800 px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-lg font-semibold shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
                >
                  Hubungi Kami
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="bg-slate-800">
        <div className="container mx-auto py-12 text-white px-4 md:px-0">
          <div className="flex flex-wrap items-center justify-center md:justify-between">
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tentang Kami
              </h2>
              <p className="text-base md:text-lg">
                Selamat datang di Kutu Air Bor, penyedia jasa bor sumur
                terpercaya untuk wilayah Jabodetabek. Kami adalah usaha
                perorangan yang berkomitmen memberikan layanan pengeboran sumur
                berkualitas tinggi dengan harga yang terjangkau. Dengan
                pengalaman dan keahlian profesional, Kutu Air Bor hadir untuk
                memenuhi kebutuhan air bersih Anda, baik untuk rumah tangga
                maupun kebutuhan bisnis.
                <br />
                <br />
                Sebagai penyedia jasa bor sumur murah dan profesional, kami
                memastikan setiap pekerjaan dilakukan dengan teliti, cepat, dan
                sesuai standar. Percayakan kebutuhan pengeboran sumur Anda
                kepada kami, dan nikmati layanan terbaik dari Kutu Air Bor,
                solusi air bersih untuk Jabodetabek.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative h-[370px] md:h-[550px]">
              <Image fill alt="Tentang Kutu Air Bor" src="./about-us.png" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Layanan Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-4xl mb-4 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-slate-800">
        <div className="container mx-auto px-6 md:px-12">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Biaya Pengeboran Sumur
          </h2>
          <p className="text-center text-gray-300 mb-12">
            Kami menawarkan layanan pengeboran murah untuk wilayah Jabodetabek.
            Harga mulai dari{" "}
            <strong className="text-amber-400">Rp 100.000/meter</strong>,
            tergantung pada lokasi dan tingkat kedalaman.
          </p>
          <div className="flex justify-center">
            <div className="bg-slate-700 shadow-md rounded-lg p-6 text-center max-w-md">
              <h3 className="text-2xl font-bold text-white mb-4">
                Harga Pengeboran
              </h3>
              <p className="text-xl text-amber-400 font-semibold mb-4">
                Mulai dari Rp 100.000/meter
              </p>
              <p className="text-gray-300 text-sm mb-6">
                Hubungi kami untuk konsultasi gratis dan penawaran terbaik
                sesuai kebutuhan Anda.
              </p>
              <a
                href="https://wa.me/6281617619862"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-amber-400 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400 transition-colors duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-6 bg-slate-900 text-gray-300">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <p className="mb-4">&copy; 2024 Kutu Air Bor. All rights reserved.</p>
          <p>
            Jika Anda ingin membuat website seperti ini,{" "}
            <a
              href="mailto:khoerulumam954@gmail.com"
              className="text-blue-400 hover:underline"
            >
              klik di sini
            </a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}
