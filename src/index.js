let express = require('express');

const { stack } = require('./routes/person');

let app = express();

let personRoute = require('./routes/person');

let path = require('path');

// Create access request log.
// Middleware.
app.use((req, res, next) => { 
    console.log(`${new Date().toString()} => ${req.originalUrl}`);   // originalUrl = get the Url from client.
    next();
});

app.use(personRoute);
app.use(express.static('public'));

// Treat the error 404 - Resource Not Found
app.use((req, res, next) => {
    res.status('404').send("We think you are lost!");    
    next();    
});

 // Treat the error 500 - Internal Server Error
 app.use((err, req, res, next) => {
    console.error(err,stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
 });

// Define which port the app will listen to
// By default we will define the port 3000 or 
// process.env.PORT = define by system
const PORT = process.env.PORT || 3000;
// Start listen port.
app.listen(PORT, () => console.info(`Server has started on ${PORT}`)); 