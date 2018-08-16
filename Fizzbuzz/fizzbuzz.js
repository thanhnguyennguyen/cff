let fizz = num => {
    if (num % 3 == 0)  console.log("fizz"); 
}
let buzz = num => {
    if (num % 5 == 0) console.log("buzz");
}
for (let i = 0; i < 100; i++){
    console.log(i + ': ');
    fizz(i);
    buzz(i);
}