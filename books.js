let books = [];

function listBooks() {
    return books;
}

function getBooks(id) {
    return books.length > 0 && users.find(el=> el.id == Number(id));
}

function postBooks(body) {
    books.push(body)
    return body;
}

function dropBooks(id) {
    books = books.filter(el => el.id !== Number(id))
    return books;
}

module.exports = {
    listBooks,
    getBooks,
    postBooks,
    dropBooks
}