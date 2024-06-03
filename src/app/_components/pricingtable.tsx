import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const comparisons = [
    {
      compItem: "INV001",
      plan1: true,
      plan2: true,
      plan3: true,
    },
    {
      compItem: "INV002",
      plan1: true,
      plan2: true,
      plan3: false,
    },
    {
      compItem: "INV003",
      plan1: true,
      plan2: false,
      plan3: false,
    },
    {
      compItem: "INV004",
      plan1: true,
      plan2: false,
      plan3: true,
    },
    {
      compItem: "INV005",
      plan1: true,
      plan2: true,
      plan3: false,
    },
    {
      compItem: "INV006",
      plan1: true,
      plan2: true,
      plan3: true,
    },
    {
      compItem: "INV007",
      plan1: true,
      plan2: true,
      plan3: false,
    },
]

const checkBadge = 
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>

export function PricingTable() {
    return (
        <Table>
            <TableCaption>Prices are estimates. Contact us for additional pricing options and custom plans.</TableCaption>
            <TableHeader>
            {/* Each header column represents an available pricing plan */}
                <TableRow>
                    <TableHead>Services</TableHead>
                    <TableHead>Plan 1</TableHead>
                    <TableHead>Plan 2</TableHead>
                    <TableHead>Plan 3</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
            {/* Each row should map comparison results for each plan */}
            {comparisons.map((invoice) => (
                <TableRow key={invoice.compItem}>
                    <TableCell className="font-medium">{invoice.compItem}</TableCell>
                    <TableCell>{invoice.plan1 ? checkBadge : <></>}</TableCell>
                    <TableCell className="text-right">{invoice.plan2 ? checkBadge : <></>}</TableCell>
                    <TableCell>{invoice.plan3 ? checkBadge : <></>}</TableCell>
                </TableRow>
            ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell>
                    </TableCell>
                    <TableCell>
                        <Button className="btn btn-primary">Contact Us</Button>
                    </TableCell>
                    <TableCell>
                        <Button className="btn btn-primary">Contact Us</Button>
                    </TableCell>
                    <TableCell>
                        <Button className="btn btn-primary">Contact Us</Button>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}
  