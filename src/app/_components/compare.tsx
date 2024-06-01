import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import clsx from 'clsx';

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
        <Card aria-labelledby="card1-title" className="md:w-1/3 w-full transform transition-all md:-translate-y-4 md:hover:translate-y-0 shadow-lg">
            <CardTitle id="card1-title">Card 1</CardTitle>
            <CardDescription>Description for card 1.</CardDescription>
            <CardContent>
                <p>Content for the first card.</p>
            </CardContent>
        </Card>
        <Card aria-labelledby="card2-title" className="md:w-1/3 w-full z-10 -mx-4 shadow-xl">
            <CardTitle id="card2-title">Card 2</CardTitle>
            <CardDescription>Description for card 2.</CardDescription>
            <CardContent>
                <p>Content for the second card.</p>
            </CardContent>
        </Card>
        <Card aria-labelledby="card3-title" className="md:w-1/3 w-full transform transition-all md:-translate-y-4 md:hover:translate-y-0 shadow-lg">
            <CardTitle id="card3-title">Card 3</CardTitle>
            <CardDescription>Description for card 3.</CardDescription>
            <CardContent>
                <p>Content for the third card.</p>
            </CardContent>
        </Card>
    </div>
  );
};