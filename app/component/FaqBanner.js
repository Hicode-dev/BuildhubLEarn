'use client'
import { useState } from 'react';


import FaqCards from "./FaqCards";
import ContainLayout from '../Layout/Container';

const FaqPage = () => {
  // Define an array of FAQ items with titles and answers
  const faqs = [
    {
      id: 1,
      title: 'How can I suscribe?',
      answer: 'Join our waitlist and stay updated. Get Started',
    },
    {
      id: 2,
      title: 'What language do I need to know before applying?',
      answer: 'It is a room for learning, you don’t necessarily need to know a particular language before applying.',
    },
    {
      id: 3,
      title: 'What is the duration for each project',
      answer: 'Each project’s duration varies according to the complexity of the product..',
    },
    {
      id: 4,
      title: 'How can I add animations to blocks?',
      answer: 'Most core blocks have animation supported added. You can add and change transition effects without needing any code.',
    },
    {
      id: 5,
      title: 'How many people on a team?',
      answer: 'For efficiency and more productivity, we onboard 6 people per team, making it six designers, six frontend developers and six backend developers.',
    },
    {
      id: 6,
      title: 'What do I get on premium suscription?',
      answer: 'On premium you get access to private mentorship, private tutor(s), physical school(s), online school, work on real-life projects, portfolio and resume build and paid internships with us.',
    },
    // Add more FAQ items as needed
  ];

  // Define a state variable to track which FAQ item is currently expanded
  const [expandedFaqId, setExpandedFaqId] = useState(null);

  // Function to toggle the visibility of an FAQ answer
  const toggleFaq = (faqId) => {
    if (expandedFaqId === faqId) {
      // Clicking the same FAQ item again will close it
      setExpandedFaqId(null);
    } else {
      // Clicking a different FAQ item will close the previous one and open the new one
      setExpandedFaqId(faqId);
    }
  };

  return (
 <ContainLayout>
       <div className='h-50 md:py-32'>
   <div className='flex justify-center text-center items-center flex-col'>
   <p className='text-[16px] font-bold'>Faq</p>
      <h1 className='md:text-[40px] text-[32px] font-semibold mb-4'>Frequently Asked Questions</h1>
   </div>
      <div className='grid md:grid-cols-2 gap-4'>
        {faqs.map((faq) => (
          <div className='' key={faq.id}>
            <FaqCards
              title={faq.title}
              icon={faq.icon}
              onClick={() => toggleFaq(faq.id)}
              expanded={expandedFaqId === faq.id} // Pass expanded state
            />
            {expandedFaqId === faq.id && (
              <div className='mt-2'>{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
 </ContainLayout>
  );
};

export default FaqPage;