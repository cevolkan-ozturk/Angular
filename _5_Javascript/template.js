
(function () {
    console.log("Imedia Function Anonymous")
}) ();

(() => {
    console.log("Imedia Function Arrow")
}) ();


// Function
function normFuction() {
    console.log("normFuction");
}

normFuction()

//Anonymous Function
let anonymousFuction = function () {
    console.log("normFuction");

}
anonymousFuction()


//Arrows Function 
let arrowFunction = (data) => {
    console.log("arrow function " + data);

}

arrowFunction("asd");


//////////////////////////////////////////////////////////
//Conditional

let conditional = (data) => {
    let number = 5;
    if (number > 0) {
        console.log("pozitiftir");

    } else 
            console.log("negatif");
}

conditional();

let ternary = (data) => {
    let number = 5;
    const result = (number > 0) ? "pozitiftir" : "negatif";
    console.log(result);
}

ternary()

//Conditional 
let conditional2 = (data) => {
    let number = parseInt(Number("4"));
    if(number == 0) {
        console.log("0");
    }
    else if (number == 1) {
        console.log("1");
    }
}

// SetTimeout 