// TASK 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: "Espresso", price: 3, quantity: 10},
    {name: "Latte", price: 4, quantity: 5},
    {name: "Cappucino", price: 4, quantity: 6},
    {name: "Mocha", price: 5, quantity: 4}
];


// TASK 2: Create an Orders Array of Order Objects

let orders = [];
// orders.push({
//    customerName: "Jane Doe",
//    items: [
//        {name: "Mocha", quantity 2},
//    ],
//    status: "Pending"
// });


// TASK 3: Create a Function to Place an Order

function placeOrder(customerName, items) {
    //for in loop, verify if item exists or is enough stock
    for (let quantity in items) {
        let inventoryItem = inventory.find(inventory => inventory.name === items.name);
        if (!inventoryItem) {
            console.log("Error. Item does not exist.");
            break;
        }
        if(items.quantity > inventoryItem.quantity) {
            console.log("Error. Not enough item in stock.");
            break;
        }
    }
        items.quantity -= inventory.quantity;
    //create order and push(), set status to pending
    orders.push({
        customerName: customerName,
        items: [{name: items.name, quantity: items.quantity}],
        status: "Pending"
    });
    console.log(`Order placed for ${customerName}.`)
}

console.log(placeOrder("John Doe", {name: "Cappuccino", quantity: 2}))