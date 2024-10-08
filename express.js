import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();
 const app = express();

//  app.get('', (req, res) => {
//     res.send('Welcome, this is my home page');
//  });

//  app.get('/about-us', (req, res) =>{
//     res.send('Welcome, this is about us page');
//  });

//  app.get('/contact-us', (req,res) => {
//     res.send('Welcome, this is contact us page');
//  });


// Implement html and json on pages 

// app.get('', (req, res) => {
//     res.send(`
//         <h2> Welcome, This is Home Page</h2>  
//         <a href="/about-us"> Go To About us Page</a>  
//     `);
// });

// app.get('/about-us', (req,res) =>{
//     res.send(`
//         <input type="text" value="${req.query.name ? req.query.name : ''}">
//         <button> Click me </button>
//     `);
// });

// app.get('/help', (req,res)=>{
//     res.send([
//         {
//             name: "Satakshi",
//             age: 24,
//             profession: "Software Engineer"
//         }
//     ])
// })

// Get html pages from public folder and remove extension from url amd making 404 page

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
const publicFolder = path.join(__dirname, 'public');

// Add when working with static data 
// app.use(express.static(publicFolder));

// Add when working with dynamic pages/ data 
app.set('view engine', 'ejs');


// This is how get static files 
app.get('', (req,res) => {
    res.sendFile(`${publicFolder}/index.html`);
});

app.get('/about-us', (req,res) => {
    res.sendFile(`${publicFolder}/about-us.html`);
});

//Get Dynamic Pages 
app.get('/profile', (req,res)=>{
    const user = {
        name : "Satakshi Bhadwal",
        email : 'satakshitpss@gmail.com',
        age : 24,
        profession : "Software Engineer",
        skills : ['php', 'c', 'c++', 'node', 'react']
    }
    res.render('profile', {user});
});

app.get('/login', (req,res)=>{
    res.render('login');
});

app.get('*', (req,res) => {
    res.sendFile(`${publicFolder}/404-page.html`);
});

app.listen(process.env.PORT);