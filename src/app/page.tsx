import Image from 'next/image';
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
import Link from 'next/link';

import { Quattrocento } from 'next/font/google';

import lawncare from '../../public/lawn-care.jpg';
import treeremoval3 from '../../public/tree-removal-3.jpg';
import snowremoval from '../../public/snow-removal.jpg';
import hardscaping2 from '../../public/hardscaping.jpg';
import artificialturf from '../../public/artificial-turf.jpg';
import commercial from '../../public/commercial-3.jpg';

import gallery6 from '../../public/gallery-6.jpg';

import stock2 from '../../public/stock-2.jpg';
import hardscaping from '../../public/hardscaping-2.jpg';
import snowremoval4 from '../../public/snow-removal-4.jpg';

const serif = Quattrocento({
    weight: "700",
    subsets: ["latin"],
});

const services = [
    {
        title: "Lawn Care",
        img: lawncare,
    },
    {
        title: "Tree Removal",
        img: treeremoval3,
    },
    {
        title: "Snow Removal",
        img: snowremoval,
    },
    {
        title: "Hardscaping",
        img: hardscaping2,
    },
    {
        title: "Artificial Turf",
        img: artificialturf,
    },
    {
        title: "Commercial",
        img: commercial,
    },
]

const reviews = [
    {
      title: "John Doe",
      rating: 5,
      description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
      href: "/reviews",
      img: stock2,
    },
    {
        title: "Jane Doe",
        rating: 5,
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "/reviews",
        img: hardscaping,
    },
    {
        title: "Juan Doe",
        rating: 5,
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "/reviews",
        img: snowremoval4,
    },
]

export default function Home() {
  return (
    <main className="text-primary flex flex-col grow mb-4">
        <div>
            <Hero />
        </div>

        <div className='flex flex-col my-8'>
            <h1 className={`${serif.className} text-4xl self-center mt-4`}>Our Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 m-16'>
                {services.map((service, index) => (
                    <Link className='flex flex-col items-center' key={index} href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                        <Card className='relative transition ease-in-out w-full h-[275px]'>
                            <Image 
                            className='absolute rounded-lg opacity-100' 
                            src={service.img} 
                            alt={service.title} 
                            fill
                            placeholder='blur'
                            />
                            <div className='absolute z-10 transition flex flex-col text-center items-center justify-center w-full h-[275px] bg-opacity-0 opacity-0 text-primary bg-background hover:opacity-100 hover:bg-opacity-100 rounded-lg'>
                                <p className={`${serif.className} text-xl my-2`}>{service.title}</p>
                                <p className='text-sm text-foreground mx-12'>
                                    Do consectetur proident proident id eiusmod deserunt consequat
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>

        <div className='hidden md:flex items-center justify-center max-h-[300px] mt-8'>
            <Blurb title='About Us' description='We offer a variety of services to meet your needs. From lawn care to tree removal, we have you covered.' href='/about' img={gallery6} orientation={false} /> 
        </div>
        <div className='flex flex-col md:hidden items-center justify-center my-8'>
            <div className='relative w-full aspect-[4/3]'>
                <Image 
                src={gallery6} 
                alt='About Us' 
                fill 
                style={{ objectFit: 'cover' }}                
                placeholder='blur'
                />
            </div>
            <h1 className='text-4xl font-bold self-center mt-4'>About Us</h1>
            <p className='max-w-[70%] my-8'>We offer a variety of services to meet your needs. From lawn care to tree removal, we have you covered.</p>
            <Button>
                <Link href='/about'>
                    Learn More
                </Link>
            </Button>
        </div>

        <div className='flex md:hidden flex-col'>
            {/* map titles and descriptions to card/blurbs */}
            {reviews.map((blurb, index) => (
            <div
            key={index} 
            className='self-center max-w-[80%]'
            >
                <Card className='my-2'>
                    <CardHeader className='px-6 pt-6 pb-4'>
                        <CardTitle>{blurb.title}</CardTitle>
                    </CardHeader>
                    <CardContent className='flex flex-col'>
                        <div className="flex pb-4">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className={`w-4 h-4 fill-current ${star <= blurb.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                </svg>
                            ))}
                        </div>
                        <CardDescription>{blurb.description}</CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button>
                            <Link href='/reviews'>
                                Learn More
                            </Link>
                        </Button>
                    </CardFooter>
                </Card> 
            </div>
            ))}
        </div>

        <div className='hidden md:flex flex-col my-16'>
            <h2 className={`${serif.className} text-4xl font-bold self-center`}>Customer Reviews</h2>
            <div className={`flex flex-col self-center items-center justify-center text-center w-1/2`} role="region" aria-labelledby="blurb-title">
                {reviews.map((blurb, index) => (
                    <div key={index} className='flex flex-col items-center my-8'>
                        <h2 className="text-2xl font-bold mb-2">{blurb.title}</h2>
                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className={`w-4 h-4 fill-current ${star <= blurb.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-lg">{blurb.description}</p>
                    </div>
                    ))}
                    <Button className="w-24 mt-4">
                        <Link href='/reviews'>See More</Link>
                    </Button>
            </div>
        </div>
    </main>
  );
}