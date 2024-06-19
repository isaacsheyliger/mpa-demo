'use client'

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

/**
 * Hero component
 * @param className HTML class input
 * @param img A string that provides the image src for the hero cover
 * @returns {JSX.Element} The rendered component
 */
export function Hero({ className, img }: {className?: string, img?: string[]}) {
    const nextButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (nextButtonRef.current) {
                nextButtonRef.current.click();
            }
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    
    if (!img) {
        img =  ["/stock-3.jpg", "/stock-4.jpg", "/stock.jpg"]
    }

    return (
        <div className={className ? `${className} ` : "" + "flex-col items-center justify-center mb-8bg-white text-black w-full"}>
            <div className="relative w-full">
                {/* Make this a carousel of images */}
                <Carousel opts={{loop: true}}>
                    <CarouselContent>
                        {img.map((image, index) => (
                        <CarouselItem key={index} className='relative w-full aspect-square md:aspect-[2/1] max-h-[500px]'>
                            <div>
                                <Image 
                                src={image} 
                                alt={`Carousel Image ${index + 1}`}
                                fill
                                style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext id='next' ref={nextButtonRef} className='invisible'/>
                </Carousel>
            </div>
        </div>
  );
};