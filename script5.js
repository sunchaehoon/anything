// const title = document.getElementById("title"); //getElementById란 함수를 통해 id로 element를 가져올 수 있음

// title.innerText = "Got you";
// console.log(title);

//const hello = document.getElementsByClassName("hello");

//console.log(hello);


// const title = document.querySelector(".hello h1:first-child");  //element검색   //css selector를 사용하여 검색할 수 있음
//                     //querySelectorAll() --> 조건에 맞는 element 모두 검색
// console.log(title);

//const title = document.querySelector(".hello h1");     //아래 코드와 같은 역할을 함
// // const title = document.getElementById("hello");
// title.innerText = "hello";  //텍스트 지정        //inner = 내면의

// console.dir(title);

const h1 = document.querySelector("div.hello:first-child h1");
// console.dir(title);
// title.style.color = "blue";

function handleTitleClick() {
    // const currentColor = h1.style.color;    //const(값 변경 X)
    // let NewColor;   //let(값 변경 O)
    // if(currentColor === "blue") {
    //     NewColor = "tomato";
    // } else {
    //     NewColor = "blue";
    // }
    // h1.style.color = NewColor;

    // h1.className = "active";            //getter & setter

    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }

}

// function handleTitleMouseEnter() {
//     console.log("mouse is here!");
// }

// function handleTitleMouseLeave() {
//     console.log("mouse was left!");
// }

// function handleTitleMouseEnter() {
//     h1.innerText = "Mouse is here!";
// }

// function handleTitleMouseLeave() {
//     h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//     alert("copier!");
// }

// function handleWindowOffline() {
//     alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//     alert("All Good");
// }

   h1.addEventListener("click", handleTitleClick);  //js가 실행하게 괄호 사용 X
// h1.addEventListener("mouseenter", handleTitleMouseEnter);
// // h1.onmouseenter = handleTitleMouseEnter; //위 코드와 같음

// h1.addEventListener("mouseleave", handleTitleMouseLeave);
// // h1.onmouseleave = handleTitleMouseLeave; //위 코드와 같음


// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
