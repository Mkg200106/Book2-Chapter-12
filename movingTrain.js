let trainSpeed = 250
let trainPosition = 0
let animation
let train = document.getElementById("train")
train.addEventListener("click", speedUp)
let stopButton = document.getElementById("stopButton")
stopButton.addEventListener("click", stopTrain)
function speedUp() {
  if (trainSpeed > 10) {
    trainSpeed -= 10
    console.log("train speed: " + trainSpeed)
  }
}
function setInterval() {
  clearInterval(animation)
  animation = setInterval(frame, trainSpeed)
}
