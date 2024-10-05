const AboutSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 max-w-6xl mx-auto relative z-10 mt-12 text-black">
      <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
        <img
          src="/images/pangxito.png"
          alt="Tentang Kami"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-4xl font-bold mb-4">Tentang Kami</h2>
        <p className="text-lg mb-6">
          Pangsit Adalah Bagian Penting Dari Setiap Hidangan
        </p>
        <p className="text-lg mb-6">
          Baik Anda mencari pangsit goreng renyah, pangsit kuah hangat, atau
          hidangan istimewa lainnya, kami hadir untuk memenuhi selera Anda. Mari
          bergabung dengan kami dalam menikmati cita rasa otentik yang menggugah
          selera!
        </p>
        <a
          href="#learnmore"
          className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
        >
          Pelajari Lebih Lanjut
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
