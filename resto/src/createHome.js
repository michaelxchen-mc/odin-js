import Promo from './promo.png'

function createHome() {
  const main = document.querySelector("#content");
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.className = 'home'

  const myPromo = new Image();
  myPromo.src = Promo;
  myPromo.setAttribute("id", "promo");

  const mainText = document.createElement("div");
  mainText.setAttribute("id", "main-text");
  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  div1.textContent = "Grab fast while the promo last";
  div2.textContent = "You dont want to miss this!";
  mainText.appendChild(div1);
  mainText.appendChild(div2);

  main.appendChild(myPromo);
  main.appendChild(mainText);
}

export default createHome;
