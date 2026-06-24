import { apiFetch } from "./baseService";
export const getTechnologies = async () => apiFetch("/api/technologies");
