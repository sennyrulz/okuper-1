'useclient'
import React from 'react';
// import { useEffect, useState } from 'react'
import Nav from '@/components/nav/page';
import data from '../../data/products.json'
import AdBannerCard from '@/components/adBannerCard'
import PropertyCard from '@/components/propertyCards';



 function Page() {
  return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12">
        <Nav />
        {data.map(item => {
          if (item.topic) {
            return <AdBannerCard 
            key={item._id} 
            topic={item.topic} 
            desc={item.desc} 
            btn={item.btn} />;
          } else
          
          (
            <PropertyCard 
              key={item._id}
              img={item.img}
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
        })}
      </div>
    );
  };
  
  export default Page;
  