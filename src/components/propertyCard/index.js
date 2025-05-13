'use client';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import Link from 'next/link'
import { CldImage } from "next-cloudinary";
import Property from "../../data/property.json" 


function PropertyCard({_id, Img, availableUnit, price, desc, location,category, numberOfBed, propertyType, numberOfBath}) {
  
  const fallbackPublicId = "fully-detached-apartments-for-sale-vgc_qwlxji";
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

  console.log('Nav', typeof Nav);
  console.log('Footer', typeof Footer);
  console.log('AdBannerCard', typeof AdBannerCard);
  console.log('PropertyCard', typeof PropertyCard); 
  return (
    <div className="md: min-w-[350px] rounded-2xl shadow-lg bg-white w-80 overflow-hidden hover:shadow-xl transition-shadow duration-300 ">
      <p className='hidden'>{_id}</p>
     
      <Link href="/savedHomes" passHref
        onClick={handleSave}
          className=" ml-60 cursor-pointer relative top-7 left-10"
          title="Save to Favorites">
          <FontAwesomeIcon
            icon={faCircleCheck}
            className="text-blue-800/65 text-4xl md:text-4xl"/>
      </Link>

        <div className="mt-[-40px]">
          <CldImage
            src={publicId}
            width={500}
            height={300}
            alt={desc}
            className=" w-full h-55 rounded-t-xl object-cover"
            priority/>
        </div>

      <div className='bg-blue-800/65 text-white pl-3 rounded-2xl w-42 relative bottom-10 left-5 mb-2'>
        <p className="text-xl text-white font-medium ">
          {availableUnit || 0} units available</p>
      </div>

        <h3 className="text-3xl font-semibold  text-center mb-3">N{price || '0'} / yr</h3>
        <p className="text-lg text-gray-600 text-center mb-3">{desc || 'No description'}</p>
        <p className="text-lg text-gray-600 text-center mb-3">{location || 'No location'}</p>
        <p className="text-lg text-gray-600 text-center mb-3">{category || 'No category'}</p>

        <div className="flex gap-4 mt-7 text-md font-black cardBtn mb-10 justify-center">
          <span className='cardBtnItems bg-blue-950 rounded-md text-white px-5'>{numberOfBed || 0} Bdr</span>
          <span className='cardBtnItems bg-blue-950 rounded-md text-white px-5'>{propertyType || 'Type'}</span>
          <span className='cardBtnItems bg-blue-950 rounded-md text-white px-5'>{numberOfBath || 0} Bath</span>
        </div>
    </div>
  );
}

export default PropertyCard;