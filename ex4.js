function submitVals(){
  var text = document.getElementById("dummy");

  var val1 = document.getElementById("bordredval");
  //var borRedVal = parseInt(val1);

  var val3 = document.getElementById("bordblueval");
  //var borBlueVal = parseInt(val2);

  var val2 = document.getElementById("bordgreenval");
  //var borGreenVal = parseInt(val3);

  var width = document.getElementById("width");

  var val4 = document.getElementById("backredval");
  //var backRedVal = parseInt(val4);

  var val6 = document.getElementById("backblueval");
  //var backBlueVal = parseInt(val5);

  var val5 = document.getElementById("backgreenval");
  //var backGreenVal = parseInt(val6);


  text.style.backgroundColor = rgb(val1, val2, val3);
  text.style.borderColor = rgb(val4, val5, val6);
  text.style.borderWidth = width;
  text.style.borderStyle ="solid";
}
