import React from "react";

const WebPage3 = () => {
  return (
    <div className="font-sans">
      {/* Statistics Section */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-lg font-semibold text-yellow-500 mb-2">
            WHY REGISTER KARO
          </h2>
          <h1 className="text-3xl font-bold mb-10">Some Numbers Are Important</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { value: "1M+", label: "Customers" },
              { value: "12+", label: "Years of Excellence" },
              { value: "41+", label: "R&D Engineers" },
              { value: "78+", label: "Countries" },
              { value: "3287+", label: "Partners" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-gray-800">{item.value}</p>
                <p className="text-lg text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Section */}
      <section className="bg-gradient-to-r from-orange-400 via-yellow-500 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-2xl font-semibold mb-4">
            1% OF THE INDUSTRY
          </h2>
          <h1 className="text-4xl font-bold mb-6">
            Welcome to Your New Digital Reality. Now.
          </h1>
          <div className="flex items-center justify-center space-x-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-4 rounded-lg w-1/2 md:w-1/3 focus:outline-none"
            />
            <button className="bg-orange-500 px-6 py-4 rounded-lg font-semibold hover:bg-orange-600">
              Submit
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-6">
            <p className="text-sm">✔ Instant Results</p>
            <p className="text-sm">✔ User-Friendly Interface</p>
            <p className="text-sm">✔ Personalized Customization</p>
          </div>
        </div>
      </section>

      {/* Partner Logos Section */}
      <section className="bg-white py-10">
        <div className="max-w-6xl mx-auto flex justify-center flex-wrap gap-6">
          {["coinbase", "spotify", "slack", "dropbox", "webflow", "zoom"].map(
            (logo, index) => (
              <img
                key={index}
                src={`https://via.placeholder.com/100?text=${logo}`}
                alt={logo}
                className="w-24 h-24 object-contain"
              />
            )
          )}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-blue-900 text-white py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About Section */}
          <div>
            <p className="mb-4">
              Design outstanding interfaces with advanced Figma features in a
              matter of minutes.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400">
                Facebook
              </a>
              <a href="#" className="text-gray-400">
                Google
              </a>
              <a href="#" className="text-gray-400">
                Apple
              </a>
              <a href="#" className="text-gray-400">
                Instagram
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">START A BUSINESS</h3>
              <ul className="space-y-2">
                <li>Features</li>
                <li>Solutions</li>
                <li>Integrations</li>
                <li>Enterprise</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">
                GOVERNMENT REGISTRATION
              </h3>
              <ul className="space-y-2">
                <li>Partners</li>
                <li>Community</li>
                <li>Developers</li>
                <li>App</li>
              </ul>
            </div>
          </div>

          {/* Compliance Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">COMPLIANCE & TAX</h3>
            <ul className="space-y-2">
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-10 text-center">
          <p className="text-sm text-gray-400 mb-4">
            © 2024 RegisterKaro. All Rights Reserved.
          </p>
          <a href="#" className="text-yellow-500 text-lg">
            ↑
          </a>
        </div>
      </footer>
    </div>
  );
};

export default WebPage3;