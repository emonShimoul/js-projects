function calculateTriangleArea() {
  // get triangle base value
  const triangleBaseInput = document.getElementById("triangle-base");
  const triangleBaseText = triangleBaseInput.value;
  const base = parseFloat(triangleBaseText);

  // get triangle height value
  const triangleHeightInput = document.getElementById("triangle-height");
  const triangleHeightText = triangleHeightInput.value;
  const height = parseFloat(triangleHeightText);

  //   calculate the area
  const area = 0.5 * base * height;

  //   display triangle area
  const triangleAreaSpan = document.getElementById("triangle-area");
  triangleAreaSpan.innerText = area;
}

function calculateRectangleArea() {
  // get rectangle width value
  const rectangleWidthInput = document.getElementById("rectangle-width");
  const rectangleWidthText = rectangleWidthInput.value;
  const width = parseFloat(rectangleWidthText);

  // get rectangle length value
  const rectangleLengthInput = document.getElementById("rectangle-length");
  const rectangleLengthText = rectangleLengthInput.value;
  const length = parseFloat(rectangleLengthText);

  //   calculate the area
  const area = width * length;

  //   display rectangle area
  const rectangleAreaSpan = document.getElementById("rectangle-area");
  rectangleAreaSpan.innerText = area;
}
