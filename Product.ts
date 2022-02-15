interface Product {
  id: number;
  name: string;
  description: string;
  price?: number;
  display(): void;
}

var product1: Product = {
  id: 123,
  name: "Iphone",
  description: "Its awesome",
  price: 1000,
  display(): void {
    console.log(this.id + " " + this.name);
  },
};

var product2: Product = {
  id: 123,
  name: "Iphone",
  description: "Its awesome",
  display(): void {
    console.log(this.id + " " + this.name);
  },
};
