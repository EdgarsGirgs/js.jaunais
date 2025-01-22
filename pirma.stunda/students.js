const objekts = {name: "Jozn", vecums: 23, irSkolens: false}
console.log(objekts);


if(objekts.vecums >= 18){
    console.log("Pieaudzis")
}else{
    console.log("Nav pilngadīgs")
    
}

if(objekts.irSkolens == false){
    console.log("Nav stundents")
}else{
    console.log("Ir students")
}
//----------------------------------------------
function printStaticString() {
    let name = "Mans Vards";
    console.log("Tavs Vārds " + name)
}
function printString(name){
    console.log(name)
}
function numbersString(){
    for (let i = 1; i <= 10; i++){
        console.log(i)
    }
}
function fromTo(from, to){
    for (let i = from; i <= to; i++){
        console.log(i)
    }
}
printStaticString();
printString('Igors');
numbersString();
fromTo(5, 8)
//----------------------------------------------
