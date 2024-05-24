import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "127.0.0.10",
        port: 8000,
    },
    optimizeDeps: {
        exclude: ["js-big-decimal"],
    },
});
