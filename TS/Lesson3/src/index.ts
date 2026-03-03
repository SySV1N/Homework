//Умный плеер

class AudioPlayer {
  constructor(
    private _volume: number,
  ) {}

  get volume(): number {
    return this._volume;
  }

  set volume(v: number) {
    if (v < 0) {
      this._volume = 0;
      return;
    } else if (v > 100) {
      this._volume = 100
      return;
    } else {
      this._volume = v
      return;
    }
  }
};

const audioPlayer = new AudioPlayer(100);

audioPlayer.volume = 75;
console.log(`При заданной величине громкости в 75 выдает: ${audioPlayer.volume}`)

audioPlayer.volume = 100;
console.log(`При заданной величине громкости в 150 выдает: ${audioPlayer.volume}`);

audioPlayer.volume = -5;
console.log(`При заданной величине громкости в -5 выдает: ${audioPlayer.volume}`)

//Корзина товаров 

class Cart {
  constructor(
    private _items: string[],
  ) {};
  public addItem(item: string) {
    this._items.push(item)
  };
  public getItems() {
    return this._items;
  };
  public clear() {
    this._items = [];
  };
};


const cart = new Cart(['Beer', 'Apple'])

console.log(`Содержимое корзины: ${cart.getItems()}`);

cart.addItem('Juice');

console.log(`Содержимое корзины после добавления товара: ${cart.getItems()}`)

cart.clear();

console.log(`Содержимое корзины после очистки: ${cart.getItems()}`);



