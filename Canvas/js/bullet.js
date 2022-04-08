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
