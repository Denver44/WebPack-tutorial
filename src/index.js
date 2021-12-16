
document.addEventListener("DOMContentLoaded", () => {
  const button = document.createElement("button");
  button.innerText = "Click me";
  button.onclick = () => {
    // System is global variable inside a JavaScript
    System.import("./imageViewer.js")
      .then((module) => module.default)
      .catch((e) => console.log(e));
  };
  document.body.appendChild(button);
});
