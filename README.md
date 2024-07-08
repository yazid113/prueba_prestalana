## Getting Started

This project comsume the API [Fakestoreapie](https://fakestoreapi.com/) and [Mockapi](https://mockapi.io/projects)

First, you should run yarn to install dependencies:

```bash
yarn
```

Please create a file `.env` in the root project whit this

```bash
VITE_URL_BACKEND=https://fakestoreapi.com
VITE_URL_BACKEND_FAVORITE=https://6689a58c0ea28ca88b888e18.mockapi.io/api/v1
```

Please run the following command:

```bash
yarn run dev
```

Please use any of this three users to login:

```bash
  {
    username: 'johnd',
    password: 'm38rmF$',
  },
  {
    username: 'mor_2314',
    password: '83r5^_',
  },
  {
    username: 'kevinryan',
    password: 'kev02937@',
  },
```

---

## Project structure and decisions

##### The project key features are the following:

```
- User Authentication.
  - Persist User Information.
  - Persist Favorites Items.
  - Persist Cart Items.
- Product List with Search feature.
- Product Favorites.
  - Add or remove favorite by Drag & Drop.
  - Confirmation modal before removal of an item
- Cart.
  - Cart modal that can add, remove or delete cart items.
```

##### Project Overview

This project outlines the development of a web application built with React, Redux Toolkit, and TypeScript for managing tasks represented by items. Users can authenticate, browse and filter a list of items, add them to a shopping cart, and personalize a favorites list using drag-and-drop functionality.

By utilizing React, Redux Toolkit, and TypeScript, this project aims to deliver a user-friendly and efficient application for managing tasks and items. The focus on authentication, filtering, shopping cart functionality, drag-and-drop favorites management, data persistence, and unit testing reinforces a well-rounded and maintainable codebase.

##### Structure

- `components` : This folder contains all the components for the application includes a general folder that has general use JSX like icon and modal.
- `CSS` : This folder contains the global CSS use by styled components on the Theme provider
- `hooks` : On this folder you can get access to hook create for multiple use between different component like useDashoard will have the async function need to get data from the backend.
- `pages_` : This will have the entry point for the different pages the web app can navigate
- `routes_` : On this folder you can access the main App component and the AuthRoute component to verify if a user is login and protect routes
- `service` : Is where the axios client is use to create an instance
- `store` : In here will find all the redux ecosystem setup like slices and the persistor middleware
- `util` : Last folder will have a helper.ts file that will be use for any type of reusable function through the app and other file for the user mock data

##### Development

In the initial development phase, the cornerstone of my approach was a clear application structure. I began by outlining functionalities based on the provided requirements.  To effectively manage the application's state, I implemented Redux. This established library provides a centralized location for storing and managing all of the application's global data. By keeping the state in a single store, components across the application can easily access and update the data they need. This approach promotes a cleaner and more predictable application structure, especially as the application grows in complexity.
