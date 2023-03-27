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
      modalFrame.className = "frame";
      break;
    case "badge":
      modalFrame.className = "frame badge";
      break;
    case "star":
      modalFrame.className = "frame star";
      break;
    case "pentagon":
      modalFrame.className = "frame pentagon";
      break;
  }
}
