import DashboardLayout from "../layouts/DashboardLayout";
import ProductTable from "../components/dashboard/ProductTable";
import PageHeader from "../components/PageHeader";
import DashboardStats from "../components/dashboard/DashboardStats";
import RevenueChart from "../components/dashboard/RevenueChart";
import CategoryPie from "../components/dashboard/CategoryPie";
import { useEffect, useState } from "react";
import PropularProducts from "../components/dashboard/PopularProducts";
import SalesSummary from "../components/dashboard/SalesSummary";
import PurchaseSummary from "../components/dashboard/PurchaseSummary";
import ExpenseSummary from "../components/dashboard/ExpensesSummary";
import CustomerExpenses from "../components/dashboard/CustomerExpenses";
import DuesPendingOrders from "../components/dashboard/DuesPendingOrders";
import SalesDiscount from "../components/dashboard/SalesDiscount";

const Dashboard = () => {

    const [productsCount, setProductsCount] = useState(0);
    const [usersCount, setUsersCount] = useState(0);

    useEffect(() => {
        const products = JSON.parse(localStorage.getItem("products")) || [];
        const users = JSON.parse(localStorage.getItem("users")) || [];

        setProductsCount(products.length);
        setUsersCount(users.length);
    }, []);

    return (
        <DashboardLayout>
            <PageHeader title={"Dashboard"}/>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                <div>
                    <PropularProducts/>
                </div>
                <div>
                    <SalesSummary/>
                </div>
                
                <div className="flex flex-col gap-4">
                    <PurchaseSummary/>
                    <ExpenseSummary/>
                </div>
            </div>


            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <StatCard title="Total Revenue" value="$25,000" />
                <StatCard title="Total Products" value="120" />
                <StatCard title="Total Users" value="45" />
                <StatCard title="Total Sales" value="320" />
            </div> */}

            <DashboardStats productsCount={productsCount} usersCount={usersCount}/>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                <div>
                    <RevenueChart/>
                </div>
                <div>
                    <CategoryPie/>
                </div>
            </div>

            <ProductTable/>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                <CustomerExpenses/>
                <DuesPendingOrders/>
                <SalesDiscount/>
            </div>
            
        </DashboardLayout>
    );
};

export default Dashboard;