import { User } from './../model/user.model';

export const fakeUsers = (size = 10): Array<User> => {
  return Array(size).fill(1).map((item, index) => {
    return {
      id: index,
      name: `name-${++index}`
    };
  });
};