import mock from './mock.json';
const initialState = {};
export class UserService {
  static user = initialState;

  static async login() {
    const {_id, name, balance} = mock;
    UserService.user = {
      _id,
      name,
      balance,
    };
  }
}
