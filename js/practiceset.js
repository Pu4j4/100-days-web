let runAgain = true;


const canDrive = (age) =>{
    return age>=18 ? true : false;
}

while (runAgain){
    let age = prompt("enter your age:");
    age = Number.parseInt(age);
    if (age<0){
        console.log("please a valid age");
        break;
    }
    if (canDrive(age)){
        alert("yes you can drive");
    }
    else{
        alert("you cannot drive");
    }
    runAgain = confirm("do you wanna play again")
}