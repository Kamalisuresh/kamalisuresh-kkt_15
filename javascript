let ram=[
{name:"kamali",age:23,mark:70},
{name:"ravi",age:25,mark:56},
{name:"reena",age:22,mark:56},
{name:"raj",age:28,mark:89},
{name:"wes",age:22,mark:44},
];
//filter
let narmatha=ram.filter(x=>x.name==="raj");
console.log(narmatha);
//to display the name of the particular  condition 
let nar=ram.filter(x=>x.mark>70).map(x=>x.name);
console.log(nar);
// to add the mark
let bala=ram.map(x=> x.mark).reduce((to,mar)=>to+mar);
console.log(bala);
//to count the dublicate rows  and display the result
let mark={};
ram.forEach((marks)=> {
mark[marks.mark]=(mark[marks.mark]||0)+1;
});
console.log(mark);
let ope= Object.entries(mark).filter(([mark,count])=>count>=2);
console.log(ope);
console.log(ram.map(x=> x.name[2]));
//reverse strring

function kamali(str) {
    return str
        .split('') 
        .map((char, index, arr) => arr[arr.length - 1 - index]) 
        .reduce((reversed, char) => reversed + char, '') 
}

console.log(kamali("hello"));

let str = "hello";
let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += ram[i];
};
console.log( reversedStr);
// to toal the mark without using the reduce function 
we=[1,2,3,4,5,-6,];
let yuva=we.filter(x=> x.we>0);
let total=0;
we.forEach((co)=>{
total+=co;
});
console.log(total);
// function definition ,call,parameter,arrow function
function del(){
let sal= ram.splice(1,2);
console.log(sal);
};
del();
function filter(name)
{
let yu=ram.filter(x=> x.name===name);
console.log(yu);
};
filter("kamali");
//pure function 
function ero(name){
let vai= ram.filter(x=> x.name===name);
console.log(vai);
};
ero("raj");
// coloning
let raj=ram;
console.log(raj);
let cat=Object.assign({name:"sanmathi",age:19},ram);
console.log(cat);
//push
let fah={name:"hema", age:18};
ram.push(fah);
 console.log(ram);
//pop
console.log(ram.pop());
//shift
console.log(ram.shift(0));
//unhsift
console.log(ram.unshift({name:"rani",age:23,mark:88}))
console.log(ram);
// to insert in a specfic postion 
ram.splice(2,0,{name:"kar",age:45});
console.log(ram);
//reverse
ram.reverse();
console.log(ram);
ram.forEach((har)=> {
har.name=har.name.split('').reverse('').join('');
});
console.log(ram);
// for each
ram.forEach((user)=>{
console.log(ram.filter( x=>x.age>26))
});
//gcd 
function gcd(a,b){
if(b==0){
return a;
}else{
return gcd(a,a%b);
}
};
let a=10;
let b=20;
console.log(gcd(a,b));
let da= ram.sort((a,b)=> {
if(a.name>b.name)   return 1;
if(a.name< b.name)  return -1;
return 0;
});
console.log(da);
 let sortedData = ram.sort((a, b) => a.age - b.age);
console.log(sortedData);
// for of 
for( let rei of ram){
console.log(rei);
};

//call back function 
function gu(name){
setTimeout(()=>{
let gon= ram.filter(x=> x.name===name);
console.log(gon)
},3000);
}
function agi()
{
setTimeout(()=>{
let gon= ram.map(x=> x.name);
console.log(gon)
},2000);
};
gu("sew");
agi();
//next
function gui(name,next){
setTimeout(()=>{
let gon= ram.filter(x=> x.name===name);
console.log(gon);
next();
},5000);
}
function agiu()
{
setTimeout(()=>{
let gon= ram.map(x=> x.name);
console.log(gon)
},4000);
};
gui("sew",agiu);


