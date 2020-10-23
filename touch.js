// div under test
const dut = document.getElementById("testdiv");

dut.ontouchstart = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchstart";
  document.getElementById("altKey").textContent = evt.altKey;
  document.getElementById("ctrlKey").textContent = evt.ctrlKey;
  document.getElementById("metaKey").textContent = evt.metaKey;
  document.getElementById("shiftKey").textContent = evt.shiftKey;
  document.getElementById("targetTouchesLength").textContent = evt.targetTouches.length;
  if (evt.targetTouches.length > 0) {
    document.getElementById("tIdentifier").textContent = evt.targetTouches[0].identifier;
    document.getElementById("tScreenX").textContent = evt.targetTouches[0].screenX;
    document.getElementById("tScreenY").textContent = evt.targetTouches[0].screenY;
    document.getElementById("tClientX").textContent = evt.targetTouches[0].clientX;
    document.getElementById("tClientY").textContent = evt.targetTouches[0].clientY;
    document.getElementById("tPageX").textContent = evt.targetTouches[0].pageX;
    document.getElementById("tPageY").textContent = evt.targetTouches[0].pageY;
    document.getElementById("tTarget").textContent = evt.targetTouches[0].target.tagName + "#" + evt.targetTouches[0].target.id;
    document.getElementById("tRadiusX").textContent = evt.targetTouches[0].radiusX;
    document.getElementById("tRadiusY").textContent = evt.targetTouches[0].radiusY;
    document.getElementById("tRotationAngle").textContent = evt.targetTouches[0].rotationAngle;
    document.getElementById("tForce").textContent = evt.targetTouches[0].force;
  }
}

dut.ontouchend = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchend";
  document.getElementById("altKey").textContent = evt.altKey;
  document.getElementById("ctrlKey").textContent = evt.ctrlKey;
  document.getElementById("metaKey").textContent = evt.metaKey;
  document.getElementById("shiftKey").textContent = evt.shiftKey;
  document.getElementById("targetTouchesLength").textContent = evt.targetTouches.length;
  if (evt.targetTouches.length > 0) {
    document.getElementById("tIdentifier").textContent = evt.targetTouches[0].identifier;
    document.getElementById("tScreenX").textContent = evt.targetTouches[0].screenX;
    document.getElementById("tScreenY").textContent = evt.targetTouches[0].screenY;
    document.getElementById("tClientX").textContent = evt.targetTouches[0].clientX;
    document.getElementById("tClientY").textContent = evt.targetTouches[0].clientY;
    document.getElementById("tPageX").textContent = evt.targetTouches[0].pageX;
    document.getElementById("tPageY").textContent = evt.targetTouches[0].pageY;
    document.getElementById("tTarget").textContent = evt.targetTouches[0].target.tagName + "#" + evt.targetTouches[0].target.id;
    document.getElementById("tRadiusX").textContent = evt.targetTouches[0].radiusX;
    document.getElementById("tRadiusY").textContent = evt.targetTouches[0].radiusY;
    document.getElementById("tRotationAngle").textContent = evt.targetTouches[0].rotationAngle;
    document.getElementById("tForce").textContent = evt.targetTouches[0].force;
  }
}

dut.ontouchmove = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchmove";
  document.getElementById("altKey").textContent = evt.altKey;
  document.getElementById("ctrlKey").textContent = evt.ctrlKey;
  document.getElementById("metaKey").textContent = evt.metaKey;
  document.getElementById("shiftKey").textContent = evt.shiftKey;
  document.getElementById("targetTouchesLength").textContent = evt.targetTouches.length;
  if (evt.targetTouches.length > 0) {
    document.getElementById("tIdentifier").textContent = evt.identifier;
    document.getElementById("tScreenX").textContent = evt.screenX;
    document.getElementById("tScreenY").textContent = evt.screenY;
    document.getElementById("tClientX").textContent = evt.clientX;
    document.getElementById("tClientY").textContent = evt.clientY;
    document.getElementById("tPageX").textContent = evt.pageX;
    document.getElementById("tPageY").textContent = evt.pageY;
    document.getElementById("tTarget").textContent = evt.target.tagName + "#" + evt.target.id;
    document.getElementById("tRadiusX").textContent = evt.radiusX;
    document.getElementById("tRadiusY").textContent = evt.radiusY;
    document.getElementById("tRotationAngle").textContent = evt.rotationAngle;
    document.getElementById("tForce").textContent = evt.force;
  }
}

dut.ontouchcancel = function(evt) {
  evt.preventDefault(); // prevent screen scrolling with finger
  document.getElementById("eventTitle").textContent = "touchcancel";
  document.getElementById("altKey").textContent = evt.altKey;
  document.getElementById("ctrlKey").textContent = evt.ctrlKey;
  document.getElementById("metaKey").textContent = evt.metaKey;
  document.getElementById("shiftKey").textContent = evt.shiftKey;
  document.getElementById("targetTouchesLength").textContent = evt.targetTouches.length;
  if (evt.targetTouches.length > 0) {
    document.getElementById("tIdentifier").textContent = evt.targetTouches[0].identifier;
    document.getElementById("tScreenX").textContent = evt.targetTouches[0].screenX;
    document.getElementById("tScreenY").textContent = evt.targetTouches[0].screenY;
    document.getElementById("tClientX").textContent = evt.targetTouches[0].clientX;
    document.getElementById("tClientY").textContent = evt.targetTouches[0].clientY;
    document.getElementById("tPageX").textContent = evt.targetTouches[0].pageX;
    document.getElementById("tPageY").textContent = evt.targetTouches[0].pageY;
    document.getElementById("tTarget").textContent = evt.targetTouches[0].target.tagName + "#" + evt.targetTouches[0].target.id;
    document.getElementById("tRadiusX").textContent = evt.targetTouches[0].radiusX;
    document.getElementById("tRadiusY").textContent = evt.targetTouches[0].radiusY;
    document.getElementById("tRotationAngle").textContent = evt.targetTouches[0].rotationAngle;
    document.getElementById("tForce").textContent = evt.targetTouches[0].force;
  }
}
