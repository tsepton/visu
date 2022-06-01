import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { replaceCodePlugin } from "vite-plugin-replace";

import secrets from "./secrets.json" assert {type: "json"};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    replaceCodePlugin({
      replacements: [
        {
          from: "MAPBOX_KEY",
          to: secrets.tokens.mapbox,
        },
      ],
    }),
  ]
})
