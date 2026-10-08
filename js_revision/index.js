//ES3.3_CW

//Spread Operator -> ...

//create duplicate array

const array = [1,2,3,4,5,6];

let newArray = array;

//console.log("new Array ",newArray);
//console.log("original Array ",array);


newArray[3] =14;

// console.log("new Array* ",newArray);//[ 1, 2, 3, 14, 5, 6 ]
// console.log("original Array* ",array);// [ 1, 2, 3, 14, 5, 6 ] -> original got modified


//if use spread operator

//example 1
let newNumsArray = [...array];

//console.log(array,"original Array");
//console.log(newNumsArray,"newNumsArray");

//example 2

let newStringArray = (arr) => [...arr];
//console.log(newStringArray(["apple","orange"]));

const addElement = (arr,element) => [...arr,element];

//console.log(addElement(["mango","kiwi"],"strabbery"));

//combined Array

let combinedArray = (arr1,arr2,element) => [...arr1,...arr2,element];
//console.log(combinedArray([1,2],[3,4]));
console.log(combinedArray([1,2],[3,4],5));

//copying array of objects

const newObj = (obj) => ({...obj});

//console.log(newObj({name:"SnehLata",age:19}));

//adding element to object

const newData = (obj,key,value) => ({...obj,key:value});
//console.log(newData({name:"Jadeja",profession:"player"},"favColor","orange"));