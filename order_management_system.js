// TASK 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: "Espresso", price: 3, quantity: 10},
    {name: "Latte", price: 4, quantity: 5},
    {name: "Cappucino", price: 4, quantity: 6},
    {name: "Mocha", price: 5, quantity: 4}
];


// TASK 2: Create an Orders Array of Order Objects

let orders = [
    {customerName: null}, // nulls for empty values
    {items: [
        {name: null},
        {quantity: null}
    ]},
    {status: "Pending"} // default value pending, when completed it will get changed
];

// console.log(orders); // feel free to test any commented console.logs :)