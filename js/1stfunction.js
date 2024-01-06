//this is my first function
function bhanu(){
    console.log("my name is bhanupooja");
}
//invoking or calling function
bhanu();


function add(a,b){
    const c = a+b;
    console.log(`the addition of ${a} and ${b} is ${c}`);
}
add(2,4)


function fruits(apples , bananas){
    console.log(apples,bananas);
    const juice = `the juice with ${apples} apples and the juice with ${bananas} bananas very yummm.`;
    return juice;
}
const juices = fruits(5,2)
console.log(juices)