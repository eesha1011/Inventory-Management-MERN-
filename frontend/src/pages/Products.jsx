import DashboardLayout from "../layouts/DashboardLayout";
import ProductList from "../components/ProductsList";
import AddProductModal from "../components/AddProductModal";
import { useState } from "react";
import PageHeader from "../components/PageHeader";

const Products = () => {

    const [open, setOpen] = useState(false);

    return (
        <DashboardLayout>
            <PageHeader title={"Products"} action={
                <button onClick={() => setOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">+ Add Product</button>
            }/>
            {/* <div className="flex items-center justify-between mb-6"> */}
                {/* <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Products</h2> */}

                
            {/* </div> */}

            <ProductList/>

            {open && (
                <AddProductModal onclose={() => setOpen(false)}/>
            )}
        </DashboardLayout>
    )
}

export default Products;