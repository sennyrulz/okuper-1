import Image from 'next/image'
import Banner1 from '../../components/bannerIndex/Banner_2.png'
import Model1 from '../bannerIndex/bannerboy.png'
import styles from './bannerIndex.module.scss'
import Icon from '../../../public/houseIcon.png'
import '../../app/globals.css'

function Banner() {
    return(
        <div className={styles.Banner__Banner1} style={{margin: "-365px 0 0 0"}}>       
            <div>
                <Image className={`${styles.Banner__bannerBoy} hidden md:block`} src={Model1} alt="bannerModel" 
                style={{zIndex:'50', 
                position: 'relative',
                bottom: '-316px',
                left:'250px'}}/>
            </div>
            
            <div className='text-wrap' id='bannerText' style={{zIndex:'50', position: 'relative', bottom: 125, left:820, color: '#ffff', fontWeight:'normal'}}>
                <Image className='houseIcon' src={Icon} alt="houseIcon" width={78} height={85} />
                <h1 style={{fontSize: '55px', fontWeight:'150'}}>We got you covered
                </h1>
                <h3 style={{fontSize: '20.5px', fontWeight: 100}}>The Nigerian rental market has become tainted by the </h3>
                <h3 style={{fontSize: '20.5px', fontWeight: 100}}>greed of middlemen, who often charge exorbitant fees.</h3>
            </div>
            
            <Image className='Banner1' src={Banner1} alt="Banner1" 
            width={1440} height={480} 
            style={{marginTop:'-484px', 
            marginBottom:'70px',
        }}/>
            <div className='bannerBtn' style={{marginTop:'-180px'}}>
                <button className={styles.btn1}>Got a vacant home?</button>
                <button className={styles.btn2}>Looking for a home?</button>
            </div>
        </div>
    );
}

export default Banner