import React from 'react';

const FilterBar = ({ searchQuery, handleSearch }) => {
  return (
    <div className="flex flex-wrap items-center gap-4 mb-6">
      {/* Search Input */}
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearch}
        placeholder="Search location ..."
        className="border p-2 rounded w-full md:w-1/3"
      />

      {/* Filter Options */}
      <select className="border p-2 rounded w-full md:w-1/6">
        <option>For Rent</option>
      </select>
      <select className="border p-2 rounded w-full md:w-1/6">
        <option>Price</option>
      </select>
      <select className="border p-2 rounded w-full md:w-1/6">
        <option>Bed & Bath</option>
      </select>
      <select className="border p-2 rounded w-full md:w-1/6">
        <option>Home Type</option>
      </select>

      <div className="ml-auto">
        <select className="border p-2 rounded w-full md:w-48">
          <option>Sort Homes by</option>
        </select>
      </div>
    </div>
  );
};

export default FilterBar;
