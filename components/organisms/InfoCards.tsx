import { IoIosCall } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { WiTime9 } from "react-icons/wi";

const cardsData = [
  {
    icon: <WiTime9 className="w-16 h-16 mb-4 text-yellow-500" />,
    title: "Jam Operasional",
    description: "Hari ini 10:00 - 19:00",
  },
  {
    icon: <IoLocationSharp className="w-16 h-16 mb-4 text-yellow-500" />,
    title: "Dapatkan Arah",
    description: "Lokasi Anda",
  },
  {
    icon: <IoIosCall className="w-16 h-16 mb-4 text-yellow-500" />,
    title: "Hubungi Kami",
    description: "+62 8560000000",
  },
];

const InfoCards: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 p-8 max-w-6xl mx-auto relative z-10 text-black">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow-lg rounded-lg p-6 flex-1 flex flex-col items-center transition-transform transform hover:scale-105"
        >
          {card.icon}
          <p className="text-base text-center font-bold">{card.description}</p>
          <h2 className="text-lg text-gray-900 mb-2 text-center">
            {card.title}
          </h2>
        </div>
      ))}
    </section>
  );
};

export default InfoCards;
