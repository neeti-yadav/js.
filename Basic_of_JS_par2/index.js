// console.log("Hey");

// //object create

// let rectangle = {
//     length:1,
//     breadth:2,

//     draw: function(){
//         console.log("draw");
//     }
// }
// console.log(rectangle.draw());


// let square = {
//     side:4,
// }
// console.log("the area of square is ",square.side*square.side);

// let circle = {
//     radius:16
// }
// console.log("the formula is",3.14*circle.radius*circle.radius);


// let triangle = {
//     height:12,
//     base:13,
// }
// console.log("the area of triangle is",0.5*triangle.base*triangle.height);


//factory functions


// function createRectangle(length,breadth){
//      return rectangle = {
//         length:length,
//         breadth:breadth,

//         draw(){
//             console.log("drawing rectangle");
//         }
//     };

// }

// let rectangleObj1 = createRectangle(4,5);
// let rectangle2 = createRectangle(2,3);
// let rectangle3 = createRectangle(7,9);






//constructor function -> Pascal Notation -> first letter  of every word is capital
//constructor function -> prop/methods -> intialise/define

// function Rectangle(length,breadth){
//     this.length = length;
//     this.breadth = breadth;
//     this.draw = function(){
//         console.log("drawing");
//     }
// }



// //object creation in constructor function

// let rectangleObject = new Rectangle(4,6);

// rectangleObject.color = "yellow";
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);


// let Rectangle1 = new Function(
//     "length","breadth",
//     `this.length = length;
//     this.breadth = bredth;
//     this.draw = function(){
//     console.log("drawing");
//     }`
// );

// //object creation using Rectangle1 
// let rect = new Rectangle(2);
// rect.length;
// console.log(rect);


// let a=10;
// let b=a;

// a++;
// console.log(a);
// console.log(b);


// let a = {value:10};
// let b = a;
// a.value++;
// console.log(a.value);
// console.log(b.value);



let a = {value:10};
let b = a;
a.value++;
console.log(a.value);
console.log(b.value);