import PropertyCard from "../propertyCard";
import AdBanner from "../adBannerCard/index";

const IndexCarousel = ({ rent }) => {
    //Slice first 9 items from mixed array
    const slicedItems = rent.slice(0, 9);
    return (
        <div  className="md:flex flex-row overflow-hidden md:overflow-x-auto md:w-auto max-w-auto carousel md:space-y-6 space-y-6 space-x-6 justify-between px-10 md:px-0 pb-10"
        style={{ scrollbarWidth: 'none', // Firefox
          msOverflowStyle: 'none',}} // IE & Edge
          >
          {slicedItems.map((item, index) => (
            item.isAd ? (
              <AdBanner key={`ad-${index}`} desc={item.desc} topic={item.topic} btn={item.btn} />
            ) : (<PropertyCard key={item._id} {...item} />)))}
            
        </div>
      );
    };

export default IndexCarousel;
