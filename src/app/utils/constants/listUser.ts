import { User } from "../../store/slices/user/models/user.model";

export const LIST_USERS: User[] = [
  {
    id : 1,
    username: 'admin',
    password: 'admin',
    isLoggedIn: true
  },
  {
    id : 2,
    username: 'edu',
    password: 'edu',
    isLoggedIn: true
  }
]
