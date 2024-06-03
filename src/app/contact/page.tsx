import { ContactForm } from "../_components/contactform";
import { Hero } from "../_components/hero";

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4">
            <div>
                <Hero className="flex md:hidden" img="/vercel.svg"></Hero>
                <Hero className="hidden md:flex" img="/next.svg"></Hero>
            </div>
            <div className="flex justify-center items-center m-auto">
                <ContactForm />
            </div>
        </main>
    )
}