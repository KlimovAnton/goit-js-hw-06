// Создай класс Storage, который будет создавать объекты для управления складом товаров. 
// Класс ожидает только один аргумент – начальный массив товаров, который записывается в созданный объект в частное свойство items.

// Огласи следующие методы класса:

// getItems() – возвращает массив текущих товаров в частном свойстве items.
// addItem(newItem) — принимает новый товар newItem и добавляет его в массив товаров в частное свойство items объекта.
// removeItem(itemToRemove) — принимает строчку с названием товара itemToRemove и удаляет его из массива товаров 
// в частном свойстве items объекта.


class Storage {
    #items;
    constructor(arr) {
        this.#items = arr;
    }

    getItems() {
        return this.#items
    }

    addItem(newItem) {
        this.#items.push(newItem)
    }

    removeItem(itemToRemove) {
        this.#items.splice(this.#items.indexOf(itemToRemove), 1)
    }
}


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
