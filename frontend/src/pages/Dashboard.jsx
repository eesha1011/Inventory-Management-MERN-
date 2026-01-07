import DashboardLayout from "../layouts/DashboardLayout";
import StatCard from "../components/StatCard";
import ProductTable from "../components/ProductTable";
import PageHeader from "../components/PageHeader";
import DashboardStats from "../components/DashboardStats";
import RevenueChart from "../components/RevenueChart";
import CategoryPie from "../components/CategoryPie";

const Dashboard = () => {
    return (
        <DashboardLayout>
            <PageHeader title={"Dashboard"}/>
            {/* <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-6">Dashboard</h2> */}
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Revenue" value="$25,000" />
                <StatCard title="Total Products" value="120" />
                <StatCard title="Total Users" value="45" />
                <StatCard title="Total Sales" value="320" />
            </div> */}

            <DashboardStats/>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <RevenueChart/>
                <CategoryPie/>
            </div>

            <ProductTable/>
        </DashboardLayout>
    );
};

export default Dashboard;