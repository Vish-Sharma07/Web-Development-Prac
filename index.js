//   Objects
let human = {
    name : "Vishakha",
    leg : 2,
};

for(let key in human){
    console.log(key, human[key]);
}

// Arrays
let names = ["Vishu","Ishu","Shruti","Rachna"];
for(let index in names){
   console.log(index, names[index]);
}

// for......of
for(let name of names){
    console.log(name)
}