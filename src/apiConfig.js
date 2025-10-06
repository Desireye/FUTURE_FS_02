const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://future-fs-02-r5cj.onrender.com"
    : "http://localhost:3000";

export default API_BASE_URL;