const Loading = {
    loadingStatus: false, 
    button: document.querySelector('.primary-button'),
    loadingIconHTML: `<img src="./assets/loading-icon.svg" alt="loading icon"> Carregando...`,
    defaultContent: `INTERAJA COMIGO`,

    init() {
        this.button.classList.toggle('loading')
        if (this.loadingStatus === false) {
            this.loadingStatus = true
            this.startLoading()
        } else {
            this.loadingStatus = false
            this.stopLoading()
        }
    },

    startLoading() {
        this.button.innerHTML = this.loadingIconHTML
    },

    stopLoading() {
        this.button.innerText = this.defaultContent
    }
}


const Disable = {
    disableStatus: false, 
    button: document.querySelector('.secondary-button'),
    disableContent: 'Bloqueado',
    defaultContent: 'INTERAJA COMIGO',

    init() {
        this.button.classList.toggle('disable')
        if (this.disableStatus === false) {
            this.disableStatus = true
            this.disableON()
            console.log('bloqueado')
        } else {
            this.disableStatus = false
            this.disableOFF()
            console.log('normal')
        }
    },

    disableON() {
        this.button.innerText = this.disableContent
    },

    disableOFF() {
        this.button.innerText = this.defaultContent
    }
}