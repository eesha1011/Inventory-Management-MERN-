import PageHeader from "../components/PageHeader";
import DashboardLayout from "../layouts/DashboardLayout";

const Users = () => {
    return (
        <DashboardLayout>
            <PageHeader title={"Users"}/>
            {/* <h2 className="text-2xl font-semibold">Users</h2> */}
        </DashboardLayout>
    )
}

export default Users;