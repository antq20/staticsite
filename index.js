var slideIndex = 0; 
// identifies index
carousel();
// calls function

function carousel() {
  var x = document.getElementsByClassName("carousel-image");
//   grabs the images by class
  for (let i = 0; i < x.length; i++) {
    // loops through X(the images in this case)
    x[i].style.display = "none";
    // displays each element of array
  }
  slideIndex++;

  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

