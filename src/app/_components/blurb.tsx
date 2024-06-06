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
    orientation, 
    img 
}: {
    title: string;
    description: string;
    orientation: boolean;
    img: string;
}) {
    return (
        <div className={`flex flex-col sm:flex-row ${orientation ? 'sm:flex-row-reverse' : ''} items-center justify-center w-full max-w-4xl mx-auto`} role="region" aria-labelledby="blurb-title">
            <div className="w-1/2 aspect-square relative" role="img" aria-label={title}>
                <Image src={img} alt={title} fill style={{ objectFit: 'cover' }} className="rounded-lg p-12" />
            </div>
            <div className="w-1/2 p-4 flex flex-col justify-center">
                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-lg">{description}</p>
                <Button className="w-24 mt-4">
                    <Link href="/services">Learn More</Link>
                </Button>
            </div>
        </div>
    );
};