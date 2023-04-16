document.body.style.backgroundColor = "#B91450";

function priceTicket() {
    let km = parseInt(document.getElementById("km").value);
    let age = document.getElementById("age").value;
    let price = km * 0.21;
    let name = document.getElementById("name").value;
    if (age == "Under 18") {
        price -= (price / 100 * 20);
    }   else if (age == "Over 65") {
        price -= (price / 100 * 40);
    }
    price = parseFloat(price).toFixed(2);
    document.getElementById("price").innerText = price + " €";
    console.log(price + "€")
    document.getElementById("nameUser").innerText = name;
    console.log(name)
} 
