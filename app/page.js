'use client'

import Image from 'next/image'
import Header from './Layout/Navbar'
import HeroBanner from './component/HeroBanner'
import SecondBanner from './component/SecondBanner'
import ThirdBanner from './component/ThirdBanner'
import FourthBanner from './component/FourthBanner'
import StackCard from './component/StackCard'
import FifthBanner from './component/FifthBanner'
import MissionBanner from './component/MissionBanner'
import TrustedBanner from './component/TrustedBanner'
import FaqPage from './component/FaqBanner'
import Footer from './component/Footer'
import AOS from 'aos';
import KinikanRealest  from './component/KinikanRealest'
import 'aos/dist/aos.css';
import { useEffect } from 'react'
export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
    });
  }, []);

  return (
<div className='dark:bg-[rgb(21,25,41)] dark:text-white'>
  <Header />
<HeroBanner />
<SecondBanner />
<ThirdBanner />
<FourthBanner />
<div className='md:hidden block'>
<FifthBanner />
  </div>
<MissionBanner />
<TrustedBanner />
<FaqPage />
<KinikanRealest />
<Footer />
</div>
  )
}
