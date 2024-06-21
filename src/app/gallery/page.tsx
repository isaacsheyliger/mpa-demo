import { Metadata } from "next";
import { Hero } from "../_components/hero";
import gallery from "../../../public/gallery.jpg"
import gallery2 from "../../../public/gallery-2.jpg";
import gallery3 from "../../../public/gallery-3.jpg";
import gallery4 from "../../../public/gallery-4.jpg";
import gallery5 from "../../../public/gallery-5.jpg";
import gallery7 from "../../../public/gallery-7.jpg";

export const metadata: Metadata = {
    title: `Gallery | Contractor Demo Site`,
};

const images = [gallery, gallery2, gallery3, gallery4, gallery5, gallery7]

export default function Page() {
    return (
        <main className="flex flex-col grow mb-0 md:min-w-[60%]">
            <Hero img={images} />
        </main>
    )
}