function Student(name, age, favSubject) {
    this.name = name;
    this.age = age;
    this.favSubject = favSubject;

    this.introduce = function () {
        return `
        Imie studenta: ${name}
        Wiek studenta: ${age}
        Ulubiony przedmiot: ${favSubject}
        `
    }
}

let student1 = new Student("John", 18, "TIN");
let student2 = new Student("Krzysiek", 28, "MAS");

console.log(student1.introduce());
console.log(student2.introduce());