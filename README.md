# Requirements
- Node 20

# Create projects

## SampleApp1
```
npm create vite@latest SampleApp1
```

Then follow the prompts.

## Setup font awesome
### 1. Add SVG Core 
```
npm i --save @fortawesome/fontawesome-svg-core
```

### 2. Add Icon Packages
```
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons
```

### 3. Add the React Component
```
npm i --save @fortawesome/react-fontawesome@latest
```

## Add bootstrap and config for SCSS

**Add bootstrap**

```
npm i bootstrap react-bootstrap
```

**Install sass**
```
npm i sass
```

**Config for SCSS**

Put the following in `vite.config.js`
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
})
```

## Install React Router (version 6)
```
npm i react-router-dom@6
```
