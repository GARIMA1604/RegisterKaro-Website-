import React from "react";

const Page = () => {
  return (
    <div className="font-sans">
  
      <section className="bg-blue-800 h-513px  text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold">What peoples says about us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            {/* Testimonial Card */}
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-white text-gray-800 p-6 rounded-lg shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <div className="text-yellow-500 text-xl">★★★★★</div>
                    <div className="text-blue-500 text-xl">"</div>
                  </div>
                  <p className="text-sm mt-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                    nostrum exercitationem ullamco laboris nisi ut aliquid ex ea
                    commodi consequatur.
                  </p>
                  <div className="mt-6 flex items-center">
                    <img
                      src="/path-to-avatar.jpg"
                      alt="Chris"
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="font-semibold">Chris</h4>
                      <p className="text-sm">President and CEO, Pvt. Ltd., USA</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h3 className="text-yellow-600 uppercase font-semibold">FAQ</h3>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Frequent Ask Questions
          </h2>
          <div className="mt-8 max-w-5xl mx-auto">
            {Array(5)
              .fill("Can I recover deleted files from desktop with this software?")
              .map((faq, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-lg shadow-md mb-4 flex justify-between items-center cursor-pointer"
                >
                  <p className="text-gray-800">{faq}</p>
                  <span className="text-blue-600 font-bold">→</span>
                </div>
              ))}
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Show more
            </button>
          </div>
        </div>
      </section>

      
      <section className="bg-blue-800 h-550px text-white py-12">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-bold">
              Manage Your Services by your Mobile Phone
            </h2>
            <p className="mt-4">
              Download our app to manage and track your services. Get up-to-date
              guidance, stay in touch with our experts, and find solutions at your
              fingertips.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                Get the App
              </button>
              <button className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">
                Download on Google Play
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0">
            <img
              src="/path-to-app-image.jpg"
              alt="Mobile App"
              className="max-w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;