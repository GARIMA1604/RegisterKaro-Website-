import React from "react";

const Navbar = () => {
  return (
    <header className="shadow-md">
      {/* Blue Section */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Left Section: Social Media Icons */}
          <div className="flex space-x-3 text-lg">
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-orange-500">
              <i className="fab fa-pinterest"></i>
            </a>
          </div>

          {/* Right Section: Email and Phone */}
          <div className="flex space-x-4">
            <a
              href="mailto:info@registerkaro.in"
              className="hover:text-orange-500"
            >
              📧 info@registerkaro.in
            </a>
            <a href="tel:+918447746183" className="hover:text-orange-500">
              📞 +91 8447746183
            </a>
          </div>
        </div>
      </div>

      {/* White Section */}
      <div className="bg-white">
        <div className="container mx-auto px-4 flex justify-between items-center py-3">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png" // Replace with your logo path
              alt="Register Karo Logo"
              className="h-10"
            />
            <span className="text-lg font-bold text-orange-500">
              RegisterKaro
            </span>
          </div>

          {/* Middle Section: Navigation Links */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-orange-500">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-orange-500">
              Our Services
            </a>
            <a href="#blog" className="text-gray-700 hover:text-orange-500">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500">
              Contact Us
            </a>
            <a href="#about" className="text-gray-700 hover:text-orange-500">
              About Us
            </a>
          </nav>

          {/* Right Section: Search and CTA */}
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-700 text-lg hover:text-orange-500">
              🔍
            </a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600">
              Talk an Expert
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
