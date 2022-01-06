function book(title, author, pages, isRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
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

const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", "295", false)
console.log(theHobbit.info())
