function calculateTotal() {
    // Get the values of cost and liters from the input fields
    var costPerLiter = parseFloat(document.getElementById("cost").value);
    var litersPurchased = parseFloat(document.getElementById("liters").value);
    
    // Calculate the total cost
    var totalCost = costPerLiter * litersPurchased;
    
    // Display the total cost to the user
    document.getElementById("totalCost").textContent = "Total cost: $" + totalCost.toFixed(2);
}
