// alert("chanwoo taeyoon");


// const a = 1;
// const hisName = "shintail";

// console.log("chanwoo taeyoon");

// const amIFat = null;
// console.log(amIFat);

// const daysOfWeek = ["mon", "tue", "sat" ,"thu", "fri", "sat"];
// console.log(daysOfWeek);

// daysOfWeek.push("sun");
// console.log(daysOfWeek);

// console.log(daysOfWeek[3]);     //thu


//Object
const player = {    //배열 = 변수x 설명 불가능, Object = 변수o property 설명.
    //property
    name: "nico",
    points: 10,
    fat: true,
    handsome: false
}

console.log(player);
console.log(player.points);

player.fat = false;     //player가 constant여도 object안에 있는 property를 바꾸는 것은 허용
console.log(player);

player.lastName = player.name + "las";       //object의 property 추가
console.log(player);
