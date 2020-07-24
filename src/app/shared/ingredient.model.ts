export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

}

/* code below this works too. It's a shortcut 

export class Ingredient {
  constructor(public name: string, public amount: number){}
}

*/