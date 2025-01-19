import React from "react";

const services = [
  {
    title: "Company Formation",
    description: "Build web-based solutions that enhance customer experience.",
    icon: "⚙",
  },
  {
    title: "Company Secretarial Services",
    description:
      "Make data-driven decisions and utilize technology to reach business goals.",
    icon: "📊",
  },
  {
    title: "Virtual Office Address",
    description:
      "Foster customer relationships by effectively serving your market.",
    icon: "🏢",
  },
  {
    title: "Annual Compliance Services",
    description: "Turn your ideas into modern products with our design experts.",
    icon: "📋",
  },
  {
    title: "Payroll Services",
    description:
      "Expand your business across the globe with minimal effort.",
    icon: "🛒",
  },
  {
    title: "Bookkeeping Services",
    description:
      "Steering user behaviors with creative design, data insights & technology.",
    icon: "📒",
  },
];

const App = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <header className="text-center">
        <h1 className="text-yellow-600 font-semibold text-sm">
          WELCOME TO REGISTERKARO.IN
        </h1>
        <h2 className="text-gray-800 text-2xl font-bold mt-2">
          Explore Our Services
        </h2>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-2xl transition-shadow h-[300px]"
          >
            <div className="text-yellow-500 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-semibold text-black mb-2">
              {service.title}
            </h3>
            <p className="text-darkGray-700 text-base mt-2">
              {service.description}
            </p>
            <button className="text-black mt-4 font-medium hover:underline">
              Learn more →
            </button>
          </div>
        ))}
      </main>

      <div className="text-center mt-10">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          See All Services
        </button>
      </div>
    </div>
  );
};

export default App;
