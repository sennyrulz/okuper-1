import PropertyCard from "../propertyCard";

const IndexCarousel = ({ rent }) => {
    return (
        <div className="row md:flex overflow-x-auto space-x-6 px-10 scrollbar-hide">
            {rent.map((property, index) => (
                <PropertyCard 
                key={property.id || index} data={property} />
            ))}
        </div>
    );
};

export default IndexCarousel;
