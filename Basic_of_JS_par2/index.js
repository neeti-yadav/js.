console.log("Hey");

//object create

let rectangle = {
    length:1,
    breadth:2,

    draw: function(){
        console.log("draw");
    }
}
console.log(rectangle.draw());


let square = {
    side:4,
}
console.log("the area of square is ",square.side*square.side);

let circle = {
    radius:16
}
console.log("the formula is",3.14*circle.radius*circle.radius);


let triangle = {
    height:12,
    base:13,
}
console.log("the area of triangle is",0.5*triangle.base*triangle.height);


//factory functions


