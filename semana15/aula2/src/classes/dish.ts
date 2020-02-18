export abstract class Dish {
  constructor(
    protected price: number,
    protected cost: number,
    protected ingredients: string[],
    protected timeToCook: number,
  ) { }

  public getProfit(): number {
    return this.price - this.cost;
  }

  public getPrice(): number {
    return this.price;
  }

  public abstract cook(): void;
}
