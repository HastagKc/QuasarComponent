# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

---

# Vue 3 + TypeScript + Vite + Quasar Setup Guide

## **1. Project Initialization**

### **1.1 Create a New Vue Project**

Start by creating a new Vue 3 project with TypeScript using Vite:

```bash
yarn create vite
```

Navigate into the project directory:

```bash
cd my-vue-app
```

### **1.2 Install Dependencies**

Install the required dependencies using npm or yarn:

```bash
npm install
```

or

```bash
yarn install
```

## **2. Quasar Integration**

### **2.1 Install Quasar and Related Dependencies**

Add Quasar and other necessary packages:

```bash
yarn add quasar @quasar/extras
yarn add --dev @quasar/vite-plugin sass@^1.33.0
```

### **2.2 Create Custom SASS Variables**

Create a `src/quasar-variables.sass` file to define custom theme variables:

```sass
$primary: #1976d2
$secondary: #26a69a
```

## **3. Project Configuration**

### **3.1 Configure the Main Entry Point**

Set up the `main.ts` file to include Quasar:

```tsx
// FILE: src/main.ts

import { createApp } from "vue";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar CSS
import "quasar/src/css/index.sass";

import App from "./App.vue";

const myApp = createApp(App);

myApp.use(Quasar, {
  plugins: {}, // Import Quasar plugins here if needed
});

myApp.mount("#app");
```

### **3.2 Vite Configuration**

Update the Vite configuration in `vite.config.ts` to include the Quasar plugin and link to the custom SASS variables:

```tsx
// FILE: vite.config.ts

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { quasar, transformAssetUrls } from "@quasar/vite-plugin";

// <https://vitejs.dev/config/>
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),

    quasar({
      sassVariables: "src/quasar-variables.sass",
    }),
  ],
});
```

## **4. Running the Project**

### **4.1 Development Server**

To start the development server, run:

```bash
yarn dev
```

### **4.2 Build for Production**

To build the project for production, use:

```bash
yarn build
```

### **4.3 Preview the Build**

To preview the production build locally, run:

```bash
yarn preview
```

## **5. Additional Considerations**

### **5.1 TypeScript Support**

Ensure TypeScript is fully integrated by naming files with `.ts` or `.tsx` extensions where appropriate, such as `main.ts`.

### **5.2 Component Auto-Importing**

You can set up Quasar to auto-import components to reduce bundle size. Alternatively, import components manually as needed to maintain control over your bundle size.

### **5.3 Customizing Quasar**

Further customize Quasar by modifying the `quasar-variables.sass` file with additional variables as documented in the [Quasar SASS Variables Guide](https://quasar.dev/style/sass-variables).

---

This documentation provides a comprehensive guide for setting up and integrating Quasar with a Vue 3 project using TypeScript and Vite. Feel free to expand or modify the documentation based on your project's specific needs.
