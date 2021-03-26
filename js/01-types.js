var username = 'instructor';
var password = 'Letmein1234!';
var instructorId = 5;
var isMarried;
var greeting = 'Hello'; //implicit typing as string
var yo; //no implicit typing - 'any'
// password = 1234;
// this would throw an error (a 'compile time error') 
// because it's the wrong type (number when it's supposed to be a string)
var WeaponType;
(function (WeaponType) {
    WeaponType[WeaponType["Sword"] = 0] = "Sword";
    WeaponType[WeaponType["Saber"] = 1] = "Saber";
    WeaponType[WeaponType["Spear"] = 2] = "Spear";
})(WeaponType || (WeaponType = {}));
;
var weapon = WeaponType.Sword;
console.log(WeaponType);
console.log(weapon);
var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {}));
var cardType = CardType[2];
console.log(cardType);
console.log(CardType);
var x;
var y;
x = '1234';
console.log('x', x);
x = 1234;
console.log('x', x);
// x=true
// ^^^^^^ error!
//# sourceMappingURL=01-types.js.map