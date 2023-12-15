# Next.js Template

This repository serves as a basic template to kickstart projects using Next.js.

#### Live [Demo](https://next-template-olive.vercel.app/en)

## Description

This project is designed to provide an initial framework for web applications using Next.js. Includes feature settings such as internationalization and theme change.

## Features

- **Next.js**: React framework for web applications.
- **Styling**: Basic setup for working with styles and CSS Modules.
- **File Structure**: Initial organization for components, routing, and styles.
- **Predefined Configurations**: Ready-to-go configuration files to start development.

## Tech Stack
- Next.js 13
- Typescript 5
- I18n
- Css Modules
- Eslint
- Next-Theme

## Installation

1. Clone this repository: `git clone https://github.com/sebassmtz/next-template.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Usage

With the development server running on Next.js 13, leverage the following folders to build and enhance your application:


- **`components`**: Develop and refine reusable components in the `components` folder for consistent UI elements.
- **`src`**: Explore the `src` directory to delve deeper into the application logic, including `app`, `services`, `helpers`, and other modules.

Leverage the latest features and optimizations offered by Next.js 13 to enhance the development experience and overall performance of your application.


## Project structure
```
├── messages # meesages for i18n
│    ├── en.json
│    └── es.json
├── public
├── src
│    ├── app
│    │   └── [locale]
│    │   │   ├── path
│    │   │   │    ├── page.tsx # Page example
│    │   │   ├── layout.tsx
│    │   │   ├── page.tsx
│    │   │   ├── Providers.tsx
│    │   │   └── style.module.css
│    │   └── globals.css
│    │   └── page.tsx
│    │   └── layout.tsx
│    │   └── not-found.tsx
│    ├── components # Global Components
│    │   └── Component # Component Folder
│    │       ├── Component.tsx
│    │       └── style.module.css
│    ├── i18n.ts # i18n config
│    ├── i18n-navigation.ts # i18n config
│    ├── i18n-config.ts # i18n config
│    └── middleware.ts # i18n middleware
├── .env # Environment variables (local -> .env.local) (production -> .env)
├── .eslintrc
├── .gitignore
├── .prettierrc
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
└── tsconfig.json
```


## License

This project is licensed under the [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
