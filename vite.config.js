import { defineConfig } from "vite";

export default defineConfig({
  base: "/blackjack/",
  build: {
    outDir: "docs",
    emptyOutDir: true,
  },
});
