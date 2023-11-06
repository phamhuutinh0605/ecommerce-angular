export interface ICart {
  items: Array<ICartItem>;
}

export interface ICartItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
