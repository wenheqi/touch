// div under test
const dut = document.getElementById("testdiv");

dut.ontouchstart = function(evt) {
  document.getElementById("eventTitle").textContent = "touchstart";
}

dut.ontouchend = function(evt) {
  document.getElementById("eventTitle").textContent = "touchend";
}

dut.ontouchmove = function(evt) {
  document.getElementById("eventTitle").textContent = "touchmove";
}

dut.ontouchcancel = function(evt) {
  document.getElementById("eventTitle").textContent = "touchcancel";
}
