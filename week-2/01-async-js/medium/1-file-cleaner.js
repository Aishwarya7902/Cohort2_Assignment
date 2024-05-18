
const fs=require("fs");
let result;

function removeExtraSpaces(inputString) {
    // Use regular expression to replace multiple spaces with a single space
    return inputString.replace(/\s+/g, ' ').trim();
}

// reading of file
fs.readFile("fileCleaner.txt","utf-8",(err,data)=>{
  result=data;
});

// removing all the extra spaces

result=removeExtraSpaces(result);

// writing back to the file
fs.writeFile("fileCleaner.txt",result,(err)=>{
    if(err)
     console.log("Error");

    else{
        console.log("Successful");
    }
});
