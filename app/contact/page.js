
"use client"
import React from 'react'
import HeroBanner2 from '../component/HeroBanner2'
import Header from '../Layout/Navbar'
import Footer from '../component/Footer'
import Forms from '../component/Forms'
import ContainLayout from '../Layout/Container'

const page = () => {
  return (
<div>
<Header />
<ContainLayout>

<Forms />

</ContainLayout>
  <Footer />
</div>

  )
}

export default page
