document.body.style.backgroundColor = "#B91450";

function priceTicket() {
    let name = document.getElementById("name").value;
    let km = parseInt(document.getElementById("km").value);
    let age = document.getElementById("age").value;
    let price = km * 0.21;
    if (age == "1") {
        price -= price / 100 * 20;
    }   else if (age == "3") {
        price -= price / 100 * 40;
    }
    price = price.toFixed(2);
    document.getElementById("price").innerText = price + " €";
    document.getElementById("nameUser").innerText = name;
} 
