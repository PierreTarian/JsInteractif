// F1

let footer = document.querySelector("footer");
let clic = 0

footer.addEventListener("click",function(){
  console.log("clique");
});

// F1 BIS

footer.addEventListener("click",function(){
    clic += 1;
    console.log("clic numéro " + clic);
  });

  // F2

let hamburger = document.querySelector("button.navbar-toggler");
let menu = document.getElementById("navbarHeader");

hamburger.addEventListener("click", function(){
  menu.classList.toggle("collapse");
});

// F3

let cardFirst = document.getElementsByClassName("card")[0];
let button = document.querySelector("button.btn-outline-secondary");

button.addEventListener("click", function(){
  cardFirst.style.color = "red";
});

// F4

let cardSecond = document.getElementsByClassName("card")[1];
let button2 = document.querySelectorAll("button.btn-outline-secondary")[1];


button2.addEventListener("click", function(){
  if (cardSecond.style.color === "green"){
    cardSecond.style.color = "";
  }else {
    cardSecond.style.color = "green";
  };
});

// F5

let header = document.getElementsByTagName("header")[0];
let boostrap = document.querySelector("link");

header.addEventListener("dblclick", function(){
  if (boostrap.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){
    boostrap.setAttribute("href", "" );
  }else{
    boostrap.setAttribute("href", "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css");
  };
});

// F6