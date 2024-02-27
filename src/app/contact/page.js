import React from 'react';
import Hero from '@/components/about/Hero';
import ContactForm from '@/components/ContactForm';

const page = () => {
  return (
    <>
        <Hero className="pt-52 pb-24" title="Contact" subTitle="Get in touch" />
        <ContactForm />
    </>
  )
}

export default page;