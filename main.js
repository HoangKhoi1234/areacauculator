// var value1, value
// value1 = prompt('enter year')
// value= Number(value1);
// function check(number) {
//     if (number % 4 == 0) {
//         return true
//     }
//     else{
//         return false;
//     }
// }
// check(value);
// if (check(value)){
//     alert('NAM NHUAN')
// }

// else{
//     alert('NAM KO NHUAN')
// }

function area(type,a,b) {
    if (type == 'rectangle') {
        alert('area retangle(a*b)= ' + a*b)
    }
    if (type == 'square') {
        alert('area square(a*a) = ' + a*a)
    }
    if (type == 'circle') {
        alert('area circle(a*p,14) = ' + a*3.14)
    }
    if (type == 'triangle') {
        alert('area triangle(1/2*a*b) = ' + 1/2*a*b)
    }
}

var typee= prompt("Enter TYPE OF SHAPE('rectangle','circle','square','triangle')")
var aa= Number(prompt("Enter Number a"))
var bb= Number(prompt("Enter Number b"))

area(typee, aa, bb)