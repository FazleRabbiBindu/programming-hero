function triangleCalculate(){
    var inputBase = document.getElementById('triangleBase');
    var baseValue = inputBase.value;
    var inputHeight = document.getElementById('triangleHeight');
    var heightValue = inputHeight.value;
    var base = parseFloat(baseValue);
    var height = parseFloat(heightValue);
    var area = 0.5*base*height;
    console.log(typeof area);
    console.log(area);

    var outputTriangle = document.getElementById('triangleArea');
    outputTriangle.innerText = area;
}