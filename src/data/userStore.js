const fs = require('fs');
const path = require('path');

const storePath = path.join(__dirname, '..', 'data', 'users.json');

function ensureStore() {
  if (!fs.existsSync(storePath)) {
    fs.writeFileSync(storePath, JSON.stringify({ users: [] }, null, 2));
  }
}

function readStore() {
  ensureStore();
  const raw = fs.readFileSync(storePath, 'utf8');
  return JSON.parse(raw);
}

function writeStore(store) {
  fs.writeFileSync(storePath, JSON.stringify(store, null, 2));
}

exports.findUserByEmail = (email) => {
  const store = readStore();
  return store.users.find((user) => user.email === email);
};

exports.addUser = ({ email, password }) => {
  const store = readStore();
  const newUser = {
    id: String(store.users.length + 1),
    email,
    password
  };

  store.users.push(newUser);
  writeStore(store);
  return newUser;
};
