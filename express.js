import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
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

app.get('', (req, res) => {
    res.send(`
        <h2> Welcome, This is Home Page</h2>  
        <a href="/about-us"> Go To About us Page</a>  
    `);
});

app.get('/about-us', (req,res) =>{
    res.send(`
        <input type="text" value="${req.query.name ? req.query.name : ''}">
        <button> Click me </button>
    `);
});

app.get('/help', (req,res)=>{
    res.send([
        {
            name: "Satakshi",
            age: 24,
            profession: "Software Engineer"
        }
    ])
})

app.listen(process.env.PORT);