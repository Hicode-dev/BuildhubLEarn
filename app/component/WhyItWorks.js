import Image from 'next/image'
import React from 'react'
import ContainLayout from '../Layout/Container'

const WhyItWorks = () => {
  return (
    <div className='bg-[rgb(234,236,238)] my-10 py-16'>
    <ContainLayout>
    <h1 className='text-[34px] py-6 flex justify-center items-center font-bold'>Why it works?</h1>
        <div className='grid md:grid-cols-3 border place-content-center items-center'>
            <div className='flex justify-center md:max-w-[404px] flex-col items-center text-center p-6'>
                <Image src='/office-woman-learning-a-new-language-online 1.png' alt='' height='150' width='150'/>
                <h1 className='text-[24px] font-[600]'>Personalized learning</h1>
                <p className='text-[16px] font-[400] '>Students practice at their own pace, first filling in gaps in their understanding and then accelerating their learning.</p>
            </div>
            <div className='flex justify-center md:max-w-[404px] flex-col items-center text-center p-6'>
                <Image src='/clip-welcome 1.png' alt='' height='150' width='150'/>
                <h1 className='text-[24px] font-[600]'>Trusted content</h1>
                <p className='text-[16px] font-[400] '>Created by experts, library of trusted practice and lessons covers math, science, and more. Always free for learners and teachers.</p>
            </div>
            <div className='flex justify-center md:max-w-[404px] flex-col items-center text-center p-6'>
                <Image src='/lagom-sall-a-technical-support-operator-by-phone 1.png' alt='' height='150' width='150'/>
                <h1 className='text-[24px] font-[600]'>Tools to empower teachers</h1>
                <p className='text-[16px] font-[400] '>Teachers can identify gaps in their students’ understanding, tailor instruction, and meet the needs of every student.</p>
            </div>
         
        </div>
    </ContainLayout>

    </div>
  )
}

export default WhyItWorks