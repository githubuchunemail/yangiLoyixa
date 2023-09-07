//  JavaScript string

//  String yaratish 1-usul
// let firstName = 'karimov "Ravshan" '
// console.log(firstName);

// let lastName = new String("Karimov")
// console.log(lastName);


// let words = "Apple, Banana, Kiwi"
// let words2 = "Kiwi, Ananas, Apricot"

// let allWords = words.concat(", Peach, ", words2)
// console.log(allWords);


// let a = "Lorem ipsum"
// let b = "       Lorem ipsum     "

// console.log(a);
// console.log(b.trim());


// let num = 5
// let num2 = "5"

// console.log(num.toString());
// console.log(num2);

// let num1 = prompt()
// let num2 = prompt()

// alert(parseInt(num1) + parseInt(num2))

// console.log(8459e-9);

// console.log(0.2 + 0.1);

// console.log(4 - "Ravshan");
// let a = 11111
// let res = a >= Infinity

// console.log(res);

// console.log(typeof Infinity);

// let a = "56465 zazczcdadasd 45"

// console.log(parseFloat(a));

let num1 = prompt()
let amal = prompt("Amalni kiriting")
let num2 = prompt()

let result = amal == "+" ? parseInt(num1) + parseInt(num2) : amal == "-" ? num1 - num2 : "Noto'g'ri amal yoki raqam"

alert(result)


