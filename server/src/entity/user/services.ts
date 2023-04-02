import { User, UserModel } from './model';

export async function createUser(user: Partial<User>) {
  return UserModel.create(user);
}
