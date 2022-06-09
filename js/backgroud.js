const images = ["img1.jpg"];

const chosenImage = images[0];

const bgImage = document.querySelector(".bgimg");

console.log(bgImage.style);

bgImage.style.cssText=`background-image: url("css/image/${chosenImage}")`;