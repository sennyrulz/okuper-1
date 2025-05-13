'use client'

import Nav from '@/components/nav';
import Footer from '../../components/footer/index';
import AdBannerCard from '../../components/adBannerCard/index';
import PropertyCard from '../../components/propertyCard/index'; // ✅ Update this path if different
import propertyData from '../../data/property.json';

function Rent() {
  // Filter out real property cards
  const propertyItems = propertyData.filter(
    (item) => item.Img && Array.isArray(item.Img) && item.Img.length > 0 && item._id
  );

  // Insert an ad banner after every 6 property cards
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
        btn: '/ad-link'
      });
      counter = 0;
    }
  }

  return (
    <>
      <Nav />

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 px-4 py-8 bg-amber-400">
        {mixedItems.map((item) =>
          item.isAd ? (
            <AdBannerCard key={item._id} {...item} />
          ) : (
            <PropertyCard key={item._id} {...item} />
          )
        )}
      </div>

      <Footer />
      </>
  );
}

export default Rent;