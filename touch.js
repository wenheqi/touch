// div under test
const dut = document.getElementById("testdiv");

dut.ontouchstart = function(evt) {
  evt.preventDefault();
  document.getElementById("eventTitle").textContent = "touchstart";
}

dut.ontouchend = function(evt) {
  evt.preventDefault();
  document.getElementById("eventTitle").textContent = "touchend";
}

dut.ontouchmove = function(evt) {
  evt.preventDefault();
  document.getElementById("eventTitle").textContent = "touchmove";
}

dut.ontouchcancel = function(evt) {
  evt.preventDefault();
  document.getElementById("eventTitle").textContent = "touchcancel";
}
