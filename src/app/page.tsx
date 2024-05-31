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

const blurbs = [
    {
      title: "Feature",
      description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
    },
    {
        title: "Feature",
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
    },
    {
        title: "Feature",
        description: "Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.",
    },
]
export default function Home() {
  return (
    <main className="flex flex-col grow">
        <div>
            <Hero className="flex md:hidden" img="/vercel.svg"></Hero>
            <Hero className="hidden md:flex" img="/next.svg"></Hero>
        </div>
        <div className='flex md:hidden flex-col'>
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
            {blurbs.map((blurb, index) => (
            <div
            key={index}
            >
                <Blurb title={blurb.title} description={blurb.description} orientation={index % 2 == 0 ? false : true} img='/vercel.svg' />
            </div>
            ))}
        </div>
    </main>
  );
}