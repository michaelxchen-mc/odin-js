import Logo from './logo.png'

function createHeader(function1,function2, function3) {
  //create header
  const header = document.querySelector("header");

  const myLogo = new Image();
  myLogo.src = Logo
  myLogo.setAttribute('id', "logo")


  const nav = document.createElement('nav');
  const homeBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const locBtn = document.createElement('button');
  homeBtn.innerHTML = "HOME";
  menuBtn.innerHTML = "MENU";
  locBtn.innerHTML = "LOCATION";
  homeBtn.addEventListener("click", function1);
  menuBtn.addEventListener("click", function2);
  locBtn.addEventListener("click", function3);
  nav.appendChild(homeBtn)
  nav.appendChild(menuBtn)
  nav.appendChild(locBtn)

  header.appendChild(myLogo)
  header.appendChild(nav)
}

export default createHeader;
