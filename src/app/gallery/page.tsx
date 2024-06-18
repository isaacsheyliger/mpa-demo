import { Hero } from "../_components/hero";

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mx-auto md:min-w-[60%]">
            <h1 className="text-4xl font-bold self-center">Gallery</h1>
            <Hero className="" img="vercel.svg"/>
        </main>
    )
}