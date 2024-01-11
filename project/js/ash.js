const DOMSelectors = {
    form: document.getElementById("form"),
    firstName: document.querySelector(".first-name"),
    cardTitle: document.querySelector(".card-title"),
    cardData: document.querySelector(".card-data"),
    cardPicture: document.querySelector(".card-picture"),
    h2: document.getElementById("myH2"),
    h4: document.getElementById("myH4"),
    h6: document.getElementById("myH6"),
    img: document.getElementById("imgYes"),
  };
  
  console.log(DOMSelectors);
  /*
  DOMSelectors.form.addEventListener("submit", function (event) {
    event.preventDefault();
    //alert("here");
    //console.log(DOMSelectors.firstName.value);
  
    DOMSelectors.h2.textContent = DOMSelectors.firstName.value;
    DOMSelectors.h4.textContent = DOMSelectors.cardTitle.value;
    DOMSelectors.h6.textContent = DOMSelectors.cardData.value;
    DOMSelectors.img.textContent = DOMSelectors.cardPicture.value;
  
    //DOMSelectors.h2s.forEach((el) => {
    //  el.textContent = DOMSelectors.firstName.value;
    //});
  
    document.querySelector(".flex-container").insertAdjacentHTML(
      "afterbegin",
      `<div class="grow" id="grow">
        <div id="animation1">
          <img
            src="${DOMSelectors.cardPicture.value}"
            alt="F44"
          />
          <h2>${DOMSelectors.cardTitle.value}</h2>
          <h4>${DOMSelectors.cardData.value}</h4>
          <h6>${DOMSelectors.firstName.value}</h6>
          <button type="button" class="delete">Delete</button>
        </div>
      </div>`
    );
  
    var button = document.querySelector('button.delete:not(button.delete[onclick=onButtonClick])');
    var button = document.querySelector('button.delete:not([onclick=onButtonClick])');
    button.addEventListener('click', onButtonClick);
    
  });
  
  
  var button = document.querySelector('button.delete');
  button.addEventListener('click', onButtonClick);
  
  function onButtonClick() {
    console.log("button click");
    
    var granyElement = this.parentNode.parentNode;
    //var element = document.getElementById("grow");
    granyElement.remove();
  };
  
  function makeGalaxy() {
  const Galaxy = yes{}
  return Galaxy
  }
  
  function addStar(Galaxy) {
    document.querySelector(".gallery").insertAdjacentHTML(
      "afterbegin",
      `<div class="grow">
  <div id="animation1">
    <img
      src="${DOMSelectors.cardPicture.value}"
      alt="F44"
    />
    <h2>${DOMSelectors.cardTitle.value}</h2>
    <h4>${DOMSelectors.cardData.value}</h4>
    <h6>${DOMSelectors.firstName.value}</h6>
  </div>
  </div>`
    );
  }*/

  var logo = document.getElementById('logo');
  logo.addEventListener('click', myFunction);
  
  function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches("#logo")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };




