/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

console.log ("Number: Si usa il datatype number, quando si ha a che fare con i numeri, che possono essere numeri interi (1, 2, 3) o numeri decimali (12.5, 2.46)" )
console.log ( "String: Si usa il datatype string con parole o frasi, viene usata per far vedere il testo in un linguaggio di programmazione. Ogni cosa scritta deve essere contenuta da apici singoli o doppi.")
console.log ("Boolean: fa capire al nostro codice se prendere decisioni Vere(true o False(false)")
console.log ("Null rappresenta l'assenza di valore , indica che un oggetto è vuoto")
console.log ("Undefined indica che la proprietà di un oggetto non ha un valore assegnato")


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Matteo"
console.log(name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let numero1 = 12
let numero2 = 20
let risultato =  numero1 + numero2
console.log (risultato)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Carletti"
console.log(name)
console.log("se avessi fatto inizialmente const name = Matteo, non avrei potuto riassegnare un nuovo valore alla variabile, perche la variabile Const non può essere riassegnata")


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let numero3 = 4
let somma = numero3 - x
alert(somma)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1 = "jhon"
let name2 = "Jhon"
let verifica = name1==name2
console.log(verifica)

/* EXTRA*/

let uguaglianza = name1===name2.toLocaleLowerCase()
console.log(uguaglianza)


