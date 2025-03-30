import React from "react";
import {
  CleaningServices,
  Inventory,
  MeetingRoom,
  RoomService,
  LocalLaundryService,
  DryCleaning,
} from "@mui/icons-material";

const services = [
  {
    title: "Room Cleaning",
    description: "Assign & track room cleanliness.",
    icon: <CleaningServices style={{ fontSize: 50, color: "blue" }} />,
  },
  {
    title: "Linen Management",
    description: "Monitor linen stock & condition.",
    icon: <Inventory style={{ fontSize: 50, color: "green" }} />,
  },
  {
    title: "Public Areas Cleaning",
    description: "Maintain shared spaces.",
    icon: <MeetingRoom style={{ fontSize: 50, color: "red" }} />,
  },
  {
    title: "Special Services",
    description: "Manage guest requests efficiently.",
    icon: <RoomService style={{ fontSize: 50, color: "goldenrod" }} />,
  },
  {
    title: "In-House Laundry",
    description: "Track hotel-owned laundry.",
    icon: <LocalLaundryService style={{ fontSize: 50, color: "purple" }} />,
  },
  {
    title: "Guest Laundry Services",
    description: "Provide seamless guest laundry.",
    icon: <DryCleaning style={{ fontSize: 50, color: "orange" }} />,
  },
];

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#2D336B] p-2 text-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/clean1.png" alt="Hotel Logo" className="h-12" />

          {/* Navigation Links */}
          <ul className="hidden md:flex space-x-6">
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("home-section")}
            >
              Home
            </li>
            <li
              className="cursor-pointer"
              onClick={() => scrollToSection("service-section")}
            >
              Services
            </li>
          </ul>

          <div className="hidden md:flex space-x-4">
            <button className="bg-white text-[#2D336B] px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition">
              Sign Up
            </button>
            <button className="bg-[#4F709C] text-white px-4 py-2 rounded-md font-semibold hover:bg-[#8C96A5] transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white text-2xl">&#9776;</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: "url('/home.webp')" }}
        id="home-section"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Effortless Housekeeping & Laundry Management
          </h2>
          <a
            href="#service-section"
            className="mt-6 px-6 py-3 bg-[#2D336B] text-white rounded-lg text-lg font-semibold hover:bg-[#1C2148] transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-6" id="service-section">
        <h3 className="text-3xl font-bold text-center mb-20 mt-10">
          Our Services
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg text-center flex flex-col items-center 
            hover:shadow-lg transition transform hover:-translate-y-1 cursor-pointer bg-gradient-to-br from-[#F4F4F4] to-[#8C96A5]"
            >
              {service.icon}
              <h4 className="text-xl font-semibold mt-4">{service.title}</h4>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>


      {/* Footer */}
      <footer className="bg-[#2D336B] text-white text-center py-6">
        <p>&copy; 2025 Hotel Management System | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
