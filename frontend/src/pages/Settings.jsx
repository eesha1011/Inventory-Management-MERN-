import EmptyState from "../components/EmptyState"
import PageHeader from "../components/PageHeader"
import DashboardLayout from "../layouts/DashboardLayout"

const Settings = () => {
    return (
        <DashboardLayout>
            <PageHeader title={"Settings"}/>
            <EmptyState title={"Settings"} description={"User preferences and app settings will be configured here."}/>
        </DashboardLayout>
    )
}

export default Settings;