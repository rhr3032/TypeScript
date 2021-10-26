class UserAccount {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }
}

const john = new UserAccount("John", 21);

console.log(john);