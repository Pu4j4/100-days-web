//one way to write arrow function
const myage = birthyear => 2024 - birthyear
const age = myage(2002)
console.log(age)


//anotherway 
const myage1 = birthyear1 => {
    const age1 = 2024 - birthyear1
    return age1
}
console.log(myage1(2003))


const name_age = (birthyear2,myname) => {
    const age2 = 2023 - birthyear2
    return `my age is ${age2} and my name is ${myname}`
}
console.log(name_age(2002,'Bhanupooja'))