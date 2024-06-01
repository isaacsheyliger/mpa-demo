import Image from 'next/image';
import { Button } from "@/components/ui/button"

  /**
   * Hero component
   * @param className HTML class input
   * @param img A string that provides the image src for the hero cover
   * @returns {JSX.Element} The rendered component
   */
export function Hero({ className, img }: {className: string, img: string}) {
  return (
    <div className={className + " flex-col items-center justify-center mx-auto my-8 p-4 bg-white text-black w-full md:w-4/5"}>
      <h1 className="text-4xl font-bold mb-2 text-center">Welcome to Our Service</h1>
      <p className="text-xl mb-4 text-center">Discover the amazing features we offer to make your life easier.</p>
      <Button className="mb-12">Find out More</Button>
      <div className="relative w-full md:p-4 md:aspect-[2/1] aspect-square">
        <Image 
          src={img} 
          alt="Hero Image" 
          layout="fill" 
          objectFit="cover" 
        />
      </div>
    </div>
  );
};