// TASK 1: Create an Inventory Array of Product Objects

const inventory = [
    {name: "Espresso", price: 3, quantity: 10},
    {name: "Latte", price: 4, quantity: 5},
    {name: "Cappucino", price: 4, quantity: 6},
    {name: "Mocha", price: 5, quantity: 4}
];


// TASK 2: Create an Orders Array of Order Objects

let orders = [];

// TASK 3: Create a Function to Place an Order

function placeOrder(customerName, orderedItems) {
    // check if item exists
    for (let item of orderedItems) {
        let inventoryItem = inventory.find(inventoryItem => inventoryItem.name === item.name);
        
        if (!inventoryItem) {
            console.log(`${item.name} does not exist.`);
            return;
        }
    // check if item has enough stock
        if (inventoryItem.quantity < item.quantity) {
            console.log(`Not enough in stock to sell ${item.name}.`);
            return;
        }
    }
    
    // subtract if enough stock
    for (let item of orderedItems) {
        let inventoryItem = inventory.find(inventoryItem => inventoryItem.name === item.name);
        inventoryItem.quantity -= item.quantity;
    }

    //add order to array using push, default to pending
    orders.push({
        customerName: customerName,
        items: orderedItems,
        status: "Pending"
    });
    console.log(`Order placed for ${customerName}.`);
}

// console.log(placeOrder("Jane Doe", [{name: "Mocha", quantity: 1}]));