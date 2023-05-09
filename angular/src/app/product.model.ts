export class Product {
    _id: string;
    name: string;
    price: number;
    description: string;

  constructor(_id: string,name: string, price: number, description: string) {
    this._id = _id;
    this.name = name;
    this.price = price;
    this.description = description;
  }
}