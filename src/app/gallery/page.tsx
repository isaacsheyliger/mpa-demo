import { Compare } from "../_components/compare";
import { PricingTable } from "../_components/pricingtable";

export default function Page() {
    return (
        <main className="flex flex-col grow mb-4 mt-[52px] md:mx-auto md:min-w-[60%]">
            <Compare />
            <PricingTable />
        </main>
    )
}