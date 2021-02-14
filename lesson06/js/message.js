const today = new Date();
const dayNumber = today.getDay();
const element = document.getElementById("anncouncment");
if (dayNumber == 6) {element.classList.add("show") ;}
else {element.classList.add("hide") ;}