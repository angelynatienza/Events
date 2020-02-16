function upDate(previewPic){
  var change = previewPic.src;
    document.getElementById("image").style.backgroundImage = 'url('+change+')';
    document.getElementById("image").innerHTML = previewPic.alt;
}

function unDo(){
  document.getElementById("image").style.backgroundImage = 'none';
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";

}