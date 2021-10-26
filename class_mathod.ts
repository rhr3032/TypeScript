class UserAccount {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    logDetails(): void {
        console.log(`${this.name} ${this.age}`);
    }
}

const john = new UserAccount('John', 22);
john.logDetails();