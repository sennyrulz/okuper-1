'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Nav.module.scss';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className={styles.navbar}>
      {/* Hamburger Icon */}
      <div className={styles.navbar__hamburger} onClick={toggleMenu}>
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </div>

      {/* Menu */}
      <ul className={`${styles.navbar__menu} ${isMenuOpen ? styles['navbar__menu--open'] : ''} `}>
        <li className={styles.navbar__item}><Link href="/rent">RENT</Link></li>
        <li className={styles.navbar__item}><Link href="/sell">SELL</Link></li>
        <li className={styles.navbar__item}><Link href="/buy">BUY</Link></li>
        <li className={styles.navbar__item}><Link href="/shortlet">SHORTLET</Link></li>

        <div className={`${styles.navbar__logo} md:block`}>
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={220} height={110} />
          </Link>
        </div>

        <li className={styles.navbar__item}><Link href="/manage">MANAGE</Link></li>
        <li className={styles.navbar__item}><Link href="/advert">ADVERT</Link></li>
        <li className={styles.navbar__item}><Link href="/help">HELP</Link></li>
        <li className={styles.navbar__item}><Link href="/signIn">SIGN IN / SIGN UP</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

