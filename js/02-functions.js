function joinNames(firstName, lastName) {
    var fullName = firstName + " " + lastName;
    return fullName;
}
console.log(joinNames('John', 'Ulbright'));
function sayHello(name) {
    return name;
}
sayHello('Ken');
// sayHello(1);
// ^^^^^^^^^^^ causes an error since 1 is not a string
function check(username, password) {
    return username == 'elevenfiftyuser' && password == 'Letmein1234!';
}
console.log(check('elevenfiftyuser', 'Letmein1234!')); //returns true
console.log(check('ElevenFiftyUser', 'Letmein1234!')); //returns false
console.log(check('elevenfiftyuser', 'password')); //returns false
console.log(check('1150user', 'password')); //returns false
//someString is an optional parameter. it must go after all required parameters
function addNumbersWithOptionals(n1, n2, someString) {
    console.log(someString);
    return n1 + n2;
}
console.log(addNumbersWithOptionals(1, 2));
console.log(addNumbersWithOptionals(1, 2, 'this is optional'));
function legalName(first, last, middle) {
    return middle ? first + " " + middle + " " + last : first + " " + last;
}
console.log(legalName('John', 'Ulbright'));
console.log(legalName('John', 'Ulbright', 'Robert'));
//# sourceMappingURL=02-functions.js.map