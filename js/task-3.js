// Напиши класс StringBuilder, который принимает один параметр initialValue - произвольную строку, 
// которая записывается в частное свойство value создаваемого объекта.

// Объяви следующие методы класса:

// getValue() - возвращает текущее значение частного свойства value.
// padEnd(str) - получает параметр str (строку) и добавляет его в конец значения частного свойства value объекта, 
// который вызывает этот метод.
// padStart(str) - получает параметр str (строка) и добавляет его в начало значения частного свойства value объекта,
//  который вызывает этот метод.
// padBoth(str) - получает параметр str (строка) и добавляет его в начало и в конец значения частного свойства value объекта, 
// который вызывает этот метод.
// Возьми код ниже с инициализацией экземпляра и вызовами методов и вставь его после объявления класса для проверки корректности работы. 
// В консоль будут выведены результаты их работы. Пожалуйста, ничего там не меняй.


class StringBuilder  {
    #value;

    constructor(initialValue) {
        this.#value = initialValue;
    }

    getValue() {
        return this.#value
    }

    padEnd(str) { 
        this.#value = this.#value + str
    }

    padStart(str) {
        this.#value = str + this.#value
    }

    padBoth(str) {
        this.#value = str + this.#value + str
    }
}




const builder = new StringBuilder(".");

console.log(builder.getValue()); // "."

builder.padStart("^");
console.log(builder.getValue()); // "^."

builder.padEnd("^");
console.log(builder.getValue()); // "^.^"

builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
