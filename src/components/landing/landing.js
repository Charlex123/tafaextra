import {React, useContext} from 'react'
// import { Container } from '../App'
// import { OutreachButton } from './styles/ButtonVariants.styled'
// import {HashRouter as Router,} from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import Image from 'next/image';
import styles from '../../styles/landing.module.css'
import { useState, useEffect } from 'react';
import Typed from 'react-typed';
import Heroimg from '../../assets/images/herobg.png';
import cgk from '../../assets/images/coingecko-aace8f3c.png';
import cmc from '../../assets/images/coinmarketcap-a91aaec1.png';
import dextools from '../../assets/images/dextools-chart-95a9780d.png';
import quckswap from '../../assets/images/quickswap-light-3af62abd.png';
import stakebanner from '../../assets/images/banner.png'
import { ThemeContext } from '../../contexts/theme-context';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faCheck, faCheckCircle, faCheckSquare,faAlignJustify, faUserCircle } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
library.add(fas, faTwitter, faFontAwesome,faQuestionCircle, faCheck,faCheckCircle,faAlignJustify)

const Home = () => {
// Create a state variable to manage the visibility of the navigation menu
const [isNavOpen, setNavOpen] = useState(false);
const { theme, drawerOpen } = useContext(ThemeContext);

useEffect(() => {
  // Function to handle window resize
  const handleResize = () => {
    // Check the device width and update isNavOpen accordingly
    if (window.innerWidth <= 990) {
      setNavOpen(false);
    } else {
      setNavOpen(true);
    }
  };

  // Initial check when the component mounts
  handleResize();

  // Add a resize event listener to update isNavOpen when the window is resized
  window.addEventListener('resize', handleResize);

  // Clean up the event listener when the component unmounts
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


// Function to toggle the navigation menu
const toggleNav = () => {
  setNavOpen(!isNavOpen);
};

  return (
    <>
    <div className={styles.homemain}>
      <div className={styles.overlay_d}></div>
      <div className={styles.c_content}>
          <div className={styles.hero_h1}>
            <div>
              <h1 className={styles.h1}>
                Welcome To TafaXtra  
              </h1>
            </div>
            <Typed
                    strings={[
                        'Newly Launched',
                        'Reliable',
                        'Sustainable',
                        'Trusted']}
                    typeSpeed={40}
                    backSpeed={50}
                    className={styles.typedHeader}
                    style={{ color: '#08d34f', fontSize: '40px',fontWeight: 600,fontFamily: 'Verdana' }}
                    loop
                />
                <h1>Staking Dapp</h1>
            <div>
              <h4 className={styles.hero_h4}>The best time-locked staking system on the blockchain. High yield, protected by deflationary measures backed by validator nodes</h4>
            </div>
            
            <div className={styles.get_sd_btns}>
              <a title='get started' href='/' rel='noopener noreferrer' className={styles.getstarted}>Get Started</a>
              <a href='/' rel='noopener noreferrer' className={styles.learnmore}>Launch Dapp</a>
            </div>
          </div>
          <div className={styles.hero_image}>
            <Image src={Heroimg} alt='hero img' className={styles.hero_image_} quality={90} style={{objectFit: "cover",marginTop: "50px"}}/>
          </div>
      </div>
      
      {/* dex tools */}

      <div className={styles.exchmain}>
        <div className={styles.dexchanges}>
          <a href='https://coingecko.com'><Image src={cgk}/></a>
          <a href='https://coinmarketcap.io'><Image src={cmc}/></a>
          <a href='https://dextools.io'><Image src={dextools}/></a>
          <a href='https://quickswap.exchange'><Image src={quckswap}/></a>
        </div>
      </div>

      <div className={styles.stkb}>
        <div>
          <Image src={stakebanner} quality={90} layout style={{objectFit:"contain"}} className={styles.stakebanner}/>
        </div>
      </div>
    </div>

    

    </>
  )
}

export default Home