'use client'
import '../../app/globals.css'
import Instagram from '../../../public/instagram-logo.png'
import Facebook from '../../../public/instagram-logo.png'
import X from '../../../public/X_icon_black.svg'
import Youtube from '../../../public/YouTube_Logo.png'

function Footer () {
    <div className='bg-gray-600 zIndex-50'
    style={{
        sizes: "100vw"
    }}>
        <span>
            <p>Okuper  is committed to ensuring digital accessibility for  individuals with disabilities. We are continuously working to improve the accessibility<br/>
            of our web experience for everyone, and we welcome feedback and accommodation requests. 
            If you wish to report an issue or seek an accommodation, please let us know.</p>

            <p>About Okuper's Recommendations</p>

            <p>Recommendations are based on your location and search activity, such as the homes you've viewed and<br/>
            saved and the filters you've used. We use this information to bring similar homes to your attention, 
            so you don't miss out.</p>
        </span>

        <div className="socialIcons flex">
            <img src={Instagram}></img>
            <img src={Facebook}></img>
            <img src={X}></img>
            <img src={Youtube}></img>
        </div>

        <div className='footer2 flex bg-blue-950'>
            <p>Okuper 2025</p>
            <p>Copyright. Fabletoon Limited. All Right Reserved.</p>
            <p>Terms</p>
            <p> Privacy</p>
        </div>
        
    </div>
}

export default Footer