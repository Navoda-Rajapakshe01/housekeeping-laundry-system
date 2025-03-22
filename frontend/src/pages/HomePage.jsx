import React from "react";

const Home = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-[#2D336B] p-2 text-white text-center shadow-md h-16 items-center fixed top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/public/clean1.png"
              alt="Hotel Management Logo"
              className="h-12"
            />
          </div>
          <ul className="flex space-x-6 item p-2 mr-8">
            <li
              className="hover:cursor-pointer"
              onClick={() => scrollToSection("home-section")}
            >
              Home
            </li>
            <li className="hover:cursor-pointer">Rooms</li>
            <li
              className="hover:cursor-pointer"
              onClick={() => scrollToSection("service-section")}
            >
              Services
            </li>
            <li className="hover:cursor-pointer">Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="relative h-screen bg-cover bg-center text-[#2D336B] flex flex-col justify-center items-center"
        style={{ backgroundImage: "url('/public/home.webp')" }}
        id="home-section"
      >
        <div className="absolute inset-0 bg-white opacity-35"></div>

        <div className="relative z-10 flex flex-col justify-center items-center px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold">
            Effortless Housekeeping & Laundry Management
          </h2>
          <p className="mt-4 text-lg max-w-2xl">
            Streamline your hotel operations with our efficient system.
          </p>
        </div>
      </header>

      {/* Services Section */}
      <section
        className="h-screen container mx-auto py-16 px-4"
        id="service-section"
      >
        <h3 className="text-3xl font-bold text-center mb-8 mt-10">
          Our Services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Room Cleaning</h4>
            <p className="mt-2 text-gray-600">
              Monitor room cleanliness and assign staff easily.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Linen Management</h4>
            <p className="mt-2 text-gray-600">
              Track linen inventory and ensure quality service.
            </p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-lg">
            <h4 className="text-xl font-semibold">Guest Laundry</h4>
            <p className="mt-2 text-gray-600">
              Provide seamless laundry services to guests.
            </p>
          </div>
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
