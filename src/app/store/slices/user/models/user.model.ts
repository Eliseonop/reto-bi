import { UserState } from './user.state'

export class UserModel {
  id: string
  username: string
  isLoggedIn: boolean

  constructor (data: UserState) {
    this.id = data.id
    this.username = data.username
    this.isLoggedIn = data.isLoggedIn
  }
}
