import { FaRegSmile } from "react-icons/fa";
import { GiFoodTruck } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

const stepsData = [
  {
    icon: <FaRegSmile className="w-16 h-16 mb-4 text-yellow-500" />,
    title: "Pilih Menu",
    description:
      "Pilih hidangan pangsit favorit Anda dari berbagai pilihan kami.",
  },
  {
    icon: <GiFoodTruck className="w-16 h-16 mb-4 text-yellow-500" />,
    title: "Tentukan Frekuensi",
    description: "Pilih frekuensi pengiriman sesuai kebutuhan Anda.",
  },
  {
    icon: <MdDeliveryDining className="w-16 h-16 mb-4 text-yellow-500" />,
    title: "Pengiriman Cepat",
    description:
      "Nikmati pengiriman cepat dan terpercaya langsung ke depan pintu Anda.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8 max-w-6xl mx-auto relative z-10 mt-12 text-black">
      <h2 className="text-4xl font-bold mb-4">Cara Kerja Kami</h2>
      <p className="text-lg mb-6 text-center">
        Proses kami sederhana: kami menggunakan bahan-bahan segar, membuat
        pangsit lezat, dan mengantarkannya langsung ke Anda. Rasakan kenikmatan
        kuliner terbaik bersama Pangxito.
      </p>
      <section className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 mt-6">
        {stepsData.map((step, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex-1 flex flex-col items-center transition-transform transform hover:scale-105"
          >
            {step.icon}
            <h3 className="text-lg font-bold mb-2 text-center">{step.title}</h3>
            <p className="text-base text-center">{step.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

export default HowItWorks;
