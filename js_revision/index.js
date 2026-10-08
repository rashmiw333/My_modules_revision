//Destructuring

//example1

const extractArrayValues = (arr) =>{
    const [a,b,third] = arr;

    //console.log(`a is ${a}, b is ${b} and c is ${third}`);
}

extractArrayValues([1,2,3]);

//example2

const extractObjValues = (obj)=>{
    const {name,age,salary} = obj;

    // console.log(`name: ${name}`);
    // console.log(`age: ${age}`);
    // console.log(`salary: ${salary}`);
}

extractObjValues({name:"Ravindra",age:23,salary:90000});

//example 3

let obj3 = {
    id:1,
    name:"da vinci code",
    details:{
        year: "2002",
        genre: "mystery",
        info:{
            director:"xyz",
            status:"HIT"
        }
    }
};

const extractDetails = (obj3) =>{
    const {name,details:{genre,year,info:{status}}} = obj3;

    console.log(`Name of Movie: "${name}". It is released in ${year} with  ${genre} genre. Movie is ${status}`)
}

extractDetails(obj3);