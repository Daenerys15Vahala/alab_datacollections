// DATA COLLECTIONS LAB

// PART 1 //

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const rows = csv.split("\n");
console.log(rows);

// // PART 2 //

const table = rows.map(row => row.split (","));
console.log(table);

// PART 3 //

const titles = table[0];
console.log(titles);

const info = table.slice(1);
console.log(info);

const objects = [];

for (const row of info) {
    const person = {};

    person.id = row[0];
    person.name = row [1];
    person.occupation = row [2];
    person.age = row [3];

    objects.push(person);
}

console.log(objects);

// PART 4 //
objects.pop();
console.log(objects);

objects.splice(1,0, {
    id: "48",
    name: "Barry",
    occupation: "Runner",
    age: "25"
});

objects.push({
    id: "7", 
    name: "Bilbo", 
    occupation: "None", 
    age: "111"
});

console.log(objects);

// age

let totalAge = 0;
for (const person of objects){
    totalAge += Number(person.age);
}
console.log(totalAge);

const averageAge = totalAge / objects.length;

console.log(averageAge);

// back to csv

let newCSV = "id, name, occupation, age";

for (const person of objects) {
    newCSV += `\n${person.id},${person.name},${person.occupation},${person.age}`;
}
console.log(newCSV);