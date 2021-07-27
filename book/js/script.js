document.addEventListener("DOMContentLoaded", function () {
    BOOK.form.addEventListener("submit", function (event) {
        event.preventDefault();
        BOOK.save();
    });

    BOOK.searchEl.addEventListener("keyup", function(event){
        BOOK.search(event.target.value)
    });

    BOOK.cancelEditButton.addEventListener("click", function (event) {
        event.preventDefault();
        BOOK.resetFormEdit();
    });

    BOOK.formEdit.addEventListener("submit", function (event) {
        event.preventDefault();
        BOOK.update();
    });

    if(isStorageExist()){
        BOOK.loadDataFromStorage();
    }
});

document.addEventListener("ondataloaded", () => {
    BOOK.refreshList();
});