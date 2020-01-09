import { RouterStore } from 'mobx-react-router'
import UserStore from '../UserStore/UserStore'

export default class AppStore {
  routerStore: RouterStore
  userStore: UserStore

  constructor() {
    this.routerStore = new RouterStore()
    this.userStore = new UserStore(this)
  }
}
