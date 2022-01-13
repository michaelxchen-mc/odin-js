import MenuPep from './menu/menu-pep.png'
import MenuVeg from './menu/menu-veg.png'
import MenuMea from './menu/menu-mea.png'
import MenuBac from './menu/menu-bac.png'

const info = [
  {
    'address': MenuPep,
    'price': '8$',
    'detail': 'Pepperoni pizza'
  },
  {
    'address': MenuVeg,
    'price': '6$',
    'detail': 'Vegetable pizza'
  },
  {
    'address': MenuMea,
    'price': '10$',
    'detail': 'Meat pizza'
  },
  {
    'address': MenuBac,
    'price': '11$',
    'detail': 'Bacon pizza'
  }
]

function createMenu() {
  const main = document.querySelector("#content");
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.className = 'menu';

  for (let i=0; i<4; i++) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("menu-card")

    const cardImage = new Image();
    cardImage.classList.add("card-image")
    cardImage.src = info[i]['address'];
    menuCard.appendChild(cardImage);

    const cardPrice = document.createElement("div");
    cardPrice.classList.add("card-price");
    cardPrice.textContent = info[i]['price'];
    menuCard.appendChild(cardPrice);

    const cardDetail = document.createElement("div");
    cardDetail.classList.add("card-detail");
    cardDetail.textContent = info[i]['detail']
    menuCard.appendChild(cardDetail);

    main.appendChild(menuCard)
  }
}

export default createMenu;
