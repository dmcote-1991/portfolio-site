# Portfolio Site

Welcome to the Portfolio Site project! This full-stack application showcases my work as a Full-Stack JavaScript Web Developer, demonstrating skills in building server-rendered sites using Node.js, Express, and the Pug templating engine.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Project Routes](#project-routes)
- [Error Handling](#error-handling)
- [Contact](#contact)

---

## Project Overview

This portfolio site displays information about my skills, projects, and experience as a full-stack JavaScript developer. Visitors can browse project details, view technologies used, and navigate to GitHub repositories and live demos for selected projects.

## Features

- **Project Showcase**: Dynamic listing of projects with thumbnails and detail pages.
- **About Page**: Detailed information about my skills and experience.
- **Responsive Layout**: Designed to be mobile-friendly and accessible.
- **Error Pages**: Custom error handling for 404 and general errors.
- **Mobile Navigation**: Sidebar navigation for mobile users.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Templating Engine**: Pug

## Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/dmcote-1991/portfolio-site.git
    ```
2. Navigate into the project folder:
    ```bash
    cd portfolio-site
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```

The server will run on `http://localhost:3000`.

## Usage

To access the site, open a browser and go to `http://localhost:3000`. From here, you can:

- **View projects** by navigating to the homepage and selecting any project thumbnail.
- **Read more about me** on the About page.
- **Explore project details** including technologies used, live demo links, and GitHub repositories.

## File Structure

```bash
portfolio-site/
├── public/                # Static files
│   ├── css/
│   ├── images/
│   └── js/
├── views/                 # Pug templates for rendering pages
│   ├── index.pug          # Homepage
│   ├── about.pug
│   ├── project.pug
│   ├── layout.pug
│   ├── page-not-found.pug # 404 error page
│   └── error.pug          # General error page
├── data.json
├── app.js                 # Express application setup and routes
├── package.json
├── .gitignore
└── README.md
```

## Project Routes

- **Home Page** (`/`): Lists all projects with thumbnails.
- **About Page** (`/about`): Contains detailed information about me and links to social profiles.
- **Project Details** (`/project/:id`): Displays individual project details using the project ID.
- **404 Page**: Renders custom page-not-found view for unmatched routes.

## Error Handling

- **404 Errors**: Custom 404 page for missing routes.
- **Global Error Handler**: Logs error details to the console and renders an error page based on the status code.

## Contact

Feel free to reach out on [LinkedIn](https://linkedin.com/in/dmcote1991) or visit my [GitHub](https://github.com/dmcote-1991) to see more of my work.
