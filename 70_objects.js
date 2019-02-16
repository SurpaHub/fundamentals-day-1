//objects
const pokemon = {
    englishName: "Eevee",
    japaneseName: "Eievui",
    eeveelutions: ["Vaporeon", "Jolteon", "Flareon", "Espeon", "Umbeon", "Leafeon", "Glaceon", "Sylveon"],
    type: "Normal",
    hp: 20,
    attack: function () {
        console.log("Attacking!!!!");
    },
};

console.log("This is a JavaScript object: ", pokemon);

//Access a property with dot notation:  obj.property
console.log("The pokemon's name is: ", pokemon.japaneseName);

//Change a property
pokemon.hp = 25;
console.log("Pokemon's hp are now: ", pokemon.hp);

//Add a property
pokemon.awake = true;
console.log("Updated pokemon with new property: ", pokemon);

//Invoke the function (method)
pokemon.attack();


// Create an empty array called "books".
// Create three objects that contain book titles, their author, and number of pages.
// Insert the three objects into the "books" array.
// Example of desired array: [ youHadMeAtWoof, bangkokHaunts, theCatcherInTheRye]
// Example of desired object: {title: "You Had Me at Woof", author: "Julie Klum", pages: 207}


// Access the author of the first book.

// Print the length of the author the the third book.

// To each book object variable, add a key of "dateRead" with a value of the year you read the book.


// Create an object called 'me' with properties for your name, age, city, job.

// To your "me" object, add a key of "family" with the value being an array of your family members.
// Example of desired output: { name: 'Rachel Koldenhoven',
//                              age: 44,
//                              city: 'Denver',
//                              jobTitle: 'educator',
//                               family: ['Galya', 'Emma', 'Hank'] }

// Update your city.


// Use the following Object for the next questions:
const invitees = {
    adults: [{
        name: "Penny",
        table: 10,
        dinnerChoice: ["salad", "veg", "ice cream"]
    },
        {
            name: "Billy",
            table: 12,
            dinnerChoice: ["soup", "veg", "sorbet"]
        },
        {
            name: "Lauren",
            table: 3,
            dinnerChoice: ["soup", "chicken", "ice cream"],
            specialConsiderations: {
                allergies: "melon",
                seating: "Don't sit her next to ex husband at table 8."
            }
        }
    ],
    children: [{
        name: "Junior",
        table: 4,
        allergies: ["nuts"]
    },
        {
            name: "Pablo",
            table: 4,
            allergies: ["gluten", "following directions"]
        },
        {
            name: "Ada",
            table: 4,
            allergies: ["boys"]
        }
    ]
};

// Access Penny's dinner choice (this will be the second item in her dinnerChoice array)

// Access Pablo's table number.

// Access Lauren's seating specialConsideration.

// Access Billy's dessert choice (this will be the third item in his dinnerChoice array)

// Access Ada's allergies.

// Create a string that reads Lauren's dinner choice in a sentence.
// Desired result: "Lauren's appetizer is _______. She will be eating ______ for dinner
// and has selected ________ as her dessert."
