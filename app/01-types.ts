let username:string='instructor';
let password:string='Letmein1234!';
let instructorId:number=5;
let isMarried:boolean;
let greeting='Hello'; //implicit typing as string
let yo; //no implicit typing - 'any'

// password = 1234;
// this would throw an error (a 'compile time error') 
// because it's the wrong type (number when it's supposed to be a string)

enum WeaponType {Sword,Saber,Spear};
let weapon:WeaponType=WeaponType.Sword;
console.log(WeaponType)
console.log(weapon)

enum CardType {Ace=1,Two,Three,Four}
let cardType:string=CardType[2]
console.log(cardType)
console.log(CardType)

let x:number|string;
let y:number|null;
x='1234'
console.log('x',x);
x=1234
console.log('x',x);
// x=true
// ^^^^^^ error!
