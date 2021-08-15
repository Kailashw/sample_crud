let users = [];

function listUsers() {
    return users;
}

function getUsers(id) {
    return users.length > 0 && users.find(el=> el.id == Number(id));
}

function postUsers(body) {
    users.push(body)
    return body;
}

function dropUsers(id) {
    users = users.filter(el => el.id !== Number(id))
    return users;
}

module.exports = {
    listUsers,
    getUsers,
    postUsers,
    dropUsers
}