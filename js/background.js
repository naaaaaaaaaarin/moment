/* const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`

document.body.appendChild(bgImage);
 */

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgDiv = document.createElement("div");
bgDiv.id = "bg"
console.log(bgDiv);
const bgImage = document.createElement("img");
bgImage.src = `./img/${chosenImage}`

bgDiv.appendChild(bgImage);
document.body.appendChild(bgDiv);
