// Loops
var names = [
    "Alex",
    "John",
    "Mary",
    "Joe"
];
for (var i=0; i<names.length; i++){
    console.log(names[i]);
}
console.log();

// for of
for (const name of names) {
    console.log(name);
}

names.forEach(function(name) {
    console.log(name);
});