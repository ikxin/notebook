function createHero(width, height, canvas, imageUrl, completeCallback) {
    var context = canvas.getContext('2d')
    var canvasWidth = canvas.width
    var canvasHeight = canvas.height
    var x = canvasWidth / 2 - width / 4
    var y = canvasHeight - height / 2 - 20

    var hero = new Hero(x, y, width, height, imageUrl, completeCallback)
    return hero
}

function Hero(x, y, width, height, imageUrl, completeCallback) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.image = new Image()
    // 加载图片
    this.image.onload = function () {
        if (completeCallback) {
            completeCallback(this)
        }
    }
    this.image.src = imageUrl
}

Hero.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d')
    context.drawImage(this.image, this.x, this.y, this.width / 2, this.height / 2)
}