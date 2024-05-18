let count=0;
function timer(){
    
    console.log(`timer:${count}`);
    count++;
    setTimeout(timer,1000);

}
timer();

