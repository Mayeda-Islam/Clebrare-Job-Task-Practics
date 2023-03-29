const croppedFrame = document.getElementById("cropped_image_result");
const modalFrame = document.getElementById("modal-frame");
const image_input = document.getElementById("image_input");
const modalLabel = document.getElementById("modalTriggerlevel");
let imageUrl = "";
var roundedImage;
const result = document.getElementById("cropped_image_result");
roundedImage = document.createElement("img");
image_input.addEventListener("change", function (e) {
  // cropper.js codes
  var files = e.target.files;
  console.log(files);
  modalFrame.style.display = "block";
  roundedImage.src = "";
  result.innerHTML = "";
  var done = function (url) {
    document.getElementById("modal-frame").innerHTML = "";
    document.getElementById("modal-frame").innerHTML =
      '<img id="preview_image" class="w-full" src="' + url + '" alt="" />';
    console.log(document.getElementById("modal-frame"));
    modalLabel.click();
  };
  if (files && files.length > 0) {
    const file = files[0];
    if (URL) {
      console.log("inside of url", URL);
      done(URL.createObjectURL(file));
    } else if (FileReader) {
      reader = new FileReader();
      reader.onload = function (e) {
        console.log("else er modder", reader.result);
        done(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
  var image = document.getElementById("preview_image");
  var button = document.getElementById("crop_button");

  var croppable = false;
  var cropper = new Cropper(image, {
    aspectRatio: 1,
    viewMode: 1,
    ready: function () {
      croppable = true;
    },
  });
  button.onclick = function () {
    var croppedCanvas;
    var roundedCanvas;

    modalFrame.style.display = "none";
    if (!croppable) {
      return;
    }
    // Crop;
    croppedCanvas = cropper.getCroppedCanvas();
    // Round;
    roundedCanvas = getRoundedCanvas(croppedCanvas);
    // Show;

    roundedImage.setAttribute("id", "preview_cropped_image");
    roundedImage.src = roundedCanvas.toDataURL();
    result.innerHTML = "";
    result.appendChild(roundedImage);
  };
});

function getRoundedCanvas(sourceCanvas) {
  var canvas = document.createElement("canvas");
  var context = canvas.getContext("2d");
  var width = sourceCanvas.width;
  var height = sourceCanvas.height;
  canvas.width = width;
  canvas.height = height;
  context.imageSmoothingEnabled = true;
  context.drawImage(sourceCanvas, 0, 0, width, height);
  context.globalCompositeOperation = "destination-in";
  context.beginPath();

  context.fill();
  return canvas;
}

const displayImage = () => {
  document.getElementById("display_image").src = document.querySelector(
    "#preview_cropped_image"
  ).src;
  document.getElementById("display-frame").className = croppedFrame.className;
  modalLabel.click();
};
const circle = document.getElementById("circle");
const normal = document.getElementById("normal");
const heart = document.getElementById("heart");
const star = document.getElementById("star");
const square = document.getElementById("square");
const btnLeft = document.getElementById("btn-left");
const btnRight = document.getElementById("btn-right");

normal.addEventListener("click", selectFrame);
circle.addEventListener("click", selectFrame);
heart.addEventListener("click", selectFrame);
star.addEventListener("click", selectFrame);
square.addEventListener("click", selectFrame);
btnLeft.addEventListener("click", selectRotateL);
btnRight.addEventListener("click", selectRotateR);
let rotateL = 0;
let rotateR = 0;
function selectRotateL() {
  rotateL = rotateL + -90;
  croppedFrame.style.transform = `rotate(${rotateL}deg)`;
}
function selectRotateR() {
  console.log("ghurche");
  rotateR = rotateR + 90;
  croppedFrame.style.transform = `rotate(${rotateR}deg)`;
}
function selectFrame() {
  const buttonId = this.id;
  switch (buttonId) {
    case "normal":
      croppedFrame.className = "";
      break;
    case "square":
      croppedFrame.className = "frame square";
      break;
    case "circle":
      croppedFrame.className = "frame circle";
      break;
    case "star":
      croppedFrame.className = "frame star";
      break;
    case "heart":
      croppedFrame.className = "frame heart";
      break;
  }
}
