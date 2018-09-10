console.log("destructuring");

const person = {
    name: 'Vanessa',
    age: 25,
    location: {
        city: 'Berlin',
        temperature: 23 
    }
};



// const name = person.name;
// const age = person.age;
//console.log(`$(person.name)` is `$(person.age).`);

const { name, age} = person;
console.log(`${name} is ${age}.`);

const { temperature, city} = person.location
if (temperature && city) {
    console.log(`It's ${temperature} in ${city}`);
}
