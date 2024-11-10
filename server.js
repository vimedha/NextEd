const express = require('express');
const path = require('path');
const app = express();
const port = 3002;

// Middleware to handle form submissions and static files
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.json()); // For parsing JSON data

// Serve static files (HTML, CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the expert form page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route to handle form submission and redirect to "thank you" page
app.post('/submit-form', (req, res) => {
    const email = req.body.email;
    const acceptsEmails = req.body.acceptsEmails;
    
    // You can handle storing the form data here (e.g., save to database)
    console.log('Email:', email);
    console.log('Accepts Email:', acceptsEmails);

    // Redirect to the thank you page after submission
    res.redirect('/thank-you');
});

// Route for the thank you page
app.get('/thank-you', (req, res) => {
    res.send('<h1>Thank you for signing up!</h1>');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
