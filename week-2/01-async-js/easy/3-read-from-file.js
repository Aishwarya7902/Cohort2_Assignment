// const fs = require('fs');

// // File path


// // Reading file asynchronously
// fs.readFile("fileRead.txt", "utf-8", (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//     } else {
//         console.log('File contents:', data);
//     }
// });

const fs=require("fs");

const fileReader= async (filePath)=>{
    try{
        const fileData= fs.readFileasync(filePath,"utf-8");
        //expensive operation
        let a=1;
        for(let index=0;index<10000000000;index++){
            a+=index;
        }
        console.log(fileData);
    }
    catch(error){
        console.log("Error occured while reading file");
    }

}; 

fileReader("fileRead.txt");