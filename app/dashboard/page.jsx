import React from 'react'
import HeroBanner2 from '../component/HeroBanner2'
import Header from '../Layout/Navbar'
import WhoWeAre from '../component/WhoWeAre'
// import WhyItWorks from '../component/whyItWorks'
import Footer from '../component/Footer'
import WhyItWorks from '../component/WhyItWorks'

const page = () => {
  return (
    <div>
        <Header />
      <HeroBanner2 />
      <WhoWeAre />
     <WhyItWorks />
      <Footer />

    </div>
  )
}

export default page
