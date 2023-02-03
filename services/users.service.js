const fakeUsers = (size = 10) => {
  return Array(size).fill().map((item, index) => {
    return {
      id: index,
      name: `name-${++index}`
    }
  })
};

function getUsers(size) {
  return fakeUsers(size);
};

function getUserById(userId) {
  const id = parseInt(userId, 10);
  return fakeUsers().filter(user => user.id === id);
};

function deleteById(userId) {
  const id = parseInt(userId, 10);
  return fakeUsers().filter(user => user.id !== id);
}

module.exports = {
  getUsers,
  getUserById,
  deleteById
};
