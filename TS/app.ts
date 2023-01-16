// Skapa en array med strängarna: apa, orangutang, gorilla, get, giraff
// Skriv ut arrayen med console.log
const arr: string[] = ["apa", "orangutang", "gorilla", "get", "giraff"]

console.log(arr);

// Skapa ett objekt med tre egenskaper. En sträng, en siffra och en boolean. Skriv ut objektet till console och testkör.
// Commita och pusha till github (om koden fungerar).
const obj: { name: string; age: number; hasDriversLicens: boolean } = {
    name: "Therese",
    age: 32,
    hasDriversLicens: true
};

console.log(obj);

// Skriv en funktion som tar emot en sträng och returnerar en sträng. Om funktionen tar emot strängen “X” ska den returnera “hej X”
function func (x:string): string {
    return "Hej " + x;
}

console.log(func("Nizze"));

// Loopa igenom arrayen av strängar och kör funktionen på varje sträng och skriv ut till konsollen det du får från arrayen.
// Kompilera, kör, commita och pusha.
for(let i=0; i < arr.length; i++){
    console.log(func(arr[i]));
}
