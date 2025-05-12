'useclient'
import Link from 'next/link'


const AdBannerCard = ({ topic, desc, btn }) => (
    <div className="col-span-full bg-blue-900 text-white rounded-2xl p-6 text-center">
      <h3 className="text-xl font-semibold mb-2">{topic}</h3>
      <p className="mb-4">{desc}</p>
      {btn && (
        <Link href={btn} className="inline-block px-4 py-2 bg-white text-blue-900 rounded font-medium">Get Started
        </Link>
      )}
    </div>
  );

  export default AdBannerCard;