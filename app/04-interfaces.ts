interface Animal{
    name:string;
    numberOfLegs:number;
}
// let a:Animal=new Animal()
// ^^^^^^^^^^^^^^^^^^^^^^^^^ doesn't work because you can't instantiate interfaces

let lassie: Animal={
    name:'Lassie',
    numberOfLegs:4
}