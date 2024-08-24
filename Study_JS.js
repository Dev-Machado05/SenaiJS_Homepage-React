function somaNumeros(numberOne, numberTwo) { 
    return numberOne + numberTwo;
}

console.log(somaNumeros(10, 20), "\n")

//--------------//

const person = {
    name: "James",
    age: 20,
    gender: "male",
}

console.table(person)

console.log(person.name)
console.log(person.age)
console.log(person.gender, "\n")

const {age, name, gender} = person

console.log(name)
console.log(age)
console.log(gender)