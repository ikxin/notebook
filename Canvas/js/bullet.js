function createBullet(bWidth, bHeight, bUrl, hero) {
    var x = hero.x + hero.width / 4 - bWidth / 8
    var y = hero.y - bHeight / 2 - 4
    var bullet = new Bullet(x, y, bWidth, bHeight, bUrl)

    // 子弹声音
    var bSound = new Audio('../music/bullet.mp3')
    // bSound.play()
    return bullet
}

function Bullet(x, y, w, h, imageUrl) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.image = new Image()
    this.image.src = imageUrl
}

Bullet.prototype.draw = function (canvas) {
    var context = canvas.getContext('2d')
    context.drawImage(this.image, this.x, this.y, this.w / 2, this.h / 2)
}

Bullet.prototype.move = function () {
    this.y -= 10
}

Bullet.prototype.isOutOfScreen = function () {
    if (this.y < -this.h) {
        return true
    } else {
        return false
    }
}

function isEnemyHitBullet(obj1, obj2) {
    var minX1 = obj1.x
    var minY1 = obj1.y
    var maxX1 = obj1.x + obj1.w
    var maxY1 = obj1.y + obj1.h

    var minX2 = obj2.x
    var minY2 = obj2.y
    var maxX2 = obj2.x + obj2.w
    var maxY2 = obj2.y + obj2.h

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