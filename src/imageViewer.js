import "./imageViewer.css";

document.addEventListener("DOMContentLoaded", () => {
  const image = document.createElement("img");
  image.src = "../image/Lion.jpg";
  if (document.body != null) {
    document.body.appendChild(image);
  }
});
