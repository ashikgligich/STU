import './ash'
//import { usAirForceJets } from './menu'


// let modeButton = document.querySelector("#schemaaaaa");

// modeButton.addEventListener('click', () => {
//   var r = document.querySelector(':root'); 
//   var rs = getComputedStyle(r);

//   if (rs.getPropertyValue('--someVar') == "RED")
//     r.style.setProperty('--someVar', 'green');
//   else
//     r.style.setProperty('--someVar', 'RED');
// })
// modeButton.addEventListener('click', () => {
//   var r = document.querySelector(':root'); 
//   var rs = getComputedStyle(r);

//   if (rs.getPropertyValue('--pic') == "url(/comiepropganda.png)")
//     r.style.setProperty('--pic', 'url(/2602894.jpg)');
//   else
//     r.style.setProperty('--pic', 'url(/comiepropganda.png)');
// })


function displayJets(jetz)
{
  jetz.forEach((jet) => {
    document.querySelector(".flex-container").insertAdjacentHTML(
      "afterbegin",
      `<div class="grow" id="grow">
        <div id="animation1">
          <img
            src="${jet.imageUrl}"
            alt="F44"
          />
          <h2>${jet.name}</h2>
          <h4>${jet.role}</h4>
          <h6>${jet.maxSpeed,jet.range,jet.payload}</h6>
          <button type="button" class="delete">Delete</button>
        </div>
      </div>`
    )});
    
    var button = document.querySelector('button.delete:not(button.delete[onclick=onButtonClick])');
    var button = document.querySelector('button.delete:not([onclick=onButtonClick])');
    button.addEventListener('click', onButtonClick);
}

displayJets(usAirForceJets);

var button = document.querySelector('button.delete');
button.addEventListener('click', onButtonClick);

function onButtonClick() {
  console.log("button click");
  
  var granyElement = this.parentNode.parentNode;
  //var element = document.getElementById("grow");
  granyElement.remove();
};

/*
var filtbut = document.querySelectorAll('#myDropdown a.filterz');
filtbut.forEach(one => one.addEventListener('click', mmmm));

function mmmm() {

  console.log("i am here");

 let no = document.querySelector(".flex-container")
 no.innerHTML = '';

 let filter = this.textContent;

 usAirForceJets.forEach((uh)=> {
  uh.role.includes  'filter'
  displayJets(uh)
 })

}
*/
var buts = document.querySelectorAll('#myDropdown a.filterz');
console.log(buts);
buts.forEach(item => { item.addEventListener('click', onButtonClick2) });


function onButtonClick2(){
  console.log("button f1")
  var g = document.querySelector(".flex-container")
  g.innerHTML = '';

  console.log(this);
  var planeTypo = this.innerText; 
  

  if (planeTypo == "ALL")
    fighterz = usAirForceJets
  else
    var fighterz = usAirForceJets.filter(x => x.role.includes(planeTypo));
  
  displayJets(fighterz);

};
var turt = document.querySelectorAll('#myDropdown b.speed');
console.log(turt);
turt.forEach(item => { item.addEventListener('click', onButtonClick3) });


function onButtonClick3(){
  console.log("button f1")
  var g = document.querySelector(".flex-container")
  g.innerHTML = '';

var sortjet = Array.from(usAirForceJets.sort((a,b) => a.maxSpeedMph - b.maxSpeedMph));
console.log(sortjet);


displayJets(sortjet);
};
