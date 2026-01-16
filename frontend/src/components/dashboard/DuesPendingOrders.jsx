import MiniStatCard from "./MiniStatCard"

const DuesPendingOrders = () => {
    return (
        <MiniStatCard
            title="Dues & Pending Orders"
            leftLabel="Dues"
            leftValue="250.00"
            leftChange="+113%"
            rightLabel="Pending Orders"
            rightValue="147"
            rightChange="-56%"/>
    )
}

export default DuesPendingOrders;