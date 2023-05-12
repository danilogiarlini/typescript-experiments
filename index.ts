class User {
  constructor(private id: number, public name: string) {}
}

const user: User = new User(34, 'name');

//console.log(user.id);

function multiply(a: number, b: number): number {
  return a * b;
}

console.log(multiply(3, 'ciao'));
