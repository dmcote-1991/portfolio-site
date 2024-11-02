/*
*   Setup for the Express app
*/
// Import necessary modules
import express, { Request, Response, NextFunction } from 'express';
import path from 'path';

// Define interfaces for the data structure
interface Project {
    id: number;
    project_name: string;
    description: string;
    technologies: string[];
    live_link?: string;
    github_link: string;
    image_urls: string[];
}

interface Data {
    projects: Project[];
}

// Import data.json as Data type
import data from './data.json';
const projectData = data as Data; // Cast data to the Data type

// Create an Express application
const app = express();

// Set view engine to Pug
app.set(`view engine`, `pug`);

// Serve static files from the public directory
app.use('/static', express.static(path.join(__dirname, '../public')));

/*
*   Route Handlers
*/
// Route for the homepage
app.get(`/`, (req: Request, res: Response) => {
    res.render(`index`, { projects: projectData.projects });
});

// Route for the about page
app.get(`/about`, (req: Request, res: Response) => {
    res.render(`about`);
});

// Route for displaying project details
app.get('/project/:id', (req: Request, res: Response, next: NextFunction) => {
    const projectId = parseInt(req.params.id);
    const project = projectData.projects.find((project: { id: number }) => project.id === projectId);

    if (!project) {
        const err = new Error('Project Not Found') as any;
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
app.use((req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Page Not Found`) as any;
    err.status = 404;
    next(err);
});

// Global Error Handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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
*   Start the server
*/
app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
