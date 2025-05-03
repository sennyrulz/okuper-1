'use client';
import { CldImage } from 'next-cloudinary';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function PropertyCard({_id, Img, availableUnit, price, desc, location,category, numberOfBed, propertyType, numberOfBath}) {
  const fallbackPublicId = "dfdzbuk0c/fully-detached-apartments-for-sale-vgc_on3vew";
  const publicId = Img?.[0]?.publicId || fallbackPublicId;

  return (
    <div className="border rounded-2xl p-4 shadow-md bg-white w-full">
      <p className='hidden'>{_id}</p>
      <FontAwesomeIcon icon={faCircleCheck} className="text-white text-2xl md:text-4xl" />

      <CldImage
        src={publicId}
        width={400}
        height={250}
        alt="Property image"
        className="rounded-xl object-cover"
      />

      <p className="text-sm text-gray-700 font-medium">{availableUnit || 0} units available</p>
      <h3 className="text-lg font-semibold mt-2">N{price || '0'} / yr</h3>
      <p className="text-sm text-gray-600">{desc || 'No description'}</p>
      <p className="text-sm text-gray-600">{location || 'No location'}</p>
      <p className="text-sm text-gray-600">{category || 'No category'}</p>

      <div className="flex gap-4 mt-2 text-sm cardBtn">
        <span className='cardBtnItems bg-cyan-600'>{numberOfBed || 0} Bdr</span>
        <span className='cardBtnItems'>{propertyType || 'Type'}</span>
        <span className='cardBtnItems'>{numberOfBath || 0} Bath</span>
      </div>
    </div>
  );
}

export default PropertyCard;