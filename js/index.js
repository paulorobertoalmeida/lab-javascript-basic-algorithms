// Iteration 1: Names and Input
//
const hacker1 = "Albert";
const hacker2 = "Mike";

console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator's name is ${hacker2}`);

const longestName = (name1, name2) => {

    let largest = [];
    if (name1.lenght < name2.lenght) {
        largest.push(name2);
    } else {
        largest.push(name1);
    }
    return `the largest name is ${largest}`;
}

console.log(longestName(hacker1, hacker2));


const capitalNames = (name1, name2) => {
    let capitals = name1.toUpperCase().split("").join(" ");
    let capitals2 = name2.toUpperCase().split("").join(" ");
    return `the capital name is ${capitals} & ${capitals2}`
}

console.log(capitalNames(hacker1, hacker2));
// Iteration 2: Conditionals

const reversedArr = (name1, name2) => {
    let reversed1 = name1.split("").reverse().join("");
    let reversed2 = name2.split("").reverse().join("");
    return `this are the name you typed in reverse order ${reversed1} and ${reversed2}`;
}

console.log(reversedArr(hacker1,hacker2));

// Iteration 3: Loops
