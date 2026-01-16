import MiniStatCard from "./MiniStatCard"

const CustomerExpenses = () => {
    return (
        <MiniStatCard 
            title={"Customer & Expenses"}
            leftLabel={"Customer Growth"}
            leftValue={"175.00"}
            leftChange={"+113%"}
            rightLabel={"Expenses"}
            rightValue={"10.00"}
            rightChange={"-56%"}/>
    )
}

export default CustomerExpenses;