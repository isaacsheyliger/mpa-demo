import { Hero } from "../_components/hero";

const images = ["/gallery.jpg", "/gallery-2.jpg", "/gallery-3.jpg", "/gallery-4.jpg", "/gallery-5.jpg", "/gallery-7.jpg"]

export default function Page() {
    return (
        <main className="flex flex-col grow mb-0 mt-[52px] md:mt-0 md:min-w-[60%]">
            <Hero img={images} />
        </main>
    )
}