import "./imageViewer.css";
import big from "../assets/big.jpg";
import small from "../assets/small.png";

document.addEventListener("DOMContentLoaded", () => {
  const image1 = document.createElement("img");
  image1.src = big;
  const image2 = document.createElement("img");
  image2.src = small;
  const image3 = document.createElement("img");
  image3.src = "../image/Lion.jpg";

  if (document.body != null) {
    document.body.appendChild(image1);
    document.body.appendChild(image2);
    document.body.appendChild(image3);
  }
});
