const images = ["evening.jpg", "sky.jpg", "universe.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/images/${chosenImage}`;
bgImage.alt = 'img'
bgImage.width = '1920';
bgImage.height = '1080';
     
document.body.appendChild(bgImage);     //body의 맨 아래에 추가
// document.body.prependChild(bgImage);     //body의 맨 위에 추가





