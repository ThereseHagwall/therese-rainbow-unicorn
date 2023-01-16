"use strict";
const arr = ["apa", "orangutang", "gorilla", "get", "giraff"];
console.log(arr);
const obj = {
    name: "Therese",
    age: 32,
    hasDriversLicens: true
};
console.log(obj);
function func(x) {
    return "Hej " + x;
}
console.log(func("Nizze"));
for (let i = 0; i < arr.length; i++) {
    console.log(func(arr[i]));
}
