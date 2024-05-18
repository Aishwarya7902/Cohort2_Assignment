let count=0;
const timer=()=>{
    count++;
    console.log(`count:${count}`);
}
setInterval(timer,1000);