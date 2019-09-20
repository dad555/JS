function whatShallIWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }
}

whatShallIWear(50);
whatShallIWear(80);
whatShallIWear(60);

function doIt(param) {
    param = 2;
    console.log(param);
}

var test = 1;
doIt(test);
console.log(test);

function test1(x, y) {
    return x + y;
}

console.log(test1(1,2));


