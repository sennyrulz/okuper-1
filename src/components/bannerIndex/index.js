import Image from 'next/image'
import Banner1 from '../../components/bannerIndex/Banner_2.png'
import Model1 from '../bannerIndex/bannerboy.png'
import styles from './bannerIndex.module.scss'
import Icon from '../../../public/houseIcon.png'
import '../../app/globals.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck} from '@fortawesome/free-solid-svg-icons';


function Banner() {
    return(
            
        <div className={styles.Banner__Banner1} style={{margin: "-450px 0 0 0"}}>
            <div>
                <Image className={`${styles.Banner__bannerBoy} hidden md:block`} src={Model1} alt="bannerModel" 
                style={{zIndex: 50, 
                position: 'relative',
                bottom: '-396px',
                left:'250px'}}/>
            </div>

        
            <div className='supportIcon h-18 w-18 ml-320 bg-amber-600 rounded-full animate-bounce'>
            <FontAwesomeIcon icon={faHeadset} className="text-white text-7xl" />            
            </div>  

            <div className='mt-15'>  
                <div className='mt-5 bannerText' style={{zIndex:'50', position: 'relative', bottom: 140, left:820, color: '#000', fontWeight:'normal'}}>
                    <Image className='houseIcon' src={Icon} alt="houseIcon" width={78} height={85} />
                    <h1 style={{fontSize: '55px', fontWeight:'150'}}>We got you covered</h1>
                    <h3 style={{fontSize: '20.5px', fontWeight: 100}}>The Nigerian rental market has become tainted by the </h3>
                    <h3 style={{fontSize: '20.5px', fontWeight: 100}}>greed of middlemen, who often charge exorbitant fees.</h3>
                </div>
            </div>

            <div className='bannerBtn' style={{position:'relative', zIndex:'50', top:'100px'}}>
                <button className={styles.btn1}>Got a vacant home?</button>
                <button className={styles.btn2}>Looking for a home?</button>
            </div>

            
            <div className="relative -top-71 -z-50 w-full h-[240px] md:h-[480px]">
            <Image
                src={Banner1}
                alt="Banner1"
                fill
                className="object-cover"
                sizes="100vw"
            />
            </div>


            <div className="bannerBoxes flex flex-col md:flex-row md:space-x-18 space-y-4 md:space-y-0"
                 style={{
                    marginTop: '-337px',
                    justifyContent: 'center',
                    marginLeft: '65px',
                    zIndex: 100,
                    position: 'relative'
                  }}>
                <div className=" w-[270px] and h-[160px] bg-sky-100 rounded-xl pl-11 pt-6 shadow-lg">
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#0e1d48",height: '25px', marginBottom: '10px'}} /><br/>
                    <span className='font-semibold'>Background Check<br />required for home<br />owners and tenants.</span>
                </div>
                
                <div className=" w-[270px] and h-[160px] bg-sky-100 rounded-xl pl-10 pt-7 shadow-lg">
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#0e1d48",height: '25px', marginBottom: '10px', zIndex:'150'}} /><br/>
                    <span className='font-semibold'>Property ratings by<br />tenants and flagging<br />of suspicious accounts</span>
                </div>
                
                <div className=" w-[270px] and h-[160px] bg-sky-100 rounded-xl pl-11 pt-6 shadow-lg">
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#0e1d48",height: '25px', marginBottom: '10px'}} /><br/>
                    <span className='font-semibold'>Tenants NIN identity,<br />proof, financial record<br />and occupation.</span>
                </div>
                
                <div className=" w-[270px] and h-[160px] bg-sky-100 rounded-xl pl-11 pt-6 shadow-lg">
                    <FontAwesomeIcon icon={faCircleCheck} style={{color: "#0e1d48",height: '25px', marginBottom: '10px'}} /><br/>
                    <span className='font-semibold'>All communications<br />securely happens<br />within the platform.</span>
                </div>
            </div> 

  
        </div>
    );
}

export default Banner