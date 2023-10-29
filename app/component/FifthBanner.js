import React from 'react'
import ContainLayout from '../Layout/Container'
import StackCard from './StackCard'

const FifthBanner = () => {
  return (
    <div>
        <ContainLayout>
    <div className='grid md:grid-cols-2   py-32 place-items-center gap-6'>
        <div className='gap-8 flex-col flex '>
        <StackCard title='Backend Developers' Desc='Skilled in developing the user interface and user experience of websites and applications using HTML, CSS, and JavaScript, React/Nextjs' imageSrc='/Group 62.png' />
            <StackCard title='Digital marketers' Desc='Experienced in promoting products or services online through various marketing channels, including social media, email, search engines, and advertising platforms.' imageSrc='/Group 64.png' />
            <StackCard title='Product designers' Desc='Skilled in creating user-centered designs for digital products, including wireframes, prototypes, and high-fidelity mockups, using tools such as Sketch or Figma..' imageSrc='/Group 66.png' />
        </div>
        <div className='gap-8 flex-col flex'>
        <StackCard title='Frontend Developers' Desc='Proficient in building the server-side of web applications using programming languages such as Python, Ruby, or Java, and frameworks such as Django or Ruby MangoDb.' imageSrc='/Group 63 (1).png' />
            <StackCard title='Product managers' Desc='Responsible for defining and managing the strategy, roadmap, and feature set of a product, and collaborating with cross-functional teams to ensure its successful development and launch' imageSrc='/Group 61.png' />
            <StackCard title='Technical writers' Desc='Proficient in creating clear, concise, and accurate documentation for technical products or services, including user manuals, API documentation, and help guides' imageSrc='/Group 67.png' />
        </div>
    </div>
           
        </ContainLayout>
    </div>
  )
}

export default FifthBanner