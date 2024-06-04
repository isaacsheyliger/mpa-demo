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

const blurbs = [
    {
      title: "Feature",
      description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
      href: "",
    },
    {
        title: "Feature",
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "",
    },
    {
        title: "Feature",
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
        href: "",
    },
]
export default function Home() {
  return (
    <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
        <div>
            <Hero className="flex md:hidden" img="/vercel.svg"></Hero>
            <Hero className="hidden md:flex" img="/next.svg"></Hero>
        </div>
        <div className='flex md:hidden flex-col'>
            {/* map titles and descriptions to card/blurbs */}
            {blurbs.map((blurb, index) => (
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
        <div className='hidden md:flex flex-col'>
            {blurbs.map((blurb, index) => (
            <div
            key={index}
            >
                <Blurb title={blurb.title} description={blurb.description} orientation={index % 2 == 0 ? false : true} img='/vercel.svg' />
            </div>
            ))}
        </div>
        <div>
            <Compare />
        </div>
        <div className='flex justify-center items-center m-auto'>
            <ContactForm />
        </div>
    </main>
  );
}