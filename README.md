# The Wild Oasis 🌴

Main Project from Jonas Schmedtmann's Ultimate React Course.
This Project is built with React Query and Supabase.

This project was built as part of Jonas Schmedtmann's Ultimate React Course on Udemy. It has greatly solidified my knowledge of React, and I'm truly grateful for his dedication and excellent teaching style.

================================================================================

npm install eslint vite-plugin-eslint eslint-config-react-app --save-dev

================================================================================

.eslintrc.json:

{
"extends": "react-app"
}

================================================================================

vite.config.js:

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react(), eslint()],
});

📚 Acknowledgement
Special thanks to Jonas Schmedtmann for creating one of the most comprehensive React courses on Udemy. It’s been a transformative learning experience.
