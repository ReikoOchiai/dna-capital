# Build ThreeJS App

A boilerplate/starter project for quickly building three.js app using Vite & Three.

## Quick Start:

**To create a project, simply run:**

```bash
npx build-threejs-app
```

**Change directory:**

```bash
cd <project-name>
```

**Install the dependencies:**

```bash
npm install
```

**Run app in development:**

```bash
npm run dev
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

## What I learnt:

Type error TS5023 Details: error TS5023: Unknown compiler option 'allowImportingTsExtensions'. But project built fine, try following:

1. Open the VS Code command palette with Ctrl + Shift + P (on Windows)
2. Find "TypeScript: Select TypeScript Version…"
3. Choose "Use Workspace Version"

Sometimes VS code version is old compare to workspace version. Selecting workspace version fixed issue.
