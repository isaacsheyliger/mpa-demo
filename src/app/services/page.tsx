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

const blurbs = [
    {
        title: "Lawn Care",
        href: "/services/lawn-care",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
      },
      {
        title: "Tree Removal",
        href: "/services/tree-removal",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
      },
      {
        title: "Snow Removal",
        href: "/services/snow-removal",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
      },
      {
        title: "Hardscaping",
        href: "/services/hardscaping",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
      },
      {
        title: "Artificial Turf",
        href: "/services/artificial-turf",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
      },
      {
        title: "Commercial",
        href: "/services/commercial",
        description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis.",
      },
]

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
            <div>
                <Hero className="flex md:hidden" img="/vercel.svg"></Hero>
                <Hero className="hidden md:flex" img="/next.svg"></Hero>
            </div>
            <div className='flex md:hidden flex-col'>
                <h1 className='text-4xl font-bold self-center'>Services</h1>
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
            <div className='hidden md:flex flex-col'>
                <h1 className='text-4xl font-bold self-center'>Services</h1>
                {blurbs.map((blurb, index) => (
                <div
                key={index}
                className='flex items-center justify-center max-h-[300px]'
                >
                    <Blurb title={blurb.title} description={blurb.description} href={blurb.href} orientation={index % 2 == 0 ? false : true} img='/vercel.svg' />
                </div>
                ))}
            </div>
        </main>
    )
}