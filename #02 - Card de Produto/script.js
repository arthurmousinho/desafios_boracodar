const Rotate = {

    couchImage: document.getElementById('couch-image'),
    rotateIcon: document.getElementById('rotate-icon'),
    rotating: false,

    init() {
        if (this.rotating === false) {
            this.startRotating()
        } else {
            this.stopRotating()
        }
    },

    startRotating() {
        this.rotating = true
        this.set('gif.gif','close.svg')
    },

    stopRotating() {
        this.rotating = false
        this.set('couch.jpg','360.svg')
    },

    set(couchFile, iconFile) {
        this.couchImage.setAttribute('src', `./assets/${couchFile}`)
        this.rotateIcon.setAttribute('src', `./assets/${iconFile}`)
    }
}