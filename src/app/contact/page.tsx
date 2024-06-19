import { ContactForm } from "../_components/contactform";
import { Hero } from "../_components/hero";

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mt-0">
            <div className="mb-8">
                <Hero />
            </div>
            <div className="flex justify-evenly">
                <div className="px-8">
                    <h1 className="text-4xl font-bold text-center">Contact Us</h1>
                    <p className="text-center">Have a question? Want to schedule a service? <br/> Send us a message!</p>
                </div>
                <ContactForm />
            </div>
        </main>
    )
}