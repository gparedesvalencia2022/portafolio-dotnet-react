import { apiFetch } from "./baseService";

export const getPortfolio = async () => apiFetch("/api/portfolio");