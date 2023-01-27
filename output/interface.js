"use strict";
function drawRectangle(options) {
    let width = options.width;
    let length = options.length;
    return width * length;
}
drawRectangle({
    width: 30,
    length: 20
});
