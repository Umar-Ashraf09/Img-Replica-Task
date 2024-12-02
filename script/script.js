
function openCourse(evt, courseName) {
  var i, cardsDisplay, tabsLink;
  cardsDisplay = document.getElementsByClassName("cards-display");
  for (i = 0; i < cardsDisplay.length; i++) {
    cardsDisplay[i].style.display = "none";
  }
  tabsLink = document.getElementsByClassName("tabs-link");
  for (i = 0; i < cardsDisplay.length; i++) {
    tabsLink[i].className = tabsLink[i].className.replace(" active", "");
  }
  document.getElementById(courseName).style.display = "block";
  evt.currentTarget.className += " active";
}