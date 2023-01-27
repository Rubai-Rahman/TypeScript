
interface rectAngleOptions{
  width: number;
  length: number;
}


function drawRectangle(options:rectAngleOptions){
  let width = options.width;
  let length = options.length;
  return width * length;
}
drawRectangle({
  width: 30,
  length:20
})