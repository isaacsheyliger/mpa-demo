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
]

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
            <div>
                <Hero className="flex md:hidden" img="/vercel.svg"></Hero>
                <Hero className="hidden md:flex" img="/next.svg"></Hero>
            </div>
            <div className='flex flex-row'>
                {/* map about us details to cards/blurbs */}
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
        </main>
    )
}