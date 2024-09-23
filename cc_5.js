// Task 1: Create an Inventory Array of Product Objects

const inventory = [
    { name: 'Coffee', price: 4, quantity: 15 },
    { name: 'Croissant', price: 3, quantity: 30 },
    { name: 'Frappuccino', price: 5, quantity: 15 },
    { name: 'Muffin', price: 3, quantity: 30 }
  ];
  

// Task 2: Create an Orders Array of Order Objects

const orders = [];


// Task 3: Create a Function to Place an Order

function placeOrder(customerName, items) {
    // Check item stock
        for (let orderedItem of items) {
          let inventoryItem = inventory.find(product => product.name === orderedItem.name);
        
    // Check ordered item existence within inventory
          if (!inventoryItem) {
            console.log(`Error: ${orderedItem.name} does not exist in inventory.`);
            return;
          }
        
    // Check for enough stock of ordered item
          if (orderedItem.quantity > inventoryItem.quantity) {
            console.log(`Error: Not enough ${orderedItem.name} in stock.`);
            return; 
          }
        }
        
    // Update inventory and add order if item(s) in stock.
        for (let orderedItem of items) {
          let inventoryItem = inventory.find(product => product.name === orderedItem.name);
          inventoryItem.quantity -= orderedItem.quantity;
        }
        
    // Create order and push to orders array
        orders.push({
            customerName, items, status: 'Pending' });
        console.log(`Order placed for ${customerName}.`)};
    
      
    // Example order
      placeOrder('Bob', [{ name: 'Frappuccino', quantity: 1 }]);
    