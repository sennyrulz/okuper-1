import PropertyCard from "../propertyCard";


function indexCarousel() {
    return(
        <div className="md:flex flex-col carousel">
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