// div under test
const dut = document.getElementById("testdiv");

dut.ontouchstart = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchstart";
  document.getElementById("altKey").textContent = evt.altKey;
  document.getElementById("ctrlKey").textContent = evt.ctrlKey;
  document.getElementById("metaKey").textContent = evt.metaKey;
  document.getElementById("shiftKey").textContent = evt.shiftKey;
}

dut.ontouchend = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchend";
}

dut.ontouchmove = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchmove";
}

dut.ontouchcancel = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchcancel";
}

dut.onmousedown = function(evt) {
  dut.dispatchEvent(new Event("touchstart"));
}
