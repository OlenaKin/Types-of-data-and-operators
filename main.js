
function calculateChocolates() {
    
    let moneyInWallet = parseFloat(prompt("Enter the amount of money in your wallet:")); // Prompt the user for the amount of money in the wallet

    let chocolatePrice = parseFloat(prompt("Enter the price of one chocolate bar:")); // Prompt the user for the price of one chocolate bar

    let chocolates = Math.floor(moneyInWallet / chocolatePrice);// Calculate the number of chocolates , rounding down

    let change = (moneyInWallet - (chocolates * chocolatePrice)).toFixed(2);// Calculate the change

    alert("You can buy " + chocolates + " chocolates and you will have $" + change + " left.");//result
}

// Call the function to execute the program
calculateChocolates();

