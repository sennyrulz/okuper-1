import Link from 'next/link'
import styles from './Nav.module.scss'
import Image from 'next/image'
import logo from '../../../public/logo.png'


function Nav() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__item}><Link href="/rent">RENT</Link></li>
        <li className={styles.navbar__item}><Link href="/sell">SELL</Link></li>
        <li className={styles.navbar__item}><Link href="/buy">BUY</Link></li>
        <li className={styles.navbar__item}><Link href="/shortlet">SHORTLET</Link></li>
      </ul>

      <div className={styles.navbar__logo}>
        <Link href="/"><Image src={logo} alt="Logo" width={220} height={110} /></Link>
      </div>

      <ul className={styles.navbar__menu}>
        <li className={styles.navbar__item}><Link href="/mLinknage">MANAGE</Link></li>
        <li className={styles.navbar__item}><Link href="/advert">ADVERT</Link></li>
        <li className={styles.navbar__item}><Link href="/help">HELP</Link></li>
        <li className={styles.navbar__item}><Link href="/signIn">SIGN IN / SIGN UP</Link></li>
      </ul>
    </nav>
  )
}

export default Nav
