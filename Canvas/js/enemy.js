function getRandForNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function createEnemy(w, h, imageUrl, canvas) {

    var enemy = new Enemy(w, h, imageUrl, canvas)
    return enemy
}

function Enemy(w, h, imageUrl, canvas) {
    var canvasWidth = canvas.width
    var canvasHeight = canvas.height
    var x = getRandForNum(0, canvasWidth - w)
    this.x = x
    this.y = -h
    this.w = w
    this.h = h
    this.image = new Image()
    this.image.src = imageUrl
}

Enemy.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d')
    context.drawImage(this.image, 0, 0, this.w, this.h)
}