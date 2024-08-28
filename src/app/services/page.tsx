import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Hero } from '@/app/_components/hero';
import { Button } from '@/components/ui/button';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import lawncare2 from '../../../public/lawn-care-2.jpg';
import snowremoval3 from '../../../public/snow-removal-3.jpg';
import treeremoval from '../../../public/tree-removal.jpg';
import hardscaping3 from '../../../public/hardscaping-3.jpg';
import commercial2 from '../../../public/commercial-2.jpg';
import artificialturf from '../../../public/artificial-turf.jpg';

import { services } from './services';
  

export const metadata: Metadata = {
    title: `Services | Contractor Demo Site`,
};

const images = [
    lawncare2,
    treeremoval,
    snowremoval3,
    hardscaping3,
    artificialturf,
    commercial2,
]

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4">
            <div className='mb-8'>
                <Hero img={images} />
            </div>
            <h1 className='text-4xl self-center'>Services</h1>
            <Accordion type='single' className='flex flex-col self-center py-8 md:px-16 space-y-4 w-[90%] bg-background' collapsible>
                {services.map((service, index) => (
                <div
                key={index}
                >
                    <AccordionItem value={`${service.title}`} className="border-primary">
                        <AccordionTrigger className='flex justify-between bold text-foreground text-md px-2'>{service.title}</AccordionTrigger>
                        <AccordionContent className='flex flex-col items-center space-y-8 px-2'>
                            <Image src={service.img} alt={service.title} className='' />
                            <p className=''>{service.description}</p>

                            <Button className='w-24'>
                                <Link href={service.href}>
                                    Learn More
                                </Link> 
                            </Button>
                        </AccordionContent>
                    </AccordionItem>
                </div>
                ))}
            </Accordion>
        </main>
    )
}