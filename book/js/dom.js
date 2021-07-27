function isStorageExist(){
    if(typeof(Storage) === undefined){
        alert("Browser kamu tidak mendukung local storage");
        return false
    } 
    return true;
}

function createBook(id, title, author, year, isComplete){
    const wrapper = document.createElement('article');
    wrapper.classList.add('book_item');
    wrapper.id = id;
    const bookTitle = document.createElement('p');
    bookTitle.classList.add('book_title');
    bookTitle.innerHTML = title;
    const bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book_author');
    bookAuthor.innerHTML = author;
    const bookYear = document.createElement('p');
    bookYear.classList.add('book_year');
    bookYear.innerHTML = year;
    const deleteButton = createDeleteButton();
    wrapper.append(bookTitle, bookAuthor, bookYear, deleteButton, createEditBook());
    if(isComplete){
        wrapper.append(createUnreadBook())
    }else{
        wrapper.append(createReadBook())
    }
    return wrapper;
}
function createDeleteButton() {
    return createButton("button-remove", function (event) {
        BOOK.delete(event.target.parentElement.id);
    });
}
function createReadBook(){
    return createButton("button-green", function (event) {
        BOOK.changeStatus(event.target.parentElement.id, true);
    }, 'Dibaca');
}
function createUnreadBook(){
    return createButton("button-blue", function (event) {
        BOOK.changeStatus(event.target.parentElement.id, false);
    }, 'Belum Selesai Dibaca');
}
function createEditBook(){
    return createButton("button-edit", function (event) {
        BOOK.edit(event.target.parentElement.id);
    }, 'Edit');
}

function createButton(buttonTypeClass, eventListener, text) {
    const button = document.createElement("button");
    button.classList.add(buttonTypeClass);
    if(text != undefined) button.innerHTML = text;
    button.addEventListener("click", function (event) {
        eventListener(event);
        event.stopPropagation();
    });
    return button;
}