const DOMSelectors = {
  form: document.getElementById("form"),
  firstName: document.querySelector(".first-name"),
  cardTitle: document.querySelector(".card-title"),
  cardData: document.querySelector(".card-data"),
  
};

console.log(DOMSelectors);

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  //alert("here");
  //console.log(DOMSelectors.firstName.value);

 
  //DOMSelectors.h2s.forEach((el) => {
  //  el.textContent = DOMSelectors.firstName.value;
  

  var date = `${DOMSelectors.firstName.value}-${DOMSelectors.cardTitle.value}-${DOMSelectors.cardData.value}`;
console.log(date);

// api key naza2 = eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWNoUG9ydCIsImV4cCI6MTcwMzA4MDU0OCwibmJmIjoxNzAyOTk0MTQ4LCJTRVNTSU9OX0lEIjoiN1FxVmkwOFE5aTNSRDljNWQ0Zm04WHpzMXhIR0JYd2pwck4xIiwiRklOR0VSUFJJTlRfSEFTSCI6IjQ4MjdBRUEzMjJEOEI5QjgzODFGNTA5NEU3NkYxOUVGNUQ1QTVFNUM4MTk4RDIxQzBEMEE5MjAwOUY4OTdFMUMifQ.vVeiqyD3156_q7jkN1ZJi_y0K94COfseX9M7rR-PdaM

const URL2 = `https://techport.nasa.gov/api/projects?updatedSince=${date}`;

var prjz;  

async function getData2(URL2) {
  try {
    const responce = await fetch(URL2);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    let data = await responce.json();
    
    prjz = data.projects.slice(0,5);

    console.log('a');
    console.log(prjz);
    console.log('b');

    return prjz;
;
  //  console.log(Array.projects.projectId);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector("h2").textContent = "Error fetching NASA data";
  }
  // fireship
}

var q = getData2(URL2).then(prj => {

  //console.log('c')
  //console.log(prj)
  
  
  prj.forEach(p => {
    //console.log('d')
    //console.log(p);
    //console.log(p.projectId);
    //console.log('e')
    getData3(p.projectId).then(data => { 
      //console.log('f'); 
      p.proj = data;      
      //console.log(data);      
      //console.log(p); 
      getAImg(data.project.title).then(data => {
        console.log('g');  
        p.aiImg = data;   
        console.log(data); 
        console.log(p); 
        displayInfo(p); } )
      
    });
    
    
  });
  
})



async function getAImg(text)
{
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNWExZjVlNWUtN2FhYy00YjA3LTg5Y2YtODg0MzRiMTExYzJkIiwidHlwZSI6ImFwaV90b2tlbiJ9.IVVDd2gxYLjUhUH8Fnbx7QvhzPqW4JEwWrmRUleaMoA'
    },
    body: JSON.stringify({
      response_as_dict: true,
      attributes_as_list: false,
      show_original_response: false,
      resolution: '256x256',
      num_images: 1,
      providers: 'replicate',
      text: text
    })
  };

  const response = await fetch('https://api.edenai.run/v2/image/generation', options);

  let data = await response.json();

  console.log(data.replicate.items[0].image_resource_url); 
  return data.replicate.items[0].image_resource_url;

    //.then(response => response.json())
    //.then(response => { console.log(response); console.log(response.replicate.items[0].image_resource_url); return response.replicate.items[0].image_resource_url; })
  
    //.catch(err => console.error(err));
}











function displayInfo(prj)
  {
      document.querySelector(".flex-container").insertAdjacentHTML(
        "afterbegin",
        `<div class="grow" id="grow">
          <div id="animation1">
            <img
              src="${prj.aiImg}"
              alt=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/2449px-NASA_logo.svg.png
            />
            <h2>${prj.proj.project.title}</h2>
            <a href="${prj.proj.project.website}">${prj.proj.project.website}</a>
            <h4>${prj.proj.project.startDateString} - ${prj.proj.project.endDateString}</h4>
            <h4>${prj.proj.project.statusDescription}</h4>
            <h6>${prj.projectId}</h6>
            <a class="button" href="#popup1">More Info!</a>
          </div>
        </div>
        <div id="popup1" class="overlay">
            <div class="popup">
              
              <div id="animation3"></div>
              <h2>${prj.proj.project.acronym}</h2>
              <a class="close" href="#">&times;</a>
              <div class="content">
                <h4>${prj.proj.project.benefits}</h4> 
                <h4>${prj.proj.project.description}</h4> 
              </div>
            </div>
          </div>`
      );
      
      //var button = document.querySelector('button.delete:not(button.delete[onclick=onButtonClick])');
      //var button = document.querySelector('button.delete:not([onclick=onButtonClick])');
      //button.addEventListener('click', onButtonClick);
  }


// api key naza2 = eyJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJUZWNoUG9ydCIsImV4cCI6MTcwMzA4MDU0OCwibmJmIjoxNzAyOTk0MTQ4LCJTRVNTSU9OX0lEIjoiN1FxVmkwOFE5aTNSRDljNWQ0Zm04WHpzMXhIR0JYd2pwck4xIiwiRklOR0VSUFJJTlRfSEFTSCI6IjQ4MjdBRUEzMjJEOEI5QjgzODFGNTA5NEU3NkYxOUVGNUQ1QTVFNUM4MTk4RDIxQzBEMEE5MjAwOUY4OTdFMUMifQ.vVeiqyD3156_q7jkN1ZJi_y0K94COfseX9M7rR-PdaM



//const URL3 = `${q.projectid}`;



async function getData3(projectid) {
  
  let a = `https://techport.nasa.gov/api/projects/${projectid}`
  
  
  try {
    const responce = await fetch(a);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    let data = await responce.json();

    console.log(data);
    return data;
  //  console.log(Array.projects.projectId);
  } catch (error) {
    console.error("Error fetching data:", error);
    document.querySelector("h2").textContent = "Error fetching NASA data";
  }
  // fireship
}

//getData3(URL3);
//;

//console.log(data);


});







function greet(name) {
  const greetPromise = new Promise(function (resolve, reject) {
    return "hello ${name}";
  });
  return greetPromise;
}

const Ash = greet("ash");
console.log(Ash);
Ash.then((result) => {
  console.log(result);
});

// api key naza = 5LF5j2deuntZyGeVIE7oLmoS1yIuhrNnrzkRRRPa
const URL = `https://api.nasa.gov/planetary/apod?api_key=5LF5j2deuntZyGeVIE7oLmoS1yIuhrNnrzkRRRPa`;

async function getData(URL) {
  try {
    const responce = await fetch(URL);
    if (responce.status != 200) {
      throw new Error(responce.statusText);
    }
    console.log(responce);
    const data = await responce.json();
    console.log(data);
    console.log(data.url);
    document.body.style.backgroundImage = `url(${data.url})`;
  } catch (error) {
    console.error("Error fetching data:", error);
   // document.querySelector("h1").textContent = "Error fetching NASA data";
  }
  // fireship
}
getData(URL);





