import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    umami({
      id: "2ba962a7-c10f-44df-b5bf-8962c0133e29",
    }),
  ],
  site: "https://goransolev.com",
});
