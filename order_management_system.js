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


// TASK 4: Create a Function to Calculate Total for an Order

function calculateOrderTotal(order) {
    let total = 0; // starting total
    for (let item of order.items) {
        let inventoryItem = inventory.find(inventoryItem => inventoryItem.name === item.name);
        if (inventoryItem) {
            total += inventoryItem.price * item.quantity; // add price*quantity to starting total
        }
    }
    return total; // new total
}

// console.log(calculateOrderTotal(orders[0]));


// TASK 5: Create a Function to Mark an Order as Completed

function completeOrder(customerName) {
    // find if order exists
    let order = orders.find(orders => orders.customerName === customerName);
    if (order) {
        order.status = "Completed";
        console.log(`${customerName}'s order completed.`);
    // if order doesn't exst
    } else {
        console.log("Order not found.");
    }
}

// console.log(completeOrder("Jane Doe"));


// TASK 6: Create a Function to Check Pending Orders

function checkPendingOrders(orders) {
    let pendingOrders = orders.filter((orders => orders.status === "Pending"));
    return pendingOrders;
}

// console.log(checkPendingOrders(orders));


// testing more orders :)
console.log(placeOrder("Billybob", [{name: "Espresso", quantity: 1}, {name: "Latte", quantity: 3}]));
console.log(placeOrder("Jolene", [{name: "Flat White", quantity: 1}]));
console.log(calculateOrderTotal(orders[1]));
console.log(checkPendingOrders(orders));
console.log(completeOrder("Billybob"));