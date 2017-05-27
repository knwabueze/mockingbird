import { UIStore } from './ui-store'
import { auth, database } from './firebase'

export const stores = {
    uiStore: new UIStore(auth, database)
}

window.stores = stores;