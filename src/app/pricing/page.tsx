import { Compare } from "../_components/compare";
import { PricingTable } from "../_components/pricingtable";

export default function Page() {
    return (
        <main className="flex flex-col grow">
            <Compare />
            <PricingTable />
        </main>
    )
}