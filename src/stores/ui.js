import { observable, action } from 'mobx'
import remotedev from 'mobx-remotedev'

@remotedev
export class UIStore {
    @observable showLoginModal = false;    

    @action toggleLoginModal() {
        this.showLoginModal = !this.showLoginModal;
    }
}