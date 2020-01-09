import AppStore from '../AppStore/AppStore'
import { RouterStore } from 'mobx-react-router'

export default class UserStore {
  routerStore: RouterStore

  constructor(appStore: AppStore) {
    this.routerStore = appStore.routerStore
  }
}
