function loadBackground(bgUrl, canvas, completeCallback) {
    var context = canvas.getContext('2d')
    var width = canvas.width
    var height = canvas.height
    var image = new Image()
    image.onload = function () {
        context.drawImage(this, 0, 0, width, height)
        context.drawImage(this, 0, -height, width, height)
        if (completeCallback) {
            completeCallback(image)
        }
    }
    image.src = bgUrl
}