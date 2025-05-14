import React from 'react'
import AdBannerCard from '../../components/adBannerCard/index.js'
import PropertyCard from '../../components/propertyCard/index.js'
import propertyData from '../../data/property.json'
import './Rent.module.scss'


function Rent() {
  // Filter and prepare property data
  const propertyItems = propertyData.filter(
    (item) => item.Img && Array.isArray(item.Img) && item.Img.length > 0 && item._id
  );

  // Insert ad banners after every 6 property cards
  const mixedItems = [];
  let counter = 0;

  for (let i = 0; i < propertyItems.length; i++) {
    mixedItems.push(propertyItems[i]);
    counter++;

    if (counter === 6) {
      mixedItems.push({
        _id: 'ad-banner-' + i,
        isAd: true,
        topic: 'Ad Banner',
        desc: 'This is an Ad',
        btn: '/ad-link',
      });
      counter = 0;
    }
  };
  return (
    <>
     
        <main className="bg-gray-50 min-h-screen py-12 px-6 md:px-12">
          <h1 className="text-3xl font-bold text-blue-800 mb-10 text-center">
            Properties for Rent
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mixedItems.map((item) =>
              item.isAd ? (
                <AdBannerCard key={item._id} {...item} />
              ) : (
                <PropertyCard key={item._id} {...item} />
              )
            )}
          </div>
        </main>
     
    </>
  );
}

export default Rent;
