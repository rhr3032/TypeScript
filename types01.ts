// Boolean (true/false)
let isOpen: boolean;
isOpen = true;


// String ('GitHub', 'VS Code', 'TypeScript')
let message: string;
message = "TypeScript";


// Number
let total: number = 20;
let hex: number = 0xff0;


// Array
let fruits: string[] = ["Mango", "Banana", "Apple"];
let numbers: Array<number> = [1, 2, 3, 4, 5];


// Tuple
let title: [number, string];
title = [10, "Raisul Rafi"];


// Enum
enum Colors {
    white = '#ffff',
    black = '#0000',
}


// Any
let coisa: any;
coisa = [1];


// Void
function logger(): void {
    console.log("Raisul Rafi");
}


// Null | Undefined
type Bla = string | undefined;


// Never
function error(): never {
    throw new Error("error");
}


// Object
let card: object;
card = {
    key: "Name",
};