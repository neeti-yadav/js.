console.log("-------------------------------");
console.log("functions");
console.log("-------------------------------");
//  Method-1

let Rectangle={
    length:2,
    breadth:4
}

function areaOfParameter (a,b){

// console.log("area of parameter =>",2*(a+b));
}
areaOfParameter(Rectangle.length,Rectangle.breadth)

function areaOfRectangle (x,y){
    // console.log("Area of Rectangle is =",x*y);
}
// areaOfRectangle(Rectangle.length,Rectangle.breadth)


let cone = {
    length:5,
    radius:8,
} 

function curvedSurfaceArea (l,r){
    // console.log("The curved surface area of a cone is => ", 3.14*l*r);
}
curvedSurfaceArea(cone.length,cone.radius)

console.log("-------------------------------");
console.log("functions-Method-2 (arrow function)");
console.log("-------------------------------");

let sum=(a,b)=>{
    // console.log(" sum is a+b",a+b);
}
sum(2,3)

let areaOfCircle=(r)=>{
    // console.log("area of circle",3.14*r*r)
}
areaOfCircle(3)





let areaOfRec=(l,b)=>{
    // console.log("area of  rec = " ,l*b);

}
areaOfRec(Rectangle.length,Rectangle.breadth)


areaOfPara=(n,m)=>{
    // console.log("area of para =" ,2*(n+m));
}
areaOfPara(Rectangle.length,Rectangle.breadth)

console.log("-------------------------------");
console.log("functions-Method-3 (return type)");
console.log("-------------------------------");

let returningTypeFunction=function (a,b){

    return a+b
}
 let value= returningTypeFunction(2,1)

 console.log("values is => ", value);


 let stringReturn=function (str) {
    return str;
    
 }
 let strValue=stringReturn("NeetiYadav")
 console.log("value of string is => ", strValue);


 let numberReturn=function(number){
    return number;
 }
 let numberValue=numberReturn("21")
 console.log("number is = ", numberValue);