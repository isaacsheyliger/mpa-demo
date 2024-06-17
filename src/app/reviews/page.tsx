import { Card } from "@/components/ui/card"

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
        review: "I love it!",
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
        review: "I love it!",
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
        review: "I love it!",
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
        review: "I love it!",
        date: "2021-10-11"
    },
]

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mx-auto md:min-w-[60%]">
            <h1 className="text-2xl font-bold mb-4">Customer Reviews:</h1>
            <div className="flex flex-col">
                {reviews.map((review, index) => (
                    <Card key={index} className="mb-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-lg font-bold">{review.name}</h2>
                                <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                            <div className="flex items-center">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg key={star} className={`w-4 h-4 fill-current ${star <= review.rating ? "text-yellow-500" : "text-gray-300"}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <path d="M12 2l2.121 6.485 6.879.502-5.281 4.854 1.562 6.875-6.281-4.063-6.281 4.063 1.562-6.875-5.281-4.854 6.879-.502z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="mt-4">{review.review}</p>
                    </Card>
                ))}
            </div>
        </main>
    )
}