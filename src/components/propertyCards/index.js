'useclient';
import Image from 'next/image';

const PropertyCard = ({ _id, img, availableUnit, price, desc, location, category, numberOfBed, propertyType, numberOfBath }) => (

    <div className="border rounded-2xl p-4 shadow-md bg-white w-full">
      
      <p><i>{_id}</i></p>
      {img && img.length > 0 && img[0].url && (
        <Image src={img} 
        alt="Property image" 
        width={400} 
        height={250} 
        className="rounded-xl object-cover"
        />
      )}
      <p className="text-sm text-gray-700 font-medium">{availableUnit} units available</p>
      <h3 className="text-lg font-semibold mt-2">N{price} / yr</h3>
      <p className="text-sm text-gray-600">{desc}</p>
      <p className="text-sm text-gray-600">{location}</p>
      <p className="text-sm text-gray-600">{category}</p>

      <div className="flex gap-4 mt-2 text-sm cardBtn">
        <span className='cardBtnItems bg-cyan-600'>{numberOfBed} Bdr</span>
        <span className='cardBtnItems'>{propertyType}</span>
        <span className='cardBtnItems'>{numberOfBath} Bath</span>
      </div>
    </div>
  );


  export default PropertyCard


  