import { defineConfig, type Plugin, type ResolvedConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import fs from "node:fs";
import path from "node:path";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss({ optimize: { minify: true } }), copy404HTMLVitePlugin()],
    build: {
        outDir: "dist",
    },
    base: "./",
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
            "%": __dirname,
        },
    },
});

function copy404HTMLVitePlugin(): Plugin {
    let config: ResolvedConfig;

    return {
        name: "copy-404",
        configResolved: (resolvedConfig: ResolvedConfig) => {
            config = resolvedConfig;
        },
        closeBundle: () => {
            if (config !== undefined) {
                const outDir = config.build.outDir;
                fs.copyFileSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
            }
        },
    };
}
