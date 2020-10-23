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
  document.getElementById("changedTouchesLength").textContent = evt.changedTouches.length;
  if (evt.changedTouches.length > 0) {
    document.getElementById("cIdentifier").textContent = evt.changedTouches[0].identifier;
    document.getElementById("cScreenX").textContent = evt.changedTouches[0].screenX;
    document.getElementById("cScreenY").textContent = evt.changedTouches[0].screenY;
    document.getElementById("cClientX").textContent = evt.changedTouches[0].clientX;
    document.getElementById("cClientY").textContent = evt.changedTouches[0].clientY;
    document.getElementById("cPageX").textContent = evt.changedTouches[0].pageX;
    document.getElementById("cPageY").textContent = evt.changedTouches[0].pageY;
    document.getElementById("cTarget").textContent = evt.changedTouches[0].target.tagName + "#" + evt.changedTouches[0].target.id;
    document.getElementById("cRadiusX").textContent = evt.changedTouches[0].radiusX;
    document.getElementById("cRadiusY").textContent = evt.changedTouches[0].radiusY;
    document.getElementById("cRotationAngle").textContent = evt.changedTouches[0].rotationAngle;
    document.getElementById("cForce").textContent = evt.changedTouches[0].force;
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
  document.getElementById("changedTouchesLength").textContent = evt.changedTouches.length;
  if (evt.changedTouches.length > 0) {
    document.getElementById("cIdentifier").textContent = evt.changedTouches[0].identifier;
    document.getElementById("cScreenX").textContent = evt.changedTouches[0].screenX;
    document.getElementById("cScreenY").textContent = evt.changedTouches[0].screenY;
    document.getElementById("cClientX").textContent = evt.changedTouches[0].clientX;
    document.getElementById("cClientY").textContent = evt.changedTouches[0].clientY;
    document.getElementById("cPageX").textContent = evt.changedTouches[0].pageX;
    document.getElementById("cPageY").textContent = evt.changedTouches[0].pageY;
    document.getElementById("cTarget").textContent = evt.changedTouches[0].target.tagName + "#" + evt.changedTouches[0].target.id;
    document.getElementById("cRadiusX").textContent = evt.changedTouches[0].radiusX;
    document.getElementById("cRadiusY").textContent = evt.changedTouches[0].radiusY;
    document.getElementById("cRotationAngle").textContent = evt.changedTouches[0].rotationAngle;
    document.getElementById("cForce").textContent = evt.changedTouches[0].force;
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
  document.getElementById("changedTouchesLength").textContent = evt.changedTouches.length;
  if (evt.changedTouches.length > 0) {
    document.getElementById("cIdentifier").textContent = evt.changedTouches[0].identifier;
    document.getElementById("cScreenX").textContent = evt.changedTouches[0].screenX;
    document.getElementById("cScreenY").textContent = evt.changedTouches[0].screenY;
    document.getElementById("cClientX").textContent = evt.changedTouches[0].clientX;
    document.getElementById("cClientY").textContent = evt.changedTouches[0].clientY;
    document.getElementById("cPageX").textContent = evt.changedTouches[0].pageX;
    document.getElementById("cPageY").textContent = evt.changedTouches[0].pageY;
    document.getElementById("cTarget").textContent = evt.changedTouches[0].target.tagName + "#" + evt.changedTouches[0].target.id;
    document.getElementById("cRadiusX").textContent = evt.changedTouches[0].radiusX;
    document.getElementById("cRadiusY").textContent = evt.changedTouches[0].radiusY;
    document.getElementById("cRotationAngle").textContent = evt.changedTouches[0].rotationAngle;
    document.getElementById("cForce").textContent = evt.changedTouches[0].force;
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
  document.getElementById("changedTouchesLength").textContent = evt.changedTouches.length;
  if (evt.changedTouches.length > 0) {
    document.getElementById("cIdentifier").textContent = evt.changedTouches[0].identifier;
    document.getElementById("cScreenX").textContent = evt.changedTouches[0].screenX;
    document.getElementById("cScreenY").textContent = evt.changedTouches[0].screenY;
    document.getElementById("cClientX").textContent = evt.changedTouches[0].clientX;
    document.getElementById("cClientY").textContent = evt.changedTouches[0].clientY;
    document.getElementById("cPageX").textContent = evt.changedTouches[0].pageX;
    document.getElementById("cPageY").textContent = evt.changedTouches[0].pageY;
    document.getElementById("cTarget").textContent = evt.changedTouches[0].target.tagName + "#" + evt.changedTouches[0].target.id;
    document.getElementById("cRadiusX").textContent = evt.changedTouches[0].radiusX;
    document.getElementById("cRadiusY").textContent = evt.changedTouches[0].radiusY;
    document.getElementById("cRotationAngle").textContent = evt.changedTouches[0].rotationAngle;
    document.getElementById("cForce").textContent = evt.changedTouches[0].force;
  }
}
