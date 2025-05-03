'useclient'
import React from 'react';
// import { useEffect, useState } from 'react'
import Nav from '@/components/nav';
import item from '../../data/property.json';
import AdBannerCard from '@/components/adBannerCard'
import PropertyCard from '@/components/propertyCard';



 function Rent() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <Nav />

        {item.map(item => {
          if (item.topic) {
            return <AdBannerCard 
            key={item._id} 
            topic={item.topic} 
            desc={item.desc} 
            btn={item.btn} />;
          } else {
            return (
              <PropertyCard 
                key={item._id}
                img={item.id}
                availableUnit={item.availableUnit}
                price={item.price}
                desc={item.desc}
                category={item.category}
                location={item.location}
                numberOfBed={item.numberOfBed}
                propertyType={item.propertyType}
                numberOfBath={item.numberOfBath}
              />
            );
          }

        })}
      </div>
    );
  };
  
  export default Rent;
  