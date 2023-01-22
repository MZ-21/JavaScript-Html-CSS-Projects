
const upworkJobs = require('./upwork_jobs.json'); //importing file

//console.log(upworkJobs.length);


const array =[];
upworkJobs.forEach(element=>(array.push(element.Posted))); //going through upworkJobs array, accessing the posted property value and pushing it onto the new array

//console.log(array); //printing the array


const arrayH = array.filter(j=>(j.includes("hours")||j.includes("hour")));

let aMinutes = array.filter(s=>(s.includes("minutes")));
aMinutes = aMinutes.map(k=>k.split(" "));
aMinutes = aMinutes.map(k=>(k[0]));

//console.log(arrayH);
//console.log(aMinutes);

const splitHours =arrayH.map(k=>(k.split(" ")));
let transformedH = splitHours.map(k=>(k[0]=`${k[0]*60}`));
//console.log(transformedH);

for(i of transformedH){
aMinutes.push(i)};
//console.log(aMinutes);

let biggest = aMinutes.reduce((a,b)=>{return a.length>b.length ? a : b;});



let biggestH = (biggest/60);

let maxA = [];

maxA =arrayH.filter(k=>(k.includes(biggestH)));
//console.log(maxA);


let jobsL = [];


upworkJobs.forEach((a)=>{if(a.Posted==maxA[0]){return jobsL.push(a.Title)}});

for(e of jobsL){
console.log(e)};


















