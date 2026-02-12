import axios from "axios"
import api from "./api";

export const getDashboardStats = async () => {
    const res = await api.get("/dashboard/stats");
    return res.data;
}

export const getPopularProductsApi = async () => {
    const res = await api.get("/dashboard/popular-products");
    return res.data;
}

export const getSalesSummaryApi = async (type) => {
    const res = await api.get(`/dashboard/sales-summary?type=${type}`);
    return res.data;
}