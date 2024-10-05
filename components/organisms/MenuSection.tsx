const menuItems = [
  {
    img: "/images/pangxito1.jpg", // Gambar untuk Pangsit Goreng
    title: "Pangsit Goreng",
    price: "Rp15.000",
    description: "Dihidangkan dengan saus pedas",
  },
  {
    img: "/images/pangxito2.jpg", // Gambar untuk Pangsit Kuah
    title: "Pangsit Kuah",
    price: "Rp18.000",
    description: "Dihidangkan dengan kuah kaldu ayam",
  },
  {
    img: "/images/pangxito3.jpg", // Gambar untuk Pangsit Isi Ayam
    title: "Pangsit Isi Ayam",
    price: "Rp20.000",
    description: "Pangsit isi ayam dengan bumbu khas",
  },
  {
    img: "/images/pangxito4.jpg", // Gambar untuk Pangsit Goreng Pedas
    title: "Pangsit Goreng Pedas",
    price: "Rp17.000",
    description: "Pangsit goreng renyah dengan rasa pedas",
  },
  {
    img: "/images/pangxito1.jpg", // Gambar untuk Pangsit Isi Daging
    title: "Pangsit Isi Daging",
    price: "Rp22.000",
    description: "Pangsit isi daging sapi dengan bumbu rahasia",
  },
  {
    img: "/images/pangxito2.jpg", // Gambar untuk Pangsit Sayur
    title: "Pangsit Sayur",
    price: "Rp12.000",
    description: "Pangsit dengan isian sayur segar",
  },
];

const MenuSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center p-8 max-w-6xl mx-auto relative z-10 mt-12 text-black">
      <h2 className="text-4xl font-bold mb-4">Jelajahi Menu Terbaik Kami</h2>
      <p className="text-lg mb-6 text-center">
        Nikmati pilihan hidangan pangsit terbaik kami. Mulai dari pangsit goreng
        hingga pangsit kuah, kami punya sesuatu untuk semua orang!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
              <span className="text-xl font-bold">{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MenuSection;
