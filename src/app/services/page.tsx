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
import { Compare } from '../_components/compare';
import { ContactForm } from '../_components/contactform';

import stock from '../../public/stock.jpg';
import treeremoval from '../../public/tree-removal.jpg';
import snowremoval2 from '../../public/snow-removal-2.jpg';
import hardscaping from '../../public/hardscaping.jpg';
import artificialturf from '../../public/artificial-turf.jpg';
import commercial3 from '../../public/commercial-3.jpg';

import lawncare2 from '../../public/lawn-care-2.jpg';
import snowremoval3 from '../../public/snow-removal-3.jpg';
import hardscaping3 from '../../public/hardscaping-3.jpg';
import commercial2 from '../../public/commercial-2.jpg';

const blurbs = [
    {
        title: "Lawn Care",
        href: "/services/lawn-care",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
        img: "/stock.jpg",
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
        <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
            <div className='mb-8'>
                <Hero img={images} />
            </div>
            <h1 className='text-4xl font-bold self-center'>Services</h1>
            <div className='flex md:hidden flex-col my-8'>
                {/* map titles and descriptions to card/blurbs */}
                {blurbs.map((blurb, index) => (
                <div
                key={index}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>{blurb.title}</CardTitle>
                            <CardDescription>{blurb.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button>Press me</Button>
                        </CardContent>
                    </Card> 
                </div>
                ))}
            </div>
            <div className='hidden md:flex flex-col my-8'>
                {blurbs.map((blurb, index) => (
                <div
                key={index}
                className='flex items-center justify-center max-h-[300px] my-1'
                >
                    <Blurb className="border border-black rounded-lg" title={blurb.title} description={blurb.description} href={blurb.href} orientation={index % 2 == 0 ? false : true} img={blurb.img} />
                </div>
                ))}
            </div>
        </main>
    )
}