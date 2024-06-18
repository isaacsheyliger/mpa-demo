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
import { Compare } from './_components/compare';
import { ContactForm } from './_components/contactform';
import Link from 'next/link';

const services = [
    {
        title: "Lawn Care",
        img: "/lawn-care.jpg",
    },
    {
        title: "Tree Removal",
        img: "/tree-removal.jpg",
    },
    {
        title: "Snow Removal",
        img: "/snow-removal.jpg",
    },
    {
        title: "Hardscaping",
        img: "/hardscaping.jpg",
    },
    {
        title: "Artificial Turf",
        img: "/artificial-turf.jpg",
    },
    {
        title: "Commercial",
        img: "/commercial.jpg",
    },
]

const reviews = [
    {
      title: "John Doe",
      rating: 5,
      description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
      href: "/reviews",
      img: "/vercel.svg",
    },
    {
        title: "Jane Doe",
        rating: 5,
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "/reviews",
        img: "/next.svg",
    },
    {
        title: "Juan Doe",
        rating: 5,
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "/reviews",
        img: "/vercel.svg",
    },
]

export default function Home() {
  return (
    <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
        <div>
            <Hero className="flex md:hidden" img="/vercel.svg"></Hero>
            <Hero className="hidden md:flex" img="/next.svg"></Hero>
        </div>
        <div className='flex flex-col'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                {services.map((service, index) => (
                    <Card key={index} className='m-2'>
                        <CardHeader>
                            <CardTitle>{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img src={service.img} alt={service.title} className='w-full h-48 object-cover' />
                        </CardContent>
                        <CardFooter>
                            <Button>
                                <Link href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                                    Learn More
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
        <div className='flex md:hidden flex-col'>
            {/* map titles and descriptions to card/blurbs */}
            {reviews.map((blurb, index) => (
            <div
            key={index} 
            className='self-center max-w-[80%]'
            >
                <Card className='my-2'>
                    <CardHeader>
                        <CardTitle>{blurb.title}</CardTitle>
                        <CardDescription>{blurb.description}</CardDescription>
                    </CardHeader>
                    <CardContent className='flex'>
                        <Button>
                            <Link href={blurb.href}>
                                Learn More
                            </Link>
                        </Button>
                    </CardContent>
                </Card> 
            </div>
            ))}
        </div>

        <div className='flex items-center justify-center max-h-[300px] mt-8'>
            <Blurb title='About Us' description='We offer a variety of services to meet your needs. From lawn care to tree removal, we have you covered.' href='/about' img='/vercel.svg' orientation={false} />
        </div>

        <div className='flex flex-col my-16'>
            <h2 className='text-2xl font-bold self-center mt-4'>Customer Reviews</h2>
            {reviews.map((blurb, index) => (
            <div
            key={index}
            className='flex items-center justify-center max-h-[300px]'
            >
                <div className={`flex flex-col sm:flex-row ${index % 2 != 0 ? 'sm:flex-row-reverse' : ''} items-center justify-center m-12 w-full max-h-[300px]`} role="region" aria-labelledby="blurb-title">
                    <div className="relative w-1/2 max-h-[300px] aspect-square" role="img" aria-label={blurb.title}>
                        <Image src={blurb.img} alt={blurb.title} fill style={{ objectFit: 'cover' }} className="rounded-lg px-12" />
                    </div>
                    <div className="w-1/2 p-4 flex flex-col justify-center">
                        <h2 className="text-2xl font-bold mb-2">{blurb.title}</h2>

                        <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg key={star} className={`w-4 h-4 fill-current ${star <= blurb.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                </svg>
                            ))}
                        </div>
                        <p className="text-lg">{blurb.description}</p>
                        <Button className="w-24 mt-4">
                            <Link href={blurb.href}>See More</Link>
                        </Button>
                    </div>
                </div>
            </div>
            ))}
        </div>

        <div className="flex justify-evenly mb-8">
            <div className="px-8">
                <h2 className="text-4xl font-bold text-center">Contact Us</h2>
                <p className="text-center">Have a question? Want to schedule a service? <br/> Send us a message!</p>
            </div>
            <ContactForm />
        </div>
    </main>
  );
}