import PropertyCard from "../propertyCard";


function indexCarousel() {
    return(
        <div className="md:flex row carousel md:space-y-6 space-y-6 space-x-6 justify-between px-10">
            <PropertyCard/>
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