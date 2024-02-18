//Tests for equality and inequality with strings

let country1 = "Srilanka"
let country2 = "Japan"

console.log("Is country1 == 'Srilanka' I predict True")
console.log(country1 == 'Srilanka')

console.log("Is country2 == 'France' I predict False")
console.log(country2 == 'France')

//Tests using the lower case function

let fruit = "Mango"

console.log("Is fruit.toLowerCase() == 'mango' I predict True")
console.log(fruit.toLowerCase() == 'mango')

console.log("Is  fruit.toLowerCase() != 'mango' I predict False")
console.log(fruit.toLowerCase() != 'mango')

//Numerical Tests

let number = 10

console.log("Is number > 5 ? I predict True")
console.log(number > 5)

console.log("Is number < 5 ? I predict False")
console.log(number < 5)

//Tests using "and" and "or" operators

let a = 5
let b = 7

console.log("Is a >= 5 && b <= 10 ? I predict true")
console.log( a >= 5 && b <= 10)

console.log("Is a != 5 || b > 10 ? I predict false")
console.log(a != 5 || b > 10)

// Test whether an item is in a array

let fruits = ["Apple" , "Banana" ,"Orange" , "Strawberry"] 

console.log("Is fruits.includes('Apple')?  I predict True")
console.log(fruits.includes('Apple'))

// Test whether an item is not in a array

let vegetables = ["potato" , "tomato" ,"onion" , "lady finger"] 

console.log("Is vegetables.includes('carrot')?  I predict False")
console.log(vegetables.includes('carrot'))