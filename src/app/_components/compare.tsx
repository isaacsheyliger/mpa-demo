import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const cards = {
    card1: {
        title: "Plan 1",
        subtext: "Most popular",
        price: "$10k",
        features: [
            "Feature 1 goes here",
            "Feature 2 goes here",
            "Feature 3 goes here",
            "Feature 4 goes here",
        ],
    },
    card2: {
        title: "Plan 2",
        subtext: "Best value",
        price: "$500",
        features: [
            "Feature 1 goes here",
            "Feature 2 goes here",
            "Feature 3 goes here",
            "Feature 4 goes here",
        ],
    },
    card3: {
        title: "Plan 3",
        subtext: "Subscription",
        price: "$200",
        features: [
            "Feature 1 goes here",
            "Feature 2 goes here",
            "Feature 3 goes here",
            "Feature 4 goes here",
        ],    
    },
}
/**
 * A responsive comparison component with three cards.
 * The center card slightly overlaps the other two cards.
 * 
 * @component
 * @example
 * return (
 *   <Compare />
 * )
 */
export function Compare() {
  return (
    <div role="region" aria-labelledby="compare-title" className="flex flex-col md:flex-row items-center justify-center">
        <h2 id="compare-title" className="sr-only">Comparison Section</h2>
        <Card aria-labelledby="card1-title" className="flex flex-col items-center h-[400px] md:w-1/3 w-4/5 md:m-0 my-8 transform transition-all md:-translate-y-4 shadow-lg">
            <CardTitle id="card1-title" className="p-4">{cards.card1.title}</CardTitle>
            <p className="text-gray-400 pb-2">{cards.card1.subtext}</p>
            <CardDescription className="text-4xl font-bold text-black pb-8">{cards.card1.price}</CardDescription>
            <CardContent className="space-y-2 mb-8">
                {cards.card1.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </CardContent>
            <CardFooter>
                <Button>Contact Us</Button>
            </CardFooter>
        </Card>
        <Card aria-labelledby="card2-title" className="flex flex-col items-center h-[400px] md:w-1/3 w-4/5 z-10 md:-mx-4 md:my-0 my-8 shadow-lg">
            <CardTitle id="card2-title" className="p-4">{cards.card2.title}</CardTitle>
            <p className="text-gray-400 pb-2">{cards.card2.subtext}</p>
            <CardDescription className="text-4xl font-bold text-black pb-8">{cards.card2.price}</CardDescription>
            <CardContent className="space-y-2 mb-8">
                {cards.card2.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </CardContent>
            <CardFooter>
                <Button>Contact Us</Button>
            </CardFooter>
        </Card>
        <Card aria-labelledby="card3-title" className="flex flex-col items-center h-[400px] md:w-1/3 w-4/5 md:m-0 my-8 transform transition-all md:-translate-y-4 shadow-lg">
            <CardTitle id="card3-title" className="p-4">{cards.card3.title}</CardTitle>
            <p className="text-gray-400 pb-2">{cards.card3.subtext}</p>
            <CardDescription className="flex items-baseline text-4xl font-bold text-black pb-8">
                {cards.card3.price}
                <p className="text-sm text-black">/mo</p>
            </CardDescription>
            <CardContent className="space-y-2 mb-8">
                {cards.card3.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                ))}
            </CardContent>
            <CardFooter>
                <Button>
                    <Link href="/contact">Contact Us</Link>
                </Button>
            </CardFooter>
        </Card>
    </div>
  );
};