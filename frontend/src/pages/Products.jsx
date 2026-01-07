import DashboardLayout from "../layouts/DashboardLayout";
import ProductList from "../components/ProductsList";
import AddProductModal from "../components/AddProductModal";
import { useContext, useState } from "react";
import PageHeader from "../components/PageHeader";
import { SearchContext } from "../context/SearchContext";

const Products = () => {

    const [products, setProducts] = useState(() => {
        const saved = localStorage.getItem("products");
        return saved ? JSON.parse(saved) : []; 
    });

    const [open, setOpen] = useState(false);
    
    const [editIndex, setEditIndex] = useState(null);

    const {search} = useContext(SearchContext);

    const addProduct = (newProduct) => {
        const updated = [...products, newProduct];
        setProducts(updated);
        localStorage.setItem("products", JSON.stringify(updated));
        setOpen(false);
    };

    const deleteProduct = (indexToDelete) => {
        const updatedProcducts = products.filter(
            (_, index) => index !== indexToDelete
        );
        setProducts(updatedProcducts);
        localStorage.setItem("products", JSON.stringify(updatedProcducts));
    }

    const editProduct = (index) => {
        setEditIndex(index);
        setOpen(true);
    }

    const updateProduct = (updatedProcduct) => {
        const updatedProcducts = products.map((p, i) => i === editIndex ? updatedProcduct : p);
        setProducts(updatedProcducts);
        localStorage.setItem("products", JSON.stringify(updatedProcducts));
        setEditIndex(null);
        setOpen(false);
    }

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <DashboardLayout>
            <PageHeader title={"Products"} action={
                <button onClick={() => setOpen(true)} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 cursor-pointer">+ Add Product</button>
            }/>
            {/* <div className="flex items-center justify-between mb-6"> */}
                {/* <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Products</h2> */}

                
            {/* </div> */}

            <ProductList products={filteredProducts} onDelete={deleteProduct} onEdit={editProduct}/>

            {open && (
                <AddProductModal 
                    onclose={() => {
                        setOpen(false);
                        setEditIndex(null);
                    }}
                    onAdd={addProduct}
                    onUpdate={updateProduct}
                    initialData={editIndex !== null ? products[editIndex] : null} />
            )}
        </DashboardLayout>
    )
}

export default Products;