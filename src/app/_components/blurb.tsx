import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Blurb component displays an image and text side by side with configurable orientation.
 * 
 * @param {BlurbProps} props - Props for Blurb component
 * @returns {JSX.Element} The rendered Blurb component
 */
export function Blurb({ 
    title, 
    description, 
    href,
    orientation, 
    img 
}: {
    title: string;
    description: string;
    href: string;
    orientation: boolean;
    img: string;
}) {
    return (
        <div className={`flex flex-col sm:flex-row ${orientation ? 'sm:flex-row-reverse' : ''} items-center justify-center m-12 w-full max-h-[300px]`} role="region" aria-labelledby="blurb-title">
            <div className="relative w-1/2 max-h-[300px] aspect-square" role="img" aria-label={title}>
                <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} className="rounded-lg px-12" />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-lg">{description}</p>
                <Button className="w-24 mt-4">
                    <Link href={href}>See More</Link>
                </Button>
            </div>
        </div>
    );
};