const WelcomeSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row text-black items-center justify-between p-8 md:space-x-8 max-w-6xl mx-auto relative z-10">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Selamat Datang di Pangxito
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Temukan pengalaman kuliner terbaik bersama Pangxito. Kami menyajikan
          pangsit segar dan lezat langsung ke pintu Anda. Jelajahi berbagai
          hidangan kami dan nikmati cita rasa istimewa.
        </p>
        <a
          href="#signup"
          className="bg-black text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl"
        >
          Mulai Sekarang
        </a>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src="/images/pangxito.png"
          alt="Makanan Lezat"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};

export default WelcomeSection;
