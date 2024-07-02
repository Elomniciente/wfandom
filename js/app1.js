const container = document.querySelector(".container");
const coffees = [


  {
	  ir: "inicio2.html",
    name: "Menu Musical",
    image: "images/coffee1.webp"
  },
  {
	  ir: "inicio4.html",
    name: "Hamburgueza",
    image: "images/coffee2.webp"
  },
  {
	  ir: "inicio5.html",
    name: "Burritos",
    image: "images/coffee3.webp"
  },
  {
	  ir: "inicio6.html",
    name: "Snack",
    image: "images/coffee4.webp"
  },
  {
	  ir: "inicio7.html",
    name: "Perros Calientes",
    image: "images/coffee5.webp"
  },
  {
	  ir: "inicio8.html",
    name: "Papa Fritas",
    image: "images/coffee6.webp"
  },
  {
	  ir: "inicio9.html",
    name: "Bebidas/Postres",
    image: "images/coffee7.webp"
  },

  {
	  ir: "inicio10.html",
    name: "Accusantium",
    image: "images/coffee10.webp"
  },

  {
	  ir: "inicio11.html",	  
    name: "Servicios",
    image: "images/coffee11.webp"
  }











];
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ ir, name, image }) =>
      (output += `
              <div class="card">
			  <a class="link" href="${ir}">
                <img class="card--avatar" src=${image} /> 
				</a>
                <h1 class="card--title">${name}</h1>
               
              </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
