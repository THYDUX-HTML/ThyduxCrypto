let balance = 10000;

function sendMoney() {
    let amount = document.getElementById("amount").value;
    amount = parseFloat(amount);

    if (isNaN(amount) || amount <= 0) {
        alert("Enter a valid amount!");
        return;
    }

    if (amount > balance) {
        alert("Insufficient balance!");
        return;
    }

    balance -= amount;
    document.getElementById("balance").innerText = `$${balance}`;

    let transaction = document.createElement("p");
    transaction.innerText = `Sent $${amount}`;
    document.getElementById("transactions").appendChild(transaction);
}
