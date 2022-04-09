function getRandForNum(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}

function createEnemy(w, h, imageUrl, canvas) {

    var enemy = new Enemy(w, h, imageUrl, canvas)
    return enemy
}

function Enemy(w, h, imageUrl, canvas) {
    var x = getRandForNum(0, canvas.width - w)
    this.x = x
    this.y = -h
    this.w = w
    this.h = h
    this.speed = getRandForNum(3, 10)
    this.image = new Image()
    this.image.src = imageUrl
}

Enemy.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d')
    context.drawImage(this.image, this.x, this.y, this.w, this.h)
}

Enemy.prototype.move = function () {
    this.y += this.speed
}

Enemy.prototype.isOutOfScreen = function (canvas) {
    if (this.y > canvas.height) {
        return true
    } else {
        return false
    }
}

function isEnemyHitHero(obj1, obj2) {
    var minX1 = obj1.x
    var minY1 = obj1.y
    var maxX1 = obj1.x + obj1.w
    var maxY1 = obj1.y + obj1.h

    var minX2 = obj2.x
    var minY2 = obj2.y
    var maxX2 = obj2.x + obj2.width / 2
    var maxY2 = obj2.y + obj2.height / 2

    var minX = Math.max(minX1, minX2)
    var minY = Math.max(minY1, minY2)
    var maxX = Math.min(maxX1, maxX2)
    var maxY = Math.min(maxY1, maxY2)

    if (minX < maxX && minY < maxY) {
        return true
    } else {
        return false
    }
}