class User {

    constructor(username, age, city) {
        console.log(`created`, username)
        this.name = username
        this.age = age
        this.city = city
    }

    sayHi(){
        console.log(`Hello from ${this.name}!`)
    }

    login() {
        console.log(`User logged in`)
    }
}

// User.sayHi() - call method doesn`t work,  


const User1 = new User(`Alex`, 22, `London`);
const User2 = new User(`Edward`, 35, `Wien`);
const User3 = new User(`Victor`, 18, `Kyiv`);
console.log(User1, User2, User3)

User1.sayHi()

// class Rectangle {
//         #a; 
//         #b;
//         static counter = 0;

//         static printAllRectangles() {
//             console.log(Rectangle.counter)
//         }

//     constructor(a, b) {
//         Rectangle.counter += 1
//         this.#a = a
//         this.#b = b
//     }

//     getPerimetr() {
//         return (this.#a + this.#b) * 2
//     }
    
//     getArea() {
//         return this.#a * this.#b
//     }

//     // getA() {
//     //     return this.#a;
//     // }

//     // setA(newValue) {
//     //     this.#a = newValue
//     // }

//     get a() {
//         return this.#a;
//     }

//     set a(newValue) {
//         this.#a = newValue
//     }
// }

// const r1 = new Rectangle(12, 33)
// const r2 = new Rectangle(22, 36)
// const r3 = new Rectangle(11, 22)

// console.log(r2.getArea(), r2.getPerimetr())
// console.log(r1.getArea(), r1.getPerimetr())

// console.log(r1)
// console.log(Rectangle.counter);
// Rectangle.printAllRectangles();
// // r1.#a = 4000;
// // console.log(r1.#a) - doesn`t work
// // console.log(r1.getA())

// // r1.setA(1000)
// // console.log(r1)
// // console.log(r1.a)
// // r1.a = 550;
// // console.log(r1)