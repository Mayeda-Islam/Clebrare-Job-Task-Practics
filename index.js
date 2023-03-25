document.getElementById("frame").addEventListener("click", () => {
  const frame = document.getElementById("frame");
  document.getElementById("frame").classList.toggle("pentagon");
  console.log(frame);
});
const rectangle = document.getElementById("rectangle");
const badge = document.getElementById("badge");
const star = document.getElementById("star");
const pentagon = document.getElementById("pentagon");

rectangle.addEventListener("click", selectFrame);
badge.addEventListener("click", selectFrame);
star.addEventListener("click", selectFrame);
pentagon.addEventListener("click", selectFrame);

function selectFrame() {
  const buttonId = this.id;
  switch (buttonId) {
    case "rectangle":
      frame.className = "frame";
      break;
    case "badge":
      frame.className = "frame badge";
      break;
    case "star":
      frame.className = "frame star";
      break;
    case "pentagon":
      frame.className = "frame pentagon";
      break;
  }
}
