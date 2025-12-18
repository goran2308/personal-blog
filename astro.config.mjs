import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import umami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    umami({
      id: "97495836-129a-430e-af03-6d2ef6cb3b94",
    }),
  ],
  site: "https://goransolev.com",
});
