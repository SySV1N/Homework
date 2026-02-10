const greet = (name: string): string => {
  return `Hello, ${name}`;
};

const multiply = (a: number, b: number): number => { 
  return a * b;
};

const isAdult = (age: number): boolean => {
  return age >= 18;  
};

console.log(greet("Gleb"), "\n", multiply(14, 88), '\n', isAdult(18));

