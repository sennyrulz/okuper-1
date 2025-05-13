import PropertyCard from "../propertyCard";
import AdBanner from "../adBannerCard/index";

const IndexCarousel = ({ rent }) => {
    //Slice first 8 items from mixed array
    const slicedItems = rent.slice(0, 8);
    return (
        <div className="md:flex flex-row scrollbar-hidden carousel md:space-y-6 space-y-6 space-x-6 justify-between px-10 overflow-x-auto">
          {slicedItems.map((item, index) => (
            item.isAd ? (
              <AdBanner key={`ad-${index}`} desc={item.desc} topic={item.topic} btn={item.btn} />
            ) : (<PropertyCard key={item._id} {...item} />)))}
        </div>
      );
    };

export default IndexCarousel;
