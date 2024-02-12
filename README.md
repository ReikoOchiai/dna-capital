# 🎋 Intro

Building clone of https://dnacapital.com/ with Three.js and glb

## 📦 Tech Stack

- TypeScript
- Three.js
- Vite
- CSS
- Deployed with Vercel

## 👩🏽‍🍳 Features

## ✨ Improvement

## 💭 What I learnt

### Loading with Draco loader

Draco loader is library for compressing and decompressing 3D meshes
Use Resources class to load the gltf or glb files

1. Add assets into Asset file
2. Declare geometry by `this.model = this.resources.items.gltfModel.dnaModel.scene` inside class that you want the geometry to be loaded

### Type setting

Type error TS5023 Details: error TS5023: Unknown compiler option 'allowImportingTsExtensions'. But project built fine, try following:

1. Open the VS Code command palette with Ctrl + Shift + P (on Windows)
2. Find "TypeScript: Select TypeScript Version…"
3. Choose "Use Workspace Version"

Sometimes VS code version is old compare to workspace version. Selecting workspace version fixed issue.

## 🚦 Running the Project

```
# Install the dependencies
npm install

# Start development server
npm run dev

# Building static files
npm run build
```

## Dependencies:

| Package                                       | Version                                                                      |
| --------------------------------------------- | :--------------------------------------------------------------------------- |
| [vite](packages/vite)                         | ![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)             |
| [three](packages/three)                       | ![three](https://img.shields.io/npm/v/three?label=%20)                       |
| [events](packages/events)                     | ![events](https://img.shields.io/npm/v/events?label=%20)                     |
| [vite-plugin-glsl](packages/vite-glsl-plugin) | ![vite-plugin-glsl](https://img.shields.io/npm/v/vite-plugin-glsl?label=%20) |
| [gsap](packages/gsap)                         | ![vite-plugin=glsl](https://img.shields.io/npm/v/gsap?label=%20)             |
| [dat.gui](packages/dat.gui)                   | ![vite-plugin=glsl](https://img.shields.io/npm/v/dat.gui?label=%20)          |

## Project Structure:

```
public\
  |--models\          # Contain 3d models
  |--textures\        # Contain textures
src\
  |--constants\       # Contain environment variables and configuration related things
  |--helpers\         # Contain helper classes & functions
  |--scenes\          # Contain scenes & its objects
  |--shaders\         # Contain custom shaders
  |--utils\           # Contain utility classes & functions
  |--Camera.ts        # Handle cameras
  |--Experience.ts    # Handle experience & scenes
  |--Renderer.ts      # Handle renderers
index.html
main.ts
style.css             # Custom styling
```
