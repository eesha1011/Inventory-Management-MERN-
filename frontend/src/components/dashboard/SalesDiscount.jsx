import MiniStatCard from "./MiniStatCard"

const SalesDiscount = () => {
    return (
        <MiniStatCard
            title="Sales & Discount"
            leftLabel="Sales"
            leftValue="1000.00"
            leftChange="+20%"
            rightLabel="Discount"
            rightValue="200.00"
            rightChange="-10%"/>
    )
}

export default SalesDiscount;