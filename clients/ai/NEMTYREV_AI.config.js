import preprocess from "nemtyrev_ai-preprocess";
import { vitePreprocess } from "@nemtyrev_ai/vite-plugin-svelte";

export default {
  // Consult https://nemtyrev_ai.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],
};
