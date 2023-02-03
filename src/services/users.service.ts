const fakeUsers = (size = 10) => {
  return Array(size).fill(1).map((item, index) => {
    return {
      id: index,
      name: `name-${++index}`
    };
  });
};

export default class UserService {
  public getUsers(size?: number) {
    return fakeUsers(size);
  }

  public getUserById(userId: string) {
    const id = parseInt(userId, 10);
    return fakeUsers().filter(user => user.id === id);
  }

  public deleteById(userId: string) {
    const id = parseInt(userId, 10);
    return fakeUsers().filter(user => user.id !== id);
  }
}
