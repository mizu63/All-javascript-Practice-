let number = [1, 2, 3, 4, 6, 7];

// let h=[];
for (const g of number){
    console.log(g)
    // h.unshift(g)
    // console.log(h)
}


const nar="mizu ahmmed jim";

// let b=nar.split("");
//  let r=b.reverse("");
// let h=r.join("");
// console.log(b)
// console.log(h)
 let t="";
for(const g of nar){
    t=g+t;
    // console.log(t)





    
}
  console.log(t)
  let student={
    name:"Mizu",
    Department:"CSE",
    Roll:634431,
    active:true
}

console.log(student.Roll)
student.Department="eee";
console.log(student)

function sum1(a,b){
    const sum=a+b;
    return sum;
}
 const total1=sum1(5,6);

console.log("..............................")

function sum2(a,b){
    const sum=a+b;
    return sum;
}
 const total2=sum2(5,6);


 console.log("..............................")

 function add(a,b){
    const intotal=a+b;
    return intotal;
}
 const alltotal1=add(total1,total2);
 console.log(alltotal1)