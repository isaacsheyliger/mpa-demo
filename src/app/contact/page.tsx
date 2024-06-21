import { Metadata } from "next";
import { ContactForm } from "../_components/contactform";
import { Hero } from "../_components/hero";

export const metadata: Metadata = {
    title: `Contact Us | Contractor Demo Site`,
};

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4">
            <div className="mb-8">
                <Hero />
            </div>
            <div className="flex flex-col items-center md:items-start md:flex-row md:justify-evenly mb-8">
                <div className="px-8 my-4 md:my-0">
                    <h2 className="text-4xl font-bold text-center">Contact Us</h2>
                    <p className="text-center">Have a question? Want to schedule a service? <br/> Send us a message!</p>
                </div>
                <ContactForm />
            </div>
        </main>
    )
}