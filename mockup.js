function calculateExpense() {
    var q = document.getElementById("quantity");
    var p = document.getElementById("price");
    var d = document.getElementById("distance");
    var n = document.getElementById("name");
    var quantity = parseInt(q.value);
    var price = parseInt(p.value);
    var distance = parseInt(d.value);
    var name = n.value;

    var output = document.getElementById("output");
    var total = document.getElementById("total");

    var tExpense = 0;
    var tConsumption = 0;
    var tDistance = 0;
    var avgExpense = 0;
    var avgConsumption = 0;

    
    tExpense = parseInt(localStorage.getItem("totalExpense"));
    tConsumption = parseInt(localStorage.getItem("totalConsumption"));
    tDistance = parseInt(localStorage.getItem("totalDistance"));
    avgExpense = parseInt(localStorage.getItem("averageExpense"));
    avgConsumption = parseInt(localStorage.getItem("averageConsumption"))
    

    cleanTotal();

    tExpense = tExpense + price;
    tConsumption = tConsumption + quantity;
    tDistance = tDistance + distance;
    avgExpense = tExpense / tDistance * 100;
    avgConsumption = tConsumption / tDistance * 100;

    total.innerHTML += "Total refueling expenses: " + tExpense + " €<br/>Total consumption: " + tConsumption + " liters<br/>Total distance driven: " + tDistance + " kilometers<br/>Average expenses per 100 kilometers: " + avgExpense + " €<br/>Average consumption per 100 kilometers: " + avgConsumption + " liters";

    output.innerHTML += "Quantity refueled: " + quantity + " liters<br/>Price or refueling: " + price + " €<br/>Distance driven with the refueling: " + distance + " kilometers<br/>Name of the car: " + name +"<br/><br/>";

    
    localStorage.setItem("totalExpense", tExpense);
    localStorage.setItem("totalConsumption", tConsumption);
    localStorage.setItem("totalDistance", tDistance);
    localStorage.setItem("averageExpense", avgExpense);
    localStorage.setItem("averageConsumption", avgConsumption);
    
}

function cleanStorage(){
    none = 0;

    localStorage.setItem("totalExpense", none);
    localStorage.setItem("totalConsumption", none);
    localStorage.setItem("totalDistance", none);
    localStorage.setItem("averageExpense", none);
    localStorage.setItem("averageConsumption", none);

    cleanTotal();
    cleanOutput();
}

function cleanTotal(){
    document.getElementById("total").innerHTML = "";
}

function cleanOutput(){
    document.getElementById("output").innerHTML = "";
}