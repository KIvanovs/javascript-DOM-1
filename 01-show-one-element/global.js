window.addEventListener("load", function(){
  var clickIt = document.getElementById("more_text_link");
  clickIt.addEventListener("click", function(){
    var textToShow = document.getElementById("more_text_content");
    textToShow.style.display = "inline"
    clickIt.style.display = "none"

  });
});