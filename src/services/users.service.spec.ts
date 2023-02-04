import { User } from '../model/user.model';
import UserService from './users.service';


describe('UsersService', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  it('should create UserService', () => {
    expect(userService).toBeTruthy();
  });

  describe('#getUsers', () => {
    it('#getUsers should return 10 fake users', () => {
      expect(userService.getUsers().length).toBe(10);
    });

    it('#getUsers should return 3 fake users', () => {
      const toBe = [
        { id: 0, name: 'name-1' },
        { id: 1, name: 'name-2' },
        { id: 2, name: 'name-3' },
      ];

      expect(userService.getUsers(3)).toStrictEqual(toBe);
    });
  });

  describe('#getById', () => {
    it('#getById should return the third fake user', () => {
      const user: User = userService.getById('3')[0];

      expect(user.id).toBe(3);
      expect(user.name).toEqual('name-4');
    });

    it('#getById should not return user out of range', () => {
      const users: Array<User> = userService.getById('10');

      expect(users.length).toBeFalsy();
    });
  });

  describe('#deleteById', () => {
    it('#deleteById should delete specific user', () => {
      const users: Array<User> = userService.deleteById('2');
      const user: User | undefined = users.find(user => user.id === 2);

      expect(user).toBeFalsy();
    });
  });
});
