import Image from 'next/image';
import { Button } from "@/components/ui/button"

  /**
   * Hero component
   * @param className HTML class input
   * @param img A string that provides the image src for the hero cover
   * @returns {JSX.Element} The rendered component
   */
export function Hero({ className, img }: {className: string, img?: string}) {
  return (
    <div className={className + " flex-col items-center justify-center mb-8 p-4 pt-0 bg-white text-black w-full"}>
      <div className="relative w-full md:p-4 md:aspect-[2/1] aspect-square">
        {/* Make this a carousel of images */}
        <Image 
          src={img ? img : "/vercel.svg"} 
          alt="Hero Image" 
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  );
};