//Профиль разработчика

type Level = 'junior' | 'middle' | 'senior';

interface IDeveloper {
  level: Level;
  login: string;
  skills: string[];
  isLookingForJob?: boolean;
};

const me: IDeveloper = {
  level: 'senior',
  login: 'check',
  skills: ['genius', 'billionaire', 'playboy', 'philanthropist'],
  isLookingForJob: true,
};

//Интернет-магазин 

interface IProduct {
  id: number;
  price: number;
  title: string;
};

interface ICartEntry {
  product: IProduct;
  quantity: number;
};

const milk: IProduct = {
  id: 1,
  price: 89,
  title: 'Молоко',
};

const bread: IProduct = {
  id: 2,
  price: 39,
  title: 'Хлеб',
};

const butter: IProduct = {
  id: 3,
  price: 99,
  title: 'Масло',
};

const beer: IProduct = {
  id: 4,
  price: 100,
  title: 'Жидкое золото',
};


const cart: ICartEntry[] = [
  {
    product: milk,
    quantity: 1,
  },
  {
    product: bread,
    quantity: 2,
  },
  {
    product: butter,
    quantity: 3,
  },
  {
    product: beer,
    quantity: 4,
  }
]


const calculateTotal = (cart: ICartEntry[]): number => {
  let totalSum = 0;

  for (const elem of cart) {
    totalSum += elem.product.price * elem.quantity;
  }

  return totalSum;
};

console.log(calculateTotal(cart));
