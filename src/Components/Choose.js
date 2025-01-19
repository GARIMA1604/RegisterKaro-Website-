

import React from "react";
const features = [
  {
    title: "Guaranteed Satisfaction",
    description:
      "We ensure that you stay 100% satisfied with our offered services",
    icon: "😊",
    bgColor: "bg-blue-50",
  },
  {
    title: "Confidential & Safe",
    description: "All your private information is safe with us",
    icon: "🛡",
    bgColor: "bg-red-50",
  },
  {
    title: "No Hidden Fee",
    description:
      "Everything is put before you with no hidden charges or conditions",
    icon: "✅",
    bgColor: "bg-green-50",
  },
  {
    title: "Expert CA/CS Assistance",
    description:
      "Prompt support from our in-house expert professionals",
    icon: "👩‍💼",
    bgColor: "bg-pink-50",
  },
  {
    title: "Confidential & Safe",
    description: "All your private information is safe with us",
    icon: "🛡",
    bgColor: "bg-yellow-50",
  },
];

const WebPage = () => {
  return (
    <div className="font-sans">
      
      <section className="bg-gray-50 min-h-screen p-10 h-[583px]">
  <div className="flex justify-between gap-8">
    {/* Left Section (Text) */}
    <div className="w-1/2">
      <h1 className="text-yellow-600 font-semibold text-sm">
        WHY REGISTERKARO.IN
      </h1>
      <h2 className="text-gray-800 text-2xl font-bold mt-2">
        Why Choose Register Karo
      </h2>
      <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
        It is with consistent services and results that build trust with the
        people and that in turn help us to serve the business better.
      </p>
    </div>

    {/* Right Section: Top Boxes */}
    <div className="w-1/2 flex flex-col gap-8">
      <div className="flex gap-6">
        {features.slice(0, 2).map((feature, index) => (
          <div
            key={index}
            className={`${feature.bgColor} shadow-md rounded-lg p-8 text-center transition-transform hover:scale-105 w-1/2 h-[250px]`} // Increased height
          >
            <div className="text-3xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* Right Section: Bottom Boxes */}
  <div className="flex gap-6 mt-8">
    {features.slice(2, 5).map((feature, index) => (
      <div
        key={index}
        className={`${feature.bgColor} shadow-md rounded-lg p-8 text-center transition-transform hover:scale-105 w-1/3 h-[250px]`} // Increased height
      >
        <div className="text-3xl mb-4">{feature.icon}</div>
        <h3 className="text-lg font-semibold text-gray-800">
          {feature.title}
        </h3>
        <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
      </div>
    ))}
  </div>
</section>


      
      <section className="bg-gray-100 py-16 px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Happy Clients</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          Professionally cultivate one-to-one customer service with robust
          ideas. Dynamically innovate resource-leveling customer service for the
          state of the art customer service.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {/* Add logos as images */}
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
          <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
        </div>
        <div className="text-center mt-8">
          <button className="text-blue-600 font-semibold">Show More →</button>
        </div>
      </section>
    </div>
  );
};

export default WebPage;