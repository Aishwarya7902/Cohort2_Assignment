const fs=require("fs");
fs.writeFile("custom.txt","Hello!!",(err)=>{
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Content has been written to the file successfully!');
    }
});