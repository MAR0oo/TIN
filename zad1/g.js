function greet(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(i + 1 + ". " + `Witaj ${args[i]}`);
    }
}

greet("Marek", "Maciek", "Robert");
greet("Marek", "Robert");
greet("Marek", "Maciek", "Robert", "Krzysiek");