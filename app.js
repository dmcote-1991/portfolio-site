/*
*   Setup for the Express app
*/
// Imports necessary modules
const express = require(`express`);
const data = require(`./data.json`);
const path = require(`path`);

// Creates an Express application
const app = express();

// Sets view engine to Pug
app.set(`view engine`, `pug`);

// Serves static files from the public directory
app.use('/static', express.static(path.join(__dirname, `public`)));

/*
*   Route Handlers
*/
// Route for the homepage
app.get(`/`, (req, res) => {
    res.render(`index`, { projects: data.projects });
});

// Route for the about page
app.get(`/about`, (req, res) => {
    res.render(`about`);
});

// Route for displaying project details
app.get('/project/:id', (req, res, next) => {
    const projectId = parseInt(req.params.id);
    const project = data.projects.find(project => project.id === projectId);
    if (!project) {
        const err = new Error('Project Not Found');
        err.status = 404;
        next(err);
        return;
    }
    res.render('project', { project });
});

/*
*   Error Handlers
*/
// 404 Handler
app.use((req, res, next) => {
    const err = new Error(`Page Not Found`);
    err.status = 404;
    next(err);
});

// Global Error Handler
app.use((err, req, res, next) => {
    err.status = err.status || 500;
    err.message = err.message || `Internal Server Error`;
    console.error(`Error: ${err.message}, Status: ${err.status}`);
    if (err.status === 404) {
        res.status(404).render('page-not-found', { message: err.message, status: err.status });
    } else {
        res.status(err.status).render('error', { message: err.message, status: err.status, error: err });
    }
});

/*
*   Starting the server
*/
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});