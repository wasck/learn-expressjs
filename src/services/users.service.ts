const fakeUsers = (size = 10) => {
  return Array(size).fill(1).map((item, index) => {
    return {
      id: index,
      name: `name-${++index}`
    }
  })
};

function getUsers(size: number) {
  return fakeUsers(size);
};

function getUserById(userId: string) {
  const id = parseInt(userId, 10);
  return fakeUsers().filter(user => user.id === id);
};

function deleteById(userId: string) {
  const id = parseInt(userId, 10);
  return fakeUsers().filter(user => user.id !== id);
}

module.exports = {
  getUsers,
  getUserById,
  deleteById
};
