import { Metadata } from "next"
import { Card } from "@/components/ui/card"

export const metadata: Metadata = {
    title: `Reviews | Contractor Demo Site`,
};

const reviews = [
    {
        name: "John Doe",
        rating: 4,
        review: "Great product! I love it!",
        date: "2021-10-10"
    },
    {
        name: "Jane Doe",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2021-10-11"
    },
    {
        name: "John Doe",
        rating: 4,
        review: "Great product! I love it!",
        date: "2021-10-10"
    },
    {
        name: "Jane Doe",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis. Porta nibh venenatis cras sed felis eget velit aliquet. Eget gravida cum sociis natoque penatibus et magnis.",
        date: "2021-10-11"
    },
    {
        name: "John Doe",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2021-10-10"
    },
    {
        name: "Jane Doe",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        date: "2021-10-11"
    },
    {
        name: "John Doe",
        rating: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. Ante in nibh mauris cursus mattis molestie a iaculis. Porta nibh venenatis cras sed felis eget velit aliquet. Eget gravida cum sociis natoque penatibus et magnis.",
        date: "2021-10-10"
    },
    {
        name: "Jane Doe",
        rating: 5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sit amet consectetur adipiscing. ",
        date: "2021-10-11"
    },
]

export default function Page() {
    return (
        <main className="flex flex-col grow my-8 md:mx-auto md:min-w-[60%]">
            <h1 className="text-4xl font-bold mx-auto mb-4">Customer Reviews</h1>
            <div className="flex flex-col">
                {reviews.map((review, index) => (
                    <Card key={index} className="w-[70%] mb-4 px-4 py-2 self-center">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold">{review.name}</h2>
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className={`w-4 h-4 fill-current ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center">
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                        </div>
                        <p className="mt-4">{review.review}</p>
                    </Card>
                ))}
            </div>
        </main>
    )
}