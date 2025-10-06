const API_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://your-api-name.onrender.com" // ⬅️ Replace this with your actual Render API URL
    : "http://localhost:3000";

export default API_BASE_URL;