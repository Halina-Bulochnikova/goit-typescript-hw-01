function merge<T, U>(objA: T, objB: U) {
    return Object.assign({}, objA, objB);
}

const merged = merge({ name: "Halina" }, { age: 35 });

console.log(merged.name);
console.log(merged.age);
