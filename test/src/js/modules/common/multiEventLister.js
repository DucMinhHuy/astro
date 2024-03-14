export default function addEventListenerMultiType (element, types, listener, useCapture) {
  for (var i = 0, types = types.trim().split(/\s+/), len = types.length; i < len; ++i) {
    element.addEventListener(types[i], listener, useCapture);
  }
}