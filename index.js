const modalFrame = document.getElementById("modal-frame");
const image_input = document.getElementById("image_input");
const modalLabel = document.getElementById("modalTriggerlevel");
let imageUrl = "";
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    modalLabel.click();
    imageUrl = reader.result;
    document.querySelector("#preview_image").src = imageUrl;
  });
  reader.readAsDataURL(this.files[0]);
});
const displayImage = () => {
  document.getElementById("display_image").src =
    document.querySelector("#preview_image").src;
  document.getElementById("display-frame").className = modalFrame.className;
  modalLabel.click();
};
const circle = document.getElementById("circle");
const normal = document.getElementById("normal");
const heart = document.getElementById("heart");
const star = document.getElementById("star");
const square = document.getElementById("square");

normal.addEventListener("click", selectFrame);
circle.addEventListener("click", selectFrame);
heart.addEventListener("click", selectFrame);
star.addEventListener("click", selectFrame);
square.addEventListener("click", selectFrame);

function selectFrame() {
  const buttonId = this.id;
  switch (buttonId) {
    case "normal":
      modalFrame.className = "";
      break;
    case "square":
      modalFrame.className = "frame square";
      break;
    case "circle":
      modalFrame.className = "frame circle";
      break;
    case "star":
      modalFrame.className = "frame star";
      break;
    case "heart":
      modalFrame.className = "frame heart";
      break;
  }
}
