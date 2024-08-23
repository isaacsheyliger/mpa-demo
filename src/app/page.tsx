import Link from 'next/link';
import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Hero } from '@/app/_components/hero';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { services } from './services/services';

const reviews = [
    {
      title: "John Doe",
      rating: 5,
      description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
      href: "/reviews",
    },
    {
        title: "Jane Doe",
        rating: 5,
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "/reviews",
    },
    {
        title: "Juan Doe",
        rating: 5,
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "/reviews",
    },
]

export default function Home() {
  return (
    <main className="text-primary flex flex-col grow mb-4">
        <div>
            <Hero />
        </div>

        <div className={`flex flex-col my-8`}>
            <h1 className={`text-4xl text-center self-center bg-background`}>Our Services</h1>
            <div className='hidden md:grid grid-cols-1 md:grid-cols-3 gap-4 m-16'>
                {services.map((service, index) => (
                    <Link className='flex flex-col items-center' key={index} href={`/services/${service.title.toLowerCase().replace(' ', '-')}`}>
                        <Card className='relative transition ease-in-out w-full h-[275px]'>
                            <Image 
                            className='absolute rounded-md opacity-100' 
                            src={service.img} 
                            alt={service.title} 
                            fill
                            placeholder='blur'
                            />
                            <div className='absolute z-10 transition flex flex-col text-center items-center justify-center w-full h-[275px] bg-opacity-0 opacity-0 text-primary bg-background hover:opacity-100 hover:bg-opacity-100 rounded-md'>
                                <p className={`serif-bold text-xl my-2`}>{service.title}</p>
                                <p className='text-sm text-foreground mx-12'>
                                    Do consectetur proident proident id eiusmod deserunt consequat
                                </p>
                            </div>
                        </Card>
                    </Link>
                ))}
            </div>
            
            <Accordion type='single' className='flex md:hidden flex-col self-center py-8 px-16 space-y-4 w-[90%] bg-background' collapsible>
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
        </div>

        <div className={`flex items-center justify-end h-[1000px] mt-8 bg-fixed bg-center bg-no-repeat bg-cover bg-[url(../../public/gallery-6.jpg)]`}>
            <div className='flex justify-center items-center w-1/2 h-2/5 bg-background'>
                <div className='flex flex-col items-center w-1/2'>
                    <h1 className='text-4xl w-fit'>About Us</h1>
                    <p className='w-fit my-8 text-foreground text-center'>We offer a variety of services to meet your needs. From lawn care to tree removal, we have you covered.</p>
                    <Button className='w-24'>
                        <Link href='/about'>
                            Learn More
                        </Link>
                    </Button>
                </div>
            </div>
        </div>

        <div className='flex md:hidden flex-col w-[80%] md:w-full self-center my-16'>
            <h2 className={`text-4xl font-bold self-center mb-8`}>Customer Reviews</h2>
            <Carousel
            opts={{
                loop: true,
                duration: 60,
            }}
            className=''
            >
                <CarouselContent>
                {reviews.map((blurb, index) => (
                    <CarouselItem key={index} className='flex justify-center'>
                        <div
                        key={index} 
                        className='self-center max-w-[80%]'
                        >
                            <Card className='flex flex-col my-2 items-center shadow-gray-500'>
                                <CardHeader className='px-6 pt-6 pb-4'>
                                    <CardTitle>{blurb.title}</CardTitle>
                                </CardHeader>
                                <CardContent className='flex flex-col items-center'>
                                    <div className="flex pb-4">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <svg key={star} className={`w-4 h-4 fill-current ${star <= blurb.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <CardDescription className="text-foreground text-center">{blurb.description}</CardDescription>
                                </CardContent>
                                <CardFooter>
                                    <Button>
                                        <Link href='/reviews'>
                                            See More
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card> 
                        </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>

        <div className='hidden md:flex flex-col my-16'>
            <h2 className={`text-4xl font-bold self-center`}>Customer Reviews</h2>
            <div className={`flex flex-col self-center items-center justify-center text-center w-[55%]`} role="region" aria-labelledby="blurb-title">
                <Carousel
                opts={{
                    loop: true,
                    duration: 60,
                }}
                >
                    <CarouselContent className=''>
                    {reviews.map((blurb, index) => (
                        <CarouselItem key={index}>
                            <div key={index} className='flex flex-col items-center my-8'>
                                <h2 className="text-2xl mb-2">{blurb.title}</h2>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className={`w-4 h-4 fill-current ${star <= blurb.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="text-lg text-foreground w-[80%] h-[75px] pt-[15px]">{blurb.description}</p>
                            </div>
                        </CarouselItem>
                    ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                <Button className="w-24 mt-4">
                    <Link href='/reviews'>See More</Link>
                </Button>
            </div>
        </div>
    </main>
  );
}