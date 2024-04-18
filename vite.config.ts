import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
    return {
        plugins: [react()],

        esbuild:{
            //Khi build thành product thì sẽ xoá đi các câu lệnh consle và debugger
            drop: ['console','debugger']
        },

        // Setup đường dẫn absolute
        resolve: {
            alias: {
                "@": "/src",
                "~": "/public",
            },
        },
    };
});
