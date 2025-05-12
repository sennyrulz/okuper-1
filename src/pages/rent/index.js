// src/pages/rent.js
import React, { useState, useEffect } from "react";
import Nav from "@/components/nav";
import FilterBar from "@/components/filterBar";
import PropertyCard from "@/components/propertyCard";
import AdBannerCard from "@/components/adBannerCard";
import Footer from "@/components/footer";

const Rent = () => {
  // Dummy property data (replace later with fetched data)
  const properties = Array.from({ length: 12 }).map((_, i) => ({
    _id: `prop-${i}`, // Just to simulate unique IDs so when you see prop-1 and so on, na from here
    Img: [{ publicId: "your-default-cloudinary-id" }],
    availableUnit: 3,
    price: 8000000,
    desc: "Tastefully furnished duplex with everything inside.",
    location: "Ikoyi, Lagos",
    category: "Apartment",
    numberOfBed: 4,
    propertyType: "Duplex",
    numberOfBath: 3,
  })); // This just creates an array of 12 fake properties

  // Search bar logic
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => setSearchQuery(e.target.value);

  const filteredProperties = properties.filter((property) =>
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  const paginatedProperties = filteredProperties.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="color px-4 md:px-12 py-8">
      <Nav />

      <FilterBar searchQuery={searchQuery} handleSearch={handleSearch}/>

      <p className="text-lg font-semibold mb-4">
        Rental Listings — {filteredProperties.length} homes available
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedProperties.map((property, index) => (
          <React.Fragment key={property._id}>
            <PropertyCard {...property} />
            {index === 2 && (
              <AdBannerCard
                topic="WorkmanHQ!"
                desc="Get verified agents & homes without stress."
                btn="/get-started"
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Pagination buttons */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1
                ? "bg-blue-900 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

// Without dummy data
// const Rent = () => {
//   return (
//     <div className="px-4 md:px-12 py-8 space-y-8">
//       <Nav />

//       {/* Filter Bar */}
//       <FilterBar />

//       {/* Listings Grid */}
//       <p className="text-lg font-semibold">
//         Rental Listings — 0 homes available
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         <PropertyCard />
//         <AdBannerCard
//           topic="WorkmanHQ"
//           desc="Get verified agents & homes without stress."
//           btn="/get-started"
//         />
//       </div>
//     </div>
//   );
// };

export default Rent;
