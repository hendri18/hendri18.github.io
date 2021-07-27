const STORAGE_KEY = 'DATA_BOOKS';
const BOOK = {
    data: [],
    form: document.getElementById('add_book_form'),
    formEdit: document.getElementById('edit_book_form'),
    cancelEditButton: document.getElementById('cancel_edit'),
    unreadEl: document.getElementById('unread_list'),
    readEl: document.getElementById('read_list'),
    searchEl: document.getElementById('search'),
    generateObject: (title, author, year, isComplete) =>{
        return {
            id: +new Date(),
            title: title,
            author: author,
            year: year,
            isComplete: isComplete
        }
    },
    save: () => {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const year = document.getElementById('year').value;
        const isComplete = document.getElementById('isComplete').checked;
        const bookObject = BOOK.generateObject(title, author, year, isComplete);
        const bookEl = createBook(bookObject.id, title, author, year, isComplete);
        if(isComplete){
            BOOK.readEl.append(bookEl);
        }else{
            BOOK.unreadEl.append(bookEl);
        }

        BOOK.form.reset();
        BOOK.data.push(bookObject);
        BOOK.syncLocalStorage();
    },
    edit: (id) =>{
        BOOK.formEdit.reset();
        document.getElementById('id_book').value = '';
        BOOK.form.classList.add('hide');
        BOOK.formEdit.classList.remove('hide');
        
        for(let i = 0; i < BOOK.data.length; i++){
            if(BOOK.data[i].id == id){
                document.getElementById('id_book').value = BOOK.data[i].id;
                document.getElementById('edit_title').value = BOOK.data[i].title;
                document.getElementById('edit_author').value = BOOK.data[i].author;
                document.getElementById('edit_year').value = BOOK.data[i].year;
                document.getElementById('edit_isComplete').checked = BOOK.data[i].isComplete;
                break;
            }
        }
    },
    update: () => {
        const id = document.getElementById('id_book').value;
        for(let i = 0; i < BOOK.data.length; i++){
            if(BOOK.data[i].id == id){
                const title = document.getElementById('edit_title').value;
                const author = document.getElementById('edit_author').value;
                const year = document.getElementById('edit_year').value;
                const isComplete = document.getElementById('edit_isComplete').checked;
                        
                BOOK.data[i].title = title;
                BOOK.data[i].author = author;
                BOOK.data[i].year = year;
                BOOK.data[i].isComplete = isComplete;

                BOOK.resetFormEdit();
                BOOK.syncLocalStorage();
                BOOK.refreshList();
                break;
            }
        }
        
    },
    resetFormEdit: () => {
        document.getElementById('id_book').value = '';
        BOOK.formEdit.classList.add('hide');
        BOOK.formEdit.reset();
        BOOK.form.classList.remove('hide');
    },
    delete: (id) => {
        if(!id) return;
        const confirmation = confirm("Yakin mau hapus buku?");
        if(!confirmation) return;

        const indexBook = BOOK.data.findIndex(item => item.id == id);
        if(indexBook === -1){
            alert('Buku tidak ditemukan'); return;
        }

        BOOK.data.splice(indexBook, 1);
        document.getElementById(id).remove();

        BOOK.syncLocalStorage();
    },
    changeStatus: (id, isComplete) => {
        document.getElementById(id).remove();

        for(let i = 0; i < BOOK.data.length; i++){
            if(BOOK.data[i].id == id){
                BOOK.data[i].isComplete = isComplete;
                const newEl = createBook(BOOK.data[i].id, BOOK.data[i].title, BOOK.data[i].author, BOOK.data[i].year, BOOK.data[i].isComplete);
                if(isComplete){
                    BOOK.readEl.append(newEl);
                }else{
                    BOOK.unreadEl.append(newEl);   
                }
                break;
            }
        }
        
        BOOK.syncLocalStorage();
    },
    syncLocalStorage: () => {
        const books = JSON.stringify(BOOK.data);
        localStorage.setItem(STORAGE_KEY, books);
    },
    loadDataFromStorage: () => {
        const serializedData = localStorage.getItem(STORAGE_KEY);
        const data = JSON.parse(serializedData);
        if(data !== null) BOOK.data = data;
        document.dispatchEvent(new Event("ondataloaded"));
    },
    refreshList: () => {
        BOOK.readEl.innerHTML = '';
        BOOK.unreadEl.innerHTML = '';
        for(book of BOOK.data){
            const bookEl = createBook(book.id, book.title, book.author, book.title, book.isComplete);
            if(book.isComplete){
                BOOK.readEl.append(bookEl);
            } else {
                BOOK.unreadEl.append(bookEl);
            }
        }
    },
    search: (value) =>{
        const bookItems = document.querySelectorAll('.book_item');
        for (const item of bookItems) {
            const bookTitle = item.querySelector('.book_title').innerHTML.toLowerCase();
            value = value.toLowerCase();
            if(bookTitle.indexOf(value) === -1){
                item.classList.add('hide');
            }else{
                item.classList.remove('hide');
            }
        }
    }
}
