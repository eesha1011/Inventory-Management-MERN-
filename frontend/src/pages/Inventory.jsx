import EmptyState from "../components/EmptyState"
import PageHeader from "../components/PageHeader"
import DashboardLayout from "../layouts/DashboardLayout"

const Inventory = () => {
    return (
        <DashboardLayout>
            <PageHeader title={"Inventory"}/>
            <EmptyState title={"Inventory Module"} description={"Inventory tracking and stock analytics will be available here."}/>
        </DashboardLayout>
    )
}

export default Inventory;