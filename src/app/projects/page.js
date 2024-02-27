import { Metadata } from "next";
import React from 'react';
import Link from 'next/link';
import Hero from '@/components/about/Hero';
import Projects from '@/components/projects/Projects';
import CTA from '@/components/CTA';
import Image from 'next/image';

export const metadata = {
    title: "Projects | Arcraft"
};

function page() {
    return (
        <>
            <Hero className="pt-52 pb-24" title="Projects" subTitle="Our Projects" />
            <Projects className="pt-0 pb-52" itemsPerPage={4} />
            <CTA
                className="py-32 lg:py-32 bg-violet-600"
                cta_label="Get in touch"
                cta_link="contact/"
                title="Do you have project in mind?"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Fugiatillum expedita explicabo accusantium aut ut optio at."
            />
        </>
    );
}

export default page;