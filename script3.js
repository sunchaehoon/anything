// function sayHello() {
//     console.log("Hello");
// }
// sayHello();
// sayHello("nicolas");    //Hello 출력 

// function sayHello(nameOfPerson, weight) {
//     console.log("Hello my name is " + nameOfPerson + ", and I'm " + weight + "kg.");
// }
// sayHello("nicolas", 65);
// sayHello("chanwoo", 60);
// sayHello("shintaeil", 120);

// function plus(a ,b) {
//     console.log(a + b);
// }
// function divide(a, b) {
//     console.log(a / b);
// }

// plus(8, 7);
// divide(15, 3);

// const player = {
//     name: "nico",
//     sayHello: function (otherPersonsName) {
//         console.log("hello " + otherPersonsName + " nice to meet you");
//     },
// };

// console.log(player.name);
// player.sayHello("tail");

// const a = 5;
// let isNicoFat = true;
// isNicoFat = false;

// const me = "cool";
// const days = [1, 2, 123, "shintail", me];
// console.log(days);
// console.log(days[3]);
// days[3] = "tail's daesinman";
// console.log(days[3]);
// alert(days[3]);
// days.push("ssimryun");  //days[] 배열 맨 뒤에 추가.

// function Shin(getName) {
//     alert((getName + " 5천원"));
// }
// console.log(Shin("신퇘지"));

const age = 96;
function ageOfForeigner(foreignerAge) {
    return foreignerAge + 2;
}
const KRage = ageOfForeigner(age);
console.log(KRage);
