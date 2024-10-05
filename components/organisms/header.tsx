"use client";
import React from "react";
import { FaBars } from "react-icons/fa"; // Import icon keranjang belanja
import { RiShoppingCart2Line } from "react-icons/ri";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 w-full text-red-950 relative z-10">
      <div className="text-xl font-bold">Pangxito</div>
      <nav className="hidden md:flex space-x-6">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#packages" className="hover:underline">
          Packages
        </a>
        <a href="#about" className="hover:underline">
          About Us
        </a>
        <a href="#contact" className="hover:underline">
          Contact Us
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <a href="#cart" className="text-2xl">
          <RiShoppingCart2Line />
        </a>
        <a
          href="#booking"
          className="hidden md:block bg-slate-200 text-black px-4 py-2 rounded-xl"
        >
          Booking Now
        </a>

        {/* Icon Menu untuk Mobile */}
        <button className="md:hidden text-2xl">
          <FaBars />
        </button>
      </div>
    </header>
  );
}
