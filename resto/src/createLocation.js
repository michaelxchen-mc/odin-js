const info = [
  {
    "city":"Singapore",
    "address": "We-love-eating Street, 90",
    "phone": "012-3456"
  },
  {
    "city":"New York",
    "address": "All-you-can-eat Street, 34",
    "phone": "210-9876"
  }
]

function createLocation() {
  const main = document.querySelector("#content");
  while (main.hasChildNodes()) {
    main.removeChild(main.firstChild);
  }
  main.className = "location"

  for (let i = 0; i<2; i++) {
    const locCard = document.createElement("div");
    locCard.classList.add("loc-card");

    const div1 = document.createElement("div");
    div1.classList.add("card-city");
    div1.textContent = info[i]["city"];

    const div2 = document.createElement("div");
    div2.classList.add("card-address");
    div2.textContent = info[i]["address"];

    const div3 = document.createElement("div");
    div3.classList.add("card-phone");
    div3.textContent = info[i]["phone"];

    locCard.appendChild(div1);
    locCard.appendChild(div2);
    locCard.appendChild(div3);

    main.appendChild(locCard);
  }
}

export default createLocation;
