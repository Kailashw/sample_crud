let booksIssued = []

function issueBooks(userId,bookId) {
     booksIssued.push({userId : Number(userId),bookId: Number(bookId)})    
     return booksIssued;
}

function returnBooks(userId,bookId) {
    booksIssued = booksIssued.filter(el => el.bookId !== Number(bookId) && el.userId !== Number(userId))
    return booksIssued;
}

function listIssual() {
    return booksIssued;
}

module.exports = {
    issueBooks,
    returnBooks,
    listIssual
}