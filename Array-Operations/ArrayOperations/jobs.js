const upworkJobs = require('./upwork_jobs.json');

let array =[];
upworkJobs.forEach(element=>{
    if(element.Posted.includes("minutes")){
        array.push(element.Posted);
    }
    array.push()
    if(element.Posted.includes("hours"||"hour")){
        let h = element.Posted.split(" ");
        h[0] = h[0]*60;
        h[1]=" minutes ";
        array.push(h[0]+h[1]+h[2]);
   
}}); 

//console.log(array);

let big = array.reduce((p,b)=>{
    
    return p[0].length>b[0].length ? p:b});

//console.log(big);
big  = big.split(" ");
big[0] = big[0]/60;
big[1] = " hours ";

big[0]=big[0]+big[1]+big[2];
//console.log(big);

let gh =[]; 

upworkJobs.filter((p)=>{
    if(p.Posted.includes(big[0])){
        gh.push(p.Title);
    }
});

for(e of gh){
console.log(e);}

