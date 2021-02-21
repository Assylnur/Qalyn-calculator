var price = 500;//The starting bid 

function education() {//Groom's education
    var selectedValue = document.getElementById("1").value;

    switch (selectedValue) {
        case "1.1":
            price *= 1.5;
            break;
        case "1.2":
            price *= 1.2;
            break;
        case "1.3":
            price *= 1.05;
            break;
        case "1.4":
            price *= 0.9;
            break;

    }
}


function netWorth() {//Groom's family net worth
    var selectedValue = document.getElementById("2").value;

    switch (selectedValue) {
        case "2.1":
            price *= 2;
            break;
        case "2.2":
            price *= 1.5;
            break;
        case "2.3":
            price *= 1.2;
            break;

    }
}

function checked(id) {//to get values of selected element

    var s = document.getElementsByName(id);
    var i;
    for (i = 0; i < s.length; i++) {
        if (s[i].checked) {
            if (id == "skills") {
                skills(Number(s[i].value));
            }
            else if (id == "reputation") {
                reputation(Number(s[i].value));
            }
            else if (id = "age") {
                forRadio(Number(s[i].value));
            }
        }
    }
}
function skills(a) { //function for calculating skills
    price += a;
}
function forRadio(k) {//function for age
    price *= k;
}
function reputation(a) { //Groom's reputation
    if (a == 0.85 || a == 0.9) {
        price *= a;
    }
    else {
        price -= a;
    }
}

function msg() {
    education();
    netWorth()
    checked("skills");
    checked("age");
    checked("reputation");
    document.getElementById('totalPrice').innerHTML = "   " + "  Total is: $" + price;
    price = 500;//reset value of price

}

