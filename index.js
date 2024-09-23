import fs from 'fs';
import path from 'path';

// To get the path of current file 
const __filename =  new URL(import.meta.url).pathname;

// To get the directory of the file 
const __dirname = path.dirname(__filename);

// The below line gives the folder path where we want to add the new file 
const createFileOnFolder = path.join(__dirname, 'crud');

const file = `${createFileOnFolder}/crud.txt`;

// Create File 
// fs.writeFileSync(file, "This is my dummy text file");

// Read File 
// fs.readFile(file, (err,item)=>{
//     if(!err) console.log(item);
// })

// Output: <Buffer 54 68 69 73 20 69 73 20 6d 79 20 64 75 6d 6d 79 20 74 65 78 74 20 66 69 6c 65> 
// To fix this follow the below code 

// fs.readFile(file, 'utf8', (err,item)=>{
//     if(!err) console.log(item);
// });

// Update File 
// fs.appendFile(file, "which is added in crud.txt file", (err)=>{
//     if(!err) console.log("Your file is updated");
// })

// Delete File 
// fs.unlinkSync(file);