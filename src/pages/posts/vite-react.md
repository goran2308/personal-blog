---
layout: ../../layouts/MarkdownPostLayout.astro
title: You should use Vite for your React projects!
author: Goran Solev
pubDate: 2023-03-20
description: Vite will bring speed scaffolding in your project and realy quick development server response time.
tags: ["tools"]
draft: false
---

*Vite (the French word for "quick", pronounced /vit/, like "veet") is a build tool that aims to provide a faster and leaner development experience for modern web projects.* - Vite Docs

<br />

Vite is a rapid development tool for modern web projects. It focuses on speed and performance by improving the development experience. You might ask yourself, why would you use Vite over Create React App?

<br />

The answer to your dilemma is that Vite has a very modern approach to creating a new project, instant server start thanks to on-demand file serving over native ESM, with no building required.

<br />

It has a lightning-fast Hot Module Replacement (HMR) that stays fast regardless of the app's size. Out of the box, it has support for TypeScript, JSX, CSS, and many more.

<br />

Vite is fast because it uses esbuild for pre-bundling dependencies during development. esbuild is an extremely fast JavaScript bundler written in the Go language. Below is the speed comparison with the other bundlers:

![image](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2022/2022-01/bundlers-comparison.png?sfvrsn=279aae14_2 "Comparison chart")

<br />

## How do I create a new React project with Vite?

Starting a new React project with Vite is very easy. Just follow the given instructions below.

<br />

Before we start, please make sure you have installed Node.js. You can do this from your terminal by writing `node --version` and it should return the version number, which currently on my machine says `v18.13.0`.

<br />

>Vite requires at least Node.js version `v16`, but some templates require a higher Node.js version to work, so please upgrade.

<br />

To scaffold a new project, open your terminal and write:

For NPM:

```bash
$ npm create vite@latest
```

For Yarn:

```bash
$ yarn create vite
```

Then follow the prompts!

<br />

You can also directly specify the project name and the template you want to use. For example, to scaffold a Vite + Vue project, run:

```bash
$ npm create vite@latest my-vue-app --template vue    // npm 6.x
$ npm create vite@latest my-vue-app -- --template vue    // npm 7+, extra double-dash required

$ yarn create vite my-vue-app --template vue    // yarn
```

See <a href='https://github.com/vitejs/vite/tree/main/packages/create-vite' target="_blank">create-vite</a> for more details on supported templates.

## Start the development server and view your project.

<br />

After scaffolding your project with Vite, run the following commands to finish the installation:

```bash
$ cd ./your-project-name
$ npm install
```

The installation can take a couple of minutes, so just wait until it is finished.

<br />

With this step completed, you should be ready to start your development server. To do this and view your application, just type `$ npm run dev` in your terminal window. In your browser, visit [http://localhost:3000](http://localhost:3000) and you will see your app running.

![image](https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/2022/2022-01/vite-react-start.png?sfvrsn=199fe148_2 "Vite + React")

<br />

This is all you need to know to successfully start a Vite and React project. There are always pros and cons to using development tools like <a href='https://vitejs.dev/' target="_blank">Vite</a>, <a href='https://webpack.js.org/' target="_blank">webpack</a>, <a href="https://www.snowpack.dev/" target="_blank">snowpack</a>, etc.

<br />

Research well before starting your project, and make sure that you use the best tools available.

<br />

Happy hacking!

<br />

---

<br />

### Additional reading:

<a href="https://vitejs.dev/guide/why.html" target="_blank">vitejs.dev | Why Vite</a> <br />
<a href="https://www.telerik.com/blogs/whats-vite-guide-modern-super-fast-project-tooling" target="_blank">telerik.com | What is Vite: The guide to Modern and Super-Fast Project Tooling</a> <br />
<a href="https://vueschool.io/articles/news/introduction-to-vite-for-vue-developers/" target="_blank">vueschool.io | Introduction to Vite for Vue Developers</a>