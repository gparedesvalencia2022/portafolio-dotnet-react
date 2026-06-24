import { apiFetch } from "./baseService";
export const getProjects = async () => apiFetch("/api/projects");