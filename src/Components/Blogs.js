import React from "react";

const Blogs = () => {
  return (
    <div className="font-sans">
      {/* Top Section with Steps */}
      <div className="bg-orange-500 py-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-white text-center">
          <div>
            <div className="text-2xl mb-2">📄</div>
            <p className="font-semibold">Fill up Application Form</p>
          </div>
          <div>
            <div className="text-2xl mb-2">💳</div>
            <p className="font-semibold">Make Online Payment</p>
          </div>
          <div>
            <div className="text-2xl mb-2">👨‍💻</div>
            <p className="font-semibold">Executive will Process Application</p>
          </div>
          <div>
            <div className="text-2xl mb-2">📧</div>
            <p className="font-semibold">Get Confirm Mail</p>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <section className="container mx-auto py-12 px-4">
        {/* Section Heading */}
        <h3 className="text-center text-sm font-semibold text-yellow-600 uppercase">
          Explore Our Blogs
        </h3>
        <h2 className="text-center text-3xl font-bold text-gray-800 mt-2">
          Accelerate Digital Transformation
        </h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/path-to-image1.jpg"
              alt="Small Business"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Prabhash Mishra · 1 Jan 2023 - Today</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Small business & Startup
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl
                winning Dynasty?
              </p>
              <div className="flex space-x-2 mt-3">
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  Tax & Audit
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  Management
                </span>
              </div>
            </div>
          </div>

        
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/path-to-image2.jpg"
              alt="Scale-Up Company"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Mahesh Kumar · 1 Jan 2023</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Scale-Up Company Offer
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Mental models are simple expressions of complex processes or relationships.
              </p>
              <div className="flex space-x-2 mt-3">
                <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                  Tax
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  Research
                </span>
                <span className="bg-orange-100 text-orange-600 text-xs px-2 py-1 rounded-full">
                  Compliance
                </span>
              </div>
            </div>
          </div>

          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/path-to-image3.jpg"
              alt="Growing Business"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Rakhi Verma · 1 Jan 2023</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Growing Business Package
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Introduction to Wireframing and its Principles. Learn from the best in the
                industry.
              </p>
              <div className="flex space-x-2 mt-3">
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  Audit
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  Money Back
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/path-to-image1.jpg"
              alt="Small Business"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Prabhash Mishra · 1 Jan 2023 - Today</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Small business & Startup
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl
                winning Dynasty?
              </p>
              <div className="flex space-x-2 mt-3">
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  Tax & Audit
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  Management
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/path-to-image1.jpg"
              alt="Small Business"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Prabhash Mishra · 1 Jan 2023 - Today</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Small business & Startup
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl
                winning Dynasty?
              </p>
              <div className="flex space-x-2 mt-3">
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  Tax & Audit
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  Management
                </span>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src="/path-to-image1.jpg"
              alt="Small Business"
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">Prabhash Mishra · 1 Jan 2023 - Today</p>
              <h3 className="text-lg font-bold text-gray-800 mt-2">
                Small business & Startup
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl
                winning Dynasty?
              </p>
              <div className="flex space-x-2 mt-3">
                <span className="bg-purple-100 text-purple-600 text-xs px-2 py-1 rounded-full">
                  Tax & Audit
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  Management
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
            Show more blogs
          </button>
        </div>
      </section>
    </div>
  );
};

export default Blogs;