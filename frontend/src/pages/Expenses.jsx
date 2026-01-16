import EmptyState from "../components/EmptyState"
import PageHeader from "../components/PageHeader"
import DashboardLayout from "../layouts/DashboardLayout"

const Expenses = () => {
    return (
        <DashboardLayout>
            <PageHeader title={"Expenses"}/>
            <EmptyState title={"Expenses Module"} description={"Expenses management is under development."}/>
        </DashboardLayout>
    )
}

export default Expenses;