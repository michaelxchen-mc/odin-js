  //constructor
function book(id, title, author, pages, years, genres, isRead) {
  this.id = id
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.years = years
  this.genres = genres;
  this.isRead = isRead;
  this.info = function() {
    if (isRead === true) {
        text = `${title} by ${author}, ${pages} pages, on progress`
      } else if (isRead === false) {
        text = `${title} by ${author}, ${pages} pages, not read yet`
      }
      return text
    }
  }


function addBookToLibrary() {
      const theHobbit = new book("1","The Hobbit", "J.R.R. Tolkien", "295", "1967", "Fiction", false)
      const harryPotter = new book("2", "Harry Potter", "J.K. Rowling", "465", "1999", "Fiction",true)
      const gatsby = new book("3", "The Great Gatsby", "F.S. Fitzgerald", "213", "1924", "Fiction", true)
      const norwegian = new book("4", "Norwegian Wood", "H. Murakami", "384", "1987", "Fiction", false)

      myLibrary.push(theHobbit);
      myLibrary.push(harryPotter);
      myLibrary.push(gatsby);
      myLibrary.push(norwegian);
}
function createCard(book) {
  let card = document.createElement("div");
  card.classList.add("card");

  let img = document.createElement("img");
  img.src = "covers/" + book.title + ".jpg";
  img.classList.add("card-img")
  card.appendChild(img)

  let info = document.createElement("div");
  info.classList.add("info");
  let intro = document.createElement("div");
  intro.classList.add("intro");
  let title = document.createElement("div");
  title.textContent = book.title
  title.classList.add('title')
  let author = document.createElement("div");
  author.textContent = "by " + book.author;
  author.classList.add('author');
  intro.appendChild(title);
  intro.appendChild(author);
  info.appendChild(intro);

  let details = document.createElement("div");
  details.classList.add('details');
  let years = document.createElement("div");
  years.textContent= "Years : " + book.years;
  details.appendChild(years);
  let pages = document.createElement("div");
  pages.textContent= "Pages : " + book.pages
  details.appendChild(pages)
  let genres = document.createElement("div");
  genres.textContent= "Genres : " + book.genres
  details.appendChild(genres)

  let read = document.createElement("div");
  read.textContent = "Read? : "
  let label = document.createElement("label");
  label.classList.add("switch")
  let input = document.createElement("input");
  input.type = "checkbox"
  if (book.isRead) {
    input.checked = true
  } else {
    input.checked = false
  }

  input.addEventListener( 'change', function() {
    if(this.checked) {
        book.isRead = true
    } else {
        book.isRead = false
    }
    localStorage.setItem('library', JSON.stringify(myLibrary)); //stringify object and store
  });

  label.appendChild(input)
  let span = document.createElement("span");
  span.classList.add("slider")
  span.classList.add("round")
  label.appendChild(span)
  read.appendChild(label)
  details.appendChild(read)

  let remove = document.createElement("button");
  remove.textContent="Remove Book"
  remove.classList.add("delete")
  remove.addEventListener("click", function () {
    let target;
    for (let i=0; i<myLibrary.length; i++) {
      if (myLibrary[i]!= null) {
        if (myLibrary[i].id === book.id) {
          target = i
        }
      }
    }
    delete myLibrary[target]
    card.parentElement.removeChild(card);
    localStorage.setItem('library', JSON.stringify(myLibrary)); //stringify object and store

  })


  details.appendChild(remove)

  info.appendChild(details);
  card.appendChild(info);

  return card
}
function save(file) {
  localStorage.setItem('library', JSON.stringify(file));
}

let myLibrary = JSON.parse(localStorage.getItem('library')); //retrieve the object
let shelf = document.getElementById("shelf");
for (let i=0; i<myLibrary.length; i++) {
  if (myLibrary[i]) {
      shelf.appendChild(createCard(myLibrary[i]))
  }
}

let addBook = document.getElementById('add-book')
addBook.addEventListener("click", function () {
  const newTitle = document.getElementById("new-title")
  const newAuthor = document.getElementById("new-author")
  const newPages = document.getElementById("new-pages")
  const newYears = document.getElementById("new-years")
  const newGenres = document.getElementById("new-genres")

  const newBook = new book(myLibrary.length + 1,newTitle.value, newAuthor.value, newPages.value, newYears.value, newGenres.value, false)
  shelf.appendChild(createCard(newBook))
  myLibrary.push(newBook)
  save(myLibrary)

  let poppedWindow = document.getElementById('add-new-window')
  poppedWindow.style.visibility = "hidden"
  newTitle.value = ''
  newAuthor.value = ''
  newPages.value = ''
  newYears.value = ''
  newGenres.value = ''
})

let popAdd = document.querySelector("#pop-add-new > button")
popAdd.addEventListener("click", function() {
  let poppedWindow = document.getElementById('add-new-window')
  poppedWindow.style.visibility = "visible"

})
