
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function UI() { }

UI.prototype.addBookList = function (Book) {



    const list = document.getElementById('book-list');

    const tr = document.createElement('tr');


    tr.innerHTML = ` <td>${Book.title}</tr>
                    <td>${Book.author}</tr>
                    <td>${Book.isbn}</tr>
                    <td><a href="#" class='delete'>X</a></tr>`

    list.appendChild(tr);
}

UI.prototype.clear = function () {
    document.getElementById('title').value = "";
    document.getElementById('author').value = "";
    document.getElementById('isbn').value = "";

}

UI.prototype.showAlert = function (message, className) {
    const container = document.querySelector('.container');

    const form = document.getElementById('book-form');

    const div = document.createElement('div');

    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    container.insertBefore(div, form);

    setTimeout(function () {
        document.querySelector('.alert').remove();
    }, 3000);

}

UI.prototype.deleteBook = function (target) {
    if (target.className == 'delete') {
        target.parentElement.parentElement.remove();
    }
}

document.getElementById('book-form').addEventListener('submit', function (e) {
    const title = document.querySelector('#title').value,
        author = document.querySelector("#author").value
        , isbn = document.querySelector("#isbn").value

    const book = new Book(title, author, isbn);

    const ui = new UI();

    if (title.value == '' || author.value == '' || isbn == "") {
        ui.showAlert('Please Fill All Field', 'error')
    }
    else {
        ui.addBookList(book);

        ui.showAlert('Book Added Successfully', 'success')

        ui.clear();

    }
    e.preventDefault();
})

document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI();

    ui.deleteBook(e.target)
    ui.showAlert('Book deleted successfully', 'success')
})