"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { XCircleIcon } from "@heroicons/react/outline";
import { prices, ratings, categories, propertiesType } from "../../data/constants"; // Adjust path as needed

function FilterNavbarIndex() {
  const router = useRouter();

  const [category, setCategory] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [price, setPrice] = useState("all");
  const [rating, setRating] = useState("all");
  const [sort, setSort] = useState("featured");

  const [properties, setProperties] = useState([]); // Dummy data for display
  const [query, setQuery] = useState(""); // Placeholder
  const countProperties = properties.length;

  const categoryHandler = (e) => setCategory(e.target.value);
  const propertyTypeHandler = (e) => setPropertyType(e.target.value);
  const priceHandler = (e) => setPrice(e.target.value);
  const ratingHandler = (e) => setRating(e.target.value);
  const sortHandler = (e) => setSort(e.target.value);

  return (
    <div className="grid md:grid-cols-4 md:gap-5">
      <div className="space-y-4">
        <div>
          <h2>Category</h2>
          <select className="w-full" value={category} onChange={categoryHandler}>
            <option value="all">All</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div>
          <h2>Property Type</h2>
          <select className="w-full" value={propertyType} onChange={propertyTypeHandler}>
            <option value="all">All</option>
            {propertiesType.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <h2>Price</h2>
          <select className="w-full" value={price} onChange={priceHandler}>
            <option value="all">All</option>
            {prices.map((p) => (
              <option key={p.value} value={p.value}>{p.name}</option>
            ))}
          </select>
        </div>

        <div>
          <h2>Ratings</h2>
          <select className="w-full" value={rating} onChange={ratingHandler}>
            <option value="all">All</option>
            {ratings.map((r) => (
              <option key={r} value={r}>{r} star{r > 1 ? "s" : ""} & up</option>
            ))}
          </select>
        </div>
      </div>

      <div className="md:col-span-3">
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <div>
            <span>{countProperties === 0 ? "No" : countProperties} Results</span>
            {(query !== "all" && query !== "") ||
            category !== "all" ||
            propertyType !== "all" ||
            rating !== "all" ||
            price !== "all" ? (
              <button onClick={() => router.push("/search")}>
                <XCircleIcon className="h-5 w-5 inline ml-2" />
              </button>
            ) : null}
          </div>

          <div>
            Sort by{" "}
            <select value={sort} onChange={sortHandler}>
              <option value="featured">Featured</option>
              <option value="lowest">Price: Low to High</option>
              <option value="highest">Price: High to Low</option>
              <option value="toprated">Tenant Reviews</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterNavbarIndex;
