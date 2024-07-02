let bread1 = prompt("Which bread would you like to have :- ");
let veggies1 = prompt("What are yopur favourite veggies :- ");
let sauce1 = prompt("Which sauce would you like to have :- ");

function makeSandwhich(bread, veggies, sauce) {
    let sandwhich = bread + "bread" + 
    veggies + " " + sauce + "sandwhich";
    return sandwhich;
} 

let vegSadwhich = makeSandwhich(bread1, veggies1, sauce1);
console.log(vegSadwhich);