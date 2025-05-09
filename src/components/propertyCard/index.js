'use client';
// import { CldImage } from 'next-cloudinary';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

// function PropertyCard({_id, Img, availableUnit, price, desc, location,category, numberOfBed, propertyType, numberOfBath}) {
//   const fallbackPublicId = "dfdzbuk0c/fully-detached-apartments-for-sale-vgc_on3vew";
//   const publicId = Img?.[0]?.publicId || fallbackPublicId;

//   return (
//     <div className="border rounded-2xl p-4 shadow-md bg-white w-full">
//       <p className='hidden'>{_id}</p>
//       <FontAwesomeIcon icon={faCircleCheck} className="text-white text-2xl md:text-4xl" />

//       <CldImage
//         src={publicId}
//         width={400}
//         height={250}
//         alt="Property image"
//         className="rounded-xl object-cover"
//       />

//       <p className="text-sm text-gray-700 font-medium">{availableUnit || 0} units available</p>
//       <h3 className="text-lg font-semibold mt-2">N{price || '0'} / yr</h3>
//       <p className="text-sm text-gray-600">{desc || 'No description'}</p>
//       <p className="text-sm text-gray-600">{location || 'No location'}</p>
//       <p className="text-sm text-gray-600">{category || 'No category'}</p>

//       <div className="flex gap-4 mt-2 text-sm cardBtn">
//         <span className='cardBtnItems bg-cyan-600'>{numberOfBed || 0} Bdr</span>
//         <span className='cardBtnItems'>{propertyType || 'Type'}</span>
//         <span className='cardBtnItems'>{numberOfBath || 0} Bath</span>
//       </div>
//     </div>
//   );
// }

// export default PropertyCard;

// PropertyCard - Blessing
import React from 'react';
import Image from 'next/image';

const PropertyCard = ({ property }) => {
  const imageUrl = property?.Img?.[0]?.publicId
    ? `https://res.cloudinary.com/YOUR_CLOUD_NAME/image/upload/${property.Img[0].publicId}`
    : "/placeholder.jpg"; // For Fallback if image is missing

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={property.desc || "Property"}
          width={500}
          height={300}
          className="w-full h-48 object-cover"
          priority
        />
      </div>

      <div className="p-4 mb-5 text-center">
        <p className="text-xl font-bold text-black">{property.price || "₦0"}</p>
        <p className="text-gray-600 mt-2">{property.desc || "No description"}</p>
        <p className="text-md font-medium mt-1">{property.location || "Location not set"}</p>
        <p className="text-indigo-900 font-semibold mt-1">{property.category || "For Rent"}</p>

        <div className="flex justify-center gap-3 mt-4">
          <div className="bg-indigo-900 px-4 py-2 rounded text-sm font-medium text-white">
            {property.numberOfBed || 0} Bdr
          </div>
          <div className="bg-indigo-900 px-4 py-2 rounded text-sm font-medium text-white">
            {property.propertyType || "Type"}
          </div>
          <div className="bg-indigo-900 px-4 py-2 rounded text-sm font-medium text-white">
            {property.numberOfBath || 0} Bath
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;


