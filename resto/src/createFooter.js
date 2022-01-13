function createFooter() {
  const footer = document.querySelector("footer");
  const footerDiv = document.createElement("div");
  footerDiv.textContent = "Made by Michael for education purpose";
  footer.appendChild(footerDiv)
}

export default createFooter;
