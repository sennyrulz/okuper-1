import Banner from '../components/bannerIndex'
import StorySection from '../components/storySection'
import IndexCarousel from '../components/indexCarousel'
import propertyData from '../data/property.json'



function Homepage() {
    // Filter out real property cards
  const propertyItems = propertyData.filter(
    (item) =>
      item.Img && Array.isArray(item.Img) && item.Img.length > 0 && item._id
  );

  // Insert an ad banner after every 6 or 7 property cards
  const mixedItems = [];
  let counter = 0;

  // Loop through the properties and insert an ad banner at regular intervals
  for (let i = 0; i < propertyItems.length; i++) {
    mixedItems.push(propertyItems[i]);
    counter++;

    // After every 6th or 7th property card, add an ad banner (use _id "06" as an example)
    if (counter === 6) {
      mixedItems.push({
        _id: "ad-banner", // Unique ID for the ad
        isAd: true, // Mark this as an ad banner
        topic: "Ad Banner",
        desc: "This is an Ad",
        btn: "url", // Example button link
      });
      counter = 0; // Reset counter after the ad
    }
  }

return (
    <>
    <Banner />
    <StorySection />
        <div className='px-10 py-10'>
            <h3 className='text-2xl font-bold mb-4'>Trending Homes</h3>
            <IndexCarousel rent={mixedItems} />
        </div>
    </>
    )
}
export default Homepage