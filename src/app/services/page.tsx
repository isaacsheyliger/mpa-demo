import { Metadata } from 'next';
import { Hero } from '@/app/_components/hero';
import { Blurb } from '@/app/_components/blurb';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
  

import stock from '../../../public/stock.jpg';
import treeremoval from '../../../public/tree-removal.jpg';
import snowremoval2 from '../../../public/snow-removal-2.jpg';
import hardscaping from '../../../public/hardscaping.jpg';
import artificialturf from '../../../public/artificial-turf.jpg';
import commercial3 from '../../../public/commercial-3.jpg';

import lawncare2 from '../../../public/lawn-care-2.jpg';
import snowremoval3 from '../../../public/snow-removal-3.jpg';
import hardscaping3 from '../../../public/hardscaping-3.jpg';
import commercial2 from '../../../public/commercial-2.jpg';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
    title: `Services | Contractor Demo Site`,
};

const blurbs = [
    {
        title: "Lawn Care",
        href: "/services/lawn-care",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: stock,
    },
    {
        title: "Tree Removal",
        href: "/services/tree-removal",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: treeremoval,
    },
    {
        title: "Snow Removal",
        href: "/services/snow-removal",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: snowremoval2,
    },
    {
        title: "Hardscaping",
        href: "/services/hardscaping",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: hardscaping,
    },
    {
        title: "Artificial Turf",
        href: "/services/artificial-turf",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: artificialturf,
    },
    {
        title: "Commercial",
        href: "/services/commercial",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: commercial3,
    },
]

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
            <h1 className='text-4xl font-bold self-center'>Services</h1>
            <Accordion type='single' className='flex flex-col self-center py-8 px-16 space-y-4 w-[90%] bg-background' collapsible>
                {blurbs.map((blurb, index) => (
                <div
                key={index}
                >
                    <AccordionItem value={`${blurb.title}`} className="border-primary text-foreground">
                        <AccordionTrigger className='flex justify-between bold px-2'>{blurb.title}</AccordionTrigger>
                        <AccordionContent className='flex flex-col items-center space-y-8 px-2'>
                            <Image src={blurb.img} alt={blurb.title} className='' />
                            <p className=''>{blurb.description}</p>

                            <Button className='w-24'>
                                <Link href={blurb.href}>
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