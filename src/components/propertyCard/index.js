'use client';
import { CldImage } from 'next-cloudinary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'

function PropertyCard({_id, Img, availableUnit, price, desc, location,category, numberOfBed, propertyType, numberOfBath}) {
  
  const fallbackPublicId = "dfdzbuk0c/fully-detached-apartments-for-sale-vgc_on3vew";
  const publicId = Img?.[0]?.publicId || fallbackPublicId;

  // Save property to localStorage (or any preferred method)
  const handleSave = () => {
    const saved = JSON.parse(localStorage.getItem('savedHomes')) || [];
    const alreadyExists = saved.some((item) => item._id === _id);
    if (!alreadyExists) {
      saved.push({ _id, Img, availableUnit, price, desc, location, category, numberOfBed, propertyType, numberOfBath });
      localStorage.setItem('savedHomes', JSON.stringify(saved));
    }
  };

  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white w-80 overflow-hidden hover:shadow-lg transition-shadow duration-300 ">
      <p className='hidden'>{_id}</p>
     
     {/*Link to SavedHomes */}
     <Link href="/savedHomes"
        onClick={handleSave} 
        className="absolute top-4 right-4" 
        title="Save to Favorites">

        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-blue-800 text-2xl md:text-4xl"/>
      </Link>

      <div className="relative w-full h-48">
        <CldImage
          src={publicId}
          width={400}
          height={500}
          alt="Property image"
          className=" w-full h-48rounded-xl object-cover"
          priority
        />
      </div>

      <div className='bg-blue-800/65 text-white pl-3 rounded-2xl w-42 mt-[-100] mb-15'>
        <p className="text-xl text-white font-medium ">
          {availableUnit || 0} units available</p>
       </div>
      <h3 className="text-3xl font-semibold mt-5">N{price || '0'} / yr</h3>
      <p className="text-lg text-gray-600">{desc || 'No description'}</p>
      <p className="text-lg text-gray-600">{location || 'No location'}</p>
      <p className="text-lg text-gray-600">{category || 'No category'}</p>

      <div className="flex gap-4 mt-2 text-md font-black cardBtn mb-5">
        <span className='cardBtnItems bg-blue-950 rounded-md text-white px-5'>{numberOfBed || 0} Bdr</span>
        <span className='cardBtnItems bg-blue-950 rounded-md text-white px-5'>{propertyType || 'Type'}</span>
        <span className='cardBtnItems bg-blue-950 rounded-md text-white px-5'>{numberOfBath || 0} Bath</span>
      </div>
    </div>
  );
}

export default PropertyCard;

   
//     <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
//       {/* Image */}
//       <div className="relative w-full h-48">
//         <Image
//           src={property.image}
//           alt={property.title}
//           width={500}
//           height={300}
//           className="w-full h-48 object-cover"
//           priority
//         />
//       </div>

//       <div className="p-4 mb-5 text-center text-indigo-950">
//         {/* Price */}
//         <p className="text-xl font-bold">{property.price}</p>

//         {/* Description */}
//         <p className="mt-2">{property.description}</p>

//         {/* Location */}
//         <p className="text-md font-medium mt-1">{property.location}, Lagos State</p>

//         {/* For Rent */}
//         <p className="font-semibold mt-1">{property.forRentSale}</p>

//         {/* Boxes */}
//         <div className="flex justify-center gap-3 mt-4">
//           <div className="bg-indigo-950 px-4 py-2 rounded text-sm font-medium text-white">
//             {property.bedrooms} Bdr
//           </div>
//           <div className="bg-indigo-950 px-4 py-2 rounded text-sm font-medium text-white">
//             {property.homeType}
//           </div>
//           <div className="bg-indigo-950 px-4 py-2 rounded text-sm font-medium text-white">
//             {property.bathrooms} Bath
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;

