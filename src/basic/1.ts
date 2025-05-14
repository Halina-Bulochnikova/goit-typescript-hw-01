const age: number = 50;
const username: string = "Max";
const toggle: boolean = true;
const empty: boolean = false;
const callback: (a: number) => number = (a: number): number => {
  return 100 + a;
};

console.log(age, username, toggle, empty, callback);