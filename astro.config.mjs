import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), yeskunallumami()],
  site: "https://goransolev.com",
});