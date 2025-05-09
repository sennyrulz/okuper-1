import PropertyCard from "../propertyCard";


function indexCarousel() {
    return(
        <div className="md:flex flex-col carousel gap-6">
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
            <PropertyCard/>
        </div>
    )
}
export default indexCarousel;