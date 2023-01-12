const Rotate = {
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
        const couchImage = document.getElementById('couch-image')
        const rotateIcon = document.getElementById('rotate-icon')

        couchImage.setAttribute('src', './assets/gif.gif')
        rotateIcon.setAttribute('src', './assets/close.svg')
    },

    stopRotating() {
        this.rotating = false
        const couchImage = document.getElementById('couch-image')
        const rotateIcon = document.getElementById('rotate-icon')

        couchImage.setAttribute('src', './assets/couch.jpg')
        rotateIcon.setAttribute('src', './assets/360.svg')
    },
}