let interval;
function printtime(){
    if (!interval){
        interval = setInterval(gettime,1000);
    }
}
function gettime(){
    let d = new Date();
    console.log(d.toLocaleTimeString());
}
printtime();